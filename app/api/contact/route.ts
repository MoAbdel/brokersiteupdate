import { NextRequest, NextResponse } from 'next/server';
import { getAudienceContext, NON_US_LEAD_CAPTURE_ERROR } from '@/lib/audience';
import {
    TERMS_CONSENT_AT_FIELD,
    TERMS_SERVICES_REQUIRED_ERROR,
    hasTermsConsent,
} from '@/lib/terms-consent';

export async function POST(request: NextRequest) {
    try {
        const audience = getAudienceContext(request.headers);
        if (!audience.isUsEligible) {
            return NextResponse.json({
                success: false,
                error: NON_US_LEAD_CAPTURE_ERROR,
            }, {
                status: 403,
                headers: {
                    'Cache-Control': 'no-store',
                },
            });
        }

        const data = await request.formData();
        if (!hasTermsConsent(data.get('terms_consent'))) {
            return NextResponse.json({
                success: false,
                error: TERMS_SERVICES_REQUIRED_ERROR,
            }, {
                status: 400,
                headers: {
                    'Cache-Control': 'no-store',
                },
            });
        }

        if (!data.get(TERMS_CONSENT_AT_FIELD)) {
            data.append(TERMS_CONSENT_AT_FIELD, new Date().toISOString());
        }

        // Server-side submission to Formspree (bypasses browser CORS/Trackers)
        const response = await fetch('https://formspree.io/f/mldpgrok', {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json',
            },
        });

        const result = await response.json();

        if (response.ok) {
            return NextResponse.json({ success: true, result });
        } else {
            console.error('Formspree Server-side Error:', result);
            return NextResponse.json({
                success: false,
                error: result.errors?.[0]?.message || 'Formspree failed to accept submission'
            }, { status: response.status });
        }
    } catch (error) {
        console.error('Contact API Route Exception:', error);
        return NextResponse.json({
            success: false,
            error: 'Internal server error processing submission'
        }, { status: 500 });
    }
}

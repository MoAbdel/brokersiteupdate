import { NextRequest, NextResponse } from 'next/server';
import { getAudienceContext, NON_US_LEAD_CAPTURE_ERROR } from '@/lib/audience';
import {
    TERMS_CONSENT_AT_FIELD,
    TERMS_SERVICES_REQUIRED_ERROR,
    hasTermsConsent,
} from '@/lib/terms-consent';
import { scoreLead, type LeadSignals } from '@/lib/leadQualification';
import {
    contactSubmissionProperties,
    trackServerEvent,
} from '@/lib/vercel-server-events';

export async function POST(request: NextRequest) {
    let data: FormData | null = null;

    try {
        const audience = getAudienceContext(request.headers);
        if (!audience.isUsEligible) {
            await trackServerEvent(
                request,
                'lead_form_submission_blocked',
                contactSubmissionProperties(null, 'non_us_audience', 403)
            );

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

        data = await request.formData();
        if (!hasTermsConsent(data.get('terms_consent'))) {
            await trackServerEvent(
                request,
                'lead_form_submission_blocked',
                contactSubmissionProperties(data, 'missing_terms_consent', 400)
            );

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

        // ── Lead scoring ────────────────────────────────────────────────
        const rawState = data.get('state');
        const rawSource = data.get('source');
        const rawPhone = data.get('phone');
        const rawNotes = data.get('notes');

        // Attempt to parse timeline from notes JSON (e.g. {"timeline":"ready_now",...})
        let parsedTimeline: LeadSignals['timeline'] | undefined;
        if (rawNotes && typeof rawNotes === 'string') {
            try {
                const notesObj = JSON.parse(rawNotes) as Record<string, unknown>;
                const t = notesObj['timeline'];
                if (
                    t === 'ready_now' ||
                    t === '1_3_months' ||
                    t === '3_6_months' ||
                    t === 'researching'
                ) {
                    parsedTimeline = t;
                }
            } catch {
                // notes is plain text, timeline unavailable
            }
        }

        const signals: LeadSignals = {
            state: typeof rawState === 'string' ? rawState : undefined,
            timeline: parsedTimeline,
            toolSource: typeof rawSource === 'string' ? rawSource : undefined,
            hasPhone: typeof rawPhone === 'string' && rawPhone.trim().length > 0,
        };

        const leadScore = scoreLead(signals);

        // Append scoring metadata to the form submission so Formspree captures it
        data.append('lead_score', String(leadScore.score));
        data.append('lead_tier', leadScore.tier);
        data.append('lead_priority', leadScore.priority);
        data.append('suggested_action', leadScore.suggestedAction);
        data.append('lead_tags', leadScore.tags.join(', '));

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
            await trackServerEvent(
                request,
                'lead_form_submitted',
                contactSubmissionProperties(data, 'accepted', 200)
            );

            return NextResponse.json({ success: true, result });
        } else {
            console.error('Formspree Server-side Error:', result);
            await trackServerEvent(
                request,
                'lead_form_submission_failed',
                contactSubmissionProperties(data, 'formspree_rejected', response.status)
            );

            return NextResponse.json({
                success: false,
                error: result.errors?.[0]?.message || 'Formspree failed to accept submission'
            }, { status: response.status });
        }
    } catch (error) {
        console.error('Contact API Route Exception:', error);
        await trackServerEvent(
            request,
            'lead_form_submission_failed',
            contactSubmissionProperties(data, 'api_exception', 500)
        );

        return NextResponse.json({
            success: false,
            error: 'Internal server error processing submission'
        }, { status: 500 });
    }
}

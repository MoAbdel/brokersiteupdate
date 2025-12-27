import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.formData();

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

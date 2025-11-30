import { NextRequest, NextResponse } from 'next/server'

interface LeadData {
    name: string
    phone: string
}

export async function POST(request: NextRequest) {
    try {
        const body: LeadData = await request.json()

        // Validate input
        if (!body.name || !body.phone) {
            return NextResponse.json(
                { error: 'Name and phone are required' },
                { status: 400 }
            )
        }

        // Validate phone number format (Indian: 10 digits, starts with 6-9)
        const phoneRegex = /^[6-9]\d{9}$/
        if (!phoneRegex.test(body.phone)) {
            return NextResponse.json(
                { error: 'Invalid phone number format' },
                { status: 400 }
            )
        }

        // Validate name (minimum 2 characters)
        if (body.name.trim().length < 2) {
            return NextResponse.json(
                { error: 'Name must be at least 2 characters' },
                { status: 400 }
            )
        }

        // Get webhook URL from environment variable
        const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL

        if (!webhookUrl || webhookUrl.includes('YOUR_SCRIPT_ID')) {
            console.error('Webhook URL not configured')
            return NextResponse.json(
                { error: 'Service not configured. Please contact administrator.' },
                { status: 500 }
            )
        }

        // Send data to Google Apps Script
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: body.name.trim(),
                phone: body.phone,
                timestamp: new Date().toISOString(),
            }),
        })

        const data = await response.json()

        if (!response.ok) {
            if (data.error === 'Duplicate phone number') {
                return NextResponse.json(
                    { error: 'Duplicate phone number' },
                    { status: 409 }
                )
            }
            throw new Error(data.error || 'Failed to submit lead')
        }

        return NextResponse.json(
            { success: true, message: 'Lead submitted successfully' },
            { status: 200 }
        )

    } catch (error) {
        console.error('Error submitting lead:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

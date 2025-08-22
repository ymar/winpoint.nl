import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 're_NzmFPnoA_CWTnkiXrQZnUbngxmai4bav5')

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json()

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email using Resend - following official docs pattern
    const { data, error } = await resend.emails.send({
      from: 'Winpoint Contact Form <onboarding@resend.dev>', // Using Resend's default verified domain
      to: ['ymarfrenken@gmail.com'], // Using account owner's email for trial account
      subject: `New contact from ${name} via Winpoint`,
      replyTo: email,
      html: `
        <h2>New contact form submission from Winpoint website</h2>
        <div style="background: #f3f4f6; padding: 16px; border-radius: 8px; margin: 16px 0;">
          <p><strong>⚠️ Note:</strong> This email is sent to ymarfrenken@gmail.com due to Resend trial limitations. Please forward to mail@ymar.nl if needed.</p>
        </div>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Sent from winpoint.nl contact form</small></p>
      `,
      text: `
New contact form submission from Winpoint website:

⚠️ Note: This email is sent to ymarfrenken@gmail.com due to Resend trial limitations. Please forward to mail@ymar.nl if needed.

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

Message:
${message}

---
Sent from winpoint.nl contact form
      `.trim()
    })

    console.log('Resend result:', { data, error })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email', details: error },
        { status: 400 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
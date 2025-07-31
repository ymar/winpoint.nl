import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 're_NzmFPnoA_CWTnkiXrQZnUbngxmai4bav5')

export async function GET() {
  try {
    console.log('Testing Resend connection...')
    
    const { data, error } = await resend.emails.send({
      from: 'Winpoint Test <onboarding@resend.dev>',
      to: ['ymarfrenken@gmail.com'], // Using account owner's email for trial account
      subject: 'Test email from Winpoint',
      html: '<h1>Test Email</h1><p>This is a test email to verify Resend is working.</p>',
      text: 'Test Email\n\nThis is a test email to verify Resend is working.'
    })

    console.log('Resend test result:', { data, error })

    if (error) {
      return NextResponse.json({ 
        success: false, 
        error: error,
        apiKeyUsed: process.env.RESEND_API_KEY ? 'Environment variable' : 'Hardcoded fallback'
      }, { status: 400 })
    }

    return NextResponse.json({ 
      success: true, 
      data: data,
      apiKeyUsed: process.env.RESEND_API_KEY ? 'Environment variable' : 'Hardcoded fallback'
    })
  } catch (error) {
    console.error('Test email error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to send test email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
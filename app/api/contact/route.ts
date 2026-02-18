import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing name, email, or message' },
        { status: 400 }
      )
    }
    // TODO: Send email (e.g. Resend, SendGrid) or store in DB
    // For MVP we just acknowledge receipt
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    )
  }
}

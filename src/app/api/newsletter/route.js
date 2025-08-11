import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('newsletter')
      .select('*')
      .order('subscribed_at', { ascending: false })

    if (error) throw error
    return NextResponse.json(data)
  } catch (err) {
    console.error('GET /api/newsletter error', err)
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const { email } = await request.json()
    // optional: check email is present
    if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 })

    const { data, error } = await supabase
      .from('newsletter')
      .insert([{ email }])
      .select()

    if (error) throw error
    return NextResponse.json({ success: true, data }, { status: 201 })
  } catch (err) {
    console.error('POST /api/newsletter error', err)
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 })
  }
}

import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET() {
  try {
    // Check if environment variables exist
    if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json({
        error: 'Missing environment variables',
        hasUrl: !!process.env.SUPABASE_URL,
        hasKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY
      }, { status: 500 })
    }

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )

    // Try to query the applications table
    const { data, error } = await supabase
      .from('applications')
      .select('*')
      .limit(1)

    if (error) {
      return NextResponse.json({
        error: 'Database query failed',
        details: error.message,
        code: error.code
      }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: 'Database connected successfully!',
      hasData: data !== null
    })
  } catch (err) {
    return NextResponse.json({
      error: 'Unexpected error',
      message: err.message
    }, { status: 500 })
  }
}
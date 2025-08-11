import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET() {
  // Check if env vars exist
  const hasUrl = !!process.env.SUPABASE_URL
  const hasKey = !!process.env.SUPABASE_SERVICE_ROLE_KEY
  
  if (!hasUrl || !hasKey) {
    return NextResponse.json({
      error: 'Missing environment variables',
      hasUrl,
      hasKey,
      urlValue: process.env.SUPABASE_URL ? 'Set but hidden' : 'Not set',
      keyValue: process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Set but hidden' : 'Not set'
    }, { status: 500 })
  }
  
  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )
    
    // Test database connection
    const { data, error } = await supabase
      .from('applications')
      .select('count')
      .single()
    
    if (error) {
      return NextResponse.json({
        error: 'Database error',
        message: error.message,
        hint: error.hint || 'Check if table exists',
        code: error.code
      }, { status: 500 })
    }
    
    return NextResponse.json({
      success: true,
      message: 'Connection successful!',
      tableExists: true
    })
  } catch (err) {
    return NextResponse.json({
      error: 'Unexpected error',
      message: err.message
    }, { status: 500 })
  }
}
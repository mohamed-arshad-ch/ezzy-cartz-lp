import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies })
    const userData = await request.json()

    // Create the user in Supabase's public.users table
    const { error: supabaseError } = await supabase
      .from('User')
      .upsert({
        id: userData.id,
        email: userData.email,
        metadata: userData.metadata,
        updated_at: new Date().toISOString(),
      })

    if (supabaseError) {
      console.error('Error saving to Supabase:', supabaseError)
      return NextResponse.json(
        { error: 'Error saving user to Supabase' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving user:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { userId, email, name } = await request.json()
    const supabase = createRouteHandlerClient({ cookies })
    
    // Get the session using Supabase
    const { data: { session }, error: sessionError } = await supabase.auth.getSession()
    
    console.log('Supabase Session:', session)

    if (sessionError || !session) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    // Check if user already exists
    const { data: existingUser } = await supabase
      .from('User')
      .select("*")
      .eq('id', session.user.id)
      .single()

    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' })
    }

    // Create new user
    const { data, error } = await supabase
      .from('User')
      .insert([
        {
          id: session.user.id,
          email: session.user.email,
          name: session.user.user_metadata.full_name,
          avatar_url: session.user.user_metadata.avatar_url,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }
      ])
      .select("*")
      .single()

    if (error) throw error

    return NextResponse.json({ message: 'User created successfully', user: data })

  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json(
      { error: 'Error creating user' },
      { status: 500 }
    )
  }
} 
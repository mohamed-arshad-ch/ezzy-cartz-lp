import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  
  if (code) {
    const supabase = createRouteHandlerClient({ cookies })
    
    // Exchange the code for a session
    await supabase.auth.exchangeCodeForSession(code)
    
    // Get the user data after authentication
    const { data: { user } } = await supabase.auth.getUser()
    
    if (user) {
      // Save user to database
      try {
        await fetch(`${requestUrl.origin}/api/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: user.id,
            email: user.email,
            metadata: {
              ...user.user_metadata,
              provider: 'google'
            }
          }),
        })
      } catch (error) {
        console.error('Error saving user:', error)
      }
    }
  }

  // Redirect to the onboarding page
  return NextResponse.redirect(new URL('/onboarding', request.url))
} 
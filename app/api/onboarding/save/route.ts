import { NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    // Initialize Supabase client
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

    const userEmail = session.user?.email

    if (!userEmail) {
      return NextResponse.json(
        { message: 'No email in session user' },
        { status: 401 }
      )
    }

    // Get the form data from request body
    const formData = await req.json()
    const { companyName, customerType, businessSize, sellingPlatforms, industries } = formData

    // Get the user
    const user = await prisma.user.findUnique({
      where: { email: userEmail }
    })

    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      )
    }

    // Create onboarding data
    const onboardingData = await prisma.onboardingData.create({
      data: {
        companyName,
        customerType,
        businessSize,
        sellingPlatforms,
        industries,
        userId: user.id
      }
    })

    return NextResponse.json({ success: true, data: onboardingData })
  } catch (error) {
    console.error('Error saving onboarding data:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
} 
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { getSession } from '@/lib/auth' // You'll need to implement this

const prisma = new PrismaClient()

export async function GET() {
  try {
    const session = await getSession()
    
    if (!session?.user?.id) {
      return NextResponse.json({ isAuthenticated: false })
    }

    const onboardingData = await prisma.onboardingData.findFirst({
      where: {
        userId: session.user.id
      }
    })

    return NextResponse.json({
      isAuthenticated: true,
      hasOnboarded: !!onboardingData,
      onboardingData
    })
  } catch (error) {
    console.error('Error checking onboarding status:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 
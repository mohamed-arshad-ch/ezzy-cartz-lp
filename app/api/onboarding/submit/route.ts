import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const session = await getServerSession()
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await req.json()
    
    const onboarding = await prisma.userOnboarding.create({
      data: {
        userId: session.user.email,
        ...data
      }
    })

    return NextResponse.json({ success: true, data: onboarding })
  } catch (error) {
    console.error('Error saving onboarding data:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
} 
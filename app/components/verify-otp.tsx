"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

interface VerifyOTPProps {
  email: string;
  onClose: () => void;
}

export function VerifyOTP({ email, onClose }: VerifyOTPProps) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    inputRefs.current[0]?.focus()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target
    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)
    if (index < 5 && value) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index]) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const otpString = otp.join("")
    
    try {
      const { error } = await supabase.auth.verifyOtp({
        token: otpString,
        type: 'signup',
        email: email
      })

      if (error) throw error

      router.push('/onboarding')
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Invalid OTP code')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-gray-900 p-6 rounded-lg space-y-8"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">Verify Your Account</h2>
          <p className="mt-2 text-sm text-gray-300">Enter the 6-digit code sent to {email}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {otp.map((value, index) => (
            <Input
              key={index}
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-10 h-10 text-center bg-gray-800 rounded-lg"
            />
          ))}
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Verifying..." : "Verify"}
          </Button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </motion.div>
    </div>
  )
} 
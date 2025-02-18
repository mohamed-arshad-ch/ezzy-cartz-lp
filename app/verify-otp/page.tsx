"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { SiteHeader } from "../components/site-header"
import { Footer } from "../components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function VerifyOTP() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const router = useRouter()
 

  const supabase = createClientComponentClient()

  useEffect(() => {
    inputRefs.current[0]?.focus()
  }, [])

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))])

    // Focus next input
    if (element.value !== "") {
      if (index < 5) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if (index > 0 && otp[index] === "") {
        const newOtp = [...otp]
        newOtp[index - 1] = ""
        setOtp(newOtp)
        inputRefs.current[index - 1]?.focus()
      }
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
        type: 'signup'
      })

      if (error) throw error

      // If verification successful, redirect to onboarding
      router.push('/onboarding')
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Invalid OTP code')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col ">
      <SiteHeader />
      <main className="flex-1">
        <section className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md space-y-8"
          >
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">Verify Your Account</h2>
              <p className="mt-2 text-sm text-gray-300">Enter the 6-digit code sent to your email or phone</p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="flex justify-center space-x-2 sm:space-x-4">
                {otp.map((data, index) => (
                  <Input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={data}
                    ref={(input) => (inputRefs.current[index] = input)}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleBackspace(e, index)}
                    className="w-10 h-12 sm:w-12 sm:h-14 text-center text-2xl  border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500"
                  />
                ))}
              </div>
              {error && (
                <div className="text-red-400 text-sm text-center">
                  {error}
                </div>
              )}
              <div>
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={loading}
                >
                  {loading ? "Verifying..." : "Verify OTP"}
                </Button>
              </div>
            </form>
            <div className="text-center">
              <p className="text-sm text-gray-300">
                Didn't receive the code?{" "}
                <Link href="#" className="font-medium text-blue-400 hover:text-blue-300">
                  Resend OTP
                </Link>
              </p>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


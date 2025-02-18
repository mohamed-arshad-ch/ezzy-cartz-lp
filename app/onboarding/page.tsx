"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { SiteHeader } from "../components/site-header"
import { Footer } from "../components/footer"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ProgressIndicator } from "../components/progress-indicator"
import { CustomerTypeStep } from "../components/onboarding/customer-type-step"
import { BusinessSizeStep } from "../components/onboarding/business-size-step"
import { SellingPlatformsStep } from "../components/onboarding/selling-platforms-step"
import { IndustrySelectionStep } from "../components/onboarding/industry-selection-step"
import { ThankYouStep } from "../components/onboarding/thank-you-step"


const steps = ["Customer Type", "Business Size", "Selling Platforms", "Industry"]

export default function OnboardingPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    companyName:"",
    customerType: "",
    businessSize: "",
    sellingPlatforms: "",
    industries: "",
  })

  useEffect(() => {
    checkOnboardingStatus()
  }, [])

  const checkOnboardingStatus = async () => {
    try {
      const response = await fetch('/api/onboarding/status', {
        credentials: 'include',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('sb-token')}`,
          'Cache-Control': 'no-cache',
        },
      })
      
      const data = await response.json()
      
      if (!response.ok || !data.isAuthenticated) {
        router.push('/signin')
        return
      }
      
      if (data.hasOnboarded) {
        router.push('/dashboard?message=We will notify you when your store is ready')
        return
      }
      
      setIsLoading(false)
    } catch (error) {
      console.error('Error checking onboarding status:', error)
      router.push('/signin')
    }
  }

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/onboarding/save', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('sb-token')}`,
        },
        body: JSON.stringify({
          ...formData,
          // Ensure these fields are strings
          sellingPlatforms: formData.sellingPlatforms 
            ? formData.sellingPlatforms
            : formData.sellingPlatforms,
          industries: formData.industries
            ? formData.industries
            : formData.industries,
        }),
      })

      if (response.ok) {
        router.push('/dashboard?message=We will notify you when your store is live')
      } else {
        const errorData = await response.json()
        console.error('Error:', errorData.message)
        // TODO: Show error message to user
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      // TODO: Show error message to user
    }
  }

  const updateFormData = (key: string, value: any) => {
    setFormData({ ...formData, [key]: value })
  }

  if (isLoading) {
    return (
      <div className="relative flex min-h-screen flex-col justify-center pt-56">
        <main className="flex-1 ">
          <div className="container flex items-center justify-center py-12 md:py-24 lg:py-32">
            <div className="flex flex-col items-center gap-4">
              {/* <div className="relative w-16 h-16">
                <div className="absolute w-16 h-16 rounded-full border-4 border-gray-700"></div>
                <div className="absolute w-16 h-16 rounded-full border-4 border-t-blue-500 border-r-purple-500 animate-spin"></div>
              </div> */}
              <div className="flex items-center gap-2 text-gray-400">
               
                <div className="flex space-x-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.6s]"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                </div>
              </div>
            </div>
          </div>
        </main>
        </div>
      
    )
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            {/* <h1 className="font-poppins text-3xl font-bold leading-tight tracking-tighter text-white md:text-6xl lg:text-7xl lg:leading-[1.1]">
              Get Started with Ezzy Cartz
            </h1>
            <p className="max-w-[85%] leading-normal text-gray-300 sm:text-xl sm:leading-8">
              Let's set up your ecommerce store in just a few steps
            </p> */}
          </motion.div>

          <div className="mt-12 mx-auto max-w-3xl  rounded-lg shadow-lg p-8">
            {/* <ProgressIndicator steps={steps} currentStep={currentStep} /> */}

           

            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <CustomerTypeStep key="step1" formData={formData} updateFormData={updateFormData} />
              )}
              {currentStep === 1 && (
                <BusinessSizeStep key="step2" formData={formData} updateFormData={updateFormData} />
              )}
              {currentStep === 2 && (
                <SellingPlatformsStep key="step3" formData={formData} updateFormData={updateFormData} />
              )}
              {currentStep === 3 && (
                <IndustrySelectionStep key="step4" formData={formData} updateFormData={updateFormData} />
              )}
              {currentStep === steps.length && <ThankYouStep key="thankyou" />}
            </AnimatePresence>

            <Separator className="my-8 bg-gray-600" />

            <div className="flex justify-between">
              {currentStep > 0 && currentStep < steps.length && (
                <Button
                  onClick={handlePrevious}
                  variant="outline"
                  className="text-white border-gray-600 hover:bg-gray-700"
                >
                  Previous
                </Button>
              )}
              {currentStep < steps.length - 1 && (
                <Button onClick={handleNext} className="ml-auto bg-blue-600 hover:bg-blue-700 text-white">
                  Next
                </Button>
              )}
              {currentStep === steps.length - 1 && (
                <Button
                  onClick={handleSubmit}
                  className="ml-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  Get Started
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


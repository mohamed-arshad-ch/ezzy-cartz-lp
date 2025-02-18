"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export function ThankYouStep() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="text-center"
    >
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
      <h2 className="text-2xl font-semibold mb-4 text-white">Thank You for Choosing Ezzy Cartz!</h2>
      <p className="text-gray-300 mb-8">
        We're excited to help you start your ecommerce journey. Our team will review your information and get in touch
        with you shortly.
      </p>
      <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
        <Link href="/services">Explore Our Services</Link>
      </Button>
    </motion.div>
  )
}


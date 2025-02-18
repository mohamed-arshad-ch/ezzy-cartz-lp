"use client"

import { Phone } from "lucide-react"
import { motion } from "framer-motion"

export function WhatsAppButton() {
  const phoneNumber = "+1234567890" // Replace with your actual WhatsApp number
  const message = "Hi! I'm interested in Ezzy Cartz services." // Your default message

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-green-500 p-4 text-white shadow-lg hover:bg-green-600"
      onClick={handleClick}
      aria-label="Contact on WhatsApp"
    >
      <Phone className="h-6 w-6" />
    </motion.button>
  )
} 
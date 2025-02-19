"use client"

import { Phone } from "lucide-react"
import { motion } from "framer-motion"
import { event } from '@/app/lib/gtag'

export function WhatsAppButton() {
  const phoneNumber = "+919847274569" // Replace with your actual WhatsApp number
  const message = "Hi! I'm interested in Ezzy Cartz services." // Your default message

  const handleWhatsAppClick = () => {
    // Track WhatsApp button click
    event({
      action: 'whatsapp_button_click',
      params: {
        event_category: 'engagement',
        event_label: 'WhatsApp Button Clicked',
        button_location: 'floating_button'
      }
    })
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-green-500 p-4 text-white shadow-lg hover:bg-green-600"
      onClick={handleWhatsAppClick}
      aria-label="Contact on WhatsApp"
    >
      <Phone className="h-6 w-6" />
    </motion.button>
  )
} 
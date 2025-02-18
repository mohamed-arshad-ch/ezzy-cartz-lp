"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const techStack = [
  { name: "Next.js", description: "React framework for production-grade applications" },
  { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development" },
  { name: "MongoDB", description: "Flexible NoSQL database for modern applications" },
  { name: "Supabase", description: "Open source Firebase alternative with powerful features" },
]

export function TechStackSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % techStack.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + techStack.length) % techStack.length)
  }

  return (
    <div className="relative max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-2">{techStack[currentIndex].name}</h3>
          <p className="text-muted-foreground">{techStack[currentIndex].description}</p>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-between mt-8">
        <Button variant="outline" size="icon" onClick={prevSlide}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={nextSlide}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}


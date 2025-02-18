"use client"

import { motion } from "framer-motion"

interface ProgressIndicatorProps {
  steps: string[]
  currentStep: number
}

export function ProgressIndicator({ steps, currentStep }: ProgressIndicatorProps) {
  return (
    <div className="flex justify-between items-center">
      {steps.map((step, index) => (
        <div key={step} className="flex flex-col items-center">
          <div className="relative">
            <motion.div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                index <= currentStep
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "bg-gray-600 text-gray-300"
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: index === currentStep ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {index + 1}
            </motion.div>
            {index < steps.length - 1 && (
              <div className="absolute top-1/2 left-full w-full h-0.5 bg-gray-600 -translate-y-1/2">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                  initial={{ width: "0%" }}
                  animate={{ width: index < currentStep ? "100%" : "0%" }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            )}
          </div>
          <span className="mt-2 text-xs text-gray-300">{step}</span>
        </div>
      ))}
    </div>
  )
}


"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Store, Building, Building2 } from "lucide-react"

interface BusinessSizeStepProps {
  formData: any
  updateFormData: (key: string, value: any) => void
}

export function BusinessSizeStep({ formData, updateFormData }: BusinessSizeStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-white">What size is your business?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button
          variant="outline"
          className={`h-40 flex flex-col items-center justify-center text-lg  border-2 ${
            formData.businessSize === "small" ? "border-blue-500" : "border-gray-600"
          } hover:bg-gray-600 text-white`}
          onClick={() => updateFormData("businessSize", "small")}
        >
          <Store className="w-12 h-12 mb-2" />
          Small
          <span className="text-sm text-gray-300 mt-2">Less than ₹1 lakh annually</span>
        </Button>
        <Button
          variant="outline"
          className={`h-40 flex flex-col items-center justify-center text-lg  border-2 ${
            formData.businessSize === "medium" ? "border-blue-500" : "border-gray-600"
          } hover:bg-gray-600 text-white`}
          onClick={() => updateFormData("businessSize", "medium")}
        >
          <Building className="w-12 h-12 mb-2" />
          Medium
          <span className="text-sm text-gray-300 mt-2">₹1 lakh - ₹10 lakh annually</span>
        </Button>
        <Button
          variant="outline"
          className={`h-40 flex flex-col items-center justify-center text-lg  border-2 ${
            formData.businessSize === "large" ? "border-blue-500" : "border-gray-600"
          } hover:bg-gray-600 text-white`}
          onClick={() => updateFormData("businessSize", "large")}
        >
          <Building2 className="w-12 h-12 mb-2" />
          Large
          <span className="text-sm text-gray-300 mt-2">₹10 lakh+ annually</span>
        </Button>
      </div>
    </motion.div>
  )
}


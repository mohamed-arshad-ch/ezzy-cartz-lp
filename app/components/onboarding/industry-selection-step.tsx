"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  FootprintsIcon as Shoe,
  Shirt,
  Pill,
  Palette,
  Laptop,
  Home,
  Book,
  ClubIcon as Football,
  Gamepad,
  Apple,
  Gem,
  FileDigit,
} from "lucide-react"

interface IndustrySelectionStepProps {
  formData: any
  updateFormData: (key: string, value: any) => void
}

const industries = [
  { name: "Shoes", icon: Shoe },
  { name: "Dresses", icon: Shirt },
  { name: "Medicine", icon: Pill },
  { name: "Beauty", icon: Palette },
  { name: "Electronics", icon: Laptop },
  { name: "Home Decor", icon: Home },
  { name: "Books", icon: Book },
  { name: "Sports", icon: Football },
  { name: "Toys", icon: Gamepad },
  { name: "Groceries", icon: Apple },
  { name: "Jewelry", icon: Gem },
  { name: "Digital Products", icon: FileDigit },
  { name: "Others", icon: FileDigit },
]

export function IndustrySelectionStep({ formData, updateFormData }: IndustrySelectionStepProps) {
  const selectIndustry = (industry: string) => {
    console.log(industry);
    
    updateFormData("industries", industry)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-white">What do you plan to sell?</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {industries.map((industry) => (
          <Button
            key={industry.name}
            variant="outline"
            className={`h-24 flex flex-col items-center justify-center border-2 ${
              formData.industries === industry.name ? "border-blue-500" : "border-gray-600"
            } hover:bg-gray-600 text-white`}
            onClick={() => selectIndustry(industry.name)}
          >
            <industry.icon className="w-8 h-8 mb-2" />
            <span className="text-sm">{industry.name}</span>
          </Button>
        ))}
      </div>
      {formData.industries === "Others" && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Please specify your industry"
            className="w-full p-2  text-white rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
            value={formData.otherIndustry || ""}
            onChange={(e) => updateFormData("otherIndustry", e.target.value)}
          />
        </div>
      )}
    </motion.div>
  )
}


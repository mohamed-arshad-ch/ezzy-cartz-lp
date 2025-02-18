"use client"

import { motion } from "framer-motion"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Store } from "lucide-react"

interface CustomerTypeStepProps {
  formData: {
    companyName: string
    customerType: string
  }
  updateFormData: (key: string, value: any) => void
}

export function CustomerTypeStep({ formData, updateFormData }: CustomerTypeStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Tell us about your business</h2>
        
        <div className="space-y-2">
          {/* <Label htmlFor="companyName">Company Name</Label> */}
          <Input
            id="companyName"
            placeholder="Enter your company name"
            value={formData.companyName || ''}
            onChange={(e) => updateFormData("companyName", e.target.value)}
            className="bg-transparent border-gray-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button
          variant="outline"
          className={`h-32 flex flex-col items-center justify-center text-lg  border-2 ${
            formData.customerType === "new" ? "border-blue-500" : "border-gray-600"
          } hover:bg-gray-600 text-white`}
          onClick={() => updateFormData("customerType", "new")}
        >
          <ShoppingBag className="w-8 h-8 mb-2" />I am not selling yet
        </Button>
        <Button
          variant="outline"
          className={`h-32 flex flex-col items-center justify-center text-lg  border-2 ${
            formData.customerType === "existing" ? "border-blue-500" : "border-gray-600"
          } hover:bg-gray-600 text-white`}
          onClick={() => updateFormData("customerType", "existing")}
        >
          <Store className="w-8 h-8 mb-2" />I am already selling online
        </Button>
      </div>
        {/* <div className="space-y-2">
          <Label>Type of Business</Label>
          <RadioGroup
            value={formData.customerType}
            onValueChange={(value) => updateFormData("customerType", value)}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="B2B" id="b2b" />
              <Label htmlFor="b2b">B2B (Business to Business)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="B2C" id="b2c" />
              <Label htmlFor="b2c">B2C (Business to Consumer)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Both" id="both" />
              <Label htmlFor="both">Both B2B and B2C</Label>
            </div>
          </RadioGroup>
        </div> */}
      </div>
    </motion.div>
  )
}


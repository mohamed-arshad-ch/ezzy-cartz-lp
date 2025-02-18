"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface SellingPlatformsStepProps {
  formData: any
  updateFormData: (key: string, value: any) => void
}

const platforms = [
  { name: "Amazon", logo: "/selling-prtner/amazon-logo.webp?height=40&width=40" },
  { name: "Flipkart", logo: "/selling-prtner/flipkart.png?height=40&width=40" },
  { name: "eBay", logo: "/selling-prtner/ebay.webp?height=40&width=40" },
  { name: "Wix", logo: "/selling-prtner/wix.webp?height=40&width=40" },
  { name: "WordPress", logo: "/selling-prtner/wordPress.png?height=40&width=40" },
  { name: "Not using any platform", logo: "/selling-prtner/not-use.png?height=40&width=40" },
]

export function SellingPlatformsStep({ formData, updateFormData }: SellingPlatformsStepProps) {
  const selectPlatform = (platform: string) => {
    updateFormData("sellingPlatforms", platform)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-white">Do you currently sell on other platforms?</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {platforms.map((platform) => (
          <Button
            key={platform.name}
            variant="outline"
            className={`h-24 flex flex-col items-center justify-center border-2 ${
              formData.sellingPlatforms === platform.name ? "border-blue-500" : "border-gray-600"
            } hover:bg-gray-600 text-white`}
            onClick={() => selectPlatform(platform.name)}
          >
            <Image
              src={platform.logo || "/placeholder.svg"}
              alt={platform.name}
              width={40}
              height={40}
              className="mb-2"
            />
            <span className="text-sm">{platform.name}</span>
          </Button>
        ))}
      </div>
    </motion.div>
  )
}


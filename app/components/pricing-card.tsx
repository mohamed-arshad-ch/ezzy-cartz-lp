"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  price: number
  description: string
  features: string[]
  buttonText: string
  highlighted?: boolean
}

export function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  highlighted = false,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`flex flex-col overflow-hidden rounded-lg border ${
        highlighted ? "border-primary" : "border-border"
      } bg-background p-6`}
    >
      <div className="mb-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="mt-4 flex items-baseline text-3xl font-bold">
          ${price}
          <span className="ml-1 text-xl font-normal text-muted-foreground">/month</span>
        </div>
      </div>
      <p className="mb-6 text-muted-foreground">{description}</p>
      <ul className="mb-6 space-y-4 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="mr-2 h-5 w-5 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`w-full ${highlighted ? "bg-primary text-primary-foreground" : ""}`}
        variant={highlighted ? "default" : "outline"}
      >
        {buttonText}
      </Button>
    </motion.div>
  )
}


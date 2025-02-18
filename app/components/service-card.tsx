"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center p-6 space-y-4 rounded-lg border bg-card text-card-foreground shadow-sm"
    >
      <div className="p-2 rounded-full bg-primary text-primary-foreground">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground text-center">{description}</p>
    </motion.div>
  )
}


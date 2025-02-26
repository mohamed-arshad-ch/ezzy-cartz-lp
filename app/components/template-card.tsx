"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import Link from "next/link"

interface Template {
  id: number
  name: string
  description: string
  image: string
  demoUrl: string
  category: string
}

interface TemplateCardProps {
  template: Template
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-colors"
    >
      <div className="relative p-1">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <Image
            src={template.image || "/placeholder.svg"}
            alt={template.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">{template.name}</h3>
            <p className="text-sm text-muted-foreground">{template.description}</p>
          </div>

          {/* Preview Button */}
          <Button asChild className="w-full">
            <Link href={template.demoUrl} target="_blank" rel="noopener noreferrer">
              <Eye className="w-4 h-4 mr-2" />
              Preview Template
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}


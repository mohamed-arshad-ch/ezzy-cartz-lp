"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const portfolioItems = [
  { id: 1, title: "Fashion Boutique", image: "/placeholder.svg?height=300&width=400" },
  { id: 2, title: "Electronics Store", image: "/placeholder.svg?height=300&width=400" },
  { id: 3, title: "Gourmet Food Market", image: "/placeholder.svg?height=300&width=400" },
  { id: 4, title: "Fitness Equipment Shop", image: "/placeholder.svg?height=300&width=400" },
  { id: 5, title: "Handmade Crafts Bazaar", image: "/placeholder.svg?height=300&width=400" },
  { id: 6, title: "Luxury Watches Emporium", image: "/placeholder.svg?height=300&width=400" },
]

export function PortfolioGrid() {
  return (
    <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center py-12 md:py-24 lg:py-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioItems.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md"
        >
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            width={400}
            height={300}
            className="object-cover w-full h-[200px]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-xl font-semibold">{item.title}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  )
}


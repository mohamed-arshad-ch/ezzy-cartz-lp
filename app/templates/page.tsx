"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SiteHeader } from "../components/site-header"
import { Footer } from "../components/footer"
import { Button } from "@/components/ui/button"
import { TemplateCard } from "../components/template-card"
import { Store, Shirt, FootprintsIcon, Palette, UtensilsCrossed, Dumbbell, Laptop } from "lucide-react"

const categories = [
  { id: "all", label: "All", icon: Store },
  { id: "fashion", label: "Fashion", icon: Shirt },
  { id: "footwear", label: "Footwear", icon: FootprintsIcon },
  { id: "cosmetics", label: "Cosmetics", icon: Palette },
  { id: "food", label: "Food", icon: UtensilsCrossed },
  { id: "fitness", label: "Fitness", icon: Dumbbell },
  { id: "electronics", label: "Electronics", icon: Laptop },
]

const templates = [
  {
    id: 1,
    name: "Fashion Nova",
    description: "Modern fashion ecommerce template with advanced filtering and smooth animations",
    image: "/placeholder.svg?height=600&width=800",
    demoUrl: "https://example.com/fashion-demo",
    category: "fashion",
  },
  {
    id: 2,
    name: "Shoe Haven",
    description: "Premium footwear store template with 3D product previews",
    image: "/placeholder.svg?height=600&width=800",
    demoUrl: "https://example.com/footwear-demo",
    category: "footwear",
  },
  {
    id: 3,
    name: "Glow Beauty",
    description: "Cosmetics and beauty products template with AR try-on features",
    image: "/placeholder.svg?height=600&width=800",
    demoUrl: "https://example.com/beauty-demo",
    category: "cosmetics",
  },
  {
    id: 4,
    name: "Fresh Bites",
    description: "Restaurant and food delivery template with real-time order tracking",
    image: "/placeholder.svg?height=600&width=800",
    demoUrl: "https://example.com/food-demo",
    category: "food",
  },
  {
    id: 5,
    name: "Fit Zone",
    description: "Fitness equipment and supplements store with workout planning features",
    image: "/placeholder.svg?height=600&width=800",
    demoUrl: "https://example.com/fitness-demo",
    category: "fitness",
  },
  {
    id: 6,
    name: "Tech World",
    description: "Electronics and gadgets store with product comparison tools",
    image: "/placeholder.svg?height=600&width=800",
    demoUrl: "https://example.com/electronics-demo",
    category: "electronics",
  },
]

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredTemplates = templates.filter(
    (template) => activeCategory === "all" || template.category === activeCategory,
  )

  return (
    <div className=" relative flex min-h-screen flex-col">
      <header>
        <SiteHeader />
      </header>
      <main className="flex-1">
        <section className="container space-y-12 px-6 py-12 md:py-24 lg:py-32 space-y-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1]">
              Store Templates
            </h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Choose from our collection of modern, responsive ecommerce templates
            </p>
          </motion.div>

          <div className="mt-16 mb-12 overflow-x-auto">
            <div className="flex space-x-4 pb-4">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <Button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    className="min-w-fit"
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {category.label}
                  </Button>
                )
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredTemplates.map((template, index) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TemplateCard template={template} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
      <Footer />
    </div>
  )
}


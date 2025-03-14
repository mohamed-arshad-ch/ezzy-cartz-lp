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
  { id: "admin", label: "Admin Templates", icon: Laptop },
]

const templates = [
  {
    id: 1,
    name: "Fashion ULTRAS",
    description: "Modern fashion ecommerce template with advanced filtering and smooth animations",
    image: "/templates/ULTRAS.png?height=600&width=800",
    demoUrl: "https://test4.ezzycartz.com/",
    category: "fashion",
  },
  {
    id: 2,
    name: "Shoe Store",
    description: "Premium footwear store template with 3D product previews",
    image: "/templates/shoe-store.png?height=600&width=800",
    demoUrl: "https://test1.ezzycartz.com/",
    category: "footwear",
  },
   { id: 3,
    name: "Stylish Store",
    description: "Premium footwear store template with 3D product previews",
    image: "/templates/stylish-shoe.png?height=600&width=800",
    demoUrl: "https://test3.ezzycartz.com/",
    category: "footwear",
  },
  {
    id: 6,
    name: "Tech World",
    description: "Electronics and gadgets store with product comparison tools",
    image: "/templates/Tech World.png?height=600&width=800",
    demoUrl: "https://test2.ezzycartz.com/",
    category: "electronics",
  },
  {
    id: 7,
    name: "Admin Dashboard Pro",
    description: "Comprehensive admin dashboard with analytics, user management, and reporting tools",
    image: "/templates/admin-dashboard.png?height=600&width=800",
    demoUrl: "https://test3.ezzycartz.com/admin",
    category: "admin",
  },
  {
    id: 8,
    name: "Admin Control Panel",
    description: "Modern admin interface with dark/light mode, real-time updates, and advanced data visualization",
    image: "/templates/admin-control.png?height=600&width=800",
    demoUrl: "https://test4.ezzycartz.com/admin",
    category: "admin",
  }
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


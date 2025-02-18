"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed px-6 inset-0 z-50 bg-background"
        >
          <div className="container h-full flex flex-col">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-2xl font-bold" onClick={onClose}>
                Ezzy Cartz
              </Link>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="flex pt-10 flex-col bg-black items-center justify-center flex-grow">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="space-y-6 text-center"
              >
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * (index + 1), duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className="text-2xl font-semibold hover:text-primary transition-colors"
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-12 space-y-4 w-full max-w-xs"
              >
                <Button variant="outline" size="lg" asChild className="w-full">
                  <Link href="/signin" onClick={onClose}>
                    Log in
                  </Link>
                </Button>
                <Button size="lg" asChild className="w-full">
                  <Link href="/register" onClick={onClose}>
                    Get Started
                  </Link>
                </Button>
              </motion.div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


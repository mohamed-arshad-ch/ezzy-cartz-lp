"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { MobileMenu } from "./mobile-menu"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isAuthPage = pathname === "/signin" || pathname === "/register"

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed px-6 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.img
            src="/logo-fav-main.png"
            alt="Ezzy Cartz Logo"
            width={80}
            height={40}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
          <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="h-10 px-4 py-2">Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="h-10 px-4 py-2">About</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/services" legacyBehavior passHref>
                <NavigationMenuLink className="h-10 px-4 py-2">Services</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className="h-10 px-4 py-2">Pricing</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {!isAuthPage && (
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/signin">Log in</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        )}
        <div className="md:hidden">
          <Button variant="outline" size="icon" onClick={toggleMobileMenu}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <MobileMenu isOpen={mobileMenuOpen} onClose={toggleMobileMenu} />
    </motion.header>
  )
}


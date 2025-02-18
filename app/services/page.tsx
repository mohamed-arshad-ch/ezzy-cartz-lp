"use client"

import { motion } from "framer-motion"
import { SiteHeader } from "../components/site-header"
import { Footer } from "../components/footer"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Search, BarChart, Code, Zap, Shield } from "lucide-react"
import { ServiceCard } from "../components/service-card"
import { TechStackSlider } from "../components/tech-stack-slider"
import { PortfolioGrid } from "../components/portfolio-grid"
import { MongoDBIcon, NextjsIcon, SupabaseIcon, TailwindIcon } from "../components/tech-icons"
import { WhatsAppButton } from "../components/whatsapp-button"
const features = [
  {
    name: "Next.js",
    description: "React framework for building fast and scalable web applications.",
    icon: NextjsIcon,
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development.",
    icon: TailwindIcon,
  },
  {
    name: "MongoDB",
    description: "Flexible NoSQL database for modern applications.",
    icon: MongoDBIcon,
  },
  {
    name: "Supabase",
    description: "Open source Firebase alternative with powerful features.",
    icon: SupabaseIcon,
  },
] as const
export default function ServicesPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-16 px-6">
        {/* <section className="container py-12 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1]">
              Our Services
            </h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Comprehensive ecommerce solutions to elevate your online business
            </p>
          </motion.div>
        </section> */}

        {/* <Separator className="my-12" /> */}

        <section className="container mx-auto px-6 flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold text-center mb-12">Ecommerce Solutions</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={ShoppingCart}
              title="Custom Ecommerce Development"
              description="Tailored online stores built to your specific needs and brand identity."
            />
            <ServiceCard
              icon={Search}
              title="SEO Optimization"
              description="Boost your visibility and attract more customers with our expert SEO services."
            />
            <ServiceCard
              icon={BarChart}
              title="Analytics and Reporting"
              description="Gain valuable insights into your store's performance with advanced analytics."
            />
            <ServiceCard
              icon={Code}
              title="API Integration"
              description="Seamlessly connect your store with third-party services and platforms."
            />
            <ServiceCard
              icon={Zap}
              title="Performance Optimization"
              description="Enhance your store's speed and efficiency for a better user experience."
            />
            <ServiceCard
              icon={Shield}
              title="Security Solutions"
              description="Protect your store and customers with robust security measures."
            />
          </div>
        </section>

        <Separator className="my-12" />

        <section className="container  px-6 space-y-12 py-12 md:py-24 lg:py-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
                >
                  <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Powerful Technologies</h2>
                  <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Ezzy Cartz leverages cutting-edge technologies to provide a robust and scalable platform for ecommerce
                    store creation.
                  </p>
                </motion.div>
                <div className="mx-auto grid gap-8 sm:max-w-3xl sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-2">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.3 },
                      }}
                      className="relative overflow-hidden rounded-lg border bg-background p-2"
                    >
                      <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                        <feature.icon className="h-12 w-12 text-primary" />
                        <div className="space-y-2">
                          <h3 className="font-bold">{feature.name}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

        <Separator className="my-12" />

        <section className="container px-6 py-12 md:py-24 lg:py-32">
        <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
                >
                  <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Our Portfolio</h2>
                  <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                  Let's create an exceptional ecommerce experience together.
                  </p>
                </motion.div>
         
          <PortfolioGrid />
        </section>

        <Separator className="my-12" />

        <section className="container py-12 md:py-24 px-10 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Ready to get started?</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Create your first ecommerce store in minutes. No credit card required.
            </p>
            <Button size="lg" className="mt-4">
              Start Building Now
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}


"use client"

import { motion } from "framer-motion"
import { SiteHeader } from "../components/site-header"
import { Footer } from "../components/footer"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { PricingCard } from "../components/pricing-card"
import { FeatureChecklist } from "../components/feature-checklist"
import { WhatsAppButton } from "../components/whatsapp-button"

export default function PricingPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-16 px-6">
        <section className="container px-6 py-12 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1]">
              Choose Your Plan
            </h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Select the perfect plan to grow your ecommerce business with Ezzy Cartz
            </p>
          </motion.div>
        </section>

        <Separator className="my-12" />

        <section className="container py-12 md:py-24 lg:py-32">
          <div className="grid  md:grid-cols-3 mx-auto  max-w-[88rem] flex-col items-center justify-center gap-4 text-center">
            <PricingCard
              title="Basic"
              price={29}
              description="Perfect for small businesses just getting started"
              features={["Up to 100 products", "Basic analytics", "24/7 support", "Custom domain"]}
              buttonText="Get Started"
            />
            <PricingCard
              title="Advanced"
              price={79}
              description="Ideal for growing businesses with expanding needs"
              features={[
                "Up to 1,000 products",
                "Advanced analytics",
                "Priority support",
                "Custom domain",
                "Multiple payment gateways",
                "Abandoned cart recovery",
              ]}
              buttonText="Upgrade to Advanced"
              highlighted={true}
            />
            <PricingCard
              title="Premium"
              price={299}
              description="For large-scale operations and custom needs"
              features={[
                "Unlimited products",
                "Advanced analytics with AI insights",
                "Dedicated account manager",
                "Custom domain",
                "Multiple payment gateways",
                "Advanced marketing tools",
                "API access",
              ]}
              buttonText="Contact Sales"
            />
          </div>
        </section>

        <Separator className="my-12" />

        {/* <section className="container py-12 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">Why Choose Ezzy Cartz?</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              We offer the best features to help your ecommerce business thrive
            </p>
          </motion.div>
          <div className="mx-auto flex max-w-[58rem] mt-16 grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FeatureChecklist
                title="Powerful Features"
                features={[
                  "Intuitive drag-and-drop store builder",
                  "Mobile-responsive designs",
                  "SEO optimization tools",
                  "Integrated blog platform",
                  "Multi-language support",
                  "Inventory management system",
                ]}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FeatureChecklist
                title="Advanced Security"
                features={[
                  "SSL certificates included",
                  "PCI DSS compliant",
                  "Regular security audits",
                  "Fraud detection system",
                  "Data encryption at rest and in transit",
                  "Automated backups",
                ]}
              />
            </motion.div>
          </div>
        </section>

        <Separator className="my-12" /> */}

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
      <WhatsAppButton />
      <Footer />
    </div>
  )
}


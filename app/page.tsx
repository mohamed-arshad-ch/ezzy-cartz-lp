"use client"

import { SiteHeader } from "./components/site-header"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { Metadata } from 'next'

import { Check, X } from "lucide-react"
import { NextjsIcon, TailwindIcon, MongoDBIcon, SupabaseIcon } from "./components/tech-icons"
import { Store, Code, Rocket, Zap } from "lucide-react"
import { IndustryCard } from "./components/industry-card"
import { FootprintsIcon as Shoe, Palette, ShirtIcon, Utensils, Dumbbell, Laptop } from "lucide-react"
import { Footer } from "./components/footer"
import { WhatsAppButton } from "./components/whatsapp-button"

export const metadata: Metadata = {
  title: 'Ezzy Cartz - Build Your Ecommerce Store With Ease',
  description: 'Create, deploy, and scale your online store without any coding knowledge. Start building your ecommerce empire today.',
  keywords: 'ecommerce platform, online store builder, digital commerce, web shop creator',
  openGraph: {
    title: 'Ezzy Cartz - Build Your Ecommerce Store With Ease',
    description: 'Create, deploy, and scale your online store without any coding knowledge.',
    url: 'https://ezzycartz.com',
    siteName: 'Ezzy Cartz',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ezzy Cartz Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ezzy Cartz - Build Your Ecommerce Store With Ease',
    description: 'Create, deploy, and scale your online store without any coding knowledge.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
}

export default function Home() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Ezzy Cartz',
    applicationCategory: 'ECommerce Platform',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '29',
      highPrice: '299',
      offerCount: '3',
    },
    description: 'Create, deploy, and scale your online store without any coding knowledge.',
    operatingSystem: 'Web-based',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <header>
        <SiteHeader />
      </header>
      
      <main className="flex-1 pt-16 px-6" role="main">
        <section 
          className="flex min-h-screen flex-col items-center justify-center space-y-10 py-24"
          aria-label="Hero section"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container flex flex-col items-center justify-center gap-6 text-center"
          >
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              href="#"
              className="inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-medium"
            >
              🎉 <Separator className="mx-2 h-4" orientation="vertical" /> Introducing Ezzy Cartz
            </motion.a>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1]"
            >
              Build Ecommerce Stores
              <br />
              With Ease
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl"
            >
              Create, deploy, and scale your online store without any coding knowledge.
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <Button size="lg" className="h-12 px-8">
                Start Building
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8">
                View Demo
              </Button>
            </motion.div>
          </motion.div>
        </section>

        <Separator className="my-12" />

        <section className="container space-y-12 px-6 py-12 md:py-24 lg:py-32">
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

        <section className="container  px-6 space-y-12 py-12 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Industries We Serve</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Ezzy Cartz caters to a wide range of industries, providing tailored ecommerce solutions for various
              sectors.
            </p>
          </motion.div>
          <div className="mx-auto grid gap-8 sm:max-w-3xl sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <IndustryCard {...industry} />
              </motion.div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        <section className="container px-6 space-y-12 py-12 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">How It Works</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Get your ecommerce store up and running in just a few simple steps.
            </p>
          </motion.div>
          <div className="mx-auto grid gap-8 sm:max-w-3xl sm:grid-cols-2 lg:max-w-6xl lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex h-full flex-col items-center justify-between rounded-md p-6 text-center">
                  <div className="mb-4">
                    <step.icon className="h-16 w-16 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{step.name}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        <section id="pricing" className="container px-6 py-12 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Simple, transparent pricing</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Choose the plan that's right for you and start building your ecommerce empire today.
            </p>
          </motion.div>
          <div className="mx-auto grid gap-8 sm:max-w-3xl sm:grid-cols-3 lg:max-w-6xl lg:grid-cols-3 pt-10">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline text-3xl font-bold">
                    ${plan.price}
                    <span className="ml-1 text-xl font-normal text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">{plan.description}</p>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-8 w-full">{plan.buttonText}</Button>
                </div>
              </motion.div>
            ))}
          </div>
          
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
      <WhatsAppButton />
      <Footer />
    </div>
  )
}

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

const industries = [
  {
    icon: Shoe,
    title: "Footwear",
    description: "From sneakers to formal shoes, we've got your feet covered.",
  },
  {
    icon: Palette,
    title: "Cosmetics",
    description: "Showcase your beauty products with stunning visuals.",
  },
  {
    icon: ShirtIcon,
    title: "Fashion",
    description: "Create a trendsetting online boutique for all styles.",
  },
  {
    icon: Utensils,
    title: "Food & Beverage",
    description: "Serve up delicious ecommerce solutions for culinary businesses.",
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    description: "Energize your fitness equipment and supplement sales.",
  },
  {
    icon: Laptop,
    title: "Electronics",
    description: "Power up your tech store with our ecommerce platform.",
  },
] as const

const steps = [
  {
    name: "Choose Template",
    description: "Select from our pre-built store templates or start from scratch.",
    icon: Store,
  },
  {
    name: "Customize",
    description: "Tailor your store's design and functionality to your brand.",
    icon: Code,
  },
  {
    name: "Add Products",
    description: "Easily upload and manage your product catalog.",
    icon: Rocket,
  },
  {
    name: "Launch",
    description: "Go live with your store and start selling to customers.",
    icon: Zap,
  },
] as const

const pricingPlans = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for small businesses just getting started.",
    features: ["Up to 100 products", "Basic analytics", "24/7 support", "Custom domain"],
    buttonText: "Get Started",
  },
  {
    name: "Growth",
    price: 79,
    description: "Ideal for growing businesses with expanding needs.",
    features: [
      "Up to 1,000 products",
      "Advanced analytics",
      "Priority support",
      "Custom domain",
      "Multiple payment gateways",
      "Abandoned cart recovery",
    ],
    buttonText: "Upgrade to Growth",
  },
  {
    name: "Enterprise",
    price: 299,
    description: "For large-scale operations and custom needs.",
    features: [
      "Unlimited products",
      "Advanced analytics with AI insights",
      "Dedicated account manager",
      "Custom domain",
      "Multiple payment gateways",
      "Advanced marketing tools",
      "API access",
    ],
    buttonText: "Contact Sales",
  },
] as const

const featureComparison = [
  { name: "Number of Products", availability: [true, true, true] },
  { name: "Custom Domain", availability: [true, true, true] },
  { name: "24/7 Support", availability: [true, true, true] },
  { name: "Advanced Analytics", availability: [false, true, true] },
  { name: "Multiple Payment Gateways", availability: [false, true, true] },
  { name: "Abandoned Cart Recovery", availability: [false, true, true] },
  { name: "API Access", availability: [false, false, true] },
  { name: "Dedicated Account Manager", availability: [false, false, true] },
]


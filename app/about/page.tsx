"use client"

import { motion } from "framer-motion"
import { SiteHeader } from "../components/site-header"
import { Footer } from "../components/footer"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { TeamMemberGrid } from "../components/team-member-grid"
import { CompanyTimeline } from "../components/company-timeline"
import { WhyChooseUsCard } from "../components/why-choose-us-card"
import { Rocket, Shield, Zap, Users } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { WhatsAppButton } from "../components/whatsapp-button"

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-16">
        {/* <section className="container py-12 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1]">
              About Ezzy Cartz
            </h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Empowering businesses to thrive in the digital marketplace
            </p>
          </motion.div>
        </section>

        <Separator className="my-12" /> */}

        <section className="container px-6  py-12 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">Our Mission</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              At Ezzy Cartz, we're on a mission to democratize ecommerce by providing powerful, easy-to-use tools that
              enable businesses of all sizes to succeed in the digital marketplace. We believe that technology should
              empower, not complicate, and we're committed to making online selling accessible to everyone.
            </p>
          </motion.div>
        </section>

        <Separator className="my-12" />

        {/* <section className="container px-6 py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <TeamMemberGrid />
        </section> */}

        <Separator className="my-12" />

        <section className="container px-6 py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <CompanyTimeline />
        </section>

        <Separator className="my-12" />

        <section className="container px-6 py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Ezzy Cartz</h2>
        <div className="grid  md:grid-cols-2 lg:grid-cols-4 mx-auto  max-w-[68rem] flex-col items-center justify-center gap-4 text-center">
            <WhyChooseUsCard
              icon={Rocket}
              title="Fast Setup"
              description="Launch your online store in minutes, not days."
            />
            <WhyChooseUsCard
              icon={Shield}
              title="Secure Platform"
              description="Bank-grade security to protect your business and customers."
            />
            <WhyChooseUsCard
              icon={Zap}
              title="Powerful Features"
              description="Everything you need to grow your online business."
            />
            <WhyChooseUsCard
              icon={Users}
              title="24/7 Support"
              description="Our expert team is always here to help you succeed."
            />
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
      <Footer />
      <WhatsAppButton />
    </div>
  )
}


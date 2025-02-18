"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Mike Johnson",
    role: "Head of Design",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Sarah Brown",
    role: "Head of Marketing",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export function TeamMemberGrid() {
  return (
    <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {teamMembers.map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col items-center text-center"
        >
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            width={200}
            height={200}
            className="rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold">{member.name}</h3>
          <p className="text-muted-foreground">{member.role}</p>
        </motion.div>
      ))}
    </div>
  )
}


"use client"

import { motion, useScroll } from "framer-motion"
import { useRef, useState } from "react"
// import { Card } from "@/components/ui/card"
// import { button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    image: "/updated.png",
    tech: ["Next.js", "TypeScript", "Stripe", "Sanity.io"],
    github: "https://github.com/Owais-dev55/nextjs-e-commerce",
    demo: "https://nextjs-vogueaura.vercel.app",
  },
  {
    title: "Clinical App ",
    description: "Real-time chat application with AI-powered responses, user authentication, and message history.",
    image: "/sk.png",
    tech: ["Next", "Express", "PostgreSQL", "Socket.io"],
    github: "#",
    demo: "#",
  },
  {
    title: "BC APPA ",
    description: "Collaborative project management platform with kanban boards, time tracking, and team analytics.",
    image: "/bc.png",
    tech: ["Nextjs", "Tailwind", "Framer Motion"],
    github: "https://github.com/Owais-dev55/BC-APPA",
    demo: "https://bc-appa.vercel.app",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics with data visualization and automated reporting. CODE IS PRIVATE",
    image: "/vehicle.png",
    tech: ["React", "D3.js", "Python", "FastAPI"],
    github: "",
    demo: "https://vehiclevinsreport.com",
  },
]

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
console.log(scrollYProgress);
  return (
    <section id="projects" ref={containerRef} className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2  gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="overflow-hidden group  border-2 hover:border-primary transition-all duration-300">
        <div className="relative h-64 overflow-hidden">
          <motion.div animate={{ scale: isHovered ? 1.1 : 1 }} transition={{ duration: 0.4 }} className="w-full h-full">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
          >
            <button >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-white" />
              </a>
            </button>
            <button >
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5 text-white" />
              </a>
            </button>
          </motion.div>
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

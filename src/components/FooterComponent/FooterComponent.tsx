"use client"
import { Github, Linkedin, Mail, TreeDeciduous } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function Footer() {
  const currentYear = new Date().getFullYear()
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Owais-dev55",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/owais-khilji",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:owaiskhiljee6556@gmail.com",
      label: "Email",
    },
    {
      icon: TreeDeciduous,
      href: "https://linktree-owaisdev.vercel.app",
      label: "Linktree",
    },
  ]

  return (
    <footer className="border-t border-border bg-card/30 font-[Montserrat]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">© {currentYear} Owais Developer. All rights reserved.</p>
            <p className="text-xs text-muted-foreground mt-1">Built with Next.js, TailwindCSS, and Framer Motion</p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <div key={social.label} className="relative flex flex-col items-center">
                <AnimatePresence>
                  {hoveredIcon === social.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: -40 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bg-primary text-primary-foreground text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-50 pointer-events-none"
                    >
                      {social.label}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-primary" />
                    </motion.div>
                  )}
                </AnimatePresence>
                <Link
                  href={social.href}
                  target={social.label === "Email" ? undefined : "_blank"}
                  rel={social.label === "Email" ? undefined : "noopener noreferrer"}
                  onClick={(e) => {
                    if (social.label === "Email") {
                      window.location.href = social.href;
                      e.preventDefault();
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 block"
                  aria-label={social.label}
                  onMouseEnter={() => setHoveredIcon(social.label)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
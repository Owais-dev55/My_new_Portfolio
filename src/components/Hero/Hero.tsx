"use client";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Hero3DScene } from "../3D-object/3D-object";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16  font-[Montserrat]"
    >
      <div className="absolute inset-0 z-0">
        <Hero3DScene />
      </div>

      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              id="line-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
              <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(5)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${i * 25}%`}
              y1="0%"
              x2={`${i * 25 + 25}%`}
              y2="100%"
              stroke="url(#line-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-mono text-sm mb-4 tracking-wider"
          >
            HI, MY NAME IS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-4 text-balance"
          >
            Owais Developer
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-muted-foreground mb-8 text-balance"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed text-pretty"
          >
            I craft exceptional digital experiences that blend beautiful design
            with robust engineering. Specializing in building scalable web
            applications with modern technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <div className="flex items-center gap-4">
              {/* Contact Me Button */}
              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="relative overflow-hidden bg-chart-2 border border-foreground px-8 py-2 rounded-md flex items-center justify-center group"
                >
                  <span className="relative z-10 flex items-center text-foreground group-hover:text-background transition-colors">
                    Contact Me
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-foreground"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>

              <Link href="#projects">
                <button className="group bg-transparent border border-foreground px-8 py-2 rounded-md flex items-center justify-center hover:bg-chart-2 transition-colors">
                  <span className="text-foreground group-hover:text-background transition-colors">
                    View Projects
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex gap-6"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/Owais-dev55",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/owais-khilji-333owais2386556",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:owaiskhiljee6556@gmail.com",
                label: "Email",
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

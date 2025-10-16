// "use client"

// import type React from "react"

// import { useRef, useState } from "react"
// import { motion } from "framer-motion"
// import projects from "./Projects"
// import { ExternalLink, Github } from "lucide-react"

// export function ProjectCard({ project }: { project: (typeof projects)[0] }) {
//   const containerRef = useRef<HTMLDivElement | null>(null)
//   const [tilt, setTilt] = useState({ rx: 0, ry: 0, px: 50, py: 50 })

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const el = containerRef.current
//     if (!el) return
//     const rect = el.getBoundingClientRect()
//     const x = e.clientX - rect.left
//     const y = e.clientY - rect.top
//     const px = (x / rect.width) * 100
//     const py = (y / rect.height) * 100
//     // Subtle, premium tilt
//     const ry = (x / rect.width - 0.5) * 10
//     const rx = (0.5 - y / rect.height) * 10
//     setTilt({ rx, ry, px, py })
//   }

//   const resetTilt = () => setTilt({ rx: 0, ry: 0, px: 50, py: 50 })

//   return (
//     <motion.div
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={resetTilt}
//       className="group relative"
//       style={{ perspective: 1000 }}
//       animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
//       transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.6 }}
//     >
//       {/* Ambient glow (hover) */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60"
//         style={{
//           background:
//             "radial-gradient(60% 60% at 50% 50%, color-mix(in oklab, hsl(var(--primary)) 45%, transparent) 0%, transparent 70%)",
//         }}
//       />

//       {/* Premium gradient ring */}
//       <div className="relative rounded-2xl p-[1px] bg-gradient-to-tr from-primary/40 via-foreground/10 to-accent/40">
//         <div className="relative rounded-[1rem] overflow-hidden border bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/70 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_oklch(0.6_0.15_200_/_0.35)]">
//           {/* Media with parallax and sheen */}
//           <div className="relative aspect-[16/9] overflow-hidden">
//             <motion.img
//               src={project.image || "/placeholder.svg"}
//               alt={project.title}
//               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter,transform] duration-500 will-change-transform"
//               style={{
//                 transformOrigin: `${tilt.px}% ${tilt.py}%`,
//                 transform: `translateZ(0)`,
//               }}
//               whileHover={{ scale: 1.06 }}
//               transition={{ duration: 0.45, ease: "easeOut" }}
//             />
//             {/* Sheen sweep on hover */}
//             <div
//               aria-hidden
//               className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
//               style={{
//                 background:
//                   "linear-gradient(115deg, transparent 0%, color-mix(in oklab, hsl(var(--foreground)) 8%, transparent) 15%, color-mix(in oklab, hsl(var(--foreground)) 4%, transparent) 30%, transparent 55%)",
//               }}
//             />
//             {/* Readability gradient */}
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"
//               initial={{ opacity: 0 }}
//               whileHover={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               {/* Glass action bar */}
//               <div className="absolute bottom-6 left-6 right-6">
//                 <motion.div
//                   initial={{ y: 16, opacity: 0 }}
//                   whileHover={{ y: 0, opacity: 1 }}
//                   transition={{ duration: 0.35, ease: "easeOut" }}
//                   className="grid grid-cols-2 gap-4 rounded-xl border border-border/60 bg-background/40 backdrop-blur-md"
//                 >
//                   <button className="rounded-xl">
//                     <a
//                       href={project.liveUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center justify-center"
//                     >
//                       <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-0.5" />
//                       Live Demo
//                     </a>
//                   </button>
//                   <button className="rounded-xl bg-transparent">
//                     <a
//                       href={project.githubUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center justify-center"
//                     >
//                       <Github className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-0.5" />
//                       Code
//                     </a>
//                   </button>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Content */}
//           <div className="pb-3">
//             <div className="text-2xl tracking-tight">{project.title}</div>
//             <div className="text-base leading-relaxed">{project.description}</div>
//           </div>
//           <div className="pb-6">
//             <div className="flex flex-wrap gap-2">
//               {project.tags.map((tag, index) => (
//                 <motion.span
//                   key={tag}
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.06 }}
//                   className="px-3 py-1 text-xs font-medium rounded-full ring-1 ring-border/60 bg-gradient-to-br from-secondary/80 to-muted/60 text-foreground"
//                 >
//                   {tag}
//                 </motion.span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

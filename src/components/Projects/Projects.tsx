"use client"

import type * as React from "react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export type CarouselSlide = {
  imageAlt: string
  imageSrc: string
  headline?: string
  subhead?: string
  ctaLabel?: string
  ctaHref?: string
}

const defaultSlides: CarouselSlide[] = [
  {
    imageSrc: "/dashboard-ui-charts.png",
    imageAlt: "Project dashboard UI",
    headline: "Modern Dashboard",
    subhead: "Data-rich, fast UX crafted with care.",
    ctaLabel: "View Project",
    ctaHref: "#projects",
  },
  {
    imageSrc: "/ecommerce-checkout-experience.jpg",
    imageAlt: "E-commerce checkout flow",
    headline: "E-commerce Checkout",
    subhead: "Flows that convert and delight.",
    ctaLabel: "Live Demo",
    ctaHref: "#projects",
  },
  {
    imageSrc: "/developer-tools-platform.jpg",
    imageAlt: "Developer tools platform",
    headline: "Developer Tools",
    subhead: "Powerful platforms for teams at scale.",
    ctaLabel: "GitHub",
    ctaHref: "https://github.com/",
  },
  {
    imageSrc: "/modern-ecommerce-website.png",
    imageAlt: "E-commerce Website",
    headline: "E-commerce Platform",
    subhead: "Full-stack commerce with Stripe integration.",
    ctaLabel: "View Code",
    ctaHref: "https://github.com/",
  },
]

type CarouselProps = {
  slides?: CarouselSlide[]
  autoPlay?: boolean
  autoPlayInterval?: number // ms
  className?: string
  ariaLabel?: string
}

export default function Project({
  slides = defaultSlides,
  autoPlay = true,
  autoPlayInterval = 3000,
  className,
  ariaLabel = "Showcase carousel",
}: CarouselProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const inView = useInView(viewportRef, { amount: 0.35 })
  const allSlides = useMemo(() => slides.filter(Boolean), [slides])

  // ✅ Smooth scroll to index (with layout-safe timing)
  const scrollToIndex = useCallback(
    (index: number) => {
      const root = viewportRef.current
      if (!root || allSlides.length === 0) return

      const clamped = ((index % allSlides.length) + allSlides.length) % allSlides.length
      const child = root.children[clamped] as HTMLElement | undefined
      if (!child) return

      requestAnimationFrame(() => {
        child.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        })
      })
    },
    [allSlides.length],
  )

  // ✅ Observe active slide accurately
  useEffect(() => {
    const root = viewportRef.current
    if (!root) return
    const items = Array.from(root.children) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisibleIdx = active
        let maxRatio = 0
        entries.forEach((entry) => {
          const idx = items.indexOf(entry.target as HTMLElement)
          if (entry.intersectionRatio > maxRatio) {
            mostVisibleIdx = idx
            maxRatio = entry.intersectionRatio
          }
        })
        if (maxRatio > 0.3) setActive(mostVisibleIdx)
      },
      {
        root,
        threshold: Array.from({ length: 10 }, (_, i) => i / 10),
      },
    )

    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [active])

  useEffect(() => {
  // Ensure correct initial dot on first render
  scrollToIndex(0)
}, [scrollToIndex])

  // ✅ Autoplay (pauses when hovering or out of view)
  useEffect(() => {
    if (!autoPlay || !inView || isHovering || allSlides.length <= 1) return
    const id = setInterval(() => {
      scrollToIndex(active + 1)
    }, autoPlayInterval)
    return () => clearInterval(id)
  }, [autoPlay, autoPlayInterval, active, inView, isHovering, allSlides.length, scrollToIndex])

  // ✅ Keyboard navigation
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault()
      scrollToIndex(active - 1)
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      scrollToIndex(active + 1)
    }
  }

  return (
    <section aria-label={ariaLabel} className={["relative", className].filter(Boolean).join(" ")}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex items-end justify-between"
        >
          <div>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Highlights
            </h2>
            <p className="mt-1 text-sm text-muted-foreground md:text-base">
              A rotating look at featured work
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <NavArrow onClick={() => scrollToIndex(active - 1)} direction="prev" />
            <NavArrow onClick={() => scrollToIndex(active + 1)} direction="next" />
          </div>
        </motion.header>
      </div>

      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={onKey}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onFocus={() => setIsHovering(true)}
        onBlur={() => setIsHovering(false)}
        className="group relative"
      >
        {/* Scroll track */}
        <div
          ref={viewportRef}
          className="mx-auto flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] max-w-7xl px-6"
          style={{ scrollBehavior: "smooth" }}
        >
          <style>{`.group div::-webkit-scrollbar{display:none}`}</style>
          {allSlides.map((s, i) => (
            <Slide key={i} slide={s} active={i === active} />
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 md:hidden">
          <div className="pointer-events-auto">
            <NavArrow onClick={() => scrollToIndex(active - 1)} direction="prev" />
          </div>
          <div className="pointer-events-auto">
            <NavArrow onClick={() => scrollToIndex(active + 1)} direction="next" />
          </div>
        </div>

        {/* Dots */}
        <div className="mx-auto mt-4 flex max-w-6xl items-center justify-center gap-2 px-6">
          {allSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active ? "true" : "false"}
              onClick={() => scrollToIndex(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                i === active ? "bg-primary scale-125" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ⬅️➡️ Arrow button component
function NavArrow({ onClick, direction }: { onClick: () => void; direction: "prev" | "next" }) {
  const isPrev = direction === "prev"
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrev ? "Previous slide" : "Next slide"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/70 text-foreground shadow-sm backdrop-blur transition hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" className="transition-transform" aria-hidden="true">
        {isPrev ? (
          <path
            d="M15 19l-7-7 7-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M9 5l7 7-7 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  )
}

// 🖼️ Individual slide
function Slide({ slide, active }: { slide: CarouselSlide; active: boolean }) {
  return (
    <figure className="relative mr-4 flex w-[85%] shrink-0 snap-center items-stretch overflow-hidden rounded-[calc(var(--radius)+4px)] border border-border bg-card shadow-sm md:w-[70%] lg:w-[60%]">
      <motion.div
        initial={{ opacity: 0.9, scale: 0.985 }}
        animate={{ opacity: active ? 1 : 0.95, scale: active ? 1 : 0.99 }}
        transition={{ type: "spring", stiffness: 200, damping: 26 }}
        className="relative isolate w-full"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={slide.imageSrc || "/placeholder.svg"}
            alt={slide.imageAlt}
            className={`h-full w-full object-cover transition duration-500 ${
              active ? "grayscale-0" : "grayscale"
            }`}
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border/60" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        {(slide.headline || slide.subhead || slide.ctaLabel) && (
          <figcaption className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5 md:p-6">
            <motion.div
              initial={{ y: 14, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="max-w-xl rounded-xl border border-border/60 bg-background/70 p-3 backdrop-blur"
            >
              {slide.headline && (
                <h3 className="text-pretty text-base font-semibold text-foreground sm:text-lg">
                  {slide.headline}
                </h3>
              )}
              {slide.subhead && (
                <p className="mt-1 text-sm text-muted-foreground sm:text-[0.95rem]">{slide.subhead}</p>
              )}
              {slide.ctaLabel && slide.ctaHref && (
                <div className="mt-3">
                  <a
                    href={slide.ctaHref}
                    className="inline-flex items-center justify-center rounded-md border border-border bg-background/90 px-3 py-1.5 text-sm font-medium text-foreground shadow transition hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {slide.ctaLabel}
                  </a>
                </div>
              )}
            </motion.div>
          </figcaption>
        )}
      </motion.div>
    </figure>
  )
}

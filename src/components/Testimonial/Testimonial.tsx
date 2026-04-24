'use client';

import React, { useState, useRef , useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    type: "video",
    videoUrl: "/Testimonial.mp4",
    thumbnailUrl: "/testimonial.png",
    imageUrl: "/placeholder.png",
    name: "Alessandro",
    designation: "Fiverr Client",
    review: "Professional, responsive, and very knowledgeable. Handled a complex setup involving Stripe, webhooks, and deployment with clarity and precision.",
  },
  {
    type: "text",
    imageUrl: "/aftab.jpeg",
    name: "Aftab Saraz",
    designation: "CEO & Co-Founder at Zetsol Technologies",
    review: "Owais delivered quality work within deadlines, showing strong technical skills and a great learning attitude during his internship at Zetsol Technologies. We appreciate his efforts and wish him continued success.",
  },
  {
    type: "text",
    imageUrl: "/abdul haseeb.jpeg",
    name: "Abdul Haseeb",
    designation: "Founder & CEO at Verior",
    review: "Owais completed his internship as a Frontend Developer with excellence, delivering responsive and well-structured interfaces on time. He showed strong technical skills, creativity, and a great learning attitude.",
  },
];

// ── Shared: Stars ────────────────────────────────────────────────────────────
const Stars = () => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((i) => (
      <div key={i} className="relative w-4 h-4">
        <Image src="/star-icon.png" alt="star" fill className="object-contain" />
      </div>
    ))}
  </div>
);

// ── Shared: Pulsing play button ──────────────────────────────────────────────
const PlayButton = ({ size = "lg" }) => {
  const dim = size === "lg" ? "w-16 h-16" : "w-12 h-12";
  return (
    <motion.div
      className={`${dim} rounded-full flex items-center justify-center`}
      style={{
        border: "1.5px solid rgba(139,92,246,0.65)",
        boxShadow: "0 0 24px rgba(139,92,246,0.4), inset 0 0 16px rgba(139,92,246,0.1)",
      }}
      animate={{
        boxShadow: [
          "0 0 24px rgba(139,92,246,0.35), inset 0 0 16px rgba(139,92,246,0.1)",
          "0 0 48px rgba(139,92,246,0.65), inset 0 0 24px rgba(139,92,246,0.25)",
          "0 0 24px rgba(139,92,246,0.35), inset 0 0 16px rgba(139,92,246,0.1)",
        ],
      }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div style={{
        width: 0, height: 0,
        borderTop: "10px solid transparent",
        borderBottom: "10px solid transparent",
        borderLeft: "18px solid rgba(200,180,255,0.9)",
        marginLeft: "4px",
      }} />
    </motion.div>
  );
};

// ── Shared: Blink dot ────────────────────────────────────────────────────────
const BlinkDot = () => (
  <motion.span
    className="w-1.5 h-1.5 rounded-full inline-block"
    style={{ background: "#8b5cf6" }}
    animate={{ opacity: [1, 0.2, 1] }}
    transition={{ duration: 1.4, repeat: Infinity }}
  />
);

// ── Shared: Video badge ──────────────────────────────────────────────────────
const VideoBadge = () => (
  <span
    className="absolute top-3 left-3 z-10 text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
    style={{
      background: "rgba(139,92,246,0.2)",
      border: "1px solid rgba(139,92,246,0.45)",
      color: "#c4b5fd",
    }}
  >
    Video Review
  </span>
);

// ── Lightbox Modal ───────────────────────────────────────────────────────────
const VideoModal = ({ testimonial, onClose }: { testimonial: (typeof testimonials)[number] | null; onClose: () => void }) => (
  <AnimatePresence>
    {testimonial && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-3xl rounded-2xl overflow-hidden"
          style={{
            background: "#080812",
            border: "1px solid rgba(139,92,246,0.3)",
            boxShadow: "0 0 80px rgba(139,92,246,0.25)",
          }}
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.88, opacity: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <video
            src={testimonial.videoUrl}
            controls
            autoPlay
            className="w-full aspect-video"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            style={{ background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.4)" }}
          >
            <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// ════════════════════════════════════════════════════════════════════════════
// OPTION A — Featured video (full width) + 2-col text cards below
// ════════════════════════════════════════════════════════════════════════════
const LayoutA = ({ onPlay }: { onPlay: React.Dispatch<React.SetStateAction<(typeof testimonials)[number] | null>> }) => {
  const video = testimonials[0];
  const textCards = testimonials.slice(1);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-5 px-4">

      {/* Featured video card — horizontal */}
      <motion.div
        className="w-full rounded-2xl overflow-hidden flex flex-col md:flex-row cursor-pointer"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(139,92,246,0.2)",
          boxShadow: "0 0 60px rgba(139,92,246,0.1), 0 8px 32px rgba(0,0,0,0.5)",
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{
          boxShadow: "0 0 80px rgba(139,92,246,0.22), 0 12px 40px rgba(0,0,0,0.6)",
        }}
        onClick={() => onPlay(video)}
      >
        {/* Thumbnail */}
        <div
          className="relative md:w-[42%] flex-shrink-0 flex items-center justify-center"
          style={{ background: "#080812", minHeight: "200px" }}
        >
          {video.thumbnailUrl && (
            <Image src={video.thumbnailUrl} alt={video.name} fill className="object-cover opacity-50" />
          )}
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 40% 50%, rgba(139,92,246,0.28) 0%, transparent 65%)" }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.07) 2px,rgba(0,0,0,0.07) 4px)" }}
          />
          <VideoBadge />
          <div className="relative z-10">
            <PlayButton size="lg" />
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col justify-center gap-4 p-6 flex-1">
          <div>
            <h3 className="font-bold text-xl text-foreground dark:text-muted-foreground">{video.name}</h3>
            <p className="text-xs text-muted-foreground dark:text-foreground mt-1">{video.designation}</p>
          </div>
          <Stars />
          <p className="text-sm leading-relaxed text-foreground dark:text-muted-foreground">{video.review}</p>
          <span className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase mt-1" style={{ color: "#8b5cf6" }}>
            <BlinkDot /> Watch testimonial
          </span>
        </div>
      </motion.div>

      {/* 2-column text cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {textCards.map((t, i) => (
          <motion.div
            key={i}
            className="rounded-xl p-6 flex flex-col gap-4 shadow-md hover:scale-[1.02] transition-transform"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
            }}
          >
            <div className="flex items-center gap-4">
              <div className="relative w-[52px] h-[52px] flex-shrink-0">
                <Image src={t.imageUrl} alt={t.name} fill className="rounded-lg object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground dark:text-muted-foreground">{t.name}</h3>
                <p className="text-xs text-muted-foreground dark:text-foreground mt-0.5">{t.designation}</p>
              </div>
            </div>
            <Stars />
            <p className="text-sm leading-relaxed text-foreground dark:text-muted-foreground">{t.review}</p>
            <div className="flex justify-end mt-auto">
              <div className="relative w-[30px] h-[30px]">
                <Image src="/quotes.png" alt="quote" fill className="object-contain opacity-30" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// ════════════════════════════════════════════════════════════════════════════
// OPTION B — Carousel (video first, swipe through all)
// ════════════════════════════════════════════════════════════════════════════
const LayoutB = ({ onPlay }: { onPlay: React.Dispatch<React.SetStateAction<(typeof testimonials)[number] | null>> }) => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const trackRef = useRef<HTMLDivElement | null>(null);
  const outerRef = useRef<HTMLDivElement | null>(null);

  const goTo = (i: number) => setCurrent((i + total) % total);

  useEffect(() => {
    const vp = outerRef.current;
    const track = trackRef.current;
    if (!vp || !track) return;

    const slide = track.children[0];
    if (!(slide instanceof HTMLElement)) return;
    const slideW = slide.offsetWidth;
    const slideMargin = slideW * 0.03;
    const vpW = vp.offsetWidth;
    const offset = current * (slideW + slideMargin * 2) - (vpW / 2 - slideW / 2 - slideMargin);

    track.style.transform = `translateX(${-offset}px)`;
  }, [current]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Viewport */}
      <div ref={outerRef} className="w-full overflow-hidden py-4">
        <div
          ref={trackRef}
          className="flex items-start"
          style={{ transition: "transform 0.48s cubic-bezier(0.4,0,0.2,1)" }}
        >
          {testimonials.map((t, i) => {
            const isActive = i === current;
            return (
              <div
                key={i}
                className="flex-shrink-0"
                style={{
                  width: "62%",
                  margin: "0 3%",
                  opacity: isActive ? 1 : 0.22,
                  transform: isActive ? "scale(1)" : "scale(0.91)",
                  transition: "opacity 0.45s ease, transform 0.45s ease",
                  pointerEvents: isActive ? "all" : "none",
                }}
              >
                {t.type === "video" ? (
                  <div
                    className="rounded-2xl overflow-hidden cursor-pointer"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(139,92,246,0.25)",
                      boxShadow: "0 0 50px rgba(139,92,246,0.12), 0 8px 28px rgba(0,0,0,0.5)",
                    }}
                    onClick={() => onPlay(t)}
                  >
                    <div className="relative w-full aspect-video flex items-center justify-center" style={{ background: "#080812" }}>
                      {t.thumbnailUrl && <Image src={t.thumbnailUrl} alt={t.name} fill className="object-cover opacity-50" />}
                      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 40% 50%, rgba(139,92,246,0.28) 0%, transparent 65%)" }} />
                      <div className="absolute inset-0 pointer-events-none" style={{ background: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.07) 2px,rgba(0,0,0,0.07) 4px)" }} />
                      <VideoBadge />
                      <div className="relative z-10"><PlayButton size="lg" /></div>
                    </div>
                    <div className="p-5 flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-[46px] h-[46px] flex-shrink-0">
                          <Image src={t.imageUrl || "/placeholder.png"} alt={t.name} fill className="rounded-lg object-cover" style={{ border: "1px solid rgba(139,92,246,0.3)" }} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-foreground dark:text-muted-foreground">{t.name}</h3>
                          <p className="text-xs text-muted-foreground dark:text-foreground mt-0.5">{t.designation}</p>
                        </div>
                      </div>
                      <Stars />
                      <p className="text-sm leading-relaxed text-foreground dark:text-muted-foreground">{t.review}</p>
                      <span className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase" style={{ color: "#8b5cf6" }}>
                        <BlinkDot /> Watch testimonial
                      </span>
                    </div>
                  </div>
                ) : (
                  <div
                    className="rounded-2xl p-5 flex flex-col gap-4"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "0 8px 28px rgba(0,0,0,0.4)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-[46px] h-[46px] flex-shrink-0">
                        <Image src={t.imageUrl} alt={t.name} fill className="rounded-lg object-cover" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground dark:text-muted-foreground">{t.name}</h3>
                        <p className="text-xs text-muted-foreground dark:text-foreground mt-0.5">{t.designation}</p>
                      </div>
                    </div>
                    <Stars />
                    <p className="text-sm leading-relaxed text-foreground dark:text-muted-foreground">{t.review}</p>
                    <div className="flex justify-end mt-auto pt-2">
                      <div className="relative w-[28px] h-[28px]">
                        <Image src="/quotes.png" alt="quote" fill className="object-contain opacity-25" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots + arrows */}
      <div className="flex justify-center items-center gap-3 mt-3">
        <motion.button
          onClick={() => goTo(current - 1)}
          className="w-9 h-9 rounded-full flex items-center justify-center text-purple-300 text-sm"
          style={{ border: "1px solid rgba(139,92,246,0.35)", background: "rgba(139,92,246,0.08)" }}
          whileHover={{ background: "rgba(139,92,246,0.22)" }}
          whileTap={{ scale: 0.91 }}
        >←</motion.button>

        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? "22px" : "7px",
              height: "7px",
              background: i === current ? "#8b5cf6" : "rgba(139,92,246,0.22)",
              border: "1px solid rgba(139,92,246,0.4)",
            }}
          />
        ))}

        <motion.button
          onClick={() => goTo(current + 1)}
          className="w-9 h-9 rounded-full flex items-center justify-center text-purple-300 text-sm"
          style={{ border: "1px solid rgba(139,92,246,0.35)", background: "rgba(139,92,246,0.08)" }}
          whileHover={{ background: "rgba(139,92,246,0.22)" }}
          whileTap={{ scale: 0.91 }}
        >→</motion.button>
      </div>
    </div>
  );
};
// ════════════════════════════════════════════════════════════════════════════
// MAIN SECTION — swap LayoutA / LayoutB below
// ════════════════════════════════════════════════════════════════════════════
const LAYOUT = "A"; // 👈 change to "B" to switch

const Testimonial = () => {
  const [activeVideo, setActiveVideo] = useState<(typeof testimonials)[number] | null>(null);

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        id="testimonial"
        className="relative w-full py-32 font-[Montserrat] bg-background dark:bg-div/30"
      >
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-muted-foreground mb-4">
            What our clients say?
          </h2>
          <p className="text-lg text-muted-foreground dark:text-foreground max-w-2xl mx-auto">
            Hear from our clients who trust us to deliver exceptional results.
          </p>
        </div>

        {LAYOUT === "A" ? (
          <LayoutA onPlay={setActiveVideo} />
        ) : (
          <LayoutB onPlay={setActiveVideo} />
        )}
      </motion.section>

      <VideoModal testimonial={activeVideo} onClose={() => setActiveVideo(null)} />
    </>
  );
};

export default Testimonial;
"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const highlight = highlightRef.current;
    const container = containerRef.current;

    if (!cursor || !highlight || !container) return;

    let mouseX = 0;
    let mouseY = 0;
    let highlightX = 0;
    let highlightY = 0;

    // Create particle canvas
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "48";
    canvas.style.pointerEvents = "none";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    container.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Update mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Update main cursor
      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";

      // Create particles
      if (Math.random() > 0.4) {
        const particle: Particle = {
          x: mouseX,
          y: mouseY,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          life: 1,
          maxLife: 1,
          size: Math.random() * 3 + 1,
        };
        particlesRef.current.push(particle);
      }
    };

    // Animate highlight and particles
    const animate = () => {
      // Lerp highlight position
      highlightX += (mouseX - highlightX) * 0.15;
      highlightY += (mouseY - highlightY) * 0.15;

      highlight.style.left = highlightX + "px";
      highlight.style.top = highlightY + "px";

      // Update and draw particles
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.life -= 0.02;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.2; // gravity

        if (particle.life > 0) {
          const opacity = particle.life;
          ctx.fillStyle = `rgba(59, 130, 246, ${opacity * 0.6})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          return true;
        }
        return false;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      cursor.style.display = "block";
      highlight.style.display = "block";
      canvas.style.display = "block";
    };

    const handleMouseLeave = () => {
      cursor.style.display = "none";
      highlight.style.display = "none";
      canvas.style.display = "none";
    };

    const handleWindowResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleWindowResize);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleWindowResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.remove();
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none">
      {/* Custom cursor pointer */}
      <div
        ref={cursorRef}
        className="fixed z-50"
        style={{
          display: "none",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Cursor Image */}
        <img
          src="https://img.icons8.com/fluency/48/cursor.png"
          alt="cursor"
          width="32"
          height="32"
          className="drop-shadow-lg"
        />
      </div>

      {/* Highlight glow effect */}
      <div
        ref={highlightRef}
        className="fixed z-49 rounded-full pointer-events-none"
        style={{
          display: "none",
          transform: "translate(-50%, -50%)",
          width: "80px",
          height: "80px",
          background: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(59, 130, 246, 0) 100%)`,
          boxShadow: "0 0 40px rgba(59, 130, 246, 0.4), inset 0 0 20px rgba(59, 130, 246, 0.2)",
          border: "1px solid rgba(59, 130, 246, 0.3)",
        }}
      />
    </div>
  );
}

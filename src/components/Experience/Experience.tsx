import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description:
      "Leading development of enterprise-scale applications using Next.js, TypeScript, and cloud infrastructure. Mentoring junior developers and establishing best practices.",
    achievements: [
      "Reduced application load time by 60%",
      "Led team of 5 developers",
      "Implemented CI/CD pipeline",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple client projects using React, Node.js, and PostgreSQL. Collaborated with design team to create pixel-perfect implementations.",
    achievements: [
      "Delivered 15+ client projects",
      "Improved code coverage to 85%",
      "Introduced TypeScript to codebase",
    ],
  },
  {
    title: "Frontend Developer",
    company: "StartUp Ventures",
    period: "2018 - 2020",
    description:
      "Built responsive web applications with React and modern CSS. Worked closely with UX designers to implement intuitive user interfaces.",
    achievements: [
      "Created reusable component library",
      "Optimized bundle size by 40%",
      "Implemented accessibility standards",
    ],
  },
  {
    title: "Junior Developer",
    company: "Web Agency Pro",
    period: "2017 - 2018",
    description:
      "Started career building websites and learning full-stack development fundamentals. Contributed to various client projects and internal tools.",
    achievements: [
      "Completed 20+ website projects",
      "Learned modern development practices",
      "Contributed to open source",
    ],
  },
];

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section className="bg-card/30 py-32 relative" ref={containerRef}>
        <div className="container mx-auto px-6"></div>
    </section>
  )
};

export default Experience;

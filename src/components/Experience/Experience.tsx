"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

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
    <section className="bg-div/30 py-32 relative" ref={containerRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-primary origin-top"
            />
          </div>
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block z-10"
                  />
                  <div className="md:ml-20 p-6 hover:border-primary transition-all duration-300 group border border-border rounded-lg bg-background/50 backdrop-blur">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-mono bg-secondary px-3 py-1 rounded-full">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

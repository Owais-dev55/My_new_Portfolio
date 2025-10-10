"use client";
import { motion } from "framer-motion";
import React from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "📘" },
      { name: "TailwindCSS", icon: "🎨" },
      { name: "HTML/CSS", icon: "🌐" },
      { name: "Framer Motion", icon: "✨" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚂" },
      { name: "Python", icon: "🐍" },
      { name: "REST APIs", icon: "🔌" },
      { name: "GraphQL", icon: "◈" },
      { name: "WebSockets", icon: "🔄" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Redis", icon: "🔴" },
      { name: "Supabase", icon: "⚡" },
      { name: "Prisma", icon: "💎" },
      { name: "MySQL", icon: "🐬" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: "📦" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
      { name: "Vercel", icon: "▲" },
      { name: "Jest", icon: "🃏" },
      { name: "CI/CD", icon: "🔧" },
    ],
  },
];

const Skills = () => {
  return (
    <div className="h-screen w-[90%] border rounded-3xl justify-around flex flex-col  mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="text-center mt-20 px-4 "
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Skills & Technologies
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          A comprehensive toolkit for building modern, scalable web
          appmotion.lications.
        </p>
      </motion.div>

      <div className="flex justify-evenly">
        {skillCategories.map((category , categoryIndex) => {
          return (
            <motion.div
             key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
             className="m-5 border p-5 rounded-lg w-60">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map(
                  (skill: { name: string; icon: string } , skillIndex) => (
                    <motion.li
                    key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors"       
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-lg">{skill.name}</span>
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

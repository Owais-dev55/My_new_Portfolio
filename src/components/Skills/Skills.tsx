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
    <div
      id="skills"
      className="min-h-screen w-[90%] border rounded-3xl mx-auto flex flex-col justify-around py-10 font-[Montserrat]"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="text-center px-4"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Skills & Technologies
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable web applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 place-items-center">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="border p-5 rounded-xl w-full sm:w-72 shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: categoryIndex * 0.1 + skillIndex * 0.05,
                  }}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-lg">{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

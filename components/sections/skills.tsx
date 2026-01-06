"use client"

import { motion } from "framer-motion"

const skillGroups = [
  {
    title: "Core Skills",
    skills: [
      { name: "Information System Management", level: 90 },
      { name: "Business Analysis", level: 90 },
      { name: "Blockchain Fundamentals", level: 85 },
      { name: "Finance", level: 80 },
      { name: "IS Audit", level: 70 },
    ],
  },
  {
    title: "Technical Skills",
    skills: [
      { name: "Microsoft Excel", level: 85 },
      { name: "SQL", level: 70 },
      { name: "Java", level: 60 },
      { name: "Solidity", level: 60 },
      { name: "Canva", level: 90 },
      { name: "Visual Paradigm", level: 90 },
      { name: "Figma", level: 85 },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Team Work", level: 95 },
      { name: "Leadership", level: 90 },
      { name: "Problem Solving", level: 85 },
      { name: "Public Speaking", level: 75 },
      { name: "Communication", level: 80 },
      { name: "Adaptability", level: 90 },
      { name: "Critical Thinking", level: 70 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A comprehensive toolkit built through academic learning, practical projects,
            and continuous self-improvement.
          </p>
        </motion.div>

        {/* Skill Columns */}
        <div className="grid md:grid-cols-3 gap-16">
          {skillGroups.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-semibold text-white mb-8">
                {group.title}
              </h3>

              <div className="space-y-6">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-200">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-white rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    id: 1,
    title: "Purchasing assistant",
    company: "PT Multirasa Nusantara (Yoshinoya)",
    period: "Aug 2023 - Sep 2023 ",
    description: "Managing Supplier's data and while coordinating with team to ensure data accuracy of the main database",
    logo: "/logos/yoshinoya.png",
  },
  {
    id: 2,
    title: "Business Solution Analyst",
    company: "PT Fajar Mitra Indah (Family Mart Indonesia)",
    period: "Jan 2026 - Present",
    description: "Business Process Mapping, Requirement Gathering, and System Testing for New Store Opening Projects",
    logo: "/logos/yoshinoya.png",
  },
  // {
  //   id: 3,
  //   title: "Junior Developer",
  //   company: "StartUp Labs",
  //   period: "2018 - 2020",
  //   description: "Developed responsive websites and user interfaces",
  
]
export default function Experience() {
  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -40, y: 10 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section id="experience" className="py-24 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.h2 variants={headingVariants} className="text-5xl md:text-6xl font-bold text-white mb-4">
            Working Experience
          </motion.h2>
          <motion.p variants={headingVariants} className="text-gray-400 text-lg">
            My professional journey and career highlights
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0,
              },
            },
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="group border-l-2 border-gray-800 hover:border-white transition-colors duration-500 pl-8 py-4 relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 w-4 h-4 bg-white opacity-0 group-hover:opacity-100 rounded-full transform -translate-x-2.5 transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.8)]" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                {/* Left Side: Job Details */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-white transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-gray-400 text-lg font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-4 font-mono uppercase tracking-wider">{exp.period}</p>
                  <p className="text-gray-300 max-w-2xl leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Right Side: Logo */}
                {exp.logo && (
                  <div className="flex-shrink-0 md:ml-6">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-32 md:w-44 h-auto object-contain grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all duration-700 ease-in-out transform group-hover:scale-105"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
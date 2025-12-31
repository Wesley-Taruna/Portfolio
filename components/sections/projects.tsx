"use client"
import { motion } from "framer-motion"
import { projects } from "@/lib/projects"
import { ProjectCarousel } from "@/components/carousel/project-carousel"


export default function Projects() {
  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="projects" className="py-24 px-6 bg-black">
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
            Projects
          </motion.h2>
          <motion.p variants={headingVariants} className="text-gray-400 text-lg">
            Showcasing my latest work and creative endeavors
          </motion.p>
        </motion.div>

        {/* Replaced full-width project display with carousel component */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <ProjectCarousel projects={projects} />
        </motion.div>
      </div>
    </section>
  )
}

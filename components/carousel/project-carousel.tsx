"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

import type { Project } from "@/lib/projects"

interface ProjectCarouselProps {
  projects: Project[]
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => (prev + newDirection + projects.length) % projects.length)
  }

  const currentProject = projects[currentIndex]

  return (
    <div className="space-y-8">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
            }}
            className="w-full"
          >
            <a
            href={currentProject.url}
            target="_blank"
            rel="noopener noreferrer"
            >
              <div className="group cursor-pointer">
                {/* Gradient background */}
            <div className="relative w-full rounded-2xl overflow-hidden min-h-[800px]">
            <img
            src={currentProject.heroImage}
            alt={currentProject.title}
            className="absolute inset-0 w-full h-full object-cover"
             />

            {/* Optional subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    {/* Left side - Logo and Title */}
                    <div className="flex flex-col items-center justify-center flex-1 text-center">
                      {currentProject.logo && (
                        <div className="mb-6 w-32 h-32 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                          <img
                            src={currentProject.logo || "Aegis2.png"}
                            alt={currentProject.title}
                            className="w-24 h-24 object-contain"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full border border-white/30 hover:border-white bg-black/30 hover:bg-black/50 text-white hover:text-white transition duration-300"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        <button
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full border border-white/30 hover:border-white bg-black/30 hover:bg-black/50 text-white hover:text-white transition duration-300"
          aria-label="Next project"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>

      {/* Project Details Below Carousel */}
      <div className="space-y-6 px-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">{currentProject.title}</h4>
            <p className="text-gray-400 text-base max-w-2xl">{currentProject.overview}</p>
          </div>
          {currentProject.category && (
            <span className="text-sm font-semibold text-gray-300 bg-white/10 px-4 py-2 rounded-full whitespace-nowrap">
              {currentProject.category}
            </span>
          )}
        </div>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-3 pt-4">
          {currentProject.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="text-sm font-medium text-gray-300 border border-gray-700 px-3 py-1 rounded-full hover:border-gray-500 transition duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex items-center justify-center gap-2 pt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-blue-500 w-8" : "bg-gray-700 w-2 hover:bg-gray-600"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

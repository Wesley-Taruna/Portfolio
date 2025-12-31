import Navigation from "@/components/navigation"
import Hero from "@/components/sections/hero"
import Projects from "@/components/sections/projects"
import Experience from "@/components/sections/experience"
import Skills from "@/components/sections/skills"
import Certifications from "@/components/sections/certifications"
import Connect from "@/components/sections/connect"

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Navigation should stay above background */}
      <Navigation />

      {/* Main content sections */}
      <section className="relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Connect />
      </section>
    </main>
  )
}

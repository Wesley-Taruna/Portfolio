  "use client"

  import { motion, type Variants } from "framer-motion"
  import { Button } from "@/components/ui/button"
  import Background from '../background/Background';

  /* ================= VARIANTS (TYPED) ================= */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  export default function Hero() {
    return (
      <>
      
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden"
      >
        <Background />
        {/* Soft crypto glow */}
        <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-indigo-500/10 blur-[140px]" />
        <div className="absolute top-1/3 -left-32 w-[420px] h-[420px] rounded-full bg-purple-900/10 blur-[120px]" />


        <motion.div
          className="relative z-10 text-center max-w-4xl backdrop-blur-[1px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="mb-6 leading-tight text-balance"
          >
            Wesley Taruna
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-balance"
          >
            Business analysis, information systems, and blockchain systems
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center flex-wrap"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-200 transition text-lg px-8 py-6 rounded-full"
            >
              <a href="#projects">View My Work</a>
            </Button>   

            <Button
             asChild
            size="lg"
            variant="outline"
            className="border-white/60 text-white hover:bg-white/10 transition text-lg px-8 py-6 rounded-full bg-transparent"
            >
            <a
              href="https://drive.google.com/file/d/1F5bjorxhk_BWO9uHcDZcJhiY1m4j5eVL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
            Download Resume
             </a>
            </Button>

          </motion.div>
        </motion.div>
      </section>
      </>
    )
  }

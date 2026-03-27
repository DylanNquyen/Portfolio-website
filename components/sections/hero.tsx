"use client"

import { ArrowDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"

// Dynamically import Plasma to avoid SSR issues with WebGL
const Plasma = dynamic(
  () => import("@/components/ui/plasma").then((mod) => mod.Plasma),
  { ssr: false }
)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const navItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
      {/* Plasma Background */}
      <Plasma
        color="#4a9c7d"
        speed={0.4}
        opacity={0.6}
        mouseInteractive={true}
      />

      {/* Content with relative z-index to appear above plasma */}
      <motion.div
        className="relative z-10 mx-auto max-w-6xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <motion.div className="space-y-2" variants={itemVariants}>
              <p className="text-primary font-mono text-sm tracking-wide">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Nguyen Ngoc Thien
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Frontend Developer
              </h2>
            </motion.div>

            <motion.p
              className="text-muted-foreground leading-relaxed max-w-lg text-lg"
              variants={itemVariants}
            >
              Software Engineering student with 3 years of experience developing{" "}
              <span className="text-foreground font-medium">10+ web projects</span>. 
              Specialized in building high-performance, responsive applications using{" "}
              <span className="text-primary">React.js</span>,{" "}
              <span className="text-primary">Vue 3</span>, and{" "}
              <span className="text-primary">TypeScript</span>.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div className="flex gap-8 pt-4" variants={itemVariants}>
              <div>
                <div className="text-2xl font-bold text-foreground">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">10+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">3.27</div>
                <div className="text-sm text-muted-foreground">GPA / 4.0</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Navigation Hints */}
          <motion.div
            className="hidden lg:flex flex-col items-start gap-6"
            variants={containerVariants}
          >
            <div className="space-y-4 w-full">
              {[
                { label: "About", desc: "Background & education" },
                { label: "Experience", desc: "Skills & expertise" },
                { label: "Projects", desc: "Case studies & work" },
              ].map((item, index) => (
                <motion.div key={item.label} variants={navItemVariants}>
                  <Link
                    href={`#${item.label.toLowerCase()}`}
                    className="group flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all backdrop-blur-sm"
                  >
                    <span className="text-primary font-mono text-sm">0{index + 1}</span>
                    <div className="h-px flex-1 bg-border group-hover:bg-primary/30 transition-colors" />
                    <div className="text-right">
                      <div className="font-medium text-foreground">{item.label}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

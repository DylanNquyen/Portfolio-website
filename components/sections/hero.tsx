"use client"

import { ArrowDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  }
}

function scrollToAbout() {
  const aboutSection = document.querySelector("#about")

  if (!aboutSection) return

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    aboutSection.scrollIntoView()
    return
  }

  const startPosition = window.scrollY
  const targetPosition = aboutSection.getBoundingClientRect().top + startPosition
  const distance = targetPosition - startPosition
  const duration = 5000
  let startTime: number | null = null

  const animateScroll = (currentTime: number) => {
    startTime ??= currentTime
    const progress = Math.min((currentTime - startTime) / duration, 1)
    const easedProgress = 1 - Math.pow(1 - progress, 3)

    window.scrollTo(0, startPosition + distance * easedProgress)

    if (progress < 1) {
      window.requestAnimationFrame(animateScroll)
    }
  }

  window.requestAnimationFrame(animateScroll)
}

const content = {
  en: {
    greeting: "Hello, I'm",
    title: "Full-stack Developer",
    cta1: "View My Work",
    cta2: "Get In Touch",
    stats: [
      { value: "3+", label: "Years Experience" },
      { value: "10+", label: "Projects Built" },
      { value: "3.30", label: "GPA / 4.0" },
    ],
    nav: [
      { label: "About", desc: "Background & education", href: "#about" },
      { label: "Experience", desc: "Skills & expertise", href: "#experience" },
      { label: "Projects", desc: "Case studies & work", href: "#projects" },
    ],
  },
  vi: {
    greeting: "Xin chào, tôi là",
    title: "Lập trình viên Full-stack",
    cta1: "Xem Dự án",
    cta2: "Liên hệ",
    stats: [
      { value: "3+", label: "Năm kinh nghiệm" },
      { value: "10+", label: "Dự án đã làm" },
      { value: "3.30", label: "GPA / 4.0" },
    ],
    nav: [
      { label: "Giới thiệu", desc: "Nền tảng & học vấn", href: "#about" },
      { label: "Kinh nghiệm", desc: "Kỹ năng & chuyên môn", href: "#experience" },
      { label: "Dự án", desc: "Case studies & công việc", href: "#projects" },
    ],
  },
}

export function Hero() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="mx-auto max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div className="space-y-2" {...fadeUp(0.2)}>
              <p className="text-primary font-mono text-sm tracking-wide">{t.greeting}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Nguyen Ngoc Thien
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">{t.title}</h2>
            </motion.div>

            <motion.p className="text-muted-foreground leading-relaxed max-w-lg text-lg" {...fadeUp(0.4)}>
              {language === "en" ? (
                <>
                  Software Engineering student with hands-on experience building high-performance frontend applications and full-stack systems. Skilled in{" "}
                  <span className="text-primary">React</span>,{" "}
                  <span className="text-primary">TypeScript</span>,{" "}
                  <span className="text-primary">Node.js</span>,{" "}
                  <span className="text-primary">NestJS</span>, REST/WebSocket APIs, Docker, and microservices-style architecture.
                </>
              ) : (
                <>
                  Sinh viên Kỹ thuật Phần mềm có kinh nghiệm thực tế xây dựng ứng dụng frontend hiệu năng cao và hệ thống full-stack. Thành thạo{" "}
                  <span className="text-primary">React</span>,{" "}
                  <span className="text-primary">TypeScript</span>,{" "}
                  <span className="text-primary">Node.js</span>,{" "}
                  <span className="text-primary">NestJS</span>, REST/WebSocket APIs, Docker và kiến trúc microservices-style.
                </>
              )}
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4" {...fadeUp(0.6)}>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                {t.cta1}
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
              >
                {t.cta2}
              </Link>
            </motion.div>

            <motion.div className="flex gap-8 pt-4" {...fadeUp(0.8)}>
              {t.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Navigation Hints */}
          <motion.div className="hidden lg:flex flex-col items-start gap-6" {...fadeUp(0.5)}>
            <div className="space-y-4 w-full">
              {t.nav.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all"
                >
                  <span className="text-primary font-mono text-sm">0{index + 1}</span>
                  <div className="h-px flex-1 bg-border group-hover:bg-primary/30 transition-colors" />
                  <div className="text-right">
                    <div className="font-medium text-foreground">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <Link
          href="#about"
          onClick={(event) => {
            event.preventDefault()
            scrollToAbout()
          }}
          aria-label="Scroll to about section"
          title="Scroll down"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:grid place-items-center rounded-full p-2 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </Link>
      </div>
    </section>
  )
}

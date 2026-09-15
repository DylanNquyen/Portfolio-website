"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.45)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          title="Back to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 24, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.7 }}
          transition={{
            type: "spring",
            stiffness: 420,
            damping: 18,
            mass: 0.7,
          }}
          className="fixed right-6 bottom-6 z-40 grid size-11 place-items-center rounded-full border border-primary bg-transparent text-primary shadow-[0_0_0_1px_color-mix(in_oklab,var(--primary)_15%,transparent),0_8px_30px_color-mix(in_oklab,var(--primary)_18%,transparent)] backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:right-8 sm:bottom-8"
        >
          <ArrowUp className="size-5" strokeWidth={2.25} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
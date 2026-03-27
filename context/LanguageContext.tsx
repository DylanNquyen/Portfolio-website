"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type Language = "vi" | "en"

interface LanguageContextValue {
  language: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  toggleLanguage: () => {},
})

const STORAGE_KEY = "portfolio-lang"

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Start with "en" on both server and client to avoid hydration mismatch.
  // After mount we read localStorage and update if needed.
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null
    if (stored === "vi" || stored === "en") {
      setLanguage(stored)
    }
    setMounted(true)
  }, [])

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next: Language = prev === "en" ? "vi" : "en"
      localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }

  // Suppress rendering until client has resolved the stored preference
  // to avoid a flash of wrong language. We still render children so
  // the page is not blank — the language value is just "en" by default.
  return (
    <LanguageContext.Provider value={{ language: mounted ? language : "en", toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

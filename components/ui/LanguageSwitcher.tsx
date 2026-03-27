"use client"

import { useLanguage } from "@/context/LanguageContext"

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      aria-label={language === "en" ? "Switch to Vietnamese" : "Switch to English"}
      className="relative flex items-center gap-1 font-mono text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors select-none"
    >
      <span className={language === "en" ? "text-foreground font-semibold" : ""}>EN</span>
      <span className="opacity-40">/</span>
      <span className={language === "vi" ? "text-foreground font-semibold" : ""}>VI</span>
    </button>
  )
}

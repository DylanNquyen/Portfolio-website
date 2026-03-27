"use client"

import { GithubIcon, LinkedinIcon, Mail } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function Footer() {
  const { language } = useLanguage()
  const credit = language === "vi" ? "Thiết kế & Xây dựng bởi Nguyen Ngoc Thien" : "Designed & Built by Nguyen Ngoc Thien"
  const rights = language === "vi" ? "Bảo lưu mọi quyền" : "All rights reserved"

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">{credit}</span>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/dylan-nguyen-0028821a7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/DylanNquyen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:thiennguyenngoc004@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            {new Date().getFullYear()} — {rights}
          </div>
        </div>
      </div>
    </footer>
  )
}

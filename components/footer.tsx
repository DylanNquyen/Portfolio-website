import { Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Designed & Built by Nguyen Ngoc Thien
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/DylanNguyen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
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
            {new Date().getFullYear()} — All rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

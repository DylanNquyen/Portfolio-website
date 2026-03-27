"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/data"
import { useLanguage } from "@/context/LanguageContext"

const labels = {
  en: {
    section: "03. Projects",
    heading: "Case Studies",
    sub: "A selection of projects showcasing my technical skills in frontend development, from complex SPAs to performance-optimized websites.",
  },
  vi: {
    section: "03. Dự án",
    heading: "Các Dự án Tiêu biểu",
    sub: "Một số dự án thể hiện kỹ năng kỹ thuật của tôi trong phát triển frontend, từ SPA phức tạp đến website tối ưu hiệu suất.",
  },
}

export function Projects() {
  const { language } = useLanguage()
  const t = labels[language]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-primary font-mono text-sm mb-2">{t.section}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t.heading}</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">{t.sub}</p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-secondary/30 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex items-center gap-4 md:w-48 shrink-0">
                  <span className="text-primary font-mono text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">{project.period}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-lg">
                        {project.title[language]}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{project.role[language]}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </div>
                  <p className="text-muted-foreground mt-3 line-clamp-2">{project.summary[language]}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-2 py-1 text-xs text-muted-foreground">
                        +{project.techStack.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

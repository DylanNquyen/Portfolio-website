import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, ChevronRight } from "lucide-react"
import { getProjectBySlug, getAllProjectSlugs, projects } from "@/lib/data"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) {
    return { title: "Project Not Found" }
  }

  return {
    title: `${project.title} | Nguyen Ngoc Thien`,
    description: project.summary,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[currentIndex + 1] || projects[0]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-16">
        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-primary font-mono text-sm">{project.role}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground font-mono text-sm">{project.period}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
            {project.description}
          </p>

          {/* Links */}
          {project.links && (
            <div className="flex gap-4 mt-8">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              )}
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
            Key Features
          </h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Challenges & Solutions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Technical Deep Dive
          </h2>
          
          <div className="space-y-8">
            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Challenges
              </h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary font-mono text-sm mt-0.5">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-lg border border-primary/30 bg-primary/5">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Solutions
              </h3>
              <ul className="space-y-3">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary font-mono text-sm mt-0.5">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
            Results & Impact
          </h2>
          <ul className="space-y-3">
            {project.results.map((result, index) => (
              <li key={index} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 border border-border">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary text-xs font-bold">{index + 1}</span>
                </div>
                <span className="text-foreground">{result}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Next Project */}
        <section className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Next Case Study</p>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex items-center justify-between p-6 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/30 transition-all"
          >
            <div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {nextProject.title}
              </h3>
              <p className="text-muted-foreground mt-1">{nextProject.role}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </Link>
        </section>
      </article>
    </main>
  )
}

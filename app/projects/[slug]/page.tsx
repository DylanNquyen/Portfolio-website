import { notFound } from "next/navigation"
import { getProjectBySlug, getAllProjectSlugs, projects } from "@/lib/data"
import { ProjectDetail } from "@/components/sections/ProjectDetail"
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

  if (!project) return { title: "Project Not Found" }

  return {
    title: `${project.title.en} | Nguyen Ngoc Thien`,
    description: project.summary.en,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[currentIndex + 1] ?? projects[0]

  return <ProjectDetail project={project} nextProject={nextProject} />
}

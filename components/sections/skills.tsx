"use client"

import { useLanguage } from "@/context/LanguageContext"

const skillCategories = {
  en: [
    {
      level: "Expert",
      skills: ["HTML5", "CSS3 / SCSS", "JavaScript (ES6+)", "TypeScript", "React.js", "Tailwind CSS", "Responsive Design"],
    },
    {
      level: "Experienced",
      skills: ["Vue 3", "Vite", "Pinia", "Redux", "Vue Router", "React Router", "Git / GitHub", "Axios", "Figma to Code"],
    },
    {
      level: "Knowledge",
      skills: ["Node.js", "Express.js", "C# (.NET)", "SQL Server", "Docker"],
    },
  ],
  vi: [
    {
      level: "Thành thạo",
      skills: ["HTML5", "CSS3 / SCSS", "JavaScript (ES6+)", "TypeScript", "React.js", "Tailwind CSS", "Responsive Design"],
    },
    {
      level: "Có kinh nghiệm",
      skills: ["Vue 3", "Vite", "Pinia", "Redux", "Vue Router", "React Router", "Git / GitHub", "Axios", "Figma to Code"],
    },
    {
      level: "Kiến thức cơ bản",
      skills: ["Node.js", "Express.js", "C# (.NET)", "SQL Server", "Docker"],
    },
  ],
}

const labels = {
  en: {
    section: "02. Experience",
    heading: "Technical Skills",
    sub: "My technical toolkit spans the modern frontend ecosystem with expertise in building performant, accessible, and maintainable applications.",
    langTitle: "Languages",
    lang1: "Vietnamese",
    lang1level: "Native",
    lang2: "English",
    lang2level: "Intermediate",
    eduTitle: "Education",
    eduName: "Ho Chi Minh City University of Technology (HUTECH)",
    eduSub: "Software Engineering, 2022 - 2026",
  },
  vi: {
    section: "02. Kinh nghiệm",
    heading: "Kỹ năng Kỹ thuật",
    sub: "Bộ công cụ kỹ thuật của tôi bao phủ hệ sinh thái frontend hiện đại với chuyên môn xây dựng ứng dụng hiệu suất cao, dễ tiếp cận và dễ bảo trì.",
    langTitle: "Ngôn ngữ",
    lang1: "Tiếng Việt",
    lang1level: "Bản ngữ",
    lang2: "Tiếng Anh",
    lang2level: "Trung cấp",
    eduTitle: "Học vấn",
    eduName: "Trường Đại học Công nghệ TP.HCM (HUTECH)",
    eduSub: "Kỹ thuật Phần mềm, 2022 - 2026",
  },
}

export function Skills() {
  const { language } = useLanguage()
  const t = labels[language]
  const categories = skillCategories[language]

  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-primary font-mono text-sm mb-2">{t.section}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t.heading}</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">{t.sub}</p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.level} className="space-y-4">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-semibold text-foreground">{category.level}</h3>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md border border-border hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-2">{t.langTitle}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex justify-between">
                <span>{t.lang1}</span>
                <span className="text-foreground">{t.lang1level}</span>
              </li>
              <li className="flex justify-between">
                <span>{t.lang2}</span>
                <span className="text-foreground">{t.lang2level}</span>
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-2">{t.eduTitle}</h3>
            <div className="text-muted-foreground">
              <p className="text-foreground font-medium">{t.eduName}</p>
              <p>{t.eduSub}</p>
              <p className="text-primary">GPA: 3.27 / 4.0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

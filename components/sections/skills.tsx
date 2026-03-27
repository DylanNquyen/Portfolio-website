const skillCategories = [
  {
    level: "Expert",
    skills: [
      { name: "HTML5", category: "Languages" },
      { name: "CSS3 / SCSS", category: "Languages" },
      { name: "JavaScript (ES6+)", category: "Languages" },
      { name: "TypeScript", category: "Languages" },
      { name: "React.js", category: "Frameworks" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Responsive Design", category: "Styling" },
    ],
  },
  {
    level: "Experienced",
    skills: [
      { name: "Vue 3", category: "Frameworks" },
      { name: "Vite", category: "Tools" },
      { name: "Pinia", category: "State Management" },
      { name: "Redux", category: "State Management" },
      { name: "Vue Router", category: "Routing" },
      { name: "React Router", category: "Routing" },
      { name: "Git / GitHub", category: "Tools" },
      { name: "Axios", category: "Tools" },
      { name: "Figma to Code", category: "Tools" },
    ],
  },
  {
    level: "Knowledge",
    skills: [
      { name: "Node.js", category: "Backend" },
      { name: "Express.js", category: "Backend" },
      { name: "C# (.NET)", category: "Backend" },
      { name: "SQL Server", category: "Database" },
      { name: "Docker", category: "DevOps" },
    ],
  },
]

export function Skills() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-primary font-mono text-sm mb-2">02. Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Technical Skills
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            My technical toolkit spans the modern frontend ecosystem with expertise in 
            building performant, accessible, and maintainable applications.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.level} className="space-y-4">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {category.level}
                </h3>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md border border-border hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-2">Languages</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex justify-between">
                <span>Vietnamese</span>
                <span className="text-foreground">Native</span>
              </li>
              <li className="flex justify-between">
                <span>English</span>
                <span className="text-foreground">Intermediate</span>
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-2">Education</h3>
            <div className="text-muted-foreground">
              <p className="text-foreground font-medium">
                Ho Chi Minh City University of Technology (HUTECH)
              </p>
              <p>Software Engineering, 2022 - 2026</p>
              <p className="text-primary">GPA: 3.27 / 4.0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

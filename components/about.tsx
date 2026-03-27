import { Award, Code2, Trophy } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-card/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="text-primary font-mono text-sm mb-2">01. About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Background
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I&apos;m a Software Engineering student at{" "}
              <span className="text-foreground font-medium">HUTECH</span> with a 
              passion for crafting pixel-perfect, accessible user interfaces. My journey 
              in web development started 3 years ago, and since then, I&apos;ve built 
              over 10 web projects ranging from corporate websites to complex SPAs.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I specialize in{" "}
              <span className="text-primary">React.js</span>,{" "}
              <span className="text-primary">Vue 3</span>, and{" "}
              <span className="text-primary">TypeScript</span>, with a strong focus 
              on performance optimization, clean architecture, and responsive design. 
              I believe in writing code that is not only functional but also 
              maintainable and scalable.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              When I&apos;m not coding, you can find me exploring new technologies, 
              playing badminton or Sepak takraw, enjoying music, or competing in 
              e-sports. I&apos;m always eager to learn and take on new challenges.
            </p>
          </div>

          <div className="space-y-6">
            {/* Awards & Recognition */}
            <div className="p-6 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Recognition</h3>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Outstanding Student Award</p>
                    <p className="text-muted-foreground">Faculty of IT, HUTECH (2025)</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Code2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">IT Got Talent - Finalist</p>
                    <p className="text-muted-foreground">HUTECH 10th Edition (2025)</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="font-semibold text-foreground mb-4">Certifications</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>CEF B1</span>
                  <span className="text-foreground">Dec 2025</span>
                </li>
                <li className="flex justify-between">
                  <span>Communication & Teamwork Excellence</span>
                  <span className="text-foreground">Aug 2025</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

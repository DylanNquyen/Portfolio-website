import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="mx-auto max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-primary font-mono text-sm tracking-wide">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Nguyen Ngoc Thien
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Frontend Developer
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-lg text-lg">
              Software Engineering student with 3 years of experience developing{" "}
              <span className="text-foreground font-medium">10+ web projects</span>. 
              Specialized in building high-performance, responsive applications using{" "}
              <span className="text-primary">React.js</span>,{" "}
              <span className="text-primary">Vue 3</span>, and{" "}
              <span className="text-primary">TypeScript</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
              >
                Get In Touch
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-foreground">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">10+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">3.27</div>
                <div className="text-sm text-muted-foreground">GPA / 4.0</div>
              </div>
            </div>
          </div>

          {/* Right Column - Navigation Hints */}
          <div className="hidden lg:flex flex-col items-start gap-6">
            <div className="space-y-4 w-full">
              {[
                { label: "About", desc: "Background & education" },
                { label: "Experience", desc: "Skills & expertise" },
                { label: "Projects", desc: "Case studies & work" },
              ].map((item, index) => (
                <Link
                  key={item.label}
                  href={`#${item.label.toLowerCase()}`}
                  className="group flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all"
                >
                  <span className="text-primary font-mono text-sm">0{index + 1}</span>
                  <div className="h-px flex-1 bg-border group-hover:bg-primary/30 transition-colors" />
                  <div className="text-right">
                    <div className="font-medium text-foreground">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}

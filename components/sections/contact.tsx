import { Mail, Github, MapPin, Phone, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-primary font-mono text-sm mb-2">04. Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            I&apos;m currently looking for internship opportunities. Whether you have 
            a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <a
              href="mailto:thiennguyenngoc004@gmail.com"
              className="group flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/30 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground group-hover:text-primary transition-colors">
                  thiennguyenngoc004@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/dylan-nguyen-0028821a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/30 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="text-foreground group-hover:text-primary transition-colors">
                  linkedin.com/in/dylan-nquyen
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground">0969887591</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground">Di An, Binh Duong, Vietnam</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-center">
            <div className="p-8 rounded-lg border border-primary/30 bg-primary/5 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Let&apos;s Work Together
              </h3>
              <p className="text-muted-foreground mb-6">
                I&apos;m passionate about building high-performance web applications 
                and always eager to learn new technologies.
              </p>
              <a
                href="mailto:thiennguyenngoc004@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Say Hello
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

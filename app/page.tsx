import { 
  Header, 
  Hero, 
  About, 
  Skills, 
  Projects, 
  Contact, 
  Footer 
} from "@/components/sections"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

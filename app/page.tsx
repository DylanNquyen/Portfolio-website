import { 
  Header, 
  Hero, 
  About, 
  Skills, 
  Projects, 
  Contact, 
  Footer 
} from "@/components/sections"
import { ScrollToTop } from "@/components/scroll-to-top"

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
      <ScrollToTop />
    </>
  )
}

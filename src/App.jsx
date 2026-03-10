import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"


function App() {
  return (
    <>
    <Header/>
    <main className="gap-1">
      <section id="home">
        <Hero/>
      </section>

      <section inputMode="about">
        <About/>
      </section>

      <section inputMode="skills">
        <Skills/>
      </section>

      <section id="projects">
        <Projects/>
      </section>

      <section id="contact">
        <Contact/>
      </section>
    </main>
    <Footer/>
    </>
  );

}

export default App

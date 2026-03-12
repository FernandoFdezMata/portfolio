import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import { useState } from "react"


function App() {
  return (
    <div className="flex flex-col gap-56">
    <Header/>
    <main className="flex flex-col gap-48">
      <section id="home">
        <Hero/>
      </section>

      <section id="about">
        <About/>
      </section>

      <section id="skills">
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
    </div>
  );

}

export default App
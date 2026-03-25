import SectionTitle from "../components/ui/SectionTitle"

export default function About() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-4">

      <SectionTitle><span className="text-accent">S</span>obre mí</SectionTitle>

      <div className="flex flex-col gap-3 max-w-2xl">
        <p className="text-text-secondary">
          Soy Fernando, ingeniero y desarrollador de software con más de 7 años de experiencia en robótica industrial,
           sistemas autónomos y automatización en el sector del automóvil. He diseñado y programado soluciones para instalaciones robotizadas, AGVs, 
           sistemas de visión artificial y control de procesos en entornos de alta exigencia.
        </p>
        <p className="text-text-secondary">
          Autodidacta por naturaleza, siempre he compaginado mi trabajo con el aprendizaje continuo. En los últimos años
           he ampliado mi perfil hacia el desarrollo frontend, la arquitectura de software y la inteligencia artificial,
            buscando conectar el mundo del hardware con aplicaciones modernas de alto nivel.
        </p>
        <p className="text-text-secondary">
          Este portfolio refleja ese camino: proyectos donde la experiencia en sistemas complejos se encuentra con tecnologías web actuales.
        </p>
      </div>

    </div>
  )
}
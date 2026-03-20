import SectionTitle from "../components/ui/SectionTitle"

export default function About() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-4">

      <SectionTitle>Sobre mí</SectionTitle>

      <div className="flex flex-col gap-3 max-w-2xl">
        <p className="text-text-secondary">
          Soy Fernando, ingeniero y desarrollador de software especializado en robótica industrial
           y sistemas autónomos. Cuento con más de 7 años de experiencia profesional diseñando y 
           programando soluciones para automatización, AGVs y visión artificial. 
           Soy autodidacta por naturaleza y me apasiona explorar nuevos entornos tecnológicos: desde el desarrollo
            web hasta la inteligencia artificial. Actualmente combino mi experiencia en sistemas de bajo nivel 
            con un creciente interés en aplicaciones de alto nivel y herramientas modernas de desarrollo.
        </p>
        <p className="text-text-secondary">
          Actualmente estoy ampliando mis conocimientos en desarrollo frontend,
          diseño de interfaces y buenas prácticas de programación, aplicándolos
          en proyectos propios como parte de mi aprendizaje continuo.
        </p>
        <p className="text-text-secondary">
          Este portfolio recoge algunos de los proyectos y experimentos que
          estoy desarrollando mientras sigo profundizando en tecnologías web y
          en la construcción de aplicaciones robustas y escalables.
        </p>
      </div>

    </div>
  )
}
import SectionTitle from "../components/ui/SectionTitle"

export default function About() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-4">

      <SectionTitle>Sobre mí</SectionTitle>

      <div className="flex flex-col gap-3 max-w-2xl">
        <p className="text-text-secondary">
          Ingeniero con interés en el desarrollo de aplicaciones web modernas,
          especialmente en el ecosistema JavaScript y React. Me gusta trabajar
          en proyectos donde la tecnología resuelve problemas reales y donde el
          software se construye con una arquitectura clara y mantenible.
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
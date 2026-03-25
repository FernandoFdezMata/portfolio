import useInView from "../hooks/useInView";
import projects from "../data/projects"
import Card from "../components/ui/Card"
import SectionTitle from "../components/ui/SectionTitle"

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView();
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        animation: inView
          ? `${isLeft ? "slideInLeft" : "slideInRight"} 0.6s ease-out forwards`
          : "none",
        animationDelay: inView ? `${index * 0.1}s` : "0s",
      }}
    >
      <Card glowColor={project.glow}>
        <h3 className="font-bold text-text-primary">{project.title}</h3>
        <p className="mt-2 text-text-secondary">{project.description}</p>
        <div className="mt-2 text-text-muted text-sm">
          {project.tech.join(" · ")}
        </div>
      </Card>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto text-gray-300 px-6">
      <SectionTitle><span className="text-accent">P</span>royectos</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
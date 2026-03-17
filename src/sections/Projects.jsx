import projects from "../data/projects"
import Card from "../components/ui/Card"
import SectionTitle from "../components/ui/SectionTitle"

export default function Projects(){
    return(
        <div className="max-w-6xl mx-auto text-gray-300">

        <SectionTitle>Proyectos</SectionTitle>

        <div className="grid md:grid-cols-2 gap-8">

            {projects.map(project => (
            <Card key={project.id}>

                <h3 className="font-bold text-text-primary">
                {project.title}
                </h3>

                <p className="mt-2 text-text-secondary">
                {project.description}
                </p>

                <div className="mt-2 text-text-muted text-sm">
                {project.tech.join(" · ")}
                </div>

            </Card>
            ))}

        </div>

        </div>
    );
}
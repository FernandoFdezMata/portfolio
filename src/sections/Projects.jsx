import projects from "../data/projects"
export default function Projects(){
    return(
        <div className="max-w-6xl mx-auto text-gray-300">

        <h2 className="text-3xl font-bold mb-8">
            Proyectos
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

            {projects.map(project => (
            <div key={project.id} className="border p-4 rounded">

                <h3 className="font-bold">
                {project.title}
                </h3>

                <p className="mt-2">
                {project.description}
                </p>

                <div className="mt-2">
                {project.tech.join(" · ")}
                </div>

            </div>
            ))}

        </div>

        </div>
    );
}
export default function Hero() {
    return (
        <div className="flex flex-col justify-center items-center max-w-6xl mx-auto text-center gap-6">

            <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-accent tracking-widest uppercase">
                    Disponible para trabajar
                </p>
                <h1 className="text-5xl md:text-6xl font-extrabold text-text-primary leading-tight">
                    Fernando Fernández Mata<span className="text-accent">.</span>
                </h1>
                <p className="text-xl text-text-secondary font-medium">
                    Frontend Developer — React & JavaScript
                </p>
            </div>

            <p className="max-w-xl text-text-secondary">
                Desarrollo aplicaciones web modernas con React enfocadas en rendimiento,
                experiencia de usuario y arquitectura limpia.
            </p>

            <div className="flex flex-row gap-4 mt-2">
                <a
                    href="#projects"
                    className="px-6 py-2 rounded-lg bg-accent hover:bg-accent-light
                    text-white font-medium transition-colors duration-300"
                >
                    Ver proyectos
                </a>
                <a
                    href="#contact"
                    className="px-6 py-2 rounded-lg border border-bg-elevated
                    hover:border-accent text-text-primary transition-colors duration-300"
                >
                    Contacto
                </a>
            </div>

        </div>
    );
}
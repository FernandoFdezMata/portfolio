import heroBg from "../../public/nueva-firma-b.png";

export default function Hero() {
    return (
        <div className="relative flex flex-col justify-center items-center max-w-6xl mx-auto text-center gap-6 min-h-[60vh] px-6 py-16">

            {/* Imagen de fondo — aparece primera */}
            <img
                src={heroBg}
                alt=""
                className="fade-in-bg absolute inset-0 w-full h-full object-contain"
                style={{ mixBlendMode: "screen", animationDelay: "0.3s" }}
            />

            {/* Contenido escalonado */}
            <div className="relative z-10 flex flex-col gap-2">
                <p
                    className="fade-in text-sm font-medium text-accent tracking-widest uppercase"
                    style={{ animationDelay: "0.9s" }}
                >
                    Disponible para trabajar
                </p>
                <h1
                    className="fade-in text-5xl md:text-6xl font-extrabold text-text-primary leading-tight"
                    style={{ animationDelay: "1.2s" }}
                >
                    Fernando Fernández<span className="text-accent">.</span>
                </h1>
                <p
                    className="fade-in text-xl text-text-secondary font-medium"
                    style={{ animationDelay: "1.5s" }}
                >
                    Software Developer · Robótica, Automatización & IA
                </p>
            </div>

            <p
                className="fade-in relative z-10 max-w-xl text-text-secondary"
                style={{ animationDelay: "1.8s" }}
            >
                Desarrollador de software con más de 7 años de experiencia en robótica industrial, sistemas autónomos y automatización. Apasionado por la tecnología, con sólida base en C++, Python y ROS2, y autodidacta en desarrollo web y nuevas tecnologías.
            </p>

            <div
                className="fade-in relative z-10 flex flex-row gap-4 mt-2"
                style={{ animationDelay: "2.1s" }}
            >
                <a href="#projects" className="px-6 py-2 rounded-lg bg-accent hover:bg-accent-light text-white font-medium transition-colors duration-300">
                    Ver proyectos
                </a>
                <a href="#contact" className="px-6 py-2 rounded-lg border border-bg-elevated hover:border-accent text-text-primary transition-colors duration-300">
                    Contacto
                </a>
            </div>

        </div>
    );
}
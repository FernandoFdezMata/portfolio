import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="flex flex-col w-full max-w-6xl mx-auto gap-6 px-6 py-6">

            <div className="flex flex-row items-start justify-between">
                <div className="flex flex-col">
                    <div className="text-3xl font-extrabold text-text-primary">Fernando Fernández</div>
                    <div className="text-xl font-extrabold text-text-secondary">FULL-STACK DEVELOPER</div>
                </div>
                <div className="flex flex-col justify-end items-end text-text-secondary">
                    <div>fernandofdezmata@gmail.com</div>
                    <div>Valladolid · España</div>
                </div>
            </div>

            <div className="w-full h-px bg-bg-elevated shrink-0" />

            <div className="flex flex-row justify-between text-text-primary">
                <div className="flex flex-row gap-2">
                    <SocialBox icon={<FaLinkedin size={18} />} href="https://linkedin.com/in/tu-perfil" />
                    <SocialBox icon={<MdEmail size={18} />} href="mailto:fernandofdezmata@gmail.com" />
                    <SocialBox icon={<FaGithub size={18} />} href="https://github.com/FernandoFdezMata" />
                </div>
                <div className="flex items-center text-text-muted text-sm">
                    © 2026 Fernando Fernández
                </div>
            </div>

        </footer>
    );
}

function SocialBox({ icon, href }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-9 w-9 rounded-lg
            bg-bg-elevated border border-bg-elevated hover:border-accent
            text-text-primary transition-colors duration-300"
        >
            {icon}
        </a>
    );
}
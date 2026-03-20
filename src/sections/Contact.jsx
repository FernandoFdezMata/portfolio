import Form from "../components/layout/Form";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";

export default function Contact() {
    return (
        <div className="flex flex-col items-center gap-5 text-text-primary w-full max-w-6xl mx-auto">

            <div className="w-full max-w-2xl">
                <h1 className="text-3xl font-bold text-text-primary">Hablemos de tu</h1>
                <h2 className="text-3xl font-bold mb-8 text-text-secondary">próximo proyecto</h2>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-start gap-16 p-2 w-full">

                {/* Columna Izquierda */}
                <div className="flex flex-col gap-5 w-full max-w-sm">
                    <Sep />
                    <div className="p-2">
                        <div className="flex flex-row gap-2 items-center text-text-primary">
                            <span><BiLogoGmail size={18} /></span>
                            <span className="text-sm font-medium">EMAIL</span>
                        </div>
                        <div className="text-text-secondary mt-1">fernandofdezmata@gmail.com</div>
                    </div>
                    <Sep />
                    <div className="p-2">
                        <div className="flex flex-row gap-2 items-center text-text-primary">
                            <span><FaMapMarkerAlt size={18} /></span>
                            <span className="text-sm font-medium">UBICACIÓN</span>
                        </div>
                        <div className="text-text-secondary mt-1">Valladolid, España · Remoto</div>
                    </div>
                    <Sep />
                    <div>
                        <span className="text-sm font-medium text-text-primary">ENCUÉNTRAME EN</span>
                        <div className="grid grid-cols-2 gap-2 p-2">
                            <SocialBox icon={<FaLinkedin />} label="LinkedIn"  href="https://linkedin.com/in/fernando-fernández-mata-a229ba111" />
                            <SocialBox icon={<MdEmail />}    label="Email"     href="mailto:fernandofdezmata@gmail.com" />
                            <SocialBox icon={<FaGithub />}   label="GitHub"    href="https://github.com/FernandoFdezMata" />
                        </div>
                    </div>
                </div>

                {/* Columna Derecha */}
                <div className="w-full max-w-md">
                    <Form />
                </div>

            </div>
        </div>
    );
}

function Sep() {
    return <div className="w-full h-px bg-bg-elevated shrink-0" />;
}

function SocialBox({ icon, label, href }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-2 p-2 rounded-lg
            bg-bg-elevated border border-bg-elevated hover:border-accent
            text-text-primary transition-colors duration-300 text-sm"
        >
            <span>{icon}</span>
            <span>{label}</span>
        </a>
    );
}
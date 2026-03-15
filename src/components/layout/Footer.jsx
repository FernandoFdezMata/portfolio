import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Footer() {
    return (
        <div className="flex flex-col w-full max-w-6xl mx-auto gap-6 px-6 py-6">
            {/*Nombre */}
            <div className="flex flex-row items-start justify-between text-panel-text1">
                <div className="flex flex-col">
                    <div className="text-3xl font-extrabold text-panel-text1">Fernando Fernández</div>
                    <div className="text-xl font-extrabold text-panel-text1">FULL-STACK DEVELOPER</div>
                </div>
                <div className="flex flex-col justify-end items-end">
                    <div>fernandofdezmata@gmail.com</div>
                    <div>Valladolid-España</div>
                </div>
            </div>
            {/*Separador */}
            <div className="w-full h-px bg-white shrink-0" />
            {/*Redes */}
            <div className="flex flex-row justify-between text-panel-text1">
                <div className="flex flex-row ">
                    <SocialBox
                        icon={<FaLinkedin size={18} />}
                        href="https://linkedin.com/in/tu-perfil"
                    />
                    <SocialBox
                        icon={<MdEmail size={18} />}
                        href="mailto:fernandofdezmata@gmail.com"
                    />
                    <SocialBox
                        icon={<FaGithub size={18} />}
                        href="https://github.com/FernandoFdezMata"
                    />
                </div>
                <div className="flex flex-row justify-between items-center">
                    © 2026 Fernando Fernández
                </div>
            </div>
        </div>

    );
}

function SocialBox({ icon, href }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="border text-panel-text1 items-center justify-center gap-1 p-1  h-9 w-9 rounded-lg flex flex-row"
        >
            <div>{icon}</div>
        </a>
    );
}
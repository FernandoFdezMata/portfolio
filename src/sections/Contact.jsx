import Form from "../components/layout/Form";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";


export default function Contact() {
    return (
        <div className="flex flex-col items-center gap-5 text-panel-text1 w-full ">
            <div className="w-full max-w-2xl">
                <h1 className="text-3xl font-bold">Hablemos de tu</h1>
                <h2 className="text-3xl font-bold mb-8 text-panel-text2">próximo proyecto</h2>
            </div>
            <div className=" flex flex-row justify-center items-start gap-16 p-2">
                {/*Columna Izquierda */}
                <div className="flex flex-col gap-5 w-full max-w-4xl">
                    <Sep />
                    {/*Email */}
                    <div className="p-2">
                        <div className="flex flex-row gap-2 items-center">
                            <icon >{<BiLogoGmail size={18} />}</icon>
                            <div>EMAIL</div>
                        </div>
                        <div>fernandofdezmata@gmail.com</div>
                    </div>
                    <Sep />
                    {/*Ubicación */}
                    <div className="p-2">
                        <div className="flex flex-row gap-2 items-center">
                            <icon>{<FaMapMarkerAlt size={18} />}</icon>
                            <div>UBICACIÓN</div>
                        </div>
                        <div>Valladolid,España-Remoto</div>
                    </div>
                    <Sep />
                    {/*Redes */}
                    <div>
                        <div>ENCUENTRAME EN</div>
                        <div className="grid grid-cols-2 gap-2 p-2">
                            <SocialBox
                                icon={<FaLinkedin />}
                                label="Linkedin"
                                href="https://linkedin.com/in/tu-perfil"
                            />
                            <SocialBox
                                icon={<MdEmail />}
                                label="Email"
                                href="mailto:fernandofdezmata@gmail.com"
                            />
                            <SocialBox
                                icon={<FaGithub />}
                                label="Github"
                                href="https://github.com/FernandoFdezMata"
                            />
                        </div>
                    </div>

                </div>
                {/*Columna Derecha */}
                <div>
                    <Form />
                </div>
            </div>
        </div>
    );
}

function Sep() {
    return <div className="w-full h-px bg-white shrink-0" />;
}

function SocialBox({ icon, label, href }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="border items-center gap-1 p-1 rounded-lg flex flex-row"
        >
            <div>{icon}</div>
            <div>{label}</div>
        </a>
    );
}
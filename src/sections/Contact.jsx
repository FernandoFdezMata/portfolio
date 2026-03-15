import Form from "../components/layout/Form";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
    return (
        <div className="flex flex-col items-center gap-5 text-panel-text1">
            <div>
                <h1 className="text-2xl font-extrabold">Hablemos de tu</h1>
                <h2 className="text-2xl font-bold text-panel-text2">próximo proyecto</h2>
            </div>
            <div className=" flex flex-row justify-center items-start gap-8 p-2">
                {/*Columna Izquierda */}
                <div className="flex flex-col">
                    <Sep />
                    {/*Email */}
                    <div className="p-2">
                        <div>EMAIL</div>
                        <div>fernandofdezmata@gmail.com</div>
                    </div>
                    <Sep />
                    {/*Ubicación */}
                    <div className="p-2">
                        <div>UBICACIÓN</div>
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
                            />
                            <SocialBox
                                icon={<MdEmail />}
                                label="Email"
                            />
                            <SocialBox
                                icon={<FaGithub />}
                                label="Github"
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

function SocialBox({ icon, label }) {
    return <div className="border items-center gap-1 p-1 rounded-lg flex flex-row">
        <div>
            {icon}
        </div>
        <div>
            {label}
        </div>
    </div>
}
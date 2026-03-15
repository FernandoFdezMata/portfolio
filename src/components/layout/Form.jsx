import { useState } from "react";


export default function Form() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [status, setStatus] = useState("idle"); // idle | loading | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        const response = await fetch("https://formspree.io/f/mvzwbygy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            setStatus("success");
        } else {
            setStatus("error");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="form-row flex flex-row gap-4">
                <div className="field-group flex flex-col">
                    <label className="field-label text-panel-text1">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="José Moreno"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="text-panel-text2 border rounded-lg p-1 bg-panel-bg" />
                </div>
                <div className="field-group  flex flex-col">
                    <label className="field-label  text-panel-text1">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="jose.moreno@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="text-panel-text2 border rounded-lg p-1 bg-panel-bg " />
                </div>
            </div>

            <div className="field-group flex flex-col">
                <label className="field-label text-panel-text1">Asunto</label>
                <input
                    type="text"
                    name="asunto"
                    placeholder="Proyecto/Colaboración/Trabajo..."
                    value={formData.asunto}
                    onChange={handleChange}
                    className="text-panel-text2 border rounded-lg p-1 bg-panel-bg" />
            </div>

            <div className="field-group flex flex-col">
                <label className="field-label text-panel-text1">Mensaje</label>
                <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuentame..."
                    className="text-panel-text2 border rounded-lg p-1 min-h-32 bg-panel-bg" />
            </div>

            <button className="text-panel-text2 border rounded-lg p-1" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Enviando..." : "ENVIAR MENSAJE"}
            </button>

        </form>
    );
}
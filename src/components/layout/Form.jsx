import { useState } from "react";

const inputClass = `
  text-text-secondary bg-bg-surface
  border border-bg-elevated rounded-lg p-2
  placeholder:text-text-muted
  focus:border-accent focus:outline-none
  transition-colors duration-300
`.trim();

export default function Form() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: ""
    });

    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-1 flex-1">
                    <label className="text-text-primary text-sm">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="José Gómez"
                        value={formData.nombre}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                    <label className="text-text-primary text-sm">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="jose.gomez@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-text-primary text-sm">Asunto</label>
                <input
                    type="text"
                    name="asunto"
                    placeholder="¿De qué se trata?"
                    value={formData.asunto}
                    onChange={handleChange}
                    className={inputClass}
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-text-primary text-sm">Mensaje</label>
                <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntame..."
                    className={`${inputClass} min-h-32 resize-none`}
                />
            </div>

            {status === "success" && (
                <p className="text-sm text-accent">
                    ✓ Mensaje enviado correctamente.
                </p>
            )}
            {status === "error" && (
                <p className="text-sm text-red-400">
                    ✗ Algo salió mal. Inténtalo de nuevo.
                </p>
            )}

            <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="border rounded-lg p-2 bg-bg-elevated border-bg-elevated
                hover:border-accent text-text-primary transition-colors duration-300
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === "loading" ? "Enviando..." : "ENVIAR MENSAJE"}
            </button>

        </form>
    );
}
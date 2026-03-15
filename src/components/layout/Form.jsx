export default function Form() {
    return (
        <div className="contact-form flex flex-col gap-8">
            <div className="form-row flex flex-row gap-4">
                <div className="field-group flex flex-col">
                    <label className="field-label text-panel-text1">Nombre</label>
                    <input type="text" placeholder="José Moreno" className="text-panel-text2 border rounded-lg p-1 "/>
                </div>
                <div className="field-group  flex flex-col">
                    <label className="field-label  text-panel-text1">Email</label>
                    <input type="email" placeholder="jose.moreno@gmail.com" className="text-panel-text2 border rounded-lg p-1 " />
                </div>
            </div>

            <div className="field-group flex flex-col">
                <label className="field-label text-panel-text1">Asunto</label>
                <input type="text" placeholder="Proyecto/Colaboración/Trabajo..." className="text-panel-text2 border rounded-lg p-1 "  />
            </div>

            <div className="field-group flex flex-col">
                <label className="field-label text-panel-text1">Mensaje</label>
                <textarea placeholder="Cuentame..." className="text-panel-text2 border rounded-lg p-1 min-h-32" />
            </div>

            <button className="text-panel-text2 border rounded-lg p-1 " >ENVIAR MENSAJE</button>

        </div>
    );
}
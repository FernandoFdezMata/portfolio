export default function Contact(){
    return(
        <div className="text-white flex flex-col justify-center items-center">
            <h1 className="text-xl">Contacta conmigo</h1>
            <div className="flex mt-4 w-full items-center justify-center gap-8">
                <div className="flex-1 text-center">
                    <h2>Email</h2>
                    <p>fernandofdezmata@gmail.com</p>
                </div>
                <div className="flex-1 text-center">
                    <h2>Teléfono</h2>
                    <p>654297736</p>
                </div>
                <div className="flex-1 text-center">
                    <h2>Linkedin</h2>
                    <p>Fernando Fernández Mata</p>
                </div>
            </div>
        </div>
    );
}
export default function Footer(){
    return(
        <footer className="min-h-screen flex flex-col justify-center items-center">
            <div className="grid grid-cols-2 text-gray-300 gap-11 text-sm">
                <div>
                    <p>Todos los terechos</p>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                    <div className="bg-gray-300 rounded-3xl h-9 w-9"></div>
                    <div className="bg-gray-300 rounded-3xl h-9 w-9"></div>
                    <div className="bg-gray-300 rounded-3xl h-9 w-9"></div>


                </div>
            </div>
        </footer>
        
    );
}
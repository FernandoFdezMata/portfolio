export default function Header() {
  return (
    //Aqui estaba todo el color
    <header className="w-full "> 
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <div>
          <h1 className="text-xl font-bold tracking-wide text-gray-300">
            Fernando Fernández
          </h1>
          <p className="text-sm text-gray-300">
            Desarrollador Software
          </p>
        </div>

        <nav className="flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-pink-400 transition text-gray-300">Sobre Mi</a>
          <a href="#projects" className="hover:text-pink-400 transition text-gray-300 ">Proyectos</a>
          <a href="#skills" className="hover:text-pink-400 transition text-gray-300 ">Habilidades</a>
          <a href="#contact" className="hover:text-pink-400 transition text-gray-300 ">Contacto</a>
        </nav>

      </div>

    </header>
  );
}
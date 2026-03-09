export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <div>
          <h1 className="text-xl font-bold tracking-wide">
            Fernando Fernández
          </h1>
          <p className="text-sm text-gray-300">
            Desarrollador Software
          </p>
        </div>

        <nav className="flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-pink-400 transition">Sobre Mi</a>
          <a href="#projects" className="hover:text-pink-400 transition">Proyectos</a>
          <a href="#skills" className="hover:text-pink-400 transition">Habilidades</a>
          <a href="#contact" className="hover:text-pink-400 transition">Contacto</a>
        </nav>

      </div>

    </header>
  );
}
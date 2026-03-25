import { useState } from "react";
import useScrollSpy from "../../hooks/useScrollSpy";
import bgFirma from "../../assets/nueva-firma-b.png";

const navLinks = [
  { href: "about", label: "Sobre mí" },
  { href: "skills", label: "Habilidades" },
  { href: "projects", label: "Proyectos" },
  { href: "contact", label: "Contacto" },
];

export default function Header() {
  const activeId = useScrollSpy(navLinks.map(l => l.href));
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fade-in sticky top-0 z-50 w-full bg-bg-base/80 backdrop-blur-md border-b border-accent/30"
      style={{ animationDelay: "2.5s" }}>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo + Nombre */}
        <div className="flex flex-row gap-2">
          <a
            href="#home"
            className="h-[60px] w-[60px] bg-cover bg-center bg-no-repeat
              transition-transform duration-300 hover:scale-110 shrink-0"
            style={{ backgroundImage: `url(${bgFirma})`, backgroundSize: '90%' }}
          />
          <div>
            <p className="text-lg font-extrabold text-text-primary">Fernando Fernández</p>
            <p className="text-sm text-text-secondary">Software Developer · Robótica & Automatización</p>
          </div>
        </div>

        {/* Nav escritorio */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={`#${href}`}
              className={`transition-colors duration-300 ${
                activeId === href ? "text-accent" : "text-text-secondary hover:text-accent"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col px-6 pb-4 gap-4 text-sm font-medium border-t border-accent/20">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={`#${href}`}
              onClick={() => setMenuOpen(false)}
              className={`transition-colors duration-300 ${
                activeId === href ? "text-accent" : "text-text-secondary hover:text-accent"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      )}

    </header>
  );
}
import useScrollSpy from "../../hooks/useScrollSpy";

const navLinks = [
  { href: "about",    label: "Sobre mí"     },
  { href: "skills",   label: "Habilidades"  },
  { href: "projects", label: "Proyectos"    },
  { href: "contact",  label: "Contacto"     },
];

export default function Header() {
  const activeId = useScrollSpy(navLinks.map(l => l.href));

  return (
    <header className="sticky top-0 z-50 w-full
      bg-bg-base/80 backdrop-blur-md
      border-b border-bg-elevated">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <div>
          <p className="text-lg font-extrabold text-text-primary">Fernando Fernández</p>
          <p className="text-sm text-text-secondary">Desarrollador Software</p>
        </div>

        <nav className="flex gap-8 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={`#${href}`}
              className={`transition-colors duration-300 ${
                activeId === href
                  ? "text-accent"
                  : "text-text-secondary hover:text-accent"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}

import { useState, useCallback, useEffect } from 'react';


export default function NavMenu({ currentView, onChangeView }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = (view) => {
    onChangeView(view);
    setIsOpen(false);
  };

  return (
    <div className="p-4 border rounded-md bg-amber-500 grid grid-cols-2">
        <div>
          <h1>FERNANDO FERNANDEZ</h1>
        </div>
        {/* ── Nav links ── */}
        <nav className="flex-1 py-3 px-3 left-auto flex flex-row gap-1">
          <NavLink
            label="Sobre mi"
            active={currentView === 'home'}
            onClick={() => navigate('home')}
          />
          
            <NavLink
              label="Proyectos"
              active={currentView === 'editor'}
              onClick={() => navigate('editor')}
            />
          
          
            <NavLink
              label="Habilidades"
              active={currentView === 'admin'}
              onClick={() => navigate('admin')}
            />
            <NavLink
              label="Contacto"
              active={currentView === 'admin'}
              onClick={() => navigate('admin')}
            />
          
        </nav>


    </div>
  );
}

function NavLink({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                  text-left text-[12px] transition-all
                  ${active
                    ? 'bg-hull-700/20 border border-hull-600/30 text-hull-300'
                    : 'border border-transparent'
                  }`}
    >
      {label}
    </button>
  );
}

// ======================================================
// IMPORTS
// ===========================================import { useState, useCallback, useEffect } from 'react';
import { useState, useCallback, useEffect } from 'react';
// ======================================================
// COMPONENTE
// ======================================================

export default function NavMenu({ currentView, onChangeView }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = (view) => {
    onChangeView(view);
    setIsOpen(false);
  };

  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-lg font-bold">HOLA</h2>

        {/* ── Nav links ── */}
        <nav className="flex-1 py-3 px-3 flex flex-col gap-1">
          <NavLink
            icon="◉"
            label="Inicio"
            active={currentView === 'home'}
            onClick={() => navigate('home')}
          />
          
            <NavLink
              icon="✎"
              label="Sobre mi"
              active={currentView === 'editor'}
              onClick={() => navigate('editor')}
            />
          
          
            <NavLink
              icon="⚙"
              label="Experiencia"
              active={currentView === 'admin'}
              onClick={() => navigate('admin')}
            />
          
        </nav>


    </div>
  );
}

function NavLink({ icon, label, active, onClick }) {
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
      <span className="text-base w-5 text-center">{icon}</span>
      {label}
    </button>
  );
}

import { useState } from 'react'
import NavMenu from './components/NavMenu'



function App() {
  const [count, setCount] = useState(0)
  const [view, setView] = useState('home');

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex-1 flex min-h-0 relative">



        <NavMenu currentView={view} onChangeView={setView} />
      </div>

    </div>
  );

}

export default App

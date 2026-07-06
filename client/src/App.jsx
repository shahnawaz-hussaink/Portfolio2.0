import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import CustomCursor from './components/CustomCursor'
import { trackVisit } from './utils/tracker'

function App() {
  const [blueprintMode, setBlueprintMode] = useState(false);

  useEffect(() => {
    trackVisit();
  }, []);

  return (
    <>
      <CustomCursor />
      
      {/* Outer Wrapper */}
      <div className={`min-h-screen text-zinc-100 overflow-x-hidden relative ${
        blueprintMode ? 'blueprint-active blueprint-bg bg-zinc-950/20' : 'bg-[#09090b]'
      }`}>
        <Home />

        {/* Float Blueprint Diagnostics Control Button */}
        <button
          onClick={() => setBlueprintMode(!blueprintMode)}
          className={`fixed bottom-6 right-6 z-40 px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase border transition-all duration-300 backdrop-blur-md shadow-lg ${
            blueprintMode 
              ? 'border-accent text-accent bg-accent/10 shadow-accent/10' 
              : 'border-zinc-800 text-zinc-400 bg-zinc-950/80 hover:border-zinc-500 hover:text-zinc-200'
          }`}
          title="Toggle System Blueprint Layout Guidelines"
        >
          <span className="flex items-center gap-2">
            <span className={`w-1.5 h-1.5 inline-block ${blueprintMode ? 'bg-accent animate-pulse' : 'bg-zinc-600'}`}></span>
            SYS_GRID: {blueprintMode ? 'ACTIVE' : 'OFF'}
          </span>
        </button>
      </div>
    </>
  )
}

export default App;

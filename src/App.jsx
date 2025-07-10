import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Experince from './pages/Experience'
import Works from './pages/Works'
import Contact from './pages/Contact'
function App() {

  return (
    <>
      <div className="blur-none overscroll-none min-h-screen bg-slate-900 text-white overflow-x-hidden">
        <Home/>
      </div>
    </>
  )
}

export default App

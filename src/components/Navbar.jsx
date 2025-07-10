import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 
import "../style.css";
import { motion } from "framer-motion";

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false); 
      } else {
        setShowNavbar(true); 
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      <nav
        className={`fixed top-0 left-0 w-full h-24 z-50 px-6 sm:px-8 flex items-center justify-between transition-transform duration-500 font-mono ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } bg-slate-900/60 backdrop-blur-sm text-white shadow-md border-b border-slate-950`}
      >
        <div className="h-full flex items-center">
          <img src="./Logo.png" alt="Logo" className="h-12 w-auto" />
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <a href="#about" className="hover:text-emerald-400 transition">
            <span className="text-emerald-400">01.</span> About
          </a>
          <a href="#experience" className="hover:text-emerald-400 transition">
            <span className="text-emerald-400">02.</span> Experience
          </a>
          <a href="#work" className="hover:text-emerald-400 transition">
            <span className="text-emerald-400">03.</span> Work
          </a>
          <a href="#contact" className="hover:text-emerald-400 transition">
            <span className="text-emerald-400">04.</span> Contact
          </a>
          <button
            className="ml-4 px-5 py-2 border-2 border-emerald-600 rounded hover:bg-emerald-600 transition"
            onClick={() => window.open("./Resume.webp", "_blank")}
          >
            Resume
          </button>
        </div>
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <X size={28} className="text-teal-400" />
          ) : (
            <Menu size={28} className="text-teal-400" />
          )}

        </button>
      </nav>
      {menuOpen && (
  <div className="lg:hidden fixed top-24 right-0 w-1/2 h-[60vh] bg-slate-900/90 backdrop-blur-md text-white flex flex-col items-start gap-6 px-6 py-6 z-40 shadow-lg rounded-bl-lg">
    <a
      href="#about"
      onClick={() => setMenuOpen(false)}
      className="hover:text-teal-400 transition"
    >
      <span className="text-teal-400">01.</span> About
    </a>
    <a
      href="#experience"
      onClick={() => setMenuOpen(false)}
      className="hover:text-teal-400 transition"
    >
      <span className="text-teal-400">02.</span> Experience
    </a>
    <a
      href="#work"
      onClick={() => setMenuOpen(false)}
      className="hover:text-teal-400 transition"
    >
      <span className="text-teal-400">03.</span> Work
    </a>
    <a
      href="#contact"
      onClick={() => setMenuOpen(false)}
      className="hover:text-teal-400 transition"
    >
      <span className="text-teal-400">04.</span> Contact
    </a>
    <button
      className="mt-2 px-5 py-2 border-2 border-teal-400 rounded hover:bg-teal-600 transition "
      onClick={() => {
        setMenuOpen(false);
        window.open("./Resume.pdf", "_blank");
      }}
    >
      Resume
    </button>
  </div>
)}
</motion.div>
    </>
  );
}

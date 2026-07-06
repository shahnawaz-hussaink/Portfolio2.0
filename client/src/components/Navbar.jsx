import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import "../style.css";
import { motion } from "framer-motion";

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollYRef = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollYRef.current;

      if (Math.abs(delta) > 6) {
        if (delta > 0 && currentScrollY > 100) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
        lastScrollYRef.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        <nav
          className={`fixed top-0 left-0 w-full h-20 z-50 px-6 sm:px-12 flex items-center justify-between transition-transform duration-300 font-mono ${
            (showNavbar || menuOpen) ? "translate-y-0" : "-translate-y-full"
          } bg-[#09090b]/90 backdrop-blur-md text-zinc-100 border-b border-zinc-800`}
        >
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-accent flex items-center justify-center font-bold text-accent font-display text-sm tracking-tight">
              S
            </div>
            <span className="text-xs uppercase tracking-widest  sm:inline-block font-mono text-zinc-400">
              BACKEND DEVELOPER
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#about" className="group text-xs text-zinc-400 hover:text-accent transition-colors py-2 relative">
              <span className="text-accent/60 mr-1 text-[10px]">01_</span>
              <span className="relative">
                ABOUT
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full"></span>
              </span>
            </a>
            <a href="#experience" className="group text-xs text-zinc-400 hover:text-accent transition-colors py-2 relative">
              <span className="text-accent/60 mr-1 text-[10px]">02_</span>
              <span className="relative">
                EXPERIENCE
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full"></span>
              </span>
            </a>
            <a href="#work" className="group text-xs text-zinc-400 hover:text-accent transition-colors py-2 relative">
              <span className="text-accent/60 mr-1 text-[10px]">03_</span>
              <span className="relative">
                PROJECTS
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full"></span>
              </span>
            </a>
            <a href="#contact" className="group text-xs text-zinc-400 hover:text-accent transition-colors py-2 relative">
              <span className="text-accent/60 mr-1 text-[10px]">04_</span>
              <span className="relative">
                CONNECT
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full"></span>
              </span>
            </a>
            <button
              className="ml-4 px-4 py-1.5 border border-accent/40 hover:border-accent text-accent bg-transparent text-xs tracking-wider uppercase transition-all duration-200 hover:bg-accent/5"
              onClick={() => window.open("./Resume.pdf", "_blank")}
            >
              [ RESUME ]
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="lg:hidden text-zinc-400 hover:text-accent p-2 -mr-2 transition-colors cursor-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X size={24} className="text-accent" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </nav>

        {/* Backdrop Dismiss Overlay */}
        {menuOpen && (
          <div
            className="lg:hidden fixed inset-0 top-20 bg-black/60 z-30 transition-opacity duration-300"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Mobile Sidebar overlay */}
        {menuOpen && (
          <div className="lg:hidden fixed top-20 right-0 w-full sm:w-80 h-[calc(100vh-80px)] bg-[#09090b]/95 backdrop-blur-lg border-l border-zinc-800 text-zinc-100 flex flex-col justify-between p-8 z-40 shadow-2xl">
            <div className="flex flex-col gap-6 font-mono">
              <span className="text-[10px] text-zinc-500 tracking-widest border-b border-zinc-800 pb-2 uppercase">
                Diagnostic Index
              </span>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-wider hover:text-accent py-2 border-b border-zinc-900"
              >
                <span className="text-accent text-xs mr-2">01 //</span> ABOUT
              </a>
              <a
                href="#experience"
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-wider hover:text-accent py-2 border-b border-zinc-900"
              >
                <span className="text-accent text-xs mr-2">02 //</span> EXPERIENCE
              </a>
              <a
                href="#work"
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-wider hover:text-accent py-2 border-b border-zinc-900"
              >
                <span className="text-accent text-xs mr-2">03 //</span> PROJECTS
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-wider hover:text-accent py-2 border-b border-zinc-900"
              >
                <span className="text-accent text-xs mr-2">04 //</span> CONNECT
              </a>
            </div>
            
            <div>
              <button
                className="w-full my-16 py-3 border border-accent text-accent bg-transparent tracking-widest text-xs uppercase hover:bg-accent/10 transition-colors"
                onClick={() => {
                  setMenuOpen(false);
                  window.open("./Resume.pdf", "_blank");
                }}
              >
                Download Resume
              </button>
              <div className="mt-4 text-[9px] text-zinc-600 text-center font-mono">
                SYS_VER_2.0.4 // ARSD_CS
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}

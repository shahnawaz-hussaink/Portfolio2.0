import React, { useState } from "react";
import experiences from "../data/experiences";
import { motion, AnimatePresence } from "framer-motion";

export default function Work() {
  const [activeId, setActiveId] = useState(experiences[0]?.id || null);

  const activeExperience = experiences.find((exp) => exp.id === activeId) || experiences[0];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      id="experience"
      className="py-24 border-t border-zinc-800 relative bg-[#09090b]"
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32">
        
        {/* Editorial Section Header */}
        <div className="mb-16 font-mono">
          <div className="text-xs text-accent tracking-[0.2em] uppercase mb-2">// 02_PROCESS_LOGS</div>
          <h2 className="font-display font-extrabold text-2xl sm:text-5xl lg:text-6xl tracking-tight text-zinc-100 uppercase">
            Experience
          </h2>
          <div className="w-20 h-[2px] bg-accent mt-4"></div>
        </div>

        {/* Tabs and Content Box wrapper */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 min-h-[320px]">
          
          {/* Mobile Horizontal Tabs Selector */}
          <div className="flex md:hidden overflow-x-auto whitespace-nowrap scrollbar-none gap-4 border-b border-zinc-900 pb-3 mb-6 w-full select-none">
            {experiences.map((exp) => {
              const isActive = exp.id === activeId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveId(exp.id)}
                  className={`relative py-2 px-3 font-mono text-xs tracking-wider uppercase border-none bg-transparent cursor-none shrink-0 transition-colors duration-200 ${
                    isActive ? "text-accent font-bold" : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  <span>{exp.company.split(" ")[0]}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderlineMobile"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop Vertical Sidebar Tabs */}
          <div className="hidden md:flex flex-col gap-2 md:w-3/12 border-l border-zinc-900/60 pr-4 select-none relative">
            {experiences.map((exp) => {
              const isActive = exp.id === activeId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveId(exp.id)}
                  className={`relative w-full text-left py-3.5 px-5 font-mono text-xs tracking-wider uppercase border-none bg-transparent transition-all duration-300 cursor-none flex items-center justify-between ${
                    isActive ? "text-accent font-bold bg-zinc-900/10" : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  <span>{exp.company.split(",")[0]}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicatorDesktop"
                      className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Details Content Card */}
          <div className="w-full md:w-9/12 min-h-[250px] bg-zinc-950/20 border border-zinc-900/50 p-6 md:p-8 rounded-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4 font-mono"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-100 uppercase tracking-tight flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                    <span>{activeExperience.title}</span>
                    <span className="text-accent text-xs sm:text-sm font-semibold">
                      @ {activeExperience.company}
                    </span>
                  </h3>
                  
                  <div className="text-[10px] sm:text-xs text-zinc-500 mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5 items-center">
                    <span>DATE_STAMP: {activeExperience.date}</span>
                    <span className="hidden sm:inline text-zinc-800">•</span>
                    <span className="px-1.5 py-0.5 border border-zinc-900 text-zinc-500 bg-zinc-950 text-[9px] uppercase tracking-wider font-semibold">
                      {activeExperience.type}
                    </span>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-zinc-900/80 my-1"></div>

                <ul className="space-y-4 mt-2">
                  {activeExperience.description.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: index * 0.05 }}
                      className="flex items-start gap-3.5 text-xs text-zinc-400 leading-relaxed"
                    >
                      <span className="text-accent mt-1 shrink-0 select-none text-[10px]">
                        →
                      </span>
                      <p className="flex-grow">{point}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
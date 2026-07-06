import React, { useState } from "react";
import experiences from "../data/experiences";
import { motion } from "framer-motion";

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

        {/* Terminal log panel */}
        <div className="border border-zinc-800 bg-zinc-950 font-mono text-xs flex flex-col md:flex-row min-h-[420px] rounded-sm overflow-hidden">
          
          {/* Left panel: Log feeds */}
          <div className="w-full md:w-5/12 border-b md:border-b-0 md:border-r border-zinc-800 p-4 flex flex-col gap-2 bg-zinc-950/60 overflow-y-auto">
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest pb-3 mb-2 border-b border-zinc-900 flex justify-between items-center">
              <span>SYSTEM_STD_OUT (Select log)</span>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            </div>

            {experiences.map((exp) => {
              const isActive = exp.id === activeId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveId(exp.id)}
                  className={`w-full text-left p-3 border transition-technical flex flex-col gap-1.5 cursor-none ${
                    isActive
                      ? "border-accent bg-accent/5 text-accent shadow-sm"
                      : "border-zinc-900 bg-zinc-900/30 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2">
                      <span className={`text-[9px] px-1.5 py-0.5 border ${
                        isActive ? "border-accent text-accent bg-accent/10" : "border-zinc-800 text-zinc-500"
                      }`}>
                        {exp.type}_LOG
                      </span>
                      <span className="text-[9px] text-zinc-500 font-mono">
                        {exp.date.replace(" ", "_").toUpperCase()}
                      </span>
                    </div>
                    <span className="text-[9px] text-zinc-600 font-mono">PID_{29384 + exp.id}</span>
                  </div>
                  <div className="font-semibold text-xs truncate">
                    {exp.title} @ {exp.company.split(",")[0]}
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono flex items-center gap-1">
                    <span>$ cat log_stdout.sh</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right panel: Active log output details */}
          <div className="w-full md:w-7/12 p-6 flex flex-col justify-between gap-6 bg-zinc-950/90 relative">
            {activeExperience ? (
              <>
                {/* Header diagnostic readouts */}
                <div>
                  <div className="text-[9px] text-zinc-600 uppercase tracking-wider mb-2 border-b border-zinc-900 pb-2">
                    PROCESS STATUS: COMPLETED_OK // THREAD_DETAILED
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-4">
                    <h3 className="text-lg font-bold text-zinc-100">
                      {activeExperience.title}
                    </h3>
                    <span className="text-accent text-sm">
                      @ {activeExperience.company}
                    </span>
                  </div>

                  <div className="text-zinc-500 text-[10px] mb-4 flex items-center gap-4">
                    <span>DATE_STAMP: {activeExperience.date}</span>
                    <span>•</span>
                    <span>LOG_LEVEL: INFO</span>
                  </div>

                  {/* Bullet statements styled as command prints */}
                  <div className="space-y-3 mt-6">
                    {activeExperience.description.map((point, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-accent text-xs mt-0.5 select-none">[ok]</span>
                        <p className="text-zinc-300 text-xs leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>


              </>
            ) : (
              <div className="flex items-center justify-center h-full text-zinc-600">
                // SELECT A LOG FEED TO PRINT OUTPUT
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    setCoords({ x, y });
  };

  const skillsLeft = ["Node.js & React", "Next.js & Angular", "Go (Golang)", "PostgreSQL & MongoDB"];
  const skillsRight = ["Redis & BullMQ", "JWT & Auth flows", "Docker & Git / GitHub", "Data Structures (DSA)"];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      id="about"
      className="py-24 border-t border-zinc-800 relative"
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32">
        {/* Editorial Section Header */}
        <div className="mb-16 font-mono">
          <div className="text-xs text-accent tracking-[0.2em] uppercase mb-2">// 01_PROFILE_INFO</div>
          <h2 className="font-display font-extrabold text-2xl sm:text-5xl lg:text-6xl tracking-tight text-zinc-100 uppercase">
            About Me
          </h2>
          <div className="w-20 h-[2px] bg-accent mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Content Column */}
          <div className="lg:col-span-7 font-mono text-sm leading-relaxed text-zinc-400">
            <p className="mb-6">
              Hello! I'm <a href="https://github.com/shahnawaz-hussaink" className="text-accent"> Shahnawaz</a>, a CS undergrad at ARSD College, University of Delhi, specializing in backend engineering and database systems. 
              I love designing clean server architectures and database schemas that perform under concurrent load.
            </p>
            <p className="mb-6">
              I've built real-time platforms (like a live competitive coding engine for 35+ users) and transactional databases using row-level locking. 
              I expand my stack across environments, writing services in Go (Golang) and developing modular client applications with React/Next.js and Angular.
            </p>
            <p className="mb-6">
              Currently, I'm a Developer at the Cyber Physical Systems (CyPsi) Lab, building real-time backend architectures and high-frequency data ingestion APIs for telemetry networks. 
              Alongside this, I'm refining my skills in Redis caching, BullMQ, and system design, while seeking backend engineering opportunities to solve complex scaling bottlenecks.
            </p>

            <div className="mt-8">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-4">
                // SYSTEM_DEPENDENCIES_LOADED
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  {skillsLeft.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs hover:text-accent transition-colors duration-200">
                      <span className="text-accent/60">→</span>
                      <span>[ {skill} ]</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  {skillsRight.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs hover:text-accent transition-colors duration-200">
                      <span className="text-accent/60">→</span>
                      <span>[ {skill} ]</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Photo Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-72 h-72 border border-zinc-800 bg-zinc-950 p-3 group cursor-none select-none transition-all duration-300 hover:border-accent/40"
            >
              {/* Photo Bounding Wireframe Corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-zinc-700 group-hover:border-accent"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-zinc-700 group-hover:border-accent"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-zinc-700 group-hover:border-accent"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-zinc-700 group-hover:border-accent"></div>

              {/* Photo Image container */}
              <div className="w-full h-full relative overflow-hidden bg-zinc-900 border border-zinc-800">
                {/* Monochrome overlay which reveals on hover */}
                <div className="absolute inset-0 bg-accent/15 mix-blend-color opacity-0 lg:opacity-100 lg:group-hover:opacity-0 transition-opacity duration-300 z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[#09090b]/20 opacity-0 lg:opacity-100 lg:group-hover:opacity-0 transition-opacity duration-300 z-10 pointer-events-none"></div>
                
                <img
                  src="/Profile.webp"
                  alt="Shahnawaz Hussain Profile"
                  className="w-full h-full object-cover lg:grayscale lg:group-hover:grayscale-0 transition-all duration-500 scale-102 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to avatar style if profile webp fails
                    e.target.style.display = "none";
                  }}
                />
              </div>

              {/* Live Technical Cursor Coordinates Tooltip */}
              {isHovered && (
                <div className="absolute -bottom-6 left-0 right-0 text-center font-mono text-[9px] text-accent tracking-widest uppercase">
                  SYS_CAM_TRACK // X: {coords.x}px Y: {coords.y}px
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

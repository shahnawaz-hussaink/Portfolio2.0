import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import projects from "../data/Project";

export default function Work() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      id="work"
      className="py-24 border-t border-zinc-800 relative bg-[#09090b]"
    >
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32">
        {/* Section Header */}
        <div className="mb-16 font-mono max-w-screen-xl mx-auto">
          <div className="text-xs text-accent tracking-[0.2em] uppercase mb-2">
            // 03_BLUEPRINT_DRAFTS
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-5xl lg:text-6xl tracking-tight text-zinc-100 uppercase">
            Featured Projects
          </h2>
          <div className="w-20 h-[2px] bg-accent mt-4"></div>
        </div>

        {/* Project Blueprint Rows */}
        <div className="border-t border-zinc-900 mt-12 max-w-screen-xl mx-auto">
          {displayedProjects.map((project, index) => {
            return (
              <div
                key={index}
                className="border-b border-zinc-900 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start group"
              >
                {/* 1. Large Technical Stat Callout (Left Column) */}
                <div className="lg:col-span-3 font-mono">
                  <span className="text-[10px] text-accent block mb-2 uppercase">
                    // ENGINE_STATUS_0{index + 1}
                  </span>
                </div>

                {/* 2. Main Description (Center Column) */}
                <div className="lg:col-span-5 font-mono">
                  <h3 className="text-lg font-bold text-zinc-100 uppercase group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Technology Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] text-zinc-500 bg-zinc-950 px-2 py-0.5 border border-zinc-900 rounded-sm hover:border-zinc-700 hover:text-zinc-300 transition-colors"
                      >
                        [ {tech.trim()} ]
                      </span>
                    ))}
                  </div>

                  {/* Source Links */}
                  <div className="mt-6 flex gap-4">
                    {project.isPrivate ? (
                      <>
                        <button
                          disabled
                          className="text-[10px] sm:text-xs font-semibold text-zinc-500 border border-zinc-800/80 px-4 py-2 bg-zinc-950/20 tracking-wider uppercase flex items-center gap-2 rounded-sm select-none opacity-50 cursor-not-allowed"
                        >
                          <Github size={13} />
                          <span>PRIVATE CODE</span>
                        </button>
                        <button
                          disabled
                          className="text-[10px] sm:text-xs font-semibold text-zinc-500 border border-zinc-800/80 px-4 py-2 bg-zinc-950/20 tracking-wider uppercase flex items-center gap-2 rounded-sm select-none opacity-50 cursor-not-allowed"
                        >
                          <ExternalLink size={13} />
                          <span>PRIVATE DEPLOY</span>
                        </button>
                      </>
                    ) : (
                      <>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-accent border border-accent/30 hover:border-accent hover:bg-accent hover:text-neutral-bg px-4 py-2 bg-zinc-950/60 tracking-wider uppercase transition-all duration-300 flex items-center gap-2 rounded-sm cursor-none"
                        >
                          <Github size={13} />
                          <span>CODE</span>
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-accent border border-accent/30 hover:border-accent hover:bg-accent hover:text-neutral-bg px-4 py-2 bg-zinc-950/60 tracking-wider uppercase transition-all duration-300 flex items-center gap-2 rounded-sm cursor-none"
                        >
                          <ExternalLink size={13} />
                          <span>DEPLOY</span>
                        </a>
                      </>
                    )}
                  </div>
                </div>

                {/* 3. Media Preview Box (Right Column) */}
                <div className="lg:col-span-4 flex justify-end items-center">
                  <div className="w-full aspect-video border border-zinc-800 bg-zinc-950 p-2 relative overflow-hidden group/image rounded-sm cursor-none">
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-700"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-700"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-700"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-700"></div>

                    {project.isPrivate ? (
                      <div className="block w-full h-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-accent/5 mix-blend-color opacity-0 lg:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-cover lg:grayscale opacity-100 lg:opacity-70 group-hover/image:scale-105 transition-all duration-500"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      </div>
                    ) : (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full relative overflow-hidden cursor-none"
                      >
                        <div className="absolute inset-0 bg-accent/5 mix-blend-color opacity-0 lg:opacity-100 lg:group-hover/image:opacity-0 transition-opacity duration-300 z-10 pointer-events-none"></div>
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-cover lg:grayscale opacity-100 lg:opacity-70 lg:group-hover/image:grayscale-0 lg:group-hover/image:opacity-100 group-hover/image:scale-105 transition-all duration-500"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View toggles */}
        {projects.length > 4 && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => {
                if (showAll) {
                  const section = document.getElementById("work");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }
                setShowAll(!showAll);
              }}
              className="px-6 py-2.5 text-xs font-semibold text-accent border border-accent/40 bg-zinc-950 hover:border-accent hover:bg-accent/5 tracking-widest uppercase transition-all duration-200 cursor-none"
            >
              {showAll ? "[ COLLAPSE_LIST ]" : "[ EXPAND_ALL_ARCHIVE ]"}
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
}

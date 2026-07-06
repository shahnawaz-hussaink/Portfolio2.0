import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import projects from "../data/Project";

const projectStats = {
  "IRCTC-Style Railway Booking Backend": { stat1: "ROW_LEVEL_LOCKS", stat2: "ACID_TRANSACTIONS" },
  "Debug Arena – Live Competitive Coding Platform": { stat1: "35+_COLLEGE_SCALE", stat2: "MONACO_COMPILER" },
  "VideoTube – Mini YouTube Backend": { stat1: "AGGREGATION_PIPE", stat2: "JWT_TOKEN_ROTATION" },
  "URL Shortener – Scalable Link Management Backend": { stat1: "NANOID_COLLISIONS", stat2: "IP_ANALYTICS" },
  "pyFit – Fitness & Ranking Platform": { stat1: "LEAFLET_MAPS", stat2: "SUPABASE_DB" },
  "STUDx – Campus Exchange Hub": { stat1: "JWT_AUTH_MERN", stat2: "MONGODB_CLOUD" },
  "Portfolio Website 2.0": { stat1: "TAILWIND_V4", stat2: "CUSTOM_HUD_SYS" },
  "Personal Portfolio": { stat1: "VANILLA_JS", stat2: "RESPONSIVE_GRID" },
  "Netflix.com Clone": { stat1: "VISUAL_FAITH", stat2: "CSS_FLEXBOX" },
  "Random Dog Image Generator": { stat1: "DOG_CEO_API", stat2: "ASYNC_PROMISES" },
  "E-Commerce App Homepage": { stat1: "SHOP_ON_UX", stat2: "PRODUCT_QUERY" },
  "Simon Says – Color Memory Game": { stat1: "AUDIO_FEEDBACK", stat2: "DOM_TRANSITIONS" }
};

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
          <div className="text-xs text-accent tracking-[0.2em] uppercase mb-2">// 03_BLUEPRINT_DRAFTS</div>
          <h2 className="font-display font-extrabold text-2xl sm:text-5xl lg:text-6xl tracking-tight text-zinc-100 uppercase">
            Featured Projects
          </h2>
          <div className="w-20 h-[2px] bg-accent mt-4"></div>
        </div>

        {/* Project Blueprint Rows */}
        <div className="border-t border-zinc-900 mt-12 max-w-screen-xl mx-auto">
          {displayedProjects.map((project, index) => {
            const stats = projectStats[project.title] || { stat1: "BUILD_OK", stat2: "NODE_STABLE" };
            return (
              <div
                key={index}
                className="border-b border-zinc-900 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start group"
              >
                {/* 1. Large Technical Stat Callout (Left Column) */}
                <div className="lg:col-span-3 font-mono">
                  <span className="text-[10px] text-zinc-600 block mb-2 uppercase">
                    // ENGINE_STATUS_0{index + 1}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <div className="text-xs text-accent bg-accent/5 border border-accent/15 px-2.5 py-1 w-fit rounded-sm font-semibold tracking-wider">
                      [{stats.stat1}]
                    </div>
                    <div className="text-xs text-zinc-400 bg-zinc-900/40 border border-zinc-800 px-2.5 py-1 w-fit rounded-sm font-semibold tracking-wider">
                      [{stats.stat2}]
                    </div>
                  </div>
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
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-400 hover:text-accent transition-colors flex items-center gap-1.5 border border-zinc-800 hover:border-accent px-3 py-1 bg-zinc-950 cursor-none"
                    >
                      <Github size={12} />
                      <span>[ CODE ]</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-400 hover:text-accent transition-colors flex items-center gap-1.5 border border-zinc-800 hover:border-accent px-3 py-1 bg-zinc-950 cursor-none"
                    >
                      <ExternalLink size={12} />
                      <span>[ DEPLOY ]</span>
                    </a>
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

                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative overflow-hidden cursor-none">
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

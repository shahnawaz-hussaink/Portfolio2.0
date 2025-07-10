import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import projects from "../data/Project";

export default function Work() {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="work px-6 sm:px-10 md:px-20 lg:px-32 max-w-screen-xl mx-auto mt-20 pb-16">
      <div id="work" className=" font-mono mb-6">
        <h1>
          <a
            className="text-white hover:text-emerald-400 transition"
          >
            <span className="text-md lg:text-2xl text-emerald-400">03. </span>
            <span className="Work-heading text-2xl lg:text-3xl">Something I've Built
            </span>
          </a>
        </h1>
      </div>

      {(showAll ? projects : projects.slice(0, 3)).map((project, index) => (
        <div
          key={index}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          <div
            className={`w-full aspect-video rounded-lg overflow-hidden ${
              index % 2 !== 0 ? "lg:order-2" : ""
            }`}
          >
            <a href={project.live} target="_blank">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover lg:opacity-75 rounded-lg hover:opacity-100 transition"
              />
            </a>
          </div>
          <div
            className={`work-content ${index % 2 !== 0 ? "lg:order-1" : ""}`}
          >
            <h1 className="text-teal-400 font-mono text-sm md:text-md lg:text-md">
              Feature Project
            </h1>
            <h2 className=" work-content-heading text-2xl sm:text-2xl font-semibold text-teal-400 mb-4 ">
              {project.title}
            </h2>
            <p className="mb-4 text-sm sm:text-base leading-relaxed">
              {project.desc}
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base space-y-2 mb-4">
              {project.stack.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="text-emerald-400 hover:text-white transition"
              >
                <Github size={26} />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Project"
                className="text-emerald-400 hover:text-white transition"
              >
                <ExternalLink size={26} />
              </a>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => {
            setShowAll(!showAll);
          }}
          className="px-6 py-2 text-sm font-semibold text-emerald-400 border border-emerald-400 rounded hover:bg-emerald-400 hover:text-slate-900 transition font-mono"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}

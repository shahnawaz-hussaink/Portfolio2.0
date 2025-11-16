import React, { useState, useEffect, useRef } from 'react';
import experiences from '../data/experiences';
export default function Work() {
  const [showAll, setShowAll] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 2);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target);
          if (index !== -1 && entry.isIntersecting) {
            setVisibleCards((prev) => 
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [displayedExperiences.length]);

  return (
    <div className="px-6 mx-auto md:px-20 lg:px-50 max-w-screen-xl mt-20">
    
      <div id="experience" className="font-mono mb-12 flex items-center gap-4">
        <h1 className="whitespace-nowrap">
          <a className="text-white hover:text-emerald-400 transition">
            <span className="text-md lg:text-2xl text-emerald-400">02. </span>
            <span className="experience-heading text-2xl lg:text-3xl">Where I've Worked</span>
          </a>
        </h1>
      </div>
      <div className="relative">
        
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-emerald-400/30 hidden lg:block"></div>

        <div className="space-y-16 lg:pl-12">
          {displayedExperiences.map((exp, index) => (
            <div
              key={exp.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`experience relative transition-all duration-700 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="absolute -left-[51px] top-8 hidden lg:block">
                <div className="w-4 h-4 rounded-full bg-emerald-400 border-4 border-slate-900"></div>
              </div>

              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
                index % 2 === 0 ? '' : 'lg:grid-flow-dense'
              }`}>

                <div 
                  className={`w-full rounded-lg overflow-hidden order-2 lg:order-none ${
                    index % 2 === 0 ? '' : 'lg:col-start-2'
                  }`}
                >
                  <img
                    src={exp.image}
                    alt={`${exp.company} Experience`}
                    className="w-full h-auto lg:opacity-75 rounded-lg hover:opacity-100 transition"
                  />
                </div>


                <div className={`experience-info order-1 lg:order-none ${
                  index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'
                }`}>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                    {exp.title} <span className="text-emerald-400">@ {exp.company}</span>
                  </h2>
                  <p className="text-sm text-emerald-600 mb-4">{exp.date}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {experiences.length > 2 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => {
              setShowAll(!showAll);
            }}
            className="px-6 py-2 text-sm font-semibold text-emerald-400 border border-emerald-400 rounded hover:bg-emerald-400 hover:text-slate-900 transition font-mono"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="min-h-screen pt-36 px-6 sm:px-12 md:px-20 lg:px-32 flex flex-col justify-between max-w-screen-2xl mx-auto pb-12 relative overflow-hidden">
      {/* Absolute Background Accent Lines */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-zinc-900 pointer-events-none hidden md:block"></div>

      <div className="flex-grow flex flex-col justify-center">
        {/* Monospace Metadata Tag */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 font-mono text-xs text-accent uppercase tracking-widest mb-6"
        >
          <span className="w-2 h-2 bg-accent animate-pulse"></span>
          <span>SYSTEMS_DEV_INIT // ACTIVE_NODE</span>
        </motion.div>

        {/* Massive Headline Contrast */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-extrabold tracking-tight leading-[0.85] text-zinc-100 uppercase"
          >
            <span className="inline-block whitespace-nowrap text-[7.8vw] bg-accent sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] text-black">
              Shahnawaz
            </span>
            <span className="block whitespace-nowrap text-[7.8vw]  sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]">
              Hussain
              <span className="text-accent font-mono text-xl sm:text-5xl md:text-6xl">
                .
              </span>
            </span>
          </motion.h1>
        </div>

        {/* Technical Sub-heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 font-mono text-zinc-400 text-sm sm:text-lg max-w-2xl border-l border-zinc-800 pl-4 sm:pl-6 leading-relaxed"
        >
          <p>
            I'm a Backend-focused developer and CS undergrad at ARSD College,
            University of Delhi.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

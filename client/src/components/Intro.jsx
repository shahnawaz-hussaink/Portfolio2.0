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
            className="font-display font-extrabold tracking-tight leading-[0.85] text-zinc-100"
          >
            <span className="block whitespace-nowrap text-[7.8vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]">
              Shahnawaz
            </span>
            <span className="block whitespace-nowrap text-[7.8vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]">
              Hussain<span className="text-accent font-mono text-xl sm:text-5xl md:text-6xl">.</span>
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
            I'm a backend-focused developer and CS undergrad at ARSD College, University of Delhi. 
            I build performant systems that handle concurrency constraints and high load — from a railway ticketing database locking engine to multi-participant competitive DSA platforms.
          </p>
        </motion.div>
      </div>

      {/* Terminal Diagnostic Panel Grid (Highlights core engineering metrics in 3 seconds) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 border-t border-b border-zinc-800 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-zinc-500"
      >
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase text-zinc-600 tracking-wider">// FOCUS_AREAS</span>
          <div className="text-zinc-300">
            [01] SYSTEM DESIGN & DATABASES<br />
            [02] CONCURRENT TRANSACTION LOCKING<br />
            [03] API & EVENT QUEUE ARCHITECTURE
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase text-zinc-600 tracking-wider">// KEY_SYSTEMS_SHIPPED</span>
          <div className="text-zinc-300">
            irctc_ticketing_backend (PostgreSQL / ACID)<br />
            debug_arena_platform (Realtime / 35+ Scale)<br />
            videotube_server (Multer / Cloudinary)
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase text-zinc-600 tracking-wider">// TECH_STACK_CORE</span>
          <div className="text-accent uppercase">
            Node.js / Express / TypeScript<br />
            PostgreSQL / Prisma / MongoDB<br />
            Redis / BullMQ / Docker
          </div>
        </div>
      </motion.div>
    </section>
  );
}
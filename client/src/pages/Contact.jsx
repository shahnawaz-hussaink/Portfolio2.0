import Footer from "../components/Footer";
import Social from "../components/Social";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        id="contact"
        className="py-24 border-t border-zinc-800 relative bg-[#09090b]"
      >
        <div className="max-w-4xl mx-auto px-6 text-center font-mono">
          {/* Section Header */}
          <div className="mb-12 font-mono flex flex-col items-center">
            <span className="text-xs text-accent tracking-[0.2em] uppercase mb-2">
              // 04_CONNECT_STREAM
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-5xl lg:text-6xl tracking-tight text-zinc-100 uppercase">
              Get In Touch
            </h2>
            <div className="w-20 h-[2px] bg-accent mt-4"></div>
          </div>

          <div className="text-center pb-8 mt-6">
            <p className="max-w-xl mx-auto text-zinc-400 text-xs sm:text-sm leading-relaxed">
              I'm a developer at CyPSi Lab, University of Delhi, and a CS
              undergrad. If you're working on something that involves real
              backend challenges ,distributed structures, transaction locking,
              caching, or database optimization. I'd genuinely love to hear
              about it.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="mailto:shahnawaz.hussain96508@gmail.com"
              className="cursor-none"
            >
              <button className="px-8 py-3.5 text-xs font-semibold text-accent border border-accent bg-transparent tracking-widest uppercase hover:bg-accent hover:text-neutral-bg transition-all duration-200 cursor-none">
                [ EXECUTE: SAY_HELLO ]
              </button>
            </a>
          </div>
        </div>
      </motion.section>
      <Social />
      <Footer />
    </>
  );
}

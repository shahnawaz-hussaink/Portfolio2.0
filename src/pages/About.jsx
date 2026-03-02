import { motion } from "framer-motion";
export default function About() {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.1 }}
    >
      <div
        id="about"
        className="about grid grid-cols-1 pb-10 lg:grid-cols-2 gap-12 px-6 sm:px-10 md:px-20 lg:px-32 max-w-screen-xl mx-auto mt-30 lg:mt-10"
      >
        <div>
          <div className="font-mono mb-6">
            <h1>
              <a
                className="text-white hover:text-emerald-400 transition"
              >
                <span className="about-num text-md lg:text-2xl text-emerald-400">01. </span>
                <span className="about-heading text-2xl lg:text-3xl">About Me</span>
              </a>
            </h1>
          </div>

          <div className="about-text text-base sm:text-lg leading-relaxed font-normal">
            <p className="mb-4">
              Hello! My name is Shahnawaz, and I love building things that live on
              the web. My interest in web development sparked during college when
              I started exploring how websites work — what began as curiosity soon
              turned into a passion for turning ideas into interactive, real-world
              digital experiences.
            </p>
            <p className="mb-4">
              Over time, I’ve built a variety of projects ranging from a text
              editor to a full-fledged portfolio site, and even experimented with
              backend tools like Node.js and MongoDB. I enjoy working across the
              stack, constantly learning and refining both my frontend and backend
              skills.
            </p>
            <p className="mb-4">
              These days, I’m focused on creating clean, accessible, and
              user-friendly applications while deepening my understanding of
              full-stack development. I’m also actively learning about AI,
              cybersecurity, and building side projects that push me to grow as a
              developer.
            </p>
            <p className="mb-4">Here are a few technologies I’ve been working with recently:</p>

            <div className="flex flex-wrap gap-10 mt-4">
              <ul className="list-disc list-inside space-y-2">
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>Node.js</li>
              </ul>
              <ul className="list-disc list-inside space-y-2">
                <li>Express</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Git & GitHub</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative w-64 h-64 mx-auto mt-10 group cursor-pointer">
  
  {/* Background placeholder box */}
  <div className="absolute top-0 left-0 w-64 h-64 rounded-lg border-2 border-emerald-600 bg-emerald-950/40 transition-all duration-500 ease-in-out group-hover:bg-emerald-600/20" />

  {/* Emerald color overlay on photo — fades out on hover */}
  <div className="absolute top-0 left-0 w-64 h-64 rounded-lg bg-emerald-700/40 sm:z-10 transition-all duration-500 ease-in-out group-hover:opacity-0" />

  {/* Photo */}
  <img
    src="/Profile.webp"
    alt="Shahnawaz Hussain"
    className="absolute top-0 left-0 w-64 h-64 object-cover rounded-lg shadow-lg
               transition-all duration-500 ease-in-out
               group-hover:-translate-x-3 group-hover:-translate-y-3
               group-hover:scale-105 group-hover:shadow-emerald-500/40 group-hover:shadow-2xl"
  />
</div>

      </div>
      </motion.div>
    </>
  );
}

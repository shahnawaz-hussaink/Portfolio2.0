
import { motion } from "framer-motion";

export default function Intro(){
    return (
        <>
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
        >
        <div className="min-h-screen px-5 pt-50 md:px-30 lg:px-50 lg:pt-50">
            <div className="name-intro text-emerald-400 text-sm md:text-md lg:text-xl font-mono">
                <h1>
                    Hi, My name is
                </h1>
            </div>
            <div className="name text-4xl md:text-6xl lg:text-7xl"> 
                <h2>
                    Shahnawaz Hussain.
                </h2>
            </div>       
            <div className="theme-intro text-4xl md:text-6xl lg:text-7xl">
                <h3>
                    I build things for the web.
                </h3>
            </div>
            <div className="para-intro text-md md:text-xl lg:text-xl">
                <p>
                    I’m a software developer passionate about building exceptional digital experiences. I focus on creating accessible, human-centered products and continually work on personal and collaborative projects to sharpen my skills and contribute to meaningful tech solutions.
                </p>
            </div>
        </div>
        </motion.div>
        </>
    );
}
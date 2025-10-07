export default function Work(){
    return (
        <>
            <div
            className="experience grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 mx-auto md:px-20 lg:px-50 max-w-screen-xl mt-20"
            >
                <div className="w-full rounded-lg overflow-hidden">
                    <img
                        src="Acehack.jpg" 
                        alt="Work Experience"
                        className="w-full h-auto lg:opacity-75 rounded-lg hover:opacity-100 transition"
                    />
                </div>

                <div className="experience-info">
                    <div id="experience" className="font-mono mb-6">
                        <h1>
                        <a
                            className="text-white hover:text-emerald-400 transition"
                        >
                            <span className="text-md lg:text-2xl text-emerald-400">02. </span>
                            <span className="experience-heading text-2xl lg:text-3xl">Where I've Worked</span>
                        </a>
                        </h1>
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-12">
                        Participant <span className="text-emerald-400">@ AceHack Hackathon, Jaipur</span>
                    </h2>
                    <p className="text-sm text-emerald-600 mb-2">Mar 2025</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Collaborated with a team of developers to build a web-based Expense tracker platform.</li>
                        <li>Worked on frontend using React and Tailwind CSS, integrating responsive UI and component logic.</li>
                        <li>Learned to work in fast-paced environments and present the project to a judging panel.</li>
                    </ul>
                </div> 
            </div>
        </>
    );
}

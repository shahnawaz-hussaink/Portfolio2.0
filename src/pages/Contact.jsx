import Footer from "../components/Footer";
import Social from "../components/Social";
export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="contact px-6 lg:px-32 mt-30 max-w-4xl mx-auto text-center mb-30"
      >
        <div className="font-mono mb-6">
          <h1>
            <a
              className="text-white hover:text-emerald-400 transition"
            >
              <span className="text-xs lg:text-md text-emerald-400">04.</span>
              <span className="text-xs lg:text-md text-emerald-400">
                &nbsp;Let’s Connect & Build
              </span>
            </a>
          </h1>
        </div>

        <div className="text-center pb-10">
          <span className="block name text-2xl md:text-4xl lg:text-5xl mb-4">
            Reach Out & Code
          </span>
          <p className="max-w-2xl mx-auto contact-content">
            I'm currently exploring exciting new opportunities
            where I can grow, contribute, and collaborate on impactful projects.
            If you think we’d be a great match — whether it's for a role, a
            project, or just a good conversation — feel free to drop a message.
            I’d love to connect!
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <a href="mailto:shahnawaz.hussain96508@gmail.com">
            <button
              className="px-8 py-4 text-md font-semibold text-emerald-400 border border-emerald-400 rounded hover:bg-emerald-400 hover:text-slate-900 transition font-mono"
            >
              Say Hello
            </button>
          </a>
        </div>
      </div>
      <Social/>
      <Footer/>
    </>
  );
}

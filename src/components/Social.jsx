import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
} from "lucide-react";

export default function Social() {
  return (
    <>
      <div className="hidden lg:flex fixed left-6 bottom-0 translate-y-0 z-50 flex-col items-center gap-4">
        <a
          href="https://github.com/shahnawaz-hussaink"
          target="_blank"
          className="text-slate-600 hover:text-teal-600"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/shahnawaz-hussain-00b7b8226/"
          target="_blank"
          className="text-slate-600 hover:text-teal-600"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://x.com/k_shahnawazhuss"
          target="_blank"
          className="text-slate-600 hover:text-teal-600"
        >
          <Twitter size={24} />
        </a>
        <a
          href="https://www.instagram.com/shahnawaz.hussaink"
          target="_blank"
          className="text-slate-600 hover:text-teal-600"
        >
          <Instagram size={24} />
        </a>
        <a
          href="#"
          target="_blank"
          className="text-slate-600 hover:text-teal-600"
        >
          <ExternalLink size={24} />
        </a>

        <div className="w-[2px] h-40 mt-2 bg-slate-600"></div>
      </div>

        {/* its for mobile / cmall screen */}
      <div className="lg:hidden flex  gap-5 lg:gap-10 px-6 lg:px-32 mt-30 w-fit mx-auto text-center mb-10 lg:mb-30">
        <a
          href="https://github.com/shahnawaz-hussaink"
          target="_blank"
          className="text-slate-600 hover:text-teal-600"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/shahnawaz-hussain-00b7b8226/"
          target="_blank"
          className="text-slate-600 hover:text-teal-600"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://x.com/k_shahnawazhuss"
          target="_blank"
          className="text-slate-600 hover:text-teal-600"
        >
          <Twitter size={24} />
        </a>
        <a
          href="https://www.instagram.com/shahnawaz.hussaink"
          target="_blank"
          className="text-slate-600 hover:text-teal-600"
        >
          <Instagram size={24} />
        </a>
        <a
          href="#"
          target="_blank"
          className="text-slate-600 hover:text-teal-600"
        >
          <ExternalLink size={24} />
        </a>
      </div>
    </>
  );
}

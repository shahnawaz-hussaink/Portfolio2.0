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
      <div className="hidden lg:flex fixed left-6 bottom-0 translate-y-0 z-40 flex-col items-center gap-5">
        <a
          href="https://github.com/shahnawaz-hussaink"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-accent transition-colors duration-200"
          title="GitHub Profile"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/shahnawaz-hussain-00b7b8226/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-accent transition-colors duration-200"
          title="LinkedIn Profile"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="https://x.com/k_shahnawazhuss"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-accent transition-colors duration-200"
          title="Twitter Profile"
        >
          <Twitter size={18} />
        </a>
        <a
          href="https://www.instagram.com/shahnawaz.hussaink"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-accent transition-colors duration-200"
          title="Instagram Profile"
        >
          <Instagram size={18} />
        </a>

        <div className="w-[1px] h-32 bg-zinc-800"></div>
      </div>

      {/* For mobile / small screens */}
      <div className="lg:hidden flex gap-6 px-6 mt-16 w-fit mx-auto text-center mb-8">
        <a
          href="https://github.com/shahnawaz-hussaink"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-accent transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/shahnawaz-hussain-00b7b8226/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-accent transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://x.com/k_shahnawazhuss"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-accent transition-colors"
        >
          <Twitter size={20} />
        </a>
        <a
          href="https://www.instagram.com/shahnawaz.hussaink"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-accent transition-colors"
        >
          <Instagram size={20} />
        </a>
      </div>
    </>
  );
}

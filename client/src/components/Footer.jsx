import { Heart } from "lucide-react";
import { useState } from "react";
import { trackHeartbeat } from "../utils/tracker";

export default function Footer() {
  const [liked, setLiked] = useState(false);

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/40 py-10 w-full relative">
      <div className="max-w-screen-xl mx-auto px-6 text-center font-mono text-[10px] text-zinc-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Left: System Status */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping"></span>
          <span>SYS_OK // ALL_TASKS_COMPLETED_SUCCESSFULLY</span>
        </div>

        {/* Center: Author Credit */}
        <div>
          <span>BUILT_WITH_CODE_BY </span>
          <a
            href="https://github.com/shahnawaz-hussaink"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-accent border-b border-zinc-800 hover:border-accent transition-all pb-0.5 cursor-none"
          >
            @SHAHNAWAZ-HUSSAIN
          </a>
        </div>

        {/* Right: Heart interaction */}
        <div className="flex items-center gap-1">
          <span>PING_LATEST:</span>
          <button
            onClick={() => {
              if (!liked) trackHeartbeat();
              setLiked(!liked);
            }}
            className="p-1 transition-all duration-200 cursor-none flex items-center justify-center"
            title={liked ? "System loved!" : "Send a heartbeat"}
          >
            <Heart
              size={12}
              className={`transform transition-all duration-300 cursor-none ${
                liked 
                  ? "fill-accent text-accent scale-120 animate-pulse" 
                  : "text-zinc-600 hover:text-accent"
              }`}
            />
          </button>
        </div>
      </div>
    </footer>
  );
}

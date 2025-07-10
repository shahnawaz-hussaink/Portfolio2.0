import { Heart } from "lucide-react";
import { useState } from "react";
export default function Footer() {
    const [liked, setLiked] = useState(false);
  return (
    <>
      <div
        id="contact"
        className="contact px-6 lg:px-32 max-w-4xl mx-auto text-center mb-5"
      >
        <p className="font-mono text-sm lg:text-md footer-content">
            Brewed with code by <a href="./Profile.jpg" target="_blank" className="text-emerald-500">@Shahnawaz-Hussain</a>
        </p>
        <button
            onClick={() => setLiked(!liked)}
            className="p-2 transition-all duration-200"
            >
            <Heart
                className={`w-7 h-10 transform transition-all duration-300 ${
                    liked ? "fill-emerald-500 text-emerald-500 scale-110" : "text-gray-400 scale-100"
                    }`}
            />
        </button>
      </div>
    </>
  );
}

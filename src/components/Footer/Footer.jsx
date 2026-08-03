import React from "react";
import { FiArrowUp } from "react-icons/fi";
import Magnetic from "../Hero/Magnetic";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="py-12 border-t border-white/5 bg-black/20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-end gap-6">
        

        {/* Dynamic Back to top button */}
        <div className="flex items-center space-x-1.5 text-xs text-zinc-500 font-mono">
          <span>BACK TO TOP</span>
          <Magnetic>
            <button
              onClick={handleScrollToTop}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/15 cursor-pointer transition-colors"
            >
              <FiArrowUp />
            </button>
          </Magnetic>
        </div>

      </div>
    </footer>
  );
}

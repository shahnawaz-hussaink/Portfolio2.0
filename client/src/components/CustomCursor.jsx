import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports a mouse/pointer
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    setIsVisible(true);

    const onMouseMove = (e) => {
      if (cursorRef.current && cursorDotRef.current) {
        cursorRef.current.style.opacity = "1";
        cursorDotRef.current.style.opacity = "1";
        cursorRef.current.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
        cursorDotRef.current.style.transform = `translate3d(${e.clientX - 2}px, ${e.clientY - 2}px, 0)`;
      }
    };

    const handleMouseOver = (e) => {
      // Find elements with specific data-cursor attributes
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setCursorText(target.getAttribute("data-cursor") || "");
        setIsHovered(true);
        return;
      }

      // Check standard interactive elements
      const interactive = e.target.closest("a, button, select, input, textarea, [role='button']");
      if (interactive) {
        setCursorText("SELECT");
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current && cursorDotRef.current) {
        cursorRef.current.style.opacity = 0;
        cursorDotRef.current.style.opacity = 0;
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current && cursorDotRef.current) {
        cursorRef.current.style.opacity = 1;
        cursorDotRef.current.style.opacity = 1;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Center crosshair dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1 h-1 bg-accent rounded-full pointer-events-none z-[9999] transition-opacity duration-300"
        style={{ opacity: 0 }}
      />
      {/* Outer tracking square box */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 border pointer-events-none z-[9999] flex items-center justify-start transition-all duration-75 ease-out"
        style={{
          borderColor: isHovered ? "#dfff00" : "rgba(113, 113, 122, 0.4)",
          transform: "translate3d(-100px, -100px, 0)",
          opacity: 0,
          borderRadius: isHovered ? "0px" : "4px"
        }}
      >
        {isHovered && (
          <div className="absolute left-10 pl-1 py-0.5 pr-2 bg-accent text-neutral-bg font-mono text-[9px] font-bold tracking-widest uppercase border border-accent whitespace-nowrap shadow-md">
            [{cursorText}]
          </div>
        )}
      </div>
    </>
  );
}

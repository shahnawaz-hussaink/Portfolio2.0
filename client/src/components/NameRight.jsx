export default function NameRight() {
  return (
    <>
      {/* Desktop: Right-side vertical name */}
      <div className="hidden lg:flex fixed right-3 bottom-0 z-40 flex-col items-center gap-6">
        <div className="rotate-90 text-[10px] text-zinc-500 hover:text-accent transition-colors tracking-[0.2em] font-mono cursor-default whitespace-nowrap flex items-center gap-2">
          <span>SHAHNAWAZ HUSSAIN</span>
        </div>
        <div className="w-[1px] h-50 bg-zinc-800" />
      </div>
    </>
  );
}

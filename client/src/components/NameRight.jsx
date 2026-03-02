export default function NameRight() {
  return (
    <>
      {/* Desktop: Right-side vertical name */}
      <div className="hidden lg:flex fixed right-0 bottom-0 z-50 flex-col items-center gap-4">
        <p className="rotate-90 text-sm text-slate-400 hover:text-teal-400 transition tracking-widest font-mono">
          Shahnawaz Hussain
        </p>
        <div className="w-[2px] h-40 mt-20 bg-slate-600" />
      </div>
    </>
  );
}

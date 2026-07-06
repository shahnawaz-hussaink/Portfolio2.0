import React, { useState, useEffect, useRef } from "react";
import experiences from "../data/experiences";
import { motion } from "framer-motion";

export default function Work() {
  const [activeId, setActiveId] = useState(experiences[0]?.id || null);
  const [terminalLogs, setTerminalLogs] = useState([]);
  const [cmdInput, setCmdInput] = useState("");
  const [matrixActive, setMatrixActive] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);

  const canvasRef = useRef(null);
  const terminalEndRef = useRef(null);
  
  const activeExperience = experiences.find((exp) => exp.id === activeId) || experiences[0];

  // Helper to map experiences to short file names
  const getLogFileName = (exp) => {
    switch (exp.id) {
      case 1: return "work_cps_lab.log";
      case 2: return "work_iimun.log";
      case 3: return "event_acehack.log";
      case 4: return "event_pitchcraft.log";
      default: return `log_${exp.id}.log`;
    }
  };

  // Stream active experience points as terminal outputs
  useEffect(() => {
    if (!activeId) return;
    const exp = experiences.find(e => e.id === activeId);
    if (!exp) return;

    setIsPrinting(true);
    
    const lines = [
      { type: 'input', text: `cat ${getLogFileName(exp)}` },
      { type: 'system', text: `[INIT] CONNECTING TO PID_${29384 + exp.id}...` },
      { type: 'system', text: `[OK] ENCRYPTED TUNNEL ACQUIRED` },
      { type: 'system', text: `[INFO] STREAMING CONTENT FROM LOG_STDOUT:` },
      ...exp.description.map(point => ({ type: 'point', text: point })),
      { type: 'system', text: `[STATUS] LOG PRINTED FOR ${exp.company.toUpperCase()}` }
    ];

    setTerminalLogs([]);
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setTerminalLogs(prev => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setIsPrinting(false);
      }
    }, 75);

    return () => clearInterval(interval);
  }, [activeId]);

  // Scroll to bottom of console logs when new lines are added
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalLogs]);

  // Matrix digital rain canvas effect
  useEffect(() => {
    if (!matrixActive) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let resizeId;
    const handleResize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const characters = "01ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄ0101ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charArray = characters.split("");
    
    const fontSize = 11;
    const columns = canvas.width / fontSize;
    
    const rainDrops = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = Math.floor(Math.random() * -100); // Stagger drop starts
    }
    
    let animationFrameId;
    const draw = () => {
      ctx.fillStyle = 'rgba(9, 9, 11, 0.08)'; // matches background color
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#dfff00'; // Accent color
      ctx.font = fontSize + 'px monospace';
      
      for (let i = 0; i < rainDrops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        // Draw drops that are within screen coordinates
        if (rainDrops[i] >= 0) {
          ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
        }
        
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [matrixActive]);

  // Handle command line submit
  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const trimmedCmd = cmdInput.trim();
    if (!trimmedCmd) return;

    const parts = trimmedCmd.split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    const newLogs = [...terminalLogs, { type: 'input', text: trimmedCmd }];

    switch (command) {
      case 'help':
        newLogs.push(
          { type: 'system', text: 'SYSTEM SHELL CONSOLE v1.0.4' },
          { type: 'text', text: 'Available commands:' },
          { type: 'text', text: '  ls, dir       - List experience log files' },
          { type: 'text', text: '  cat <file>    - Print contents of an experience log' },
          { type: 'text', text: '  skills        - Display tech stack overview table' },
          { type: 'text', text: '  matrix        - Toggle matrix code rain overlay' },
          { type: 'text', text: '  clear         - Flush console screen history' }
        );
        setTerminalLogs(newLogs);
        break;

      case 'ls':
      case 'dir':
        newLogs.push(
          { type: 'system', text: 'DIRECTORY: /var/log/experiences/' },
          ...experiences.map(exp => ({
            type: 'text',
            text: `  -rw-r--r--   1 visitor  staff   480B  ${getLogFileName(exp)}`
          }))
        );
        setTerminalLogs(newLogs);
        break;

      case 'cat':
        if (args.length === 0) {
          newLogs.push({ type: 'error', text: 'cat: missing file parameter. Usage: cat <filename>' });
          setTerminalLogs(newLogs);
        } else {
          const filename = args[0].toLowerCase();
          const matchedExp = experiences.find(exp => 
            getLogFileName(exp).toLowerCase() === filename || 
            exp.id === parseInt(filename)
          );

          if (matchedExp) {
            newLogs.push({ type: 'system', text: `cat: mounting ${getLogFileName(matchedExp)}...` });
            setTerminalLogs(newLogs);
            setTimeout(() => {
              setActiveId(matchedExp.id);
            }, 250);
          } else {
            newLogs.push({ type: 'error', text: `cat: file not found: '${filename}'. Type 'ls' to list files.` });
            setTerminalLogs(newLogs);
          }
        }
        break;

      case 'clear':
        setTerminalLogs([
          { type: 'system', text: 'CONSOLE FLUSHED. Select an experience log or type a command.' }
        ]);
        break;

      case 'skills':
        newLogs.push(
          { type: 'system', text: 'PULLING TECHNICAL SKILLS REPORT...' },
          { type: 'text', text: '+----------------------+----------------------+' },
          { type: 'text', text: '| BACKEND & SYSTEMS    | FRONTEND & TOOLS     |' },
          { type: 'text', text: '+----------------------+----------------------+' },
          { type: 'text', text: '| Node.js & Express    | React & Tailwind CSS |' },
          { type: 'text', text: '| PostgreSQL & Prisma  | Docker (learning)    |' },
          { type: 'text', text: '| MongoDB & Mongoose   | Git & GitHub         |' },
          { type: 'text', text: '| Redis & BullMQ       | JWT & Auth flows     |' },
          { type: 'text', text: '+----------------------+----------------------+' }
        );
        setTerminalLogs(newLogs);
        break;

      case 'matrix':
        setMatrixActive(!matrixActive);
        newLogs.push({
          type: 'system',
          text: `MATRIX OVERLAY MODULE: ${!matrixActive ? 'ENABLED' : 'DISABLED'}`
        });
        setTerminalLogs(newLogs);
        break;

      default:
        newLogs.push({
          type: 'error',
          text: `sys_sh: command not found: '${command}'. Type 'help' for commands.`
        });
        setTerminalLogs(newLogs);
    }

    setCmdInput("");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      id="experience"
      className="py-24 border-t border-zinc-800 relative bg-[#09090b]"
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32">
        
        {/* Editorial Section Header */}
        <div className="mb-16 font-mono">
          <div className="text-xs text-accent tracking-[0.2em] uppercase mb-2">// 02_PROCESS_LOGS</div>
          <h2 className="font-display font-extrabold text-2xl sm:text-5xl lg:text-6xl tracking-tight text-zinc-100 uppercase">
            Experience
          </h2>
          <div className="w-20 h-[2px] bg-accent mt-4"></div>
        </div>

        {/* Terminal log panel */}
        <div className="border border-zinc-800 bg-zinc-950 font-mono text-xs flex flex-col md:flex-row min-h-[440px] rounded-sm overflow-hidden relative shadow-2xl">
          
          {/* Matrix canvas background overlay (only active when enabled) */}
          {matrixActive && (
            <canvas 
              ref={canvasRef} 
              className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.07] z-0"
            />
          )}

          {/* Left panel: Log feeds */}
          <div className="w-full md:w-5/12 border-b md:border-b-0 md:border-r border-zinc-800 p-4 flex flex-col gap-2 bg-zinc-950/60 overflow-y-auto z-10">
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest pb-3 mb-2 border-b border-zinc-900 flex justify-between items-center">
              <span>SYSTEM_STD_OUT (Select log)</span>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            </div>

            {experiences.map((exp) => {
              const isActive = exp.id === activeId;
              return (
                <button
                  key={exp.id}
                  onClick={() => {
                    if (!isPrinting) setActiveId(exp.id);
                  }}
                  disabled={isPrinting}
                  className={`w-full text-left p-3 border transition-technical flex flex-col gap-1.5 cursor-none disabled:opacity-60 ${
                    isActive
                      ? "border-accent bg-accent/5 text-accent shadow-sm"
                      : "border-zinc-900 bg-zinc-900/30 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                  }`}
                >
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2">
                      <span className={`text-[9px] px-1.5 py-0.5 border ${
                        isActive ? "border-accent text-accent bg-accent/10" : "border-zinc-800 text-zinc-500"
                      }`}>
                        {exp.type}_LOG
                      </span>
                      <span className="text-[9px] text-zinc-500 font-mono">
                        {exp.date.replace(" ", "_").toUpperCase()}
                      </span>
                    </div>
                    <span className="text-[9px] text-zinc-600 font-mono">PID_{29384 + exp.id}</span>
                  </div>
                  <div className="font-semibold text-xs truncate">
                    {exp.title} @ {exp.company.split(",")[0]}
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono flex items-center gap-1">
                    <span>$ cat {getLogFileName(exp)}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right panel: Active log output details */}
          <div className="w-full md:w-7/12 p-6 flex flex-col justify-between min-h-[350px] bg-zinc-950/90 relative z-10">
            
            {/* Header diagnostic readouts */}
            <div className="flex justify-between items-center text-[9px] text-zinc-600 uppercase tracking-wider mb-4 border-b border-zinc-900 pb-2 z-10 shrink-0">
              <span>PROCESS STATUS: {isPrinting ? "STREAMING_LOG" : "ACTIVE_STD_OUT"}</span>
              <span className="flex items-center gap-3">
                <span>MEM_ADDR: 0x7FF{activeExperience.id * 16}A2C</span>
                <span>CPU_LOAD: {isPrinting ? "18.4%" : "0.01%"}</span>
              </span>
            </div>
            
            {/* Active streaming log logs screen */}
            <div className="flex-grow overflow-y-auto pr-2 space-y-2 z-10 font-mono text-[11px] sm:text-xs">
              {terminalLogs.map((log, idx) => (
                <div key={idx} className="leading-relaxed">
                  {log.type === 'input' && (
                    <div className="text-zinc-500 select-none">
                      visitor@portfolio:~$ <span className="text-zinc-100">{log.text}</span>
                    </div>
                  )}
                  {log.type === 'system' && (
                    <div className="text-accent/80 font-semibold select-none">{log.text}</div>
                  )}
                  {log.type === 'point' && (
                    <div className="flex items-start gap-2.5 pl-2 text-zinc-300">
                      <span className="text-accent shrink-0 select-none">[ok]</span>
                      <p className="flex-grow">{log.text}</p>
                    </div>
                  )}
                  {log.type === 'text' && (
                    <div className="text-zinc-400 whitespace-pre leading-relaxed">{log.text}</div>
                  )}
                  {log.type === 'error' && (
                    <div className="text-red-500 font-semibold select-none">{log.text}</div>
                  )}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Simulated CLI Terminal Input Prompt */}
            <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 mt-4 pt-3 border-t border-zinc-900 z-10 shrink-0 select-none">
              <span className="text-zinc-500">visitor@portfolio:~$</span>
              <input
                type="text"
                value={cmdInput}
                onChange={(e) => setCmdInput(e.target.value)}
                className="bg-transparent border-none outline-none text-accent flex-grow font-mono text-xs focus:ring-0 focus:outline-none p-0 cursor-text min-w-0"
                placeholder={isPrinting ? "Streaming log..." : "Type 'help' for commands..."}
                disabled={isPrinting}
              />
              <span className="w-1.5 h-3.5 bg-accent animate-blink shrink-0"></span>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
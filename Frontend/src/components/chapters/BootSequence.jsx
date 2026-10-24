import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LINES = [
  { text: '> Initializing portfolio...', delay: 0 },
  { text: '> Loading developer profile: zeel.dev', delay: 300 },
  { text: '> Mounting React [18.3.1] ✓', delay: 600 },
  { text: '> Connecting to MongoDB Atlas ✓', delay: 900 },
  { text: '> Fetching GitHub data...', delay: 1200 },
  { text: '> Compiling experience & projects...', delay: 1500 },
  { text: '> Running animations ✓', delay: 1800 },
  { text: '', delay: 2000 },
  { text: '> All systems operational.', delay: 2100 },
  { text: '> Welcome. ', delay: 2400 },
];

export default function BootSequence({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [done, setDone] = useState(false);
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    const timers = BOOT_LINES.map((line, i) =>
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line.text]);
        if (i === BOOT_LINES.length - 1) {
          setTimeout(() => { setDone(true); }, 600);
        }
      }, line.delay)
    );

    // Auto-skip after 4s
    const autoSkip = setTimeout(() => { setDone(true); }, 4200);

    return () => { timers.forEach(clearTimeout); clearTimeout(autoSkip); };
  }, []);

  useEffect(() => {
    if (done) {
      setTimeout(onComplete, 600);
    }
  }, [done, onComplete]);

  const handleSkip = () => {
    setSkipped(true);
    setTimeout(onComplete, 300);
  };

  return (
    <AnimatePresence>
      {!skipped && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-void flex items-center justify-center"
          role="status"
          aria-label="Loading portfolio"
        >
          {/* Scanlines effect */}
          <div
            className="absolute inset-0 pointer-events-none opacity-5"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
            }}
          />

          <div className="max-w-xl w-full px-8">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="font-mono text-xs text-slate-600 ml-2">zeel@portfolio ~ bash</span>
            </div>

            {/* Boot text */}
            <div className="space-y-1 min-h-[220px]">
              {visibleLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className={`font-mono text-sm ${
                    line.includes('✓')
                      ? 'text-green-400'
                      : line.includes('🚀') || line.includes('Welcome')
                      ? 'text-neon-indigo'
                      : line === ''
                      ? 'h-4'
                      : 'text-slate-400'
                  }`}
                >
                  {line}
                </motion.div>
              ))}
              {/* Blinking cursor */}
              {!done && (
                <span className="terminal-cursor" />
              )}
            </div>

            {/* Progress bar */}
            <div className="mt-8 h-px bg-white/5 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-indigo to-neon-violet rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: done ? '100%' : '90%' }}
                transition={{ duration: done ? 0.3 : 4, ease: 'easeInOut' }}
              />
            </div>

            {/* Skip button */}
            <AnimatePresence>
              {!done && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 1.5 }}
                  onClick={handleSkip}
                  className="mt-4 font-mono text-xs text-slate-600 hover:text-slate-400 transition-colors flex items-center gap-1"
                  id="boot-skip"
                >
                  press any key to skip →
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

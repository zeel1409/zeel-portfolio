import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { isCompactViewport } from '../../utils/perf';

// Floating code particle
function CodeParticle({ text, style }) {
  return (
    <motion.div
      className="absolute font-mono text-xs text-neon-indigo/20 select-none pointer-events-none"
      style={style}
      animate={{ y: [0, -15, 0], opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
    >
      {text}
    </motion.div>
  );
}

const codeParticles = [
  { text: 'const zeel = new Developer();', style: { top: '15%', left: '5%' } },
  { text: 'npm run build-something-great', style: { top: '25%', right: '3%' } },
  { text: 'git commit -m "shipped! 🚀"', style: { top: '65%', left: '2%' } },
  { text: '{ passion: true, bugs: false }', style: { bottom: '25%', right: '4%' } },
  { text: 'while(alive) { code(); learn(); }', style: { top: '45%', left: '1%' } },
  { text: 'return <BetterTomorrow />;', style: { bottom: '35%', left: '6%' } },
  { text: 'async function makeItWork() {}', style: { top: '75%', right: '2%' } },
  { text: '// TODO: change the world', style: { top: '55%', right: '5%' } },
];

// Interactive orb
function DevOrb() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handle, { passive: true });
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96">
      {/* Outer glow rings */}
      <motion.div
        className="absolute inset-0 rounded-full border border-neon-indigo/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-4 rounded-full border border-neon-violet/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-8 rounded-full border border-neon-cyan/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Orbiting dots */}
      {['⚛️', '🟢', '🍃', '⚡'].map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 flex items-center justify-center text-sm"
          style={{ top: '50%', left: '50%' }}
          animate={{ rotate: 360 + i * 90 }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'linear' }}
        >
          <motion.div
            style={{
              position: 'absolute',
              translateX: `${(120 + i * 15) * Math.cos((i * Math.PI) / 2)}px`,
              translateY: `${(120 + i * 15) * Math.sin((i * Math.PI) / 2)}px`,
            }}
          >
            {emoji}
          </motion.div>
        </motion.div>
      ))}

      {/* Center card */}
      <motion.div
        className="absolute inset-16 rounded-2xl glass-card flex flex-col items-center justify-center gap-2"
        style={{
          rotateX: mousePos.y * -0.5,
          rotateY: mousePos.x * 0.5,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="text-4xl">👨‍💻</div>
        <div className="font-mono text-xs text-neon-indigo/70">full-stack.dev</div>
        <div className="flex gap-1">
          {['react', 'node', 'mongo'].map((t) => (
            <span key={t} className="text-xs font-mono text-slate-500 dark:text-slate-600 bg-indigo-50 dark:bg-white/5 px-1 rounded">
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)' }}
      />
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const compact = isCompactViewport();
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  const [duckActive, setDuckActive] = useState(false);
  const enter = compact ? false : { opacity: 0, y: 20 };

  const handleBraceClick = () => {
    setDuckActive(true);
    setTimeout(() => setDuckActive(false), 3000);
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Hero radial glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      {/* Code particles */}
      <div className="hidden lg:block">
        {codeParticles.map((p, i) => (
          <CodeParticle key={i} text={p.text} style={p.style} />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-16 w-full"
      >
        {/* Left: text */}
        <div className="flex-1 max-w-2xl">
          <motion.div
            initial={enter}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: compact ? 0 : 0.6, delay: compact ? 0 : 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-mono text-neon-indigo/80 mb-6 border border-neon-indigo/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={compact ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: compact ? 0 : 0.7, delay: compact ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6"
          >
            <span className="text-slate-900 dark:text-slate-100">Hi, I'm </span>
            <span className="gradient-text"> Zeel</span>
            <motion.span
              className="inline-block cursor-pointer"
              onClick={handleBraceClick}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              title="Click me 👀"
            >
              {' '}👋
            </motion.span>
          </motion.h1>

          {/* Duck Easter egg */}
          {duckActive && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="absolute text-4xl animate-float pointer-events-none"
              style={{ top: '30%', left: '20%' }}
            >
              🦆
            </motion.div>
          )}

          <motion.div
            initial={enter}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: compact ? 0 : 0.7, delay: compact ? 0 : 0.35 }}
            className="text-2xl md:text-3xl font-display font-semibold text-slate-700 dark:text-slate-300 mb-4"
          >
            {compact ? (
              'I turn ideas into reality.'
            ) : (
              <TypeAnimation
                sequence={[
                  'I build digital experiences.',
                  2000,
                  'I architect robust backends.',
                  2000,
                  'I ship full-stack products.',
                  2000,
                  'I turn ideas into reality.',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            )}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-slate-400 text-lg mb-8 leading-relaxed max-w-xl"
          >
            Full Stack Developer specializing in the{' '}
            <span className="text-neon-cyan font-medium">MERN stack</span>.
            Turning ideas into{' '}
            <span className="text-neon-indigo font-medium">real-world applications</span>{' '}
            — one commit at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-3"
          >
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
              id="view-work-cta"
            >
              View My Work
              <ArrowDown size={14} />
            </button>
            <a
              href="https://github.com/zeel1409"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              id="github-hero-link"
            >
              <FaGithub size={14} />
              GitHub
            </a>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex gap-6 mt-10 pt-8 border-t border-white/5"
          >
            {[
              { value: '10+', label: 'Projects Built' },
              { value: '500+', label: 'Commits' },
              { value: 'MERN', label: 'Stack' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-display font-bold text-xl text-white">{value}</div>
                <div className="text-xs text-slate-500 font-mono">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: interactive orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex flex-1 items-center justify-center"
          aria-hidden="true"
        >
          <DevOrb />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-neon-indigo/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}

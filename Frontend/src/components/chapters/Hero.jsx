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

// Interactive Developer Showcase Card
function HeroVisual() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener('mousemove', handle, { passive: true });
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <div className="relative w-full max-w-md lg:max-w-lg">
      {/* Ambient background glows */}
      <div className="absolute -inset-4 bg-gradient-to-r from-neon-indigo/20 via-neon-cyan/20 to-neon-violet/20 rounded-3xl blur-2xl opacity-50 pointer-events-none" />

      {/* Main interactive window */}
      <motion.div
        className="relative glass-card rounded-2xl border border-white/10 shadow-2xl overflow-hidden p-6"
        style={{
          rotateX: mousePos.y * -0.6,
          rotateY: mousePos.x * 0.6,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>
          <div className="font-mono text-xs text-slate-300 flex items-center gap-1.5">
            <span className="text-neon-indigo font-semibold">zeel.dev</span>
            <span>~</span>
            <span className="text-neon-cyan">mern-stack</span>
          </div>
          <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20 font-medium">
            ONLINE
          </div>
        </div>

        {/* Profile Card Snippet */}
        <div className="flex items-center gap-4 mb-5 p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
          <img
            src="https://avatars.githubusercontent.com/u/167232230?v=4"
            alt="Zeel Kadiya"
            className="w-14 h-14 rounded-full ring-2 ring-neon-indigo/50 object-cover shrink-0"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              if (e.currentTarget.nextElementSibling) {
                e.currentTarget.nextElementSibling.style.display = 'flex';
              }
            }}
          />
          <div className="w-14 h-14 rounded-full bg-neon-indigo/20 ring-2 ring-neon-indigo/50 items-center justify-center text-2xl shrink-0 hidden">
            👨‍💻
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-display font-bold text-white text-base truncate">Zeel Kadiya</h3>
              <span className="text-xs px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono font-medium">Full Stack</span>
            </div>
            <p className="text-xs text-slate-300 font-mono mt-0.5">MERN Stack Developer</p>
            <p className="text-[11px] text-neon-cyan font-mono mt-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
              Building scalable web applications
            </p>
          </div>
        </div>

        {/* Code Block / Live Config */}
        <div className="font-mono text-xs space-y-1.5 p-4 rounded-xl bg-void/90 border border-white/10 text-slate-200 overflow-x-auto leading-relaxed">
          <div className="text-slate-500">// zeel.config.ts</div>
          <div>
            <span className="text-neon-violet font-semibold">const</span> <span className="text-neon-indigo font-semibold">developer</span> = &#123;
          </div>
          <div className="pl-4">
            <span className="text-slate-400">coreStack:</span> [
            <span className="text-emerald-300">'MongoDB'</span>,{' '}
            <span className="text-emerald-300">'Express'</span>,{' '}
            <span className="text-emerald-300">'React'</span>,{' '}
            <span className="text-emerald-300">'Node.js'</span>
            ],
          </div>
          <div className="pl-4">
            <span className="text-slate-400">architecture:</span>{' '}
            <span className="text-amber-300">'REST APIs & Scalable UI'</span>,
          </div>
          <div className="pl-4">
            <span className="text-slate-400">status:</span>{' '}
            <span className="text-neon-cyan">'Ready for Opportunities'</span>,
          </div>
          <div>&#125;;</div>
        </div>

        {/* Floating tech badges row */}
        <div className="flex flex-wrap items-center justify-between gap-2 mt-5 pt-4 border-t border-white/10">
          <span className="text-xs font-mono text-slate-300 font-medium">Core Stack:</span>
          <div className="flex flex-wrap gap-1.5">
            {['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded text-xs font-mono text-slate-200 bg-white/10 border border-white/15"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
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
            className="flex gap-8 mt-10 pt-8 border-t border-white/10"
          >
            {[
              { value: '12', label: 'Public Repos' },
              { value: 'MERN', label: 'Core Stack' },
              { value: '2+', label: 'Major Full-Stack Apps' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-display font-bold text-2xl text-white">{value}</div>
                <div className="text-xs text-slate-300 font-mono mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: interactive developer visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex flex-1 items-center justify-end"
          aria-hidden="true"
        >
          <HeroVisual />
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

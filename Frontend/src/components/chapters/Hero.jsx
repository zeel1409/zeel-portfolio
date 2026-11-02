import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { isCompactViewport } from '../../utils/perf';
import { personalInfo } from '../../data/portfolio';

// Interactive Developer Showcase Card
function HeroVisual() {
  return (
    <div className="relative w-full max-w-md lg:max-w-lg">
      <div className="relative glass-card rounded-2xl border border-white/10 shadow-2xl overflow-hidden p-6">
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
            <span className="text-neon-cyan">fullstack</span>
          </div>
          <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20 font-medium">
            AVAILABLE
          </div>
        </div>

        {/* Profile Card Snippet */}
        <div className="flex items-center gap-4 mb-5 p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
          <img
            src="/images/zeel.jpg"
            alt="Zeel Mukeshkumar Kadiya"
            className="w-16 h-16 rounded-xl ring-2 ring-neon-indigo/50 object-cover shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-display font-bold text-white text-base truncate">Zeel Kadiya</h3>
              <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono font-medium">GTU IT '26</span>
            </div>
            <p className="text-xs text-slate-300 font-mono mt-0.5">Full Stack Developer</p>
            <p className="text-[11px] text-neon-cyan font-mono mt-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Ahmedabad, Gujarat, India
            </p>
          </div>
        </div>

        {/* Live Config */}
        <div className="font-mono text-xs space-y-1.5 p-4 rounded-xl bg-void/90 border border-white/10 text-slate-200 overflow-x-auto leading-relaxed">
          <div className="text-slate-500">// engineer.profile.ts</div>
          <div>
            <span className="text-neon-violet font-semibold">const</span> <span className="text-neon-indigo font-semibold">zeel</span> = &#123;
          </div>
          <div className="pl-4">
            <span className="text-slate-400">education:</span>{' '}
            <span className="text-amber-300">'B.E. IT (GTU)'</span>,
          </div>
          <div className="pl-4">
            <span className="text-slate-400">coreStack:</span> [
            <span className="text-emerald-300">'React'</span>,{' '}
            <span className="text-emerald-300">'Node.js'</span>,{' '}
            <span className="text-emerald-300">'MongoDB'</span>
            ],
          </div>
          <div className="pl-4">
            <span className="text-slate-400">internships:</span> [
            <span className="text-cyan-300">'Innovexis.in'</span>,{' '}
            <span className="text-cyan-300">'AnveshnaAI'</span>
            ],
          </div>
          <div className="pl-4">
            <span className="text-slate-400">specialty:</span>{' '}
            <span className="text-indigo-300">'JWT Auth &amp; REST APIs'</span>,
          </div>
          <div>&#125;;</div>
        </div>

        {/* Core Stack Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mt-5 pt-4 border-t border-white/10">
          <span className="text-xs font-mono text-slate-300 font-medium">Recent Work:</span>
          <div className="flex flex-wrap gap-1.5">
            {['Innovexis.in', 'Wanderlust', 'REST APIs', 'Postman'].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded text-xs font-mono text-slate-200 bg-white/10 border border-white/15"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const compact = isCompactViewport();
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  const enter = compact ? false : { opacity: 0, y: 20 };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      id="hero"
    >
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

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
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs font-mono text-neon-indigo/90 mb-6 border border-neon-indigo/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
            GTU B.E. (IT) · Full Stack Developer
          </motion.div>

          <motion.h1
            initial={compact ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: compact ? 0 : 0.7, delay: compact ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6"
          >
            <span className="text-slate-900 dark:text-slate-100">Hi, I'm </span>
            <span className="text-neon-indigo">{personalInfo.shortName}</span>
          </motion.h1>

          <motion.p
            initial={enter}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: compact ? 0 : 0.7, delay: compact ? 0 : 0.35 }}
            className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed max-w-xl"
          >
            Full Stack Developer specializing in <strong className="text-white">React.js, Node.js, Express.js &amp; MongoDB</strong> with JWT authentication and RESTful APIs.
          </motion.p>

          <motion.p
            initial={enter}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: compact ? 0 : 0.7, delay: compact ? 0 : 0.45 }}
            className="text-sm md:text-base text-slate-400 mb-8 leading-relaxed max-w-xl"
          >
            Recent B.E. (Information Technology) graduate from Gujarat Technological University. Built production CRUD APIs at <span className="text-slate-200 font-medium">Innovexis.in</span> and built &amp; deployed <span className="text-slate-200 font-medium">Wanderlust</span>.
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
              View Projects
              <ArrowDown size={14} />
            </button>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              id="github-hero-link"
            >
              <FaGithub size={14} />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FaLinkedin size={14} />
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-secondary"
            >
              <Mail size={14} />
              Email
            </a>
          </motion.div>

          {/* Key Metrics based on Resume */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap gap-6 md:gap-8 mt-10 pt-8 border-t border-white/10"
          >
            {[
              { value: '2', label: 'Internships' },
              { value: 'MERN', label: 'Core Stack' },
              { value: '7.33', label: 'GTU CGPA' },
              { value: '98/85', label: 'Lighthouse Score' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-display font-bold text-2xl text-white">{value}</div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: interactive developer visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex flex-1 items-center justify-end"
          aria-hidden="true"
        >
          <HeroVisual />
        </motion.div>
      </motion.div>
    </section>
  );
}

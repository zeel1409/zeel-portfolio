import { motion } from 'framer-motion';
import { ChapterLabel, FadeUp, StaggerChildren, StaggerItem } from '../ui/AnimatedSection';
import { timeline } from '../../data/portfolio';

const typeColors = {
  start: 'border-green-500/50 bg-green-500/10 text-green-400',
  learning: 'border-neon-indigo/50 bg-neon-indigo/10 text-neon-indigo',
  milestone: 'border-yellow-500/50 bg-yellow-500/10 text-yellow-400',
  project: 'border-neon-cyan/50 bg-neon-cyan/10 text-neon-cyan',
  now: 'border-neon-violet/50 bg-neon-violet/10 text-neon-violet',
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute right-0 top-1/2 w-64 h-64 rounded-full opacity-5 blur-3xl bg-neon-cyan pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <ChapterLabel number="06" label="The Journey" />
          <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Every step{' '}
            <span className="gradient-text">was a lesson.</span>
          </h2>
          <p className="text-slate-500 mb-16 max-w-xl">
            My path from "Hello, World!" to shipping full-stack products. Not a straight line — a series of deliberate leaps.
          </p>
        </FadeUp>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-indigo/40 via-neon-indigo/10 to-transparent -translate-x-1/2" />

          <StaggerChildren className="space-y-0" stagger={0.1}>
            {timeline.map((item, i) => {
              const isRight = i % 2 === 0;
              return (
                <StaggerItem key={`${item.year}-${item.title}`}>
                  <div className={`relative flex items-start gap-6 md:gap-0 pb-12 ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content block */}
                    <div className={`flex-1 pl-14 md:pl-0 ${isRight ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="glass-card glass-card-hover rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-2 justify-start">
                          <span
                            className={`px-2 py-0.5 rounded-md text-xs font-mono font-medium border ${typeColors[item.type]}`}
                          >
                            {item.year}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-white mb-1">{item.title}</h3>
                        <p className="font-mono text-xs text-slate-500 mb-3">{item.subtitle}</p>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 z-10">
                      <motion.div
                        className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-xl border border-white/10"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        {item.icon}
                      </motion.div>
                    </div>

                    {/* Empty spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}

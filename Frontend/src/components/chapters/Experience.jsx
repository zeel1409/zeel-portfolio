import { motion } from 'framer-motion';
import { ChapterLabel, FadeUp, StaggerChildren, StaggerItem } from '../ui/AnimatedSection';
import { timeline } from '../../data/portfolio';

const typeColors = {
  start: 'border-emerald-500/40 bg-emerald-500/15 text-emerald-300',
  learning: 'border-indigo-500/40 bg-indigo-500/15 text-indigo-300',
  milestone: 'border-amber-500/40 bg-amber-500/15 text-amber-300',
  project: 'border-cyan-500/40 bg-cyan-500/15 text-cyan-300',
  now: 'border-purple-500/40 bg-purple-500/15 text-purple-300',
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="absolute right-0 top-1/2 w-80 h-80 rounded-full opacity-10 blur-3xl bg-neon-cyan pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <ChapterLabel number="06" label="The Journey" />
          <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Every step <span className="gradient-text">was a lesson.</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg mb-16 max-w-xl leading-relaxed">
            My path from "Hello, World!" to shipping full-stack products. A sequence of deliberate, focused leaps.
          </p>
        </FadeUp>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/20 to-transparent -translate-x-1/2" />

          <StaggerChildren className="space-y-0" stagger={0.12}>
            {timeline.map((item, i) => {
              const isRight = i % 2 === 0;
              return (
                <StaggerItem key={`${item.year}-${item.title}`}>
                  <div className={`relative flex items-start gap-6 md:gap-0 pb-16 ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content block */}
                    <div className={`flex-1 pl-14 md:pl-0 ${isRight ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-sm min-h-[150px]">
                        <div className={`flex items-center gap-2 mb-3 ${isRight ? 'md:justify-end' : 'justify-start'}`}>
                          <span
                            className={`px-2.5 py-1 rounded-md text-xs font-mono font-bold border ${typeColors[item.type] || typeColors.learning}`}
                          >
                            {item.year}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-xl text-white mb-1">{item.title}</h3>
                        <p className="font-mono text-xs sm:text-sm text-indigo-300 font-medium mb-3.5">{item.subtitle}</p>
                        <p className="text-slate-200 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    {/* Center dot icon */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 z-10">
                      <motion.div
                        className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-xl border border-white/20 bg-surface shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 8 }}
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

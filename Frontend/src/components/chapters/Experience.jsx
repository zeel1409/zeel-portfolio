import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { FadeUp, StaggerChildren, StaggerItem } from '../ui/AnimatedSection';
import { experiences } from '../../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight">
              Work <span className="text-neon-indigo">Experience.</span>
            </h2>
            <p className="text-slate-300 text-base md:text-lg mt-3 max-w-2xl leading-relaxed">
              Professional industry experience building full-stack applications, secure APIs, and responsive user interfaces.
            </p>
          </div>
        </FadeUp>

        <StaggerChildren className="space-y-6" stagger={0.1}>
          {experiences.map((exp, idx) => (
            <StaggerItem key={idx}>
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-indigo-300 font-mono text-sm mt-1">
                      <Briefcase size={15} />
                      <span className="font-semibold text-slate-100">{exp.company}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400">{exp.type}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 font-mono text-xs text-slate-400">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Calendar size={14} className="text-indigo-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-5">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm md:text-base leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-indigo mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md text-xs font-mono text-slate-200 bg-white/[0.05] border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

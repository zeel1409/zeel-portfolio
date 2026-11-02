import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { FadeUp, StaggerChildren, StaggerItem } from '../ui/AnimatedSection';
import { education } from '../../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight">
              Education &amp; <span className="text-neon-indigo">Credentials.</span>
            </h2>
            <p className="text-slate-300 text-base md:text-lg mt-3 max-w-2xl leading-relaxed">
              Academic background in Information Technology and computer science engineering fundamentals.
            </p>
          </div>
        </FadeUp>

        <StaggerChildren className="grid md:grid-cols-3 gap-6" stagger={0.1}>
          {education.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 flex items-center justify-center mb-4">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white leading-snug mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-slate-300 text-sm font-medium mb-1">
                    {item.institution}
                  </p>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono mb-4">
                    <MapPin size={12} />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-indigo-300 font-semibold">
                    <Award size={14} />
                    <span>{item.score}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <Calendar size={12} />
                    <span>{item.period}</span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}


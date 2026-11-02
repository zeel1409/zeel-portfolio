import { motion } from 'framer-motion';
import { FadeUp, StaggerChildren, StaggerItem } from '../ui/AnimatedSection';
import { skills } from '../../data/portfolio';
import { Code2, Layout, Server, Database, Wrench } from 'lucide-react';

function SkillCard({ skill, accentColor = 'indigo' }) {
  const colorStyles = {
    indigo: {
      badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
      hoverBorder: 'hover:border-indigo-500/40',
      iconBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    },
    cyan: {
      badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
      hoverBorder: 'hover:border-cyan-500/40',
      iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    },
    violet: {
      badge: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
      hoverBorder: 'hover:border-purple-500/40',
      iconBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    },
    emerald: {
      badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
      hoverBorder: 'hover:border-emerald-500/40',
      iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    },
  }[accentColor] || {
    badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
    hoverBorder: 'hover:border-indigo-500/40',
    iconBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  };

  return (
    <motion.div
      className={`glass-card rounded-2xl p-4 sm:p-5 border border-white/10 ${colorStyles.hoverBorder} transition-all duration-300 flex flex-col justify-between group shadow-sm min-h-[160px] overflow-hidden`}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div>
        <div className="flex items-center gap-3 mb-2.5">
          <span className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold font-mono shrink-0 border ${colorStyles.iconBg}`}>
            {skill.name.charAt(0)}
          </span>
          <div className="min-w-0 flex-1">
            <h4 className="font-display font-bold text-white text-base truncate group-hover:text-neon-indigo transition-colors">
              {skill.name}
            </h4>
          </div>
        </div>

        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2 mt-1">
          {skill.desc}
        </p>
      </div>

      <div className="flex items-center justify-between gap-2 mt-4 pt-3 border-t border-white/10 text-[11px] font-mono">
        <span className={`px-2 py-0.5 rounded-full font-medium border ${colorStyles.badge} truncate`}>
          {skill.level}
        </span>
        <span className="text-slate-300 bg-white/[0.06] border border-white/10 px-2 py-0.5 rounded-md truncate max-w-[130px]">
          {skill.badge}
        </span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight">
              Technical <span className="text-neon-indigo">Skills.</span>
            </h2>
            <p className="text-slate-300 text-base md:text-lg mt-3 max-w-2xl leading-relaxed">
              Full-stack toolset honed through internships and production web applications.
            </p>
          </div>
        </FadeUp>

        {/* Languages Strip */}
        <FadeUp delay={0.1} className="mb-8">
          <div className="p-6 rounded-3xl glass-card border border-white/10 bg-surface/30">
            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/10">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                <Code2 size={18} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">Programming Languages</h3>
                <p className="text-xs font-mono text-amber-300">Core Foundations &amp; Scripting</p>
              </div>
            </div>
            <StaggerChildren className="grid sm:grid-cols-3 gap-4" stagger={0.05}>
              {skills.languages.map((skill) => (
                <StaggerItem key={skill.name}>
                  <SkillCard skill={skill} accentColor="indigo" />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </FadeUp>

        {/* Frontend & Backend 2-Col */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-8">
          {/* Frontend */}
          <FadeUp delay={0.15} className="h-full">
            <div className="p-6 rounded-3xl glass-card border border-white/10 bg-surface/40 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                      <Layout size={20} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-white">Frontend Architecture</h3>
                      <p className="text-xs font-mono text-indigo-300">Client-Side &amp; Component UI</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-300 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                    {skills.frontend.length} Technologies
                  </span>
                </div>

                <StaggerChildren className="grid sm:grid-cols-2 gap-4" stagger={0.05}>
                  {skills.frontend.map((skill) => (
                    <StaggerItem key={skill.name}>
                      <SkillCard skill={skill} accentColor="indigo" />
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </div>
            </div>
          </FadeUp>

          {/* Backend */}
          <FadeUp delay={0.2} className="h-full">
            <div className="p-6 rounded-3xl glass-card border border-white/10 bg-surface/40 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                      <Server size={20} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-white">Backend &amp; Security</h3>
                      <p className="text-xs font-mono text-cyan-300">REST APIs, JWT &amp; Runtime</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-300 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                    {skills.backend.length} Technologies
                  </span>
                </div>

                <StaggerChildren className="grid sm:grid-cols-2 gap-4" stagger={0.05}>
                  {skills.backend.map((skill) => (
                    <StaggerItem key={skill.name}>
                      <SkillCard skill={skill} accentColor="cyan" />
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Databases */}
        <FadeUp delay={0.25} className="mb-8">
          <div className="p-6 rounded-3xl glass-card border border-white/10 bg-surface/30">
            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/10">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <Database size={18} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">Databases</h3>
                <p className="text-xs font-mono text-emerald-300">Document NoSQL &amp; Relational SQL</p>
              </div>
            </div>
            <StaggerChildren className="grid sm:grid-cols-2 gap-4" stagger={0.05}>
              {skills.databases.map((skill) => (
                <StaggerItem key={skill.name}>
                  <SkillCard skill={skill} accentColor="emerald" />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </FadeUp>

        {/* Tools & Workflow Section */}
        <FadeUp delay={0.3}>
          <div className="p-6 rounded-3xl glass-card border border-white/10 bg-surface/30">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                  <Wrench size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Tools &amp; Engineering Workflow</h3>
                  <p className="text-xs font-mono text-purple-300">Version Control, Testing, DevOps &amp; Cloud</p>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-300 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                {skills.tools.length} Tools
              </span>
            </div>

            <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" stagger={0.05}>
              {skills.tools.map((skill) => (
                <StaggerItem key={skill.name}>
                  <SkillCard skill={skill} accentColor="violet" />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

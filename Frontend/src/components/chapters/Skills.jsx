import { motion } from 'framer-motion';
import { ChapterLabel, FadeUp, StaggerChildren, StaggerItem } from '../ui/AnimatedSection';
import { skills } from '../../data/portfolio';
import { Layers, Server, Wrench } from 'lucide-react';

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
  }[accentColor] || {
    badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
    hoverBorder: 'hover:border-indigo-500/40',
    iconBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  };

  return (
    <motion.div
      className={`glass-card rounded-2xl p-4 sm:p-5 border border-white/10 ${colorStyles.hoverBorder} transition-all duration-300 flex flex-col justify-between group shadow-sm min-h-[170px] overflow-hidden`}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div>
        {/* Top: Icon + Name */}
        <div className="flex items-center gap-3 mb-2.5">
          <span className="text-2xl p-2 rounded-xl bg-white/[0.04] border border-white/10 shrink-0">
            {skill.icon}
          </span>
          <div className="min-w-0 flex-1">
            <h4 className="font-display font-bold text-white text-base truncate group-hover:text-neon-indigo transition-colors">
              {skill.name}
            </h4>
          </div>
        </div>

        {/* Middle: Description */}
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2 mt-1">
          {skill.desc}
        </p>
      </div>

      {/* Bottom: Level + Project badge */}
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
    <section id="skills" className="relative py-28 px-6 overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl bg-neon-indigo pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl bg-neon-cyan pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <ChapterLabel number="03" label="My Arsenal" />
          <div className="mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight">
              Tools I <span className="gradient-text">actually use.</span>
            </h2>
            <p className="text-slate-300 text-base md:text-lg mt-3 max-w-2xl leading-relaxed">
              Not arbitrary percentages — these are real production technologies I build with daily across the MERN stack.
            </p>
          </div>
        </FadeUp>

        {/* Both Frontend and Backend visible at once */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Frontend Section */}
          <FadeUp delay={0.1} className="h-full">
            <div className="p-6 rounded-3xl glass-card border border-white/10 bg-surface/40 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                      <Layers size={20} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-white">Frontend Architecture</h3>
                      <p className="text-xs font-mono text-indigo-300">Client-Side & Interactive UIs</p>
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

          {/* Backend Section */}
          <FadeUp delay={0.2} className="h-full">
            <div className="p-6 rounded-3xl glass-card border border-white/10 bg-surface/40 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                      <Server size={20} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-white">Backend & Database</h3>
                      <p className="text-xs font-mono text-cyan-300">Server, REST APIs & Modeling</p>
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

        {/* Tools & Workflow Section */}
        <FadeUp delay={0.3}>
          <div className="p-6 rounded-3xl glass-card border border-white/10 bg-surface/30">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                  <Wrench size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Tools & Engineering Workflow</h3>
                  <p className="text-xs font-mono text-purple-300">Version Control, Media CDN & Testing</p>
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

            {/* Also familiar with chip strip */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-300 font-medium uppercase tracking-wider">
                Also familiar with:
              </span>
              <div className="flex flex-wrap gap-2">
                {['Passport.js', 'Cloudinary CDN', 'Mapbox GL', 'Bootstrap', 'Multer', 'RESTful Design', 'Mongoose ODM', 'Vite', 'Figma', 'Postman'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono text-slate-200 bg-white/[0.04] border border-white/10 hover:border-indigo-400/40 hover:text-white transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

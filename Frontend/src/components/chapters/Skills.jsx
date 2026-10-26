import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChapterLabel, FadeUp, StaggerChildren, StaggerItem } from '../ui/AnimatedSection';
import { skills } from '../../data/portfolio';

const categories = [
  { key: 'frontend', label: 'Frontend', color: '#6366f1' },
  { key: 'backend', label: 'Backend', color: '#06b6d4' },
  { key: 'tools', label: 'Tools & More', color: '#8b5cf6' },
];

function SkillCard({ skill, index, color }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="glass-card rounded-2xl p-5 cursor-default relative overflow-hidden group"
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Hover accent line */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-0.5 rounded-full"
        style={{ background: color }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.icon}</span>
          <div>
            <h3 className="font-display font-semibold text-white text-sm">{skill.name}</h3>
            <AnimatePresence>
              {hovered && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-xs text-slate-500 leading-relaxed mt-1"
                >
                  {skill.desc}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
        <span className="font-mono text-xs text-slate-600">{skill.level}%</span>
      </div>

      {/* Skill bar */}
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          style={{ background: `linear-gradient(90deg, ${color}aa, ${color})` }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: skill.level / 100 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const active = categories.find((c) => c.key === activeCategory);

  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5 blur-3xl bg-neon-cyan pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <ChapterLabel number="03" label="My Arsenal" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight">
                Tools I{' '}
                <span className="gradient-text">actually use.</span>
              </h2>
              <p className="text-slate-500 mt-3 max-w-xl">
                Not a skills dump — these are the technologies I've shipped real products with.
                Hover each card to see what I've built with it.
              </p>
            </div>

            {/* Category tabs */}
            <div className="flex gap-2 p-1 glass-card rounded-xl shrink-0">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeCategory === cat.key
                      ? 'keep-white bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
                  }`}
                  id={`skills-tab-${cat.key}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.06}>
              {skills[activeCategory].map((skill, i) => (
                <StaggerItem key={skill.name}>
                  <SkillCard skill={skill} index={i} color={active.color} />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </motion.div>
        </AnimatePresence>

        {/* Tech stack strip */}
        <FadeUp delay={0.3}>
          <div className="mt-16 pt-8 border-t border-white/5">
            <p className="text-xs font-mono text-slate-600 text-center mb-6 uppercase tracking-widest">
              Also familiar with
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Passport.js', 'Cloudinary', 'Mapbox', 'Bootstrap', 'Multer', 'REST APIs', 'Mongoose', 'Vite', 'Figma', 'Postman'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-500 border border-slate-200 dark:border-white/5 hover:border-neon-indigo/30 hover:text-slate-800 dark:hover:text-slate-300 transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

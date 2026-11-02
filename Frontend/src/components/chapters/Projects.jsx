import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, Layers, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { FadeUp } from '../ui/AnimatedSection';
import { projects } from '../../data/portfolio';

function ProjectCard({ project, isActive }) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl overflow-hidden"
    >
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Details */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                {project.year}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {project.status}
              </span>
            </div>

            <h3 className="font-display font-bold text-3xl sm:text-4xl text-white mb-2 leading-tight">
              {project.title}
            </h3>
            <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed font-sans">
              {project.tagline}
            </p>

            {/* Impact Highlight Box */}
            {project.impact && (
              <div className="mb-6 p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-start gap-3">
                <TrendingUp size={20} className="text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-wider mb-1">
                    Performance &amp; Engineering Impact
                  </h4>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              </div>
            )}

            {/* Problem & Solution */}
            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="font-mono text-xs text-indigo-300 font-semibold mb-1">PROBLEM</div>
                <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="font-mono text-xs text-cyan-300 font-semibold mb-1">SOLUTION</div>
                <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers size={14} className="text-neon-indigo" />
                Key Architectural Highlights
              </h4>
              <ul className="grid sm:grid-cols-1 gap-2">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={15} className="text-neon-indigo shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-200 bg-white/5 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Live Demo
                <ExternalLink size={14} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FaGithub size={14} />
                Source Code
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Visual Preview */}
        <div className="lg:col-span-5 h-full flex flex-col">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-void/60 shadow-xl group">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.nextElementSibling) {
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }
                }}
              />
            ) : null}

            {/* Fallback mock display */}
            <div
              className={`p-8 min-h-[300px] sm:min-h-[380px] flex flex-col justify-between ${
                project.image ? 'hidden' : 'flex'
              }`}
              style={{
                background: `radial-gradient(ellipse at top left, ${project.color}22, transparent 70%)`,
              }}
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-xs text-slate-400">{project.id}.dev</span>
              </div>

              <div className="my-auto py-8 text-center">
                <div className="inline-flex p-4 rounded-2xl bg-white/[0.05] border border-white/10 mb-4">
                  <Sparkles size={32} className="text-neon-indigo" />
                </div>
                <h4 className="font-display font-bold text-2xl text-white mb-2">{project.title}</h4>
                <p className="text-slate-400 text-xs font-mono max-w-xs mx-auto">{project.tagline}</p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-[11px] text-slate-300">
                <span className="text-indigo-400">$</span> deployed to Vercel (Production)
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs text-slate-400">
            <span className="text-slate-300 font-semibold">Role:</span> {project.myContribution}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  };
  const next = () => {
    setDirection(1);
    setCurrentIndex((i) => (i === projects.length - 1 ? 0 : i + 1));
  };

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight">
                Featured <span className="text-neon-indigo">Projects.</span>
              </h2>
              <p className="text-slate-300 text-base md:text-lg mt-3">
                Full-stack web applications with measurable engineering impact and live demos.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 shrink-0">
              <span className="font-mono text-sm text-slate-200 font-semibold bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-500 hover:text-indigo-600 dark:hover:text-white hover:border-neon-indigo/30 transition-all"
                  aria-label="Previous project"
                  id="project-prev"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-500 hover:text-indigo-600 dark:hover:text-white hover:border-neon-indigo/30 transition-all"
                  aria-label="Next project"
                  id="project-next"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Project display */}
        <AnimatePresence mode="wait" custom={direction}>
          <ProjectCard
            key={currentIndex}
            project={projects[currentIndex]}
            isActive={true}
          />
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
              className={`transition-all duration-300 rounded-full ${
                i === currentIndex ? 'w-6 h-2 bg-neon-indigo' : 'w-2 h-2 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Go to project ${i + 1}`}
              id={`project-dot-${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

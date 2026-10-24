import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChapterLabel, FadeUp } from '../ui/AnimatedSection';
import { projects } from '../../data/portfolio';
import { ExternalLink, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

function ProjectCard({ project, isActive }) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Left: visual / mockup card */}
        <div className="relative">
          {/* Project visual */}
          <div
            className={`relative h-72 md:h-96 rounded-2xl overflow-hidden glass-card flex items-center justify-center`}
            style={{
              background: `linear-gradient(135deg, ${project.color}15, ${project.colorSecondary}15)`,
              border: `1px solid ${project.color}25`,
            }}
          >
            {/* Decorative grid */}
            <div className="absolute inset-0 bg-grid opacity-30" />

            {/* Central display — image or emoji fallback */}
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="absolute inset-0 w-full h-full object-cover object-top opacity-90"
              />
            ) : (
              <div className="relative z-10 text-center">
                <div className="text-8xl mb-4">{project.emoji}</div>
                <div
                  className="font-display font-black text-3xl"
                  style={{ color: project.color }}
                >
                  {project.title}
                </div>
                <div className="font-mono text-sm mt-2 text-slate-500">{project.tagline}</div>
              </div>
            )}

            {/* Corner status badge */}
            <div className="absolute top-4 right-4">
              <span
                className="px-2 py-1 rounded-md text-xs font-mono font-medium"
                style={{ background: `${project.color}20`, color: project.color }}
              >
                {project.status}
              </span>
            </div>

            {/* Tech chips at bottom */}
            <div className="absolute bottom-4 inset-x-4 flex flex-wrap gap-1.5 justify-center">
              {project.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded text-xs font-mono text-slate-400 bg-black/30 border border-white/5"
                >
                  {t}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="px-2 py-0.5 rounded text-xs font-mono text-slate-500 bg-black/30 border border-white/5">
                  +{project.tech.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Action buttons below visual */}
          <div className="flex gap-3 mt-4">
            {project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 justify-center text-xs"
                id={`${project.id}-demo`}
              >
                <ExternalLink size={13} />
                Live Demo
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1 justify-center text-xs"
              id={`${project.id}-github`}
            >
              <FaGithub size={13} />
              Source Code
            </a>
          </div>
        </div>

        {/* Right: case study */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-slate-500">{project.category}</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span className="font-mono text-xs text-slate-500">{project.year}</span>
            </div>
            <h3 className="font-display font-black text-3xl md:text-4xl text-white mb-2">
              {project.title}
            </h3>
            <p className="text-slate-400 italic">{project.tagline}</p>
          </div>

          {/* Problem / Solution */}
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
              <div className="text-xs font-mono text-red-400/70 mb-2 uppercase tracking-widest">// The Problem</div>
              <p className="text-slate-400 text-sm leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10">
              <div className="text-xs font-mono text-green-400/70 mb-2 uppercase tracking-widest">// The Solution</div>
              <p className="text-slate-400 text-sm leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Key features */}
          <div>
            <div className="text-xs font-mono text-slate-600 mb-3 uppercase tracking-widest">// Key Features</div>
            <ul className="space-y-2">
              {project.features.slice(0, 4).map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                  <CheckCircle size={14} className="text-neon-indigo shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* My contribution */}
          <div className="p-4 rounded-xl glass-card">
            <div className="text-xs font-mono text-neon-indigo/60 mb-2 uppercase tracking-widest">// My Contribution</div>
            <p className="text-slate-400 text-sm leading-relaxed">{project.myContribution}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  };
  const next = () => {
    setDirection(1);
    setCurrentIndex((i) => (i === projects.length - 1 ? 0 : i + 1));
  };

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 rounded-full opacity-5 blur-3xl bg-neon-violet pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <ChapterLabel number="04" label="Things I've Built" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight">
                Projects with{' '}
                <span className="gradient-text">a story behind them.</span>
              </h2>
              <p className="text-slate-500 mt-3">
                Every project started with a real problem. Here's what I built to solve them.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 shrink-0">
              <span className="font-mono text-sm text-slate-500">
                {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-neon-indigo/30 transition-all"
                  aria-label="Previous project"
                  id="project-prev"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-white hover:border-neon-indigo/30 transition-all"
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
        <div className="flex justify-center gap-2 mt-10">
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

import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { ArrowUp } from 'lucide-react';

const socials = [
  { icon: FaGithub, href: 'https://github.com/zeel1409', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/zeel-kadiya-5733a7349/', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:kadiyazeel209@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-neon-indigo to-neon-violet flex items-center justify-center text-white text-xs font-bold font-mono">
              Z
            </div>
            <span className="font-display font-semibold text-sm text-slate-200">zeel.dev</span>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            Designed &amp; built by Zeel — 2025
          </p>
          <p className="text-xs text-slate-600 font-mono mt-1">
            React · Node.js · MongoDB · Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <Icon size={16} />
            </a>
          ))}

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="ml-2 w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 hover:text-neon-indigo hover:bg-neon-indigo/10 transition-all duration-200 border border-white/5 hover:border-neon-indigo/30"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      {/* Bottom Easter egg hint */}
      <p className="text-center dark:text-slate-800 text-transparent text-xs font-mono mt-8 select-none" title="↑↑↓↓←→←→ba">
        // easter eggs hidden — explore if you dare
      </p>
    </footer>
  );
}

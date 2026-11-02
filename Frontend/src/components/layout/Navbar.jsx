import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme, isDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 glass-card border-b border-white/5'
            : 'py-5 bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
            aria-label="Go to top"
          >
            <div className="keep-white w-8 h-8 rounded-lg bg-gradient-to-br from-neon-indigo to-neon-violet flex items-center justify-center text-white text-sm font-bold font-mono shadow-glow-sm">
              Z
            </div>
            <span className="font-display font-bold text-lg text-white group-hover:text-neon-indigo transition-colors">
              zeel<span className="text-neon-indigo">.dev</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 glass-card px-4 py-1.5 rounded-full border border-white/5">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="px-3.5 py-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-white transition-colors border border-white/5"
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
              className="hidden sm:inline-flex items-center px-4 py-1.5 text-xs font-mono font-medium text-white rounded-lg bg-neon-indigo/20 border border-neon-indigo/40 hover:bg-neon-indigo/30 transition-all duration-200"
            >
              Hire Me
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 p-4 md:hidden"
          >
            <div className="glass-card rounded-2xl p-6 border border-white/10 shadow-2xl flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-mono text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 border-t border-white/10 mt-2">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
                  className="btn-primary w-full justify-center text-xs"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

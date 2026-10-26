import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { useEasterEggs } from './hooks/useEasterEggs';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import BootSequence from './components/chapters/BootSequence';
import Hero from './components/chapters/Hero';
import Story from './components/chapters/Story';
import Skills from './components/chapters/Skills';
import Projects from './components/chapters/Projects';
import GitHubFootprint from './components/chapters/GitHubFootprint';
import Experience from './components/chapters/Experience';
import Contact from './components/chapters/Contact';

// Decorative divider between chapters
function ChapterDivider() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="chapter-divider h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
  );
}

// Section that fades in after boot
function MainContent() {
  useEasterEggs();

  return (
    <div className="noise-overlay">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ChapterDivider />
        <Story />
        <ChapterDivider />
        <Skills />
        <ChapterDivider />
        <Projects />
        <ChapterDivider />
        <GitHubFootprint />
        <ChapterDivider />
        <Experience />
        <ChapterDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const [booted, setBooted] = useState(false);
  const [showMain, setShowMain] = useState(false);

  // Check if already visited this session
  useEffect(() => {
    const visited = sessionStorage.getItem('zeel-booted');
    if (visited) {
      setBooted(true);
      setShowMain(true);
    }
  }, []);

  const handleBootComplete = () => {
    sessionStorage.setItem('zeel-booted', '1');
    setBooted(true);
    setTimeout(() => setShowMain(true), 100);
  };

  return (
    <ThemeProvider>
      <AnimatePresence>
        {!booted && <BootSequence key="boot" onComplete={handleBootComplete} />}
      </AnimatePresence>

      <AnimatePresence>
        {showMain && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <MainContent />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;

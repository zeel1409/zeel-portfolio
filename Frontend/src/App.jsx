import { useState, useCallback, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { useEasterEggs } from './hooks/useEasterEggs';
import { shouldSkipBoot } from './utils/perf';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import BootSequence from './components/chapters/BootSequence';
import Hero from './components/chapters/Hero';

const Story = lazy(() => import('./components/chapters/Story'));
const Skills = lazy(() => import('./components/chapters/Skills'));
const Projects = lazy(() => import('./components/chapters/Projects'));
const GitHubFootprint = lazy(() => import('./components/chapters/GitHubFootprint'));
const Experience = lazy(() => import('./components/chapters/Experience'));
const Contact = lazy(() => import('./components/chapters/Contact'));

function ChapterDivider() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="chapter-divider h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
  );
}

function MainContent() {
  useEasterEggs();

  return (
    <div className="noise-overlay">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
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
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

const skipBoot = shouldSkipBoot();

function App() {
  const [booted, setBooted] = useState(skipBoot);
  const [showMain, setShowMain] = useState(skipBoot);

  const handleBootComplete = useCallback(() => {
    try {
      sessionStorage.setItem('zeel-booted', '1');
    } catch {
      /* private mode */
    }
    setBooted(true);
    setShowMain(true);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {!booted && <BootSequence key="boot" onComplete={handleBootComplete} />}
      </AnimatePresence>

      {skipBoot ? (
        showMain && <MainContent />
      ) : (
        <AnimatePresence>
          {showMain && (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45 }}
            >
              <MainContent />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </ThemeProvider>
  );
}

export default App;

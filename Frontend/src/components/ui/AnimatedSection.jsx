import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animated section wrapper for storytelling chapters
export function Chapter({ id, children, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id={id}
      ref={ref}
      className={`relative ${className}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  );
}

// Fade-up reveal on scroll
export function FadeUp({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Staggered children reveal
export function StaggerChildren({ children, className = '', stagger = 0.1 }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        visible: { transition: { staggerChildren: stagger } },
        hidden: {},
      }}
    >
      {children}
    </motion.div>
  );
}

// Child item for StaggerChildren
export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

// Chapter label component
export function ChapterLabel({ number, label }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="chapter-number">{number}</span>
      <div className="h-px w-8 bg-neon-indigo/30" />
      <span className="chapter-number">{label}</span>
    </div>
  );
}

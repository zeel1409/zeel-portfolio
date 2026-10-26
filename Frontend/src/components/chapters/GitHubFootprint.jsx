import { motion } from 'framer-motion';
import { ChapterLabel, FadeUp, StaggerChildren, StaggerItem } from '../ui/AnimatedSection';
import { useGitHubStats } from '../../hooks/useGitHubStats';
import { Star, GitFork, ExternalLink, BookOpen } from 'lucide-react';

const LANG_COLORS = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python: '#3776ab',
  HTML: '#e34f26',
  CSS: '#563d7c',
  Java: '#b07219', 
};

function StatCard({ icon: Icon, label, value, color = 'text-neon-indigo' }) {
  return (
    <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-white/5 flex items-center justify-center">
        <Icon size={18} className={color} />
      </div>
      <div>
        <div className="font-display font-bold text-xl text-white">{value}</div>
        <div className="text-xs text-slate-500 font-mono">{label}</div>
      </div>
    </div>
  );
}

function RepoCard({ repo }) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col gap-3 group"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <BookOpen size={14} className="text-neon-indigo/60 shrink-0" />
          <span className="font-display font-semibold text-white text-sm truncate group-hover:text-neon-indigo transition-colors">
            {repo.name}
          </span>
        </div>
        <ExternalLink size={12} className="text-slate-600 group-hover:text-slate-400 transition-colors shrink-0 ml-2" />
      </div>
      {repo.description && (
        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{repo.description}</p>
      )}
      <div className="flex items-center gap-4 mt-auto">
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: LANG_COLORS[repo.language] || '#9ca3af' }}
            />
            <span className="text-xs text-slate-500 font-mono">{repo.language}</span>
          </div>
        )}
        <div className="flex items-center gap-1 text-slate-500 ml-auto">
          <Star size={11} />
          <span className="text-xs font-mono">{repo.stargazers_count}</span>
        </div>
        <div className="flex items-center gap-1 text-slate-500">
          <GitFork size={11} />
          <span className="text-xs font-mono">{repo.forks_count}</span>
        </div>
      </div>
    </motion.a>
  );
}

export default function GitHubFootprint() {
  const { stats, repos, loading } = useGitHubStats('zeel1409');

  return (
    <section id="github" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-neon-indigo/50 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <ChapterLabel number="05" label="My Footprint" />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight">
                My GitHub{' '}
                <span className="gradient-text">story in numbers.</span>
              </h2>
              <p className="text-slate-500 mt-3">
                Real data, fetched live from GitHub's API — not a static screenshot.
              </p>
            </div>
            <a
              href="https://github.com/zeel1409"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary shrink-0"
              id="github-profile-link"
            >
              <ExternalLink size={14} />
              View Profile
            </a>
          </div>
        </FadeUp>

        {loading && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 animate-pulse">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="glass-card rounded-2xl h-24" />
            ))}
          </div>
        )}

        {/* {error && (
          <div className="glass-card rounded-2xl p-6 text-center text-slate-500 mb-10">
            <p className="font-mono text-sm">// GitHub API rate limit — try refreshing in a moment.</p>
          </div>
        )} */}

        {stats && !loading && (
          <>
            {/* Stats row — only Public Repos */}
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10" stagger={0.1}>
              <StaggerItem>
                <StatCard icon={BookOpen} label="Public Repos" value={stats.publicRepos} color="text-neon-indigo" />
              </StaggerItem>
              <StaggerItem>
                <StatCard icon={BookOpen} label="GitHub Since" value="2023" color="text-green-400" />
              </StaggerItem>
            </StaggerChildren>

            {/* Languages */}
            {stats.topLanguages.length > 0 && (
              <FadeUp delay={0.2} className="mb-10">
                <div className="glass-card rounded-2xl p-6">
                  <div className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-widest">
                    // Top Languages
                  </div>
                  <div className="space-y-3">
                    {stats.topLanguages.map(([lang, count], i) => {
                      const total = stats.topLanguages.reduce((s, [, c]) => s + c, 0);
                      const pct = Math.round((count / total) * 100);
                      return (
                        <div key={lang} className="flex items-center gap-3">
                          <div
                            className="w-2.5 h-2.5 rounded-full shrink-0"
                            style={{ background: LANG_COLORS[lang] || '#9ca3af' }}
                          />
                          <span className="text-sm font-mono text-slate-300 w-28 shrink-0">{lang}</span>
                          <div className="flex-1 skill-bar">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ background: LANG_COLORS[lang] || '#9ca3af', opacity: 0.7 }}
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: pct / 100 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            />
                          </div>
                          <span className="text-xs font-mono text-slate-500 w-8 text-right">{pct}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </FadeUp>
            )}
          </>
        )}



        {/* Repos grid */}
        {repos.length > 0 && (
          <FadeUp delay={0.4}>
            <div className="text-xs font-mono text-slate-600 mb-4 uppercase tracking-widest">
              // Featured Repositories
            </div>
            <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.06}>
              {repos.map((repo) => (
                <StaggerItem key={repo.id}>
                  <RepoCard repo={repo} />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </FadeUp>
        )}
      </div>
    </section>
  );
}

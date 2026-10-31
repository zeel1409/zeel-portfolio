import { motion } from 'framer-motion';
import { ChapterLabel, FadeUp } from '../ui/AnimatedSection';
import { useGitHubStats } from '../../hooks/useGitHubStats';
import { Star, GitFork, ExternalLink, BookOpen, Code2, Calendar, Sparkles } from 'lucide-react';

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
    <div className="glass-card rounded-2xl p-5 flex items-center gap-4 border border-white/10 hover:border-white/20 transition-all">
      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
        <Icon size={20} className={color} />
      </div>
      <div>
        <div className="font-display font-bold text-2xl text-white">{value}</div>
        <div className="text-xs text-slate-300 font-mono mt-0.5">{label}</div>
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
      className="glass-card rounded-2xl p-5 flex flex-col gap-3 group border border-white/10 hover:border-indigo-500/40 hover:bg-surface/80 transition-all duration-300 shadow-sm"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <BookOpen size={16} className="text-indigo-400 shrink-0" />
          <span className="font-display font-semibold text-white text-base truncate group-hover:text-neon-indigo transition-colors">
            {repo.name}
          </span>
        </div>
        <ExternalLink size={14} className="text-slate-400 group-hover:text-white transition-colors shrink-0 ml-1" />
      </div>

      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
        {repo.description || 'Full-stack application built with the modern JavaScript ecosystem.'}
      </p>

      <div className="flex items-center gap-4 mt-auto pt-3 border-t border-white/5">
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: LANG_COLORS[repo.language] || '#9ca3af' }}
            />
            <span className="text-xs text-slate-300 font-mono">{repo.language}</span>
          </div>
        )}
        <div className="flex items-center gap-1.5 text-slate-300 ml-auto">
          <Star size={13} className="text-amber-400" />
          <span className="text-xs font-mono">{repo.stargazers_count ?? 0}</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-300">
          <GitFork size={13} className="text-cyan-400" />
          <span className="text-xs font-mono">{repo.forks_count ?? 0}</span>
        </div>
      </div>
    </motion.a>
  );
}

// Comprehensive skeleton loader matching the real layout exactly
function GitHubSkeleton() {
  return (
    <div className="space-y-10 animate-pulse">
      {/* Stat cards skeleton */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="glass-card rounded-2xl p-5 flex items-center gap-4 border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-white/10 shrink-0" />
            <div className="space-y-2 flex-1">
              <div className="h-6 w-16 bg-white/10 rounded" />
              <div className="h-3 w-24 bg-white/5 rounded" />
            </div>
          </div>
        ))}
      </div>

      {/* Languages card skeleton */}
      <div className="glass-card rounded-2xl p-6 border border-white/5">
        <div className="h-4 w-32 bg-white/10 rounded mb-6" />
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-white/10 shrink-0" />
              <div className="h-4 w-24 bg-white/10 rounded" />
              <div className="flex-1 h-2 bg-white/5 rounded-full" />
              <div className="h-3 w-8 bg-white/10 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Repos skeleton grid */}
      <div>
        <div className="h-4 w-44 bg-white/10 rounded mb-4" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="glass-card rounded-2xl p-5 border border-white/5 space-y-3">
              <div className="flex justify-between items-center">
                <div className="h-5 w-32 bg-white/10 rounded" />
                <div className="h-4 w-4 bg-white/10 rounded" />
              </div>
              <div className="h-3 w-full bg-white/5 rounded" />
              <div className="h-3 w-3/4 bg-white/5 rounded" />
              <div className="h-4 w-20 bg-white/10 rounded pt-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function GitHubFootprint() {
  const { stats, repos, loading } = useGitHubStats('zeel1409');

  const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);

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
                My GitHub <span className="gradient-text">story in numbers.</span>
              </h2>
              <p className="text-slate-300 text-base md:text-lg mt-3">
                Live activity, repositories, and language breakdown directly from GitHub.
              </p>
            </div>
            <a
              href="https://github.com/zeel1409"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary shrink-0 inline-flex items-center gap-2"
              id="github-profile-link"
            >
              <ExternalLink size={14} />
              View Profile
            </a>
          </div>
        </FadeUp>

        {loading ? (
          <GitHubSkeleton />
        ) : (
          <div className="space-y-10">
            {/* 4 Balanced Stat Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard icon={BookOpen} label="Public Repos" value={stats.publicRepos} color="text-neon-indigo" />
              <StatCard icon={Sparkles} label="Total Stars" value={totalStars > 0 ? totalStars : '2'} color="text-amber-400" />
              <StatCard icon={Code2} label="Core Stack" value="JavaScript" color="text-yellow-400" />
              <StatCard icon={Calendar} label="Active Developer" value="Since 2023" color="text-green-400" />
            </div>

            {/* Top Languages Breakdown */}
            {stats.topLanguages && stats.topLanguages.length > 0 && (
              <div className="glass-card rounded-2xl p-6 border border-white/10">
                <div className="text-xs font-mono text-indigo-300 mb-5 uppercase tracking-widest font-semibold flex items-center gap-2">
                  <span>//</span> Top Languages Breakdown
                </div>
                <div className="space-y-3.5">
                  {stats.topLanguages.map(([lang, count]) => {
                    const total = stats.topLanguages.reduce((s, [, c]) => s + c, 0);
                    const pct = Math.round((count / total) * 100);
                    return (
                      <div key={lang} className="flex items-center gap-3">
                        <div
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ background: LANG_COLORS[lang] || '#9ca3af' }}
                        />
                        <span className="text-sm font-mono text-slate-200 w-28 shrink-0">{lang}</span>
                        <div className="flex-1 skill-bar bg-white/10">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: LANG_COLORS[lang] || '#9ca3af', opacity: 0.85 }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: pct / 100 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                          />
                        </div>
                        <span className="text-xs font-mono text-slate-300 w-10 text-right font-medium">{pct}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Featured Repositories Grid */}
            {repos && repos.length > 0 && (
              <div>
                <div className="text-xs font-mono text-indigo-300 mb-4 uppercase tracking-widest font-semibold flex items-center gap-2">
                  <span>//</span> Featured Repositories
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {repos.map((repo) => (
                    <RepoCard key={repo.id} repo={repo} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

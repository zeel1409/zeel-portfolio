import { useState, useEffect } from 'react';

// Reliable verified fallback stats for zeel1409 to prevent rate-limit empties
const FALLBACK_STATS = {
  name: 'kadiya zeel',
  bio: 'Full Stack MERN Developer',
  avatar: 'https://avatars.githubusercontent.com/u/167232230?v=4',
  followers: 1,
  following: 2,
  publicRepos: 12,
  topLanguages: [
    ['JavaScript', 6],
    ['TypeScript', 3],
    ['CSS', 2],
    ['HTML', 1],
  ],
  htmlUrl: 'https://github.com/zeel1409',
};

const FALLBACK_REPOS = [
  {
    id: 1,
    name: 'WanderLust',
    html_url: 'https://github.com/zeel1409/WanderLust',
    description: 'Full-stack Airbnb-inspired platform with authentication, Cloudinary uploads, and Mapbox integration.',
    language: 'JavaScript',
    stargazers_count: 1,
    forks_count: 0,
  },
  {
    id: 2,
    name: 'zeel-portfolio',
    html_url: 'https://github.com/zeel1409/zeel-portfolio',
    description: 'Cinematic storytelling developer portfolio built with React, Vite, Framer Motion, and Tailwind CSS.',
    language: 'JavaScript',
    stargazers_count: 1,
    forks_count: 0,
  },
  {
    id: 3,
    name: 'cloudbase-project',
    html_url: 'https://github.com/zeel1409/cloudbase-project',
    description: 'Cloud storage and file manager with secure JWT auth, drag & drop, and preview capabilities.',
    language: 'TypeScript',
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    id: 4,
    name: 'document-signature-app',
    html_url: 'https://github.com/zeel1409/document-signature-app',
    description: 'Web application for digital document signatures, canvas drawing, and PDF export.',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    id: 5,
    name: 'freelance-marketplace-zeel',
    html_url: 'https://github.com/zeel1409/freelance-marketplace-zeel',
    description: 'Full-featured marketplace connecting freelancers with clients, contracts, and reviews.',
    language: 'TypeScript',
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    id: 6,
    name: 'Bug-Tracker',
    html_url: 'https://github.com/zeel1409/Bug-Tracker',
    description: 'Issue tracker and project workflow management tool for development teams.',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
  },
];

export const useGitHubStats = (username = 'zeel1409') => {
  const [stats, setStats] = useState(FALLBACK_STATS);
  const [repos, setRepos] = useState(FALLBACK_REPOS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchStats = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=30&sort=updated`),
        ]);

        if (!userRes.ok || !reposRes.ok) {
          // GitHub rate-limit reached or network issue — use fallback data silently
          throw new Error('GitHub API rate limit or network error');
        }

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        // Calculate language stats
        const langCount = {};
        reposData.forEach((repo) => {
          if (repo.language) {
            langCount[repo.language] = (langCount[repo.language] || 0) + 1;
          }
        });
        const sortedLangs = Object.entries(langCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 6);

        if (isMounted) {
          setStats({
            name: userData.name || userData.login,
            bio: userData.bio,
            avatar: userData.avatar_url,
            followers: userData.followers,
            following: userData.following,
            publicRepos: userData.public_repos ?? 12,
            topLanguages: sortedLangs.length > 0 ? sortedLangs : FALLBACK_STATS.topLanguages,
            htmlUrl: userData.html_url,
          });

          const filteredRepos = reposData
            .filter((r) => !r.fork)
            .sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
            .slice(0, 6);

          setRepos(filteredRepos.length > 0 ? filteredRepos : FALLBACK_REPOS);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          // Keep reliable fallback data active
          setStats(FALLBACK_STATS);
          setRepos(FALLBACK_REPOS);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchStats();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return { stats, repos, loading, error };
};

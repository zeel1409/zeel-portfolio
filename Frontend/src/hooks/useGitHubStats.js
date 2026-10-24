import { useState, useEffect } from 'react';

export const useGitHubStats = (username) => {
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API error');

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

        setStats({
          name: userData.name,
          bio: userData.bio,
          avatar: userData.avatar_url,
          followers: userData.followers,
          following: userData.following,
          publicRepos: userData.public_repos,
          topLanguages: sortedLangs,
          htmlUrl: userData.html_url,
        });

        setRepos(
          reposData
            .filter((r) => !r.fork && r.stargazers_count >= 0)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6)
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [username]);

  return { stats, repos, loading, error };
};

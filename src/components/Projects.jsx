import React, { useEffect, useState } from 'react';

export default function Projects() {
  const [repos, setRepos] = useState([]);

  const fetchReadme = async (owner, repo) => {
    try {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`);
      const data = await response.json();
      const content = atob(data.content); // decode base64
      // Get first paragraph or first 150 characters
      const description = content.split('\n\n')[0].slice(0, 150) + '...';
      return description;
    } catch (err) {
      console.error(`Error fetching README for ${repo}:`, err);
      return null;
    }
  };

  useEffect(() => {
    fetch('https://api.github.com/users/hadikhanhk786/repos')
      .then(res => res.json())
      .then(async (data) => {
        const filtered = data
          .filter(repo => !repo.fork)
          .sort((a,b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 2);

        // Fetch README for each repo
        const reposWithReadme = await Promise.all(
          filtered.map(async (repo) => {
            const readmeContent = await fetchReadme('hadikhanhk786', repo.name);
            return {
              ...repo,
              readmeDescription: readmeContent
            };
          })
        );

        setRepos(reposWithReadme);
      })
      .catch(err => console.error("GitHub fetch error", err));
  }, []);

  const formatRepoName = (name) => {
    return name
      .split(/[-_]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">My GitHub Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {repos.map((repo, i) => (
            <a 
              key={i}
              href={repo.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:scale-[1.02] transition border border-gray-200 dark:border-gray-700"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {formatRepoName(repo.name)}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {repo.readmeDescription || repo.description || "No description provided."}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                    ⭐ {repo.stargazers_count}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                    Tailwind css
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                    Node JS
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export const isEligibleForGithubRepo = (user_attributes) => {
    console.log(user_attributes);
  
    const githubBasedSkills = [
      "Ember",
      "Svelte",
      "Angular",
      "Vue",
      "React",
      "Node.js (Express.js)",
      "Django (Python)",
      "Flask (Python)",
      "Ruby on Rails",
      "Spring Boot (Java)",
      "PHP (Laravel)",
      "Go (Gin/Gorilla)",
      ".NET",
      "Xamarin",
      "React Native",
      "Swift (iOS)",
      "Kotlin (Android)",
      "Laravel (PHP)",
    ];
  
    return githubBasedSkills.includes(user_attributes?.goal_skill);
  };
  export const DUMMY_REPO_REPORT = {
    repo_name: 'MuhamanButt/ijaz-carpets',
    evaluation_date: '2025-05-08',
    score_percentage: 26.01091334727929,
    rating: '⚠️ Needs Improvement',
    reason: 'The repository lacks engagement, has many unresolved issues, or is not maintained well.',
    breakdown: {
      Stars: 6.931471805599453,
      Forks: 0.0,
      Watchers: 2.0794415416798357,
      Issues: 15,
      Commits: 0,
      Collaborators: 2,
    },
    commit_insights: {
      total_commits: 3,
    },
    repository_details: {
      stars: 1,
      forks: 0,
      watchers: 1,
      open_issues: 0,
      archived: false,
      collaborators: 1,
    },
  };
  
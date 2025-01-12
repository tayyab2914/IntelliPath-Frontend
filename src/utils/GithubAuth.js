import React, { useEffect, useState } from 'react';
import '../pages/Settings/styles/Settings.css'
import MyButton from '../components/Button/Button';
// Replace with your GitHub client ID
const CLIENT_ID = 'Ov23libNcKCi2HnB4ix4'; 
const REDIRECT_URI = 'http://localhost:3000'; // Adjust if needed
const SCOPE = 'user:email'; // Request access to the user's email address

const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;

const GithubAuth = ({GithubURL}) => {
  const [email, setEmail] = useState(null);

  const handleGithubLogin = () => {
    window.location.href = GITHUB_AUTH_URL;
  };

  const fetchEmail = async () => {
    try {
      const response = await fetch('http://localhost:8000/githubAuth/github_callback/?code=' + new URLSearchParams(window.location.search).get('code'));
      const data = await response.json();
      if (data.email) {
        setEmail(data.email);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error('Error fetching email:', error);
    }
  };

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      fetchEmail();
    }
  });

  return (
    <div className="setting-item">
      
      {/* <input  type="text"  id="github"  name="github"  value={GithubURL || ''}  onClick={handleGithubLogin} onChange={handleGithubLogin} className="setting-input" /> */}
      <MyButton className="github-auth-btn" onClick={handleGithubLogin} text={'Login with GitHub'} w='250px'/>
      {email && <p>Your email: {email}</p>}
    </div>
  );
};

export default GithubAuth;

import React, { useEffect, useState } from "react";
import MyButton from "../components/Button/Button";
import { useSelector } from "react-redux";


const GithubAuth = () => {
    const { token } = useSelector((state) => state.authToken);
    const CLIENT_ID = "Ov23libNcKCi2HnB4ix4";
    const REDIRECT_URI = `http://localhost:8000/auth/github_callback/?token=${token}`; 
    const SCOPE = "user:email"; // Request access to the user's email address
    const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;

  const [email, setEmail] = useState(null);

  const handleGithubLogin = () => {
    window.location.href = GITHUB_AUTH_URL;
  };

  const fetchEmail = async () => {
    try {
      const response = await fetch(
        "http://localhost:8001/githubAuth/github_callback/?code=" +
          new URLSearchParams(window.location.search).get("code")
      );
      const data = await response.json();
      if (data.email) {
        setEmail(data.email);
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error("Error fetching email:", error);
    }
  };

  useEffect(() => {
    setTimeout(() => {}, 2000);
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      fetchEmail();
    }
  });

  return (
    <div className="setting-item">
      <MyButton className="github-auth-btn" onClick={handleGithubLogin} text={"Login with GitHub"} w="250px" />
      {email && <p>Your email: {email}</p>}
    </div>
  );
};

export default GithubAuth;

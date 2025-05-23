import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import axios from "axios";

const GithubAuth = () => {
  const { token } = useSelector((state) => state.authToken);
  const CLIENT_ID = "Ov23libNcKCi2HnB4ix4";
  const REDIRECT_URI = `http://localhost:3000/settings/`;
  const SCOPE = "user:email repo"; // Request access to the user's email address
  const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;

  const handleGithubLogin = () => {
    window.location.href = GITHUB_AUTH_URL;
  };

  const fetchEmail = async () => {
    try {
      const code = new URLSearchParams(window.location.search).get("code");

      if (!code) {
        console.error("Authorization code is missing in the URL.");
        return;
      }

      const bodyData = {
        code: code,
      };

      const response = await axios.post(
        "http://localhost:8000/github/auth_callback/",
        bodyData,
        {
          headers: {
            "Content-Type": "application/json", 
            Authorization: token, 
          },
        }
      );

    } catch (error) {
      console.error(
        "Error fetching email:",
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      fetchEmail();
    }
  });
  return (
    <div className="setting-item">
      <span
        className="github-auth-btn"
        onClick={handleGithubLogin}
        style={{
          marginLeft: "10px",
          color: "#3fbdb5",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        Login with Github
      </span>
    </div>
  );
};

export default GithubAuth;

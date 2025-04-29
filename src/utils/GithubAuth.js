import React, { useEffect, useState } from "react";
import MyButton from "../components/Button/Button";
import { useSelector } from "react-redux";
import axios from 'axios';



const GithubAuth = () => {
  const { token } = useSelector((state) => state.authToken);
  const CLIENT_ID = "Ov23libNcKCi2HnB4ix4";
  const REDIRECT_URI = `http://localhost:3000/settings/`;
  const SCOPE = "user:email repo";// Request access to the user's email address
  const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;

  const [email, setEmail] = useState(null);

  const handleGithubLogin = () => {
    window.location.href = GITHUB_AUTH_URL;
  };


  const fetchEmail = async () => {
    try {
      // Extract the authorization code from the URL
      const code = new URLSearchParams(window.location.search).get('code');

      if (!code) {
        console.error("Authorization code is missing in the URL.");
        return;
      }

      // Prepare the data to be sent in the POST request
      const bodyData = {
        code: code
      };


      // Send a POST request using axios
      const response = await axios.post('http://localhost:8000/github/auth_callback/', bodyData, {
        headers: {
          'Content-Type': 'application/json',   // Set content type to JSON
          'Authorization': token     // Add the Authorization header with the token
        }
      });

      // Handle the response
      console.log(response.data); // Log or process the response data as needed

    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error fetching email:', error.response ? error.response.data : error.message);
    }
  };



  useEffect(() => {
    console.log("RERENDERED")
    
    const code = new URLSearchParams(window.location.search).get('code');
    console.log(window.location)
    if (code) {
      console.log("CODE PROVIDED")
      fetchEmail();
    }
  });
  return (
    <div className="setting-item">
      <MyButton className="github-auth-btn" m={"0px"} onClick={handleGithubLogin} text={"Login with GitHub"} w="250px" />
      {email && <p>Your email: {email}</p>}
    </div>
  );
};

export default GithubAuth;
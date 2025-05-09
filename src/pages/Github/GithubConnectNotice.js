import React from "react";
import "./styles/Github.css";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
const GithubConnectNotice = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p className="github-connect-notice">
        It seems like you don't have a connected GitHub account. Please connect
        your GitHub to earn bonus points.
      </p>
      <Button
        type="primary"
        className="select-repo-btn"
        onClick={() => navigate("/settings")}
        style={{ marginTop: "16px" }}
      >
        Connect Github
      </Button>
    </div>
  );
};

export default GithubConnectNotice;

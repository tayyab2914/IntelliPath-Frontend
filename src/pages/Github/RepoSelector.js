import React from "react";
import { Radio, Button } from "antd";

const RepoSelector = ({ goalSkill, repoList, repoError, selectedRepo, onRepoChange, onSubmit }) => (
  <div>
    <p className="github-connect-notice">
      Working with <strong>{goalSkill}</strong>? Then you might have cool projects on GitHub!<br />
      Drop your GitHub to earn <strong>bonus points</strong> for real-world coding – show us what you've built! 
    </p>
    {repoError ? (
      <p style={{ color: "red" }}>{repoError}</p>
    ) : (
      <>
        <Radio.Group
          onChange={(e) => onRepoChange(e.target.value)}
          value={selectedRepo}
          style={{ display: "flex", flexDirection: "column", gap: "10px", fontWeight:"500"}}
        >
          {repoList.map((repo) => (
            <Radio key={repo} value={repo}>
              {repo}
            </Radio>
          ))}
        </Radio.Group>
        <Button type="primary" className="select-repo-btn" onClick={onSubmit} disabled={!selectedRepo} style={{ marginTop: "16px" }}>
          Submit Repo
        </Button>
      </>
    )}
  </div>
);

export default RepoSelector;

import { message, Modal, Input, Button, Popconfirm } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import GithubAuth from '../../utils/GithubAuth';

const QuizGithubModal = ({ visible, onClose, quizData}) => {
  const { user_attributes } = useSelector((state) => state.authToken);
  const [githubAuthenticated, setGithubAuthenticated] = useState(false);
  const [repoName, setRepoName] = useState("");
  const [repoURL, setRepoURL] = useState("");

  console.log(quizData)
  useEffect(() => {
    if (user_attributes?.github) {
      setGithubAuthenticated(true);
      message.success("Github account authenticated!");
    } else {
      message.error("Please authenticate your Github account!");
    }
  }, [user_attributes]);

  const handleRepoSubmit = () => {
    if (!repoName.trim()) {
      message.error("Please enter a repository name.");
      return;
    }
    const constructedURL = `https://github.com/${user_attributes.github}/${repoName}`;
    setRepoURL(constructedURL);
  };

  const confirmSubmission = () => {
    console.log("Final Repo URL submitted:", repoURL);
    message.success("Repository submitted successfully!");
    onClose();
  };

  return (
    <Modal open={visible} onCancel={onClose} footer={null} centered title="Github Authentication Required" >
      {!githubAuthenticated && <GithubAuth />}

      {githubAuthenticated && (
        <div>
          <p>You are authenticated as <strong>{user_attributes.github}</strong>.</p>
          <Input placeholder="Enter your repository name (case-sensitive)" value={repoName} onChange={(e) => setRepoName(e.target.value)} style={{ marginBottom: "1rem" }} />
          <Popconfirm
            title={<div> <p style={{margin:"0px"}}><b>Confirm this repository URL?</b></p> <a href={repoURL} target="_blank" rel="noopener noreferrer"> {repoURL} </a> </div> }
            onConfirm={confirmSubmission}
            okText="Confirm"
            cancelText="Cancel"
            placement="topRight"
            disabled={!repoName.trim()}
          >
            <Button type="primary" block onClick={handleRepoSubmit}>
              Submit Repository
            </Button>
          </Popconfirm>
        </div>
      )}
    </Modal>
  );
};

export default QuizGithubModal;

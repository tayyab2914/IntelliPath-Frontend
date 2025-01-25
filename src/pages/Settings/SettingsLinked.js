import React from "react";
import "./styles/Settings.css";
import { Col, Divider, Row } from "antd";
import { CloseOutlined } from "@ant-design/icons"; // Import the CloseOutlined icon
import GithubAuth from "../../utils/GithubAuth";
import MyButton from "../../components/Button/Button";

const SettingsLinked = ({ setSettingsData, SettingsData }) => {
  const handleUnlink = () => {
    // Add your unlink logic here
    setSettingsData({ ...SettingsData, github: "" }); // Example of unlinking GitHub
    console.log("GitHub account unlinked");
  };

  return (
    <div>
      <p className="settings-heading">Linked</p>
      <Divider />
      <Row className="setting-linked-row">
        <Col xs={5} sm={3} lg={2}>
          <p className="setting-label">GitHub</p>
        </Col>
        <Col xs={19} sm={21} lg={22}>
          {SettingsData?.github ? (
            <span className="settings-github-link">
              <p>https://github.com/{SettingsData.github}</p>
              <span className="settings-github-link-btn">
              <CloseOutlined onClick={handleUnlink}/>
              </span>
            </span>
          ) : (
            <GithubAuth GithubURL={SettingsData.github_link} />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default SettingsLinked;

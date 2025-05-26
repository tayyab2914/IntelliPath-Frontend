import React from "react";
import "./styles/Settings.css";
import { Col, Divider, Row, Badge } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import GithubAuth from "../../utils/GithubAuth";

const SettingsLinked = ({ setSettingsData, SettingsData }) => {
  const handleUnlink = () => {
    setSettingsData({ ...SettingsData, github: "" });
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
              <Badge  count={  <CloseOutlined onClick={handleUnlink} style={{ backgroundColor: "#f5222d", color: "white", cursor: "pointer", fontSize: "10px", padding: "3px", borderRadius: "50%", }} />  }  >
                <p>https://github.com/{SettingsData?.github}</p>
                </Badge>

            </span>
          ) : (
            <GithubAuth />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default SettingsLinked;

import React from "react";
import "./styles/Settings.css";
import { Col, Divider, Row, Badge } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import GithubAuth from "../../utils/GithubAuth";

const SettingsLinked = ({ setSettingsData, SettingsData, fetchSettings }) => {
  const handleUnlink = () => {
    setSettingsData({ ...SettingsData, github: "" });
  };

  return (
    <div>
      <p className="settings-heading">Github</p>
      <Divider />
      <Row className="setting-linked-row">

        <Col xs={24}>
          {SettingsData?.github ? (
            <span className="settings-github-link">
              <Badge  count={  <CloseOutlined onClick={handleUnlink} style={{ backgroundColor: "#f5222d", color: "white", cursor: "pointer", fontSize: "10px", padding: "3px", borderRadius: "50%", }} />  }  >
                <p>https://github.com/{SettingsData?.github}</p>
                </Badge>

            </span>
          ) : (
            <GithubAuth fetchSettings={fetchSettings} />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default SettingsLinked;

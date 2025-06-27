import React, { useEffect, useState } from "react";
import { Col, Row, Select } from "antd";
import { useNavigate } from "react-router-dom";
import useWindowWidth from "../../../hooks/useWindowWidth";
import "../styles/TribeChat.css";
import TribeAdminOptions from "./TribeAdminOptions";
import OnlineMembersList from "./OnlineMembersList";
import SuggestedUsersBtn from "../SuggestedUsersBtn";
const { Option } = Select;

const TribeChatHeader = ({
  availableThreads,
  setSelectedThread,
  SelectedThread,
  OnlineMembers
}) => {
  const { tribe, threads } = availableThreads;
  const navigate = useNavigate();
  const windowWidth = useWindowWidth();
  const handleThreadChange = (threadId) => {
    const selectedThread = threads?.find((thread) => thread.id === threadId);
    setSelectedThread(selectedThread);
  };

  return (
    <Row className="tribes-chat-header-row" gutter={[0,10]}>
      <Col xs={24} className="tribes-chat-header-goal-col">
        <p className="tribes-chat-header-goal">{tribe?.name}</p>
        { tribe?.is_admin && <TribeAdminOptions />}
      </Col>
      <Col xs={24} className="tribes-chat-header-icons-col">
        <SuggestedUsersBtn tribeGoalDomain = {tribe?.category}/>
      </Col>
      <Col xs={24}>
        <Select
          className="tribes-chat-select"
          value={SelectedThread?.id || ""}
          onChange={handleThreadChange}
          size="medium"
        >
          {threads?.map((thread) => (
            <Option key={thread.id} value={thread.id}>
              {thread.name}{" "}
            </Option>
          ))}
        </Select>
        
      </Col>
      <Col xs={24} style={{marginTop:"5px"}}>
       <OnlineMembersList OnlineMembers={OnlineMembers} />
      </Col>
    </Row>
  );
};

export default TribeChatHeader;

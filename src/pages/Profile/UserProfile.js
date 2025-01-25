import { Col, Divider, Row, Popover, Button } from "antd";
import React, { useState,useEffect } from "react";
import MyBadge from "../../components/Badge/MyBadge";
import MyIcon from "../../components/Icon/MyIcon";
import UserGoalCard from "./UserGoalCard.";
import { ICONS } from "../../data/IconData";
import './styles/UserProfile.css'
import { useNavigate } from "react-router-dom";

const UserProfile = ({ UserInfo }) => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const navigate = useNavigate()

  const handleVisibleChange = (visible) => {
    setPopoverVisible(visible);
  };

  const popoverContent = (
    <div className="profile-popover-content">
       <p className="profile-popover-item"><MyIcon type={'map'}/> Roadmap</p>
         <p  className="profile-popover-item">   <MyIcon type={'leaderboard'}/>Leaderboard</p>
         <p  className="profile-popover-item" onClick={()=>navigate('/settings')}>  <MyIcon type={'edit'}/> Edit Profile</p>
    </div>
  );

  return (
    <Row className="profile-container">
      <Col xs={24} className="profile-header">
        <Row>
          <Col xs={20} md={12} className="profile-info">
            <img src={UserInfo.display_image ? UserInfo.display_image : ICONS.avatar} alt="" className="profile-image" />
            <div className="profile-details">
              <p className="profile-name">{UserInfo.first_name} {UserInfo.last_name}</p>
              <p className="profile-email">{UserInfo.email}</p>
              <div className="profile-masteries">
                {UserInfo?.masteries?.map((mastery, key) => (
                  <MyBadge type={mastery} size="md" key={key} className="profile-mastery-badge" />
                ))}
              </div>
            </div>
          </Col>
          <Col xs={4} md={12} className="profile-options">
            <Popover  content={popoverContent}  trigger="click"  visible={popoverVisible}  onVisibleChange={handleVisibleChange} placement="bottomLeft">
              <MyIcon type={"elipsis"} className="profile-options-icon" />
            </Popover>
          </Col>
        </Row>
      </Col>

      <Col xs={24} className="profile-interests">
        <Divider />
        <p className="profile-title">Interests</p>
        <Row className="profile-interests-goals" gutter={[10, 10]}>
          {UserInfo?.goals?.map((goal, key) => (
            <Col xs={24} sm={12} md={8} lg={6} key={key} className="profile-goal-card">
              <UserGoalCard GoalData={goal} GoalNum={key + 1} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default UserProfile;

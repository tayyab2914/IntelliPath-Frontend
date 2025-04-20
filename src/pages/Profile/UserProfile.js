import { Col, Divider, Row, Popover, Descriptions, Statistic, Card } from "antd";
import React, { useState } from "react";
import MyBadge from "../../components/Badge/MyBadge";
import MyIcon from "../../components/Icon/MyIcon";
import { ICONS } from "../../data/IconData";
import './styles/UserProfile.css';
import { useNavigate } from "react-router-dom";
import { DOMAIN_NAME } from "../../utils/GlobalSettings";

const UserProfile = ({ UserInfo, isUsersOwnProfile}) => {
  const [popoverVisible, setPopoverVisible] = useState(false);
  const navigate = useNavigate();

  const handleVisibleChange = (visible) => {
    setPopoverVisible(visible);
  };

  const popoverContent = (
    <div className="profile-popover-content">
      <p className="profile-popover-item" onClick={() => navigate("/roadmap")}><MyIcon type={'map'} /> Roadmap</p>
      <p className="profile-popover-item" onClick={() => navigate("/leaderboard")}><MyIcon type={'leaderboard'} /> Leaderboard</p>
      <p className="profile-popover-item" onClick={() => navigate('/settings')}><MyIcon type={'edit'} /> Edit Profile</p>
    </div>
  );

  return (
    <Row className="profile-container" gutter={[10,10]}>
      {/* Profile Header */}
      <Col xs={24} className="profile-header">
        <Row>
          <Col xs={20} md={12} className="profile-info">
            <img 
              src={UserInfo?.profile_picture ? `${DOMAIN_NAME}${UserInfo?.profile_picture}` : ICONS.avatar} 
              alt="" 
              className="profile-image" 
            />
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
            {isUsersOwnProfile && <Popover  content={popoverContent}  trigger="click"  visible={popoverVisible}  onVisibleChange={handleVisibleChange}  placement="bottomLeft" >
              <MyIcon type={"elipsis"} className="profile-options-icon" />
            </Popover>}
          </Col>
        </Row>
      </Col>

      {/* Career Goal Section */}
      <Col xs={24} lg={12}  className="user-profile-career-goals">
        <Card title="🎯 Career Goal" >
          <Descriptions column={1} layout="horizontal">
            <Descriptions.Item label="Domain">{UserInfo.goal_domain}</Descriptions.Item>
            <Descriptions.Item label="Skill">{UserInfo.goal_skill}</Descriptions.Item>
            <Descriptions.Item label="Completion Time">{UserInfo.goal_completion_time}</Descriptions.Item>
            <Descriptions.Item label="Weekly Hours">{UserInfo.time_dedication_per_week}</Descriptions.Item>
          </Descriptions>
        </Card>
      </Col>

      {/* Stats Section */}
      <Col xs={24} lg={12} className="user-profile-stats">
        <Card title="📊 Stats" >
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Statistic title="Current Level" value={UserInfo.current_skill_level} />
            </Col>
            <Col xs={24} sm={8}>
              <Statistic title="Age" value={UserInfo.age} />
            </Col>
            <Col xs={24} sm={8}>
              <Statistic title="Education" value={UserInfo.education} />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default UserProfile;

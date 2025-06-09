import React, { useState, useEffect } from "react";
import { Spin, List, Avatar, Popover, Tag } from "antd";
import MyButton from "../../components/Button/Button";
import MyIcon from "../../components/Icon/MyIcon";
import { useSelector } from "react-redux";
import { API_GET_SIMILAR_USERS_TRIBE } from "../../apis/LeaderBoardApis";
import {  MEDIA_URL } from "../../utils/GlobalSettings";
import { ICONS } from "../../data/IconData";
import { useNavigate } from "react-router-dom";
import './styles/SuggestedUsers.css'
const SuggestedUsersBtn = ({ tribeGoalDomain }) => {
  const [visible, setVisible] = useState(false);
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { token, user_attributes } = useSelector((state) => state.authToken);

  const fetchSuggestedUsers = async () => {
    try {
      setLoading(true);
      const response = await API_GET_SIMILAR_USERS_TRIBE(
        token,
        user_attributes?.id,
        tribeGoalDomain,
        true //is_tribe
      );
      setSuggestedUsers(response?.similar_users || []);
      console.log(response)
    } catch (error) {
      console.error("Error fetching suggested users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (visible && suggestedUsers.length === 0) {
      fetchSuggestedUsers();
    }
  }, [visible]);

  const popoverContent = (
    <div style={{ maxHeight: "300px", overflowY: "auto", minWidth: "300px" }}>
      {loading ? (
        <div className="text-center">
          <Spin />
        </div>
      ) : suggestedUsers.length === 0 ? (
        <p>No suggestions available</p>
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={suggestedUsers}
          renderItem={(user) => (
            <List.Item
              key={user?.user_id}
              onClick={() => {
                setVisible(false);
                navigate(`/profile/${user?.user_id}`);
              }}
              style={{ cursor: "pointer" }}
            >
              <List.Item.Meta
                avatar={
                  <Avatar>
                          <img src={`${MEDIA_URL}${user?.profile_picture_url}` || ICONS?.avatar} onError={(e) => { e.target.onerror = null; e.target.src = ICONS?.avatar }}/>
    
                  </Avatar>
                }
                title={user?.full_name}
                description={<div>
                    <div>{user?.email}</div>
                    <Tag color="cyan" style={{marginTop:"5px"}}>{user?.goal_domain}</Tag>
                    <Tag color="green" style={{marginTop:"5px"}}>Engagement Score : {user?.engagement_score}</Tag>
                </div>}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );

  return (
    <Popover
      content={popoverContent}
      title="Suggested Users"
      trigger="click"
      open={visible}
      onOpenChange={(newVisible) => setVisible(newVisible)}
      placement="bottom"
      className="suggest-users-btn-popover"
    >
      <MyButton
        w="100%"
        className="tribes-chat-header-joined-tribe-btn"
        variant="outlined-dark"
        text={
          <span className="align-vertically-centered">
            <MyIcon type="shineAccent" className="suggested-user-icon" /> Suggested Users
          </span>
        }
      />
    </Popover>
  );
};

export default SuggestedUsersBtn;

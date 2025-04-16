import React, { useEffect } from "react";
import { Collapse, Avatar, List } from "antd";
import MyIcon from "../../../components/Icon/MyIcon";
import "./../styles/OnlineMembers.css";
import { DOMAIN_NAME } from "../../../utils/GlobalSettings";
import { ICONS } from "../../../data/IconData";

const { Panel } = Collapse;

const OnlineMembersList = ({ OnlineMembers }) => {
  useEffect(() => {
  }, [OnlineMembers]);

  return (
    <Collapse 
      defaultActiveKey={['1']} 
      expandIconPosition="end" 
      className="online-member-collapse" 
      expandIcon={({ isActive }) => ( <MyIcon type="expand_icon" className={`collapse-arrow ${isActive ? 'expanded' : ''}`} /> )}
    >
      <Panel 
        header={
          <span className="online-member-collapse-header">
            <MyIcon type={"online"} className={"online-members-icon"} />
            <span style={{ marginLeft: 8 }}>Online Members</span>
          </span>
        } 
        key="1"
        className="online-members-panel"
      >
        <List
          className="online-members-list"
          dataSource={OnlineMembers?.users || []}
          renderItem={(userEmail, index) => (
            <List.Item className="online-member-item">
              <List.Item.Meta
                avatar={
                  <Avatar 
                    src={
                      OnlineMembers?.profile_pictures?.[index] 
                        ? `${DOMAIN_NAME}${OnlineMembers.profile_pictures[index]}`
                        : ICONS.avatar
                    } 
                  />
                }
                title={<span className="email">{userEmail}</span>}
              />
            </List.Item>
          )}
        />
      </Panel>
    </Collapse>
  );
};

export default OnlineMembersList;
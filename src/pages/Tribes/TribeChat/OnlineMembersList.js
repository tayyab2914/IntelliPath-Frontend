import React, { useEffect } from "react";
import { Collapse, Avatar, List } from "antd";
import MyIcon from "../../../components/Icon/MyIcon";
import "./../styles/OnlineMembers.css";
import {  MEDIA_URL } from "../../../utils/GlobalSettings";
import { ICONS } from "../../../data/IconData";
import { useNavigate } from "react-router-dom";
import useWindowWidth from "../../../hooks/useWindowWidth";

const { Panel } = Collapse;

const OnlineMembersList = ({ OnlineMembers }) => {
    const windowWidth = useWindowWidth()
    const navigate = useNavigate()

  const memberClickHandler = (member_id)=>{
    navigate(`/profile/${member_id}`)
  }
  useEffect(() => {
    console.log(OnlineMembers)
  }, [OnlineMembers]);
  return (
    <Collapse 
      defaultActiveKey={[windowWidth > 992 ?"1":'0']} 
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
            <List.Item className="online-member-item" onClick={()=>memberClickHandler(OnlineMembers?.ids?.[index] )}>
              <List.Item.Meta
              
                title={<span className="email">
                     <img src={`${MEDIA_URL}${OnlineMembers.profile_pictures[index]}` || ICONS?.avatar} onError={(e) => { e.target.onerror = null; e.target.src = ICONS?.avatar }}  className="online-member-image"/>
                    {OnlineMembers?.names?.[index]}</span>}
              />

            </List.Item>
          )}
        />
      </Panel>
    </Collapse>
  );
};

export default OnlineMembersList;
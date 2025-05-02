import { Avatar, Divider, Popover } from "antd";
import React, { useEffect, useState } from "react";
import { API_GET_TRIBE_MEMBERS } from "../../../../apis/TribeApis";
import { useSelector } from "react-redux";
import { DOMAIN_NAME } from "../../../../utils/GlobalSettings";
import { ICONS } from "../../../../data/IconData";
import MyIcon from "../../../../components/Icon/MyIcon";
import './../../styles/TribeThread.css'
import { useNavigate } from "react-router-dom";

const TribeMembersDropdownContent = ({ tribeId }) => {
  const { token } = useSelector((state) => state.authToken);
  const [tribeMembers, setTribeMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const getTribeMembers = async () => {
    setLoading(true);
    try {
      const response = await API_GET_TRIBE_MEMBERS(token, tribeId);
      setTribeMembers(response.members || []);
    } catch (err) {
      console.error("Failed to fetch tribe members", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTribeMembers();
  }, [tribeId]);


  const memberClickHandler = (member_id)=>{
    navigate(`/profile/${member_id}`)
  }
  // Overlay content (List of members)
  const overlayContent = (
    <div className="tribe-member-list">
        <p className="title">All Members</p>
        <Divider/>
        {tribeMembers?.map((member) => (
          <>
          <div key={member?.id} className="tribe-member-list-item" onClick={()=>memberClickHandler(member?.id)}>
            <Avatar
              src={member?.profile_photo ? `${DOMAIN_NAME}${member?.profile_photo}` : ICONS.avatar}
              size="small"
            />
            <span style={{ marginLeft: "10px" }}>{member?.first_name} {member?.last_name}</span>
            
          </div>
          </>
        ))}
    </div>
  );

  return (
    <Popover
      content={overlayContent} // Pass the content directly here
      trigger={["click"]}
      placement="bottomRight"
      className="tribe-members-dropdown"
      
    >
      <span style={{ cursor: "pointer" }}>
        <MyIcon type={"tribes"} />
      </span>
    </Popover>
  );
};

export default TribeMembersDropdownContent;

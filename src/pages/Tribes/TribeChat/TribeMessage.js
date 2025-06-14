
import {  MEDIA_URL } from '../../../utils/GlobalSettings';
import { FORMAT_TIMESTAMP } from '../../../utils/ReusableFunctionalities';
import { useNavigate } from 'react-router-dom';
import { Tag } from 'antd';
import { ICONS } from '../../../data/IconData';

const TribeMessage = ({ msg, currentUserID, showRight }) => {
  const navigate = useNavigate();

  const profileClickHandler = () => {
    console.log(msg)
    navigate(`/profile/${msg.user}`);
  };

  // Check if the message sender is the current user
  const isCurrentUser = msg.user === currentUserID;
  return (
    <div className={`tribes-message ${msg?.is_main_user ? 't-m-right' : 't-m-left'}`}>
      <div className="t-m-avatar" onClick={profileClickHandler}>
           <img src={`${MEDIA_URL}${msg.profile_picture}` || ICONS?.avatar} onError={(e) => { e.target.onerror = null; e.target.src = ICONS?.avatar }}  />
      </div>
      <div className="t-m-content">
        <p className="t-m-content-member_name">
          {isCurrentUser ? 'You' : msg.first_name || msg.user_name}
        </p>
       {msg?.is_banned ? <Tag color='red'>Message Against Community Guidelines.</Tag>:<p className="t-m-content-message">
            
            {msg.message}</p>}
        <p className="t-m-content-time">{FORMAT_TIMESTAMP(msg.timestamp)}</p>
      </div>
    </div>
  );
};

export default TribeMessage;

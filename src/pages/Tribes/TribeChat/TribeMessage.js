import React from 'react';
import { DOMAIN_NAME } from '../../../utils/GlobalSettings';
import { FORMAT_TIMESTAMP } from '../../../utils/ReusableFunctionalities';
import MyIcon from '../../../components/Icon/MyIcon';
import { useNavigate } from 'react-router-dom';

const TribeMessage = ({ msg, currentUserID, showRight }) => {
  const navigate = useNavigate();

  const profileClickHandler = () => {
    navigate(`/user/${currentUserID}`);
  };

  // Check if the message sender is the current user
  const isCurrentUser = msg.user === currentUserID;

  return (
    <div className={`tribes-message ${msg?.is_main_user ? 't-m-right' : 't-m-left'}`}>
      <div className="t-m-avatar" onClick={profileClickHandler}>
        {msg.profile_picture ? (
          <img src={`${DOMAIN_NAME}${msg.profile_picture}`} alt="user" />
        ) : (
          <MyIcon type={'user'} style={{ height: '20px' }} />
        )}
      </div>
      <div className="t-m-content">
        <p className="t-m-content-member_name">
          {isCurrentUser ? 'You' : msg.first_name || msg.user_name}
        </p>
        <p className="t-m-content-message">{msg.message}</p>
        <p className="t-m-content-time">{FORMAT_TIMESTAMP(msg.timestamp)}</p>
      </div>
    </div>
  );
};

export default TribeMessage;

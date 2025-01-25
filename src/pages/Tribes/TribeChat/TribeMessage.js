import React from 'react'
import { DOMAIN_NAME } from '../../../utils/GlobalSettings'
import { FORMAT_TIMESTAMP } from '../../../utils/ReusableFunctionalities'

const TribeMessage = ({msg,currentUserID}) => {
  return (
      <div className={`tribes-message ${msg.user === currentUserID ? 't-m-right' : 't-m-left'}`} >
        <div className="t-m-avatar"><img src={`${DOMAIN_NAME}${msg.profile_picture}`} alt="" /></div>
        <div className="t-m-content">
            <p className="t-m-content-member_name">
                {msg.id === currentUserID ? "You" : msg.user_name}
            </p>
            <p className="t-m-content-message">{msg.message}</p>
            <p className="t-m-content-time">{FORMAT_TIMESTAMP(msg.timestamp)}</p>
        </div>
    </div>
  )
}

export default TribeMessage

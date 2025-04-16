import React from 'react'
import { DOMAIN_NAME } from '../../../utils/GlobalSettings'
import { FORMAT_TIMESTAMP } from '../../../utils/ReusableFunctionalities'
import MyIcon from '../../../components/Icon/MyIcon'
import { useNavigate } from 'react-router-dom'

const TribeMessage = ({msg,currentUserID}) => {
    console.log('TribeMessage',msg,currentUserID)
    const navigate = useNavigate()

    const profileClickHandler = ()=>{
        navigate(`/user/${currentUserID}`)
    }
  return (
      <div className={`tribes-message ${msg.user === currentUserID ? 't-m-right' : 't-m-left'}`} >
        <div className="t-m-avatar" onClick={profileClickHandler}>
            
            {msg.profile_picture ? <img src={`${DOMAIN_NAME}${msg.profile_picture}` } alt="" />:
            <MyIcon type={'user'} style={{height:"20px"}}/>}
        </div>
        <div className="t-m-content">
            <p className="t-m-content-member_name">
                {msg.user === currentUserID ? "You" : msg.first_name || msg.user_name}
            </p>
            <p className="t-m-content-message">{msg.message}</p>
            <p className="t-m-content-time">{FORMAT_TIMESTAMP(msg.timestamp)}</p>
        </div>
    </div>
  )
}

export default TribeMessage

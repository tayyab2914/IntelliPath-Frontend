import React from 'react'
import MyButton from '../../components/Button/Button'
import MyIcon from '../../components/Icon/MyIcon'
import { useNavigate } from 'react-router-dom'

const SuggestedUsersBtn = ({tribeGoalDomain}) => {
    const navigate = useNavigate()
    console.log(tribeGoalDomain)
  return (
    <MyButton
          w={"100%" }
          className="tribes-chat-header-joined-tribe-btn"
          variant="outlined-dark"
          text={
            <span className="align-vertically-centered">
              <MyIcon type="shineAccent" className="suggested-user-icon" />{" "}
              Suggested Users
            </span>
          }
          onClick={() => navigate("/user/46")}
        />
  )
}

export default SuggestedUsersBtn

import { Col, Divider, Row, Tag } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICONS } from "../../data/IconData";
import MyButton from "../../components/Button/Button";
import './styles/SimilarProfile.css'
import { API_GET_SIMILAR_USERS } from "../../apis/LeaderBoardApis";
import { useSelector } from "react-redux";
import { DOMAIN_NAME } from "../../utils/GlobalSettings";
const SimilarProfiles = ({UserInfo}) => {
  const navigate = useNavigate()
  const {token} = useSelector((state) => state.authToken)
  const [SimilarUsers, setSimilarUsers] = useState([]);


  const getSimilarUsers = async()=>{
    if(UserInfo?.id)
    {
        const response= await API_GET_SIMILAR_USERS(token,UserInfo?.id)
        setSimilarUsers(response?.similar_users)
    }
  }
  useEffect(()=>{
    getSimilarUsers()
  },[UserInfo])
  return (
    <div className="similar-profile-main">
      <Divider />
      <p className="profile-title">Similar Profiles</p>
      <Row gutter={[10, 10]}>
        {SimilarUsers?.map((user) => (
          <Col xs={24} sm={12} md={8} lg={6}>
           <div className="similar-profile-card-container-outer"  onClick={()=>navigate(`/profile/${user?.user_id}`)}>
           <div className="similar-profile-card-container">
             <img src={`${DOMAIN_NAME}${user?.profile_picture_url}` || ICONS?.avatar} onError={(e) => { e.target.onerror = null; e.target.src = ICONS?.avatar }} className="similar-profile-image" />
              <div className="similar-profile-details">
                <p className="similar-profile-name">{user?.full_name}</p>
                <p className="similar-profile-email">{user?.email}</p>
                {/* <p className="similar-profile-email"></p> */}
                <Tag color="cyan" style={{marginTop:"5px"}}>{user?.goal_domain}</Tag>
                <div className="similar-profile-masteries">
                  {/* {user?.masteries?.map((mastery, key) => ( <MyBadge type={mastery} size="md" key={key} className="similar-profile-mastery-badge" /> ))} */}
                </div>
              </div>
            </div>
            <MyButton text={"View Profile"} variant="outlined-dark" className={'similar-profile-view-btn'} onClick={()=>navigate(`/profile/${user?.id}`)}/>
           </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SimilarProfiles;

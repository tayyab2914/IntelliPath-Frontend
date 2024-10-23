import { Col, Divider, Row } from "antd";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ICONS } from "../../data/IconData";
import MyBadge from "../../components/Badge/MyBadge";
import MyButton from "../../components/Button/Button";
import { SIMILAR_PROFILE_DATA } from "../../data/ProfileData";

const SimilarProfiles = () => {
  const { user_id } = useParams();
  const navigate = useNavigate()
  const [SimilarUsers, setSimilarUsers] = useState(SIMILAR_PROFILE_DATA);

  return (
    <div className="similar-profile-main">
      <Divider />
      <p className="profile-title">Similar Profiles</p>
      <Row gutter={[10, 10]}>
        {SimilarUsers?.map((user) => (
          <Col xs={24} sm={12} md={8} lg={6}>
           <div className="similar-profile-card-container-outer">
           <div className="similar-profile-card-container">
              <img src={user.display_image ? user.display_image : ICONS.avatar} alt="" className="similar-profile-image" />
              <div className="similar-profile-details">
                <p className="similar-profile-name">{user.name}</p>
                <p className="similar-profile-email">{user.email}</p>
                <div className="similar-profile-masteries">
                  {user?.masteries?.map((mastery, key) => ( <MyBadge type={mastery} size="md" key={key} className="similar-profile-mastery-badge" /> ))}
                </div>
              </div>
            </div>
            <MyButton text={"View Profile"} variant="outlined-dark" onClick={()=>navigate(`/user/${user.user_id}`)}/>
           </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SimilarProfiles;

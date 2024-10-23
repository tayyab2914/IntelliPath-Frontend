import { Col, Divider, Row } from "antd";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ICONS } from "../../components/Icon/IconData";
import MyBadge from "../../components/Badge/MyBadge";
import MyButton from "../../components/Button/Button";

const SimilarProfiles = () => {
  const { user_id } = useParams();
  const navigate = useNavigate()
  const [SimilarUsers, setSimilarUsers] = useState([
    {
      user_id: "12345",
      name: "Muhaman Ijaz",
      email: "muhaman.ijaz@example.com",
      age: 22,
      is_logged_in: true,
      linkedin_link: "https://linkedin.com/in/muhamanijaz",
      github_link: "https://github.com/muhamanijaz",
      display_image: null,
      is_blind_mode_enabled: false,
      roadmap_id: null,
      onboarding_id: "onboard_67890",
      account_creation_time: "2023-10-23T10:00:00Z",
      goals: [
        {
          name: "Full Stack Developer",
          rank: 31,
          engagement_prediction: 67,
        },
        {
          name: "Mobile App Developer",
          rank: 25,
          engagement_prediction: 23,
        },
        {
          name: "Backend Developer",
          rank: 25,
          engagement_prediction: 23,
        },
        {
          name: "Mobile App Developer",
          rank: 25,
          engagement_prediction: 23,
        },
        {
          name: "Backend Developer",
          rank: 25,
          engagement_prediction: 23,
        },
      ],
      masteries: [
        "badges_achievement_7",
        "badges_roadmap_completion_6",
        "badges_community_engagement_6",
      ],
    },
    {
      user_id: "12346",
      name: "Sarah Khan",
      email: "sarah.khan@example.com",
      age: 28,
      is_logged_in: false,
      linkedin_link: "https://linkedin.com/in/sarahkhan",
      github_link: "https://github.com/sarahkhan",
      display_image: null,
      is_blind_mode_enabled: true,
      roadmap_id: "roadmap_123",
      onboarding_id: null,
      account_creation_time: "2023-11-01T09:00:00Z",
      goals: [
        {
          name: "Data Scientist",
          rank: 15,
          engagement_prediction: 75,
        },
        {
          name: "AI Researcher",
          rank: 10,
          engagement_prediction: 88,
        },
      ],
      masteries: ["badges_community_engagement_6", "badges_time_on_platform_6","badges_achievement_2"],
    },
    {
      user_id: "12347",
      name: "Ahmed Ali",
      email: "ahmed.ali@example.com",
      age: 30,
      is_logged_in: true,
      linkedin_link: "https://linkedin.com/in/ahmedali",
      github_link: "https://github.com/ahmedali",
      display_image: null,
      is_blind_mode_enabled: false,
      roadmap_id: "roadmap_456",
      onboarding_id: "onboard_12345",
      account_creation_time: "2023-09-15T11:00:00Z",
      goals: [
        {
          name: "Cloud Architect",
          rank: 8,
          engagement_prediction: 94,
        },
        {
          name: "DevOps Engineer",
          rank: 5,
          engagement_prediction: 90,
        },
      ],
      masteries: ["badges_contribution_2", "badges_community_engagement_2","badges_time_on_platform_6"],
    },
    {
      user_id: "12348",
      name: "Fatima Zain",
      email: "fatima.zain@example.com",
      age: 26,
      is_logged_in: true,
      linkedin_link: "https://linkedin.com/in/fatimazain",
      github_link: "https://github.com/fatimazain",
      display_image: null,
      is_blind_mode_enabled: true,
      roadmap_id: null,
      onboarding_id: "onboard_67891",
      account_creation_time: "2023-08-20T15:30:00Z",
      goals: [
        {
          name: "UX/UI Designer",
          rank: 18,
          engagement_prediction: 65,
        },
        {
          name: "Product Designer",
          rank: 20,
          engagement_prediction: 60,
        },
      ],
      masteries: ["badges_contribution_2", "badges_contribution_5","badges_time_on_platform_3"],
    },
  ]);

  return (
    <div className="similar-profile-main">
      <Divider />
      <p className="profile-title">Similar Profiles</p>
      <Row gutter={[10, 10]}>
        {SimilarUsers?.map((user) => (
          <Col xs={24} sm={12} md={8} lg={6}>
           <div className="similar-profile-card-container-outer">
           <div className="similar-profile-card-container">
              <img
                src={user.display_image ? user.display_image : ICONS.avatar}
                alt=""
                className="similar-profile-image"
              />
              <div className="similar-profile-details">
                <p className="similar-profile-name">{user.name}</p>
                <p className="similar-profile-email">{user.email}</p>
                <div className="similar-profile-masteries">
                  {user?.masteries?.map((mastery, key) => (
                    <MyBadge
                      type={mastery}
                      size="md"
                      key={key}
                      className="similar-profile-mastery-badge"
                    />
                  ))}
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

import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'; 
import './styles/Profile.css';
import Footer from '../../components/Footer/Footer';
import NavbarMain from '../../components/Navbar/NavbarMain';
import UserProfile from './UserProfile';
import SimilarProfiles from './SimilarProfiles';


const ProfileMain = () => {
    const { user_id } = useParams(); 
    const [user_data, setUser_data] = useState({
        "user_id": "12345",
        "name": "Muhaman Ijaz",
        "email": "muhaman.ijaz@example.com",
        "age": 22,
        "is_logged_in": true,
        "linkedin_link": "https://linkedin.com/in/muhamanijaz",
        "github_link": "https://github.com/muhamanijaz",
        "display_image":null,
        // "display_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5q9GlWCAoQHPpOiDOECuYUeXW9MQP7Ddt-Q&s",
        "is_blind_mode_enabled": false,
        "roadmap_id": null,
        "onboarding_id": "onboard_67890",
        "account_creation_time": "2023-10-23T10:00:00Z",
        "goals": [
          {
              "name": "Full Stack Developer",
              "rank": 31,
              "engagement_prediction":67
          },
          {
              "name": "Mobile App Developer",
              "rank": 25,
              "engagement_prediction":23
          },
          {
              "name": "Backend Developer",
              "rank": 25,
              "engagement_prediction":23
          },
          {
              "name": "Mobile App Developer",
              "rank": 25,
              "engagement_prediction":23
          },
          {
              "name": "Backend Developer",
              "rank": 25,
              "engagement_prediction":23
          }
        ],
        "masteries": ["badges_achievement_7", "badges_roadmap_completion_6",'badges_community_engagement_6'
        ]
      }
      );

      useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      useEffect(()=>{
        //call api and pass user_id to get user data and save in
        // setUser_data(api.response)
      })

  return (
    <>
    <NavbarMain/>
    <div className="generic-container">
      <div className="profile-main">
        <UserProfile userData={user_data}/>
        <SimilarProfiles userData={user_data}/>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProfileMain;

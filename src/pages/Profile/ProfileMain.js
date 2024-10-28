import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'; 
import './styles/Profile.css';
import Footer from '../../components/Footer/Footer';
import NavbarMain from '../../components/Navbar/NavbarMain';
import UserProfile from './UserProfile';
import SimilarProfiles from './SimilarProfiles';
import { SINGLE_USER_DATA } from '../../data/ProfileData';


const ProfileMain = () => {
    const { user_id } = useParams(); 
    const [user_data, setUser_data] = useState(SINGLE_USER_DATA);

      useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      useEffect(()=>{
        console.log(user_id)
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

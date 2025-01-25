import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/Profile.css";
import Footer from "../../components/Footer/Footer";
import NavbarMain from "../../components/Navbar/NavbarMain";
import UserProfile from "./UserProfile";
import SimilarProfiles from "./SimilarProfiles";
import { SINGLE_USER_DATA } from "../../data/ProfileData";
import { useSelector } from "react-redux";
import { API_GET_USER_ATTRIBUTE } from "../../apis/CoreApis";

const ProfileMain = () => {
  const { user_id } = useParams();
  const [UserInfo, setUserInfo] = useState({});
  const { token } = useSelector((state) => state.authToken);

  const fetchSettings = async () => {
    const response = await API_GET_USER_ATTRIBUTE(token);
    setUserInfo(response);
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      <NavbarMain />
      <div className="generic-container">
        <div className="profile-main">
          <UserProfile UserInfo={UserInfo} />
          <SimilarProfiles UserInfo={UserInfo} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileMain;

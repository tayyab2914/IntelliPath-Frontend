import React, { useEffect, useState } from "react";
import NavbarMain from "../../components/Navbar/NavbarMain";
import { IS_ROADMAP_GENERATED } from "../../utils/TempSettings";
import { useNavigate } from "react-router-dom";
import GenericNotification from "../../components/Notification/GenericNotification";
import { notification } from "antd";
import { ROADMAP_NOTIFICATION_BUTTON_DATA } from "./RoadmapFunctionality";
import Footer from "../../components/Footer/Footer";
import RoadmapDisplay from "./RoadmapFlow/RoadmapDisplay";
import LandingPage from "../../components/LandingPage/LandingPage";
import { IMAGES } from "../../data/ImageData";
import { API_GET_ROADMAP } from "../../apis/RoadmapApis";
import { useSelector } from "react-redux";
const RoadmapMain = () => {
  const navigate = useNavigate();
  const [ShowNotification, setShowNotification] = useState(false);
  const { token } =useSelector((state) => state.authToken);
  const [RoadmapData, setRoadmapData] = useState({});
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const getRoadmap = async()=>{
    const response = await API_GET_ROADMAP(token)
    console.log(response)
    setRoadmapData(response?.roadmap_data)
    if (!response) {
        setShowNotification(true);
      }
  }

  useEffect(() => {
    getRoadmap()
  }, [navigate]);

  return (
    <>
      <NavbarMain />
      {ShowNotification && ( <GenericNotification message={"Onboarding Required"} description={ "You need to complete the onboarding process before generating your roadmap." } buttons={ROADMAP_NOTIFICATION_BUTTON_DATA(navigate)} /> )}
      {ShowNotification && <LandingPage imageSrc={IMAGES.roadmap2} whiteText={"AI Generated"} accentText={"Pathways"} btnText={"Proceed To Onboarding"} onClick={()=>navigate('/onboarding')} description={" Get personalized learning roadmaps tailored to your skills, goals, and pace. IntelliPath uses AI to dynamically adjust your curriculum, helping you achieve success with an efficient, customized learning path."}/>}
      {!ShowNotification && <>
      <RoadmapDisplay RoadmapData = {RoadmapData}/>
      </>}
      <Footer/>
    </>
  );
};

export default RoadmapMain;

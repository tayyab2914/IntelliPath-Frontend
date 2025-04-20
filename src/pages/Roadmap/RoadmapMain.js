import React, { useEffect, useState } from "react";
import NavbarMain from "../../components/Navbar/NavbarMain";
import { IS_ROADMAP_GENERATED } from "../../utils/TempSettings";
import { useNavigate } from "react-router-dom";
import GenericNotification from "../../components/Notification/GenericNotification";
import { message, notification, Spin } from "antd";
import { ROADMAP_NOTIFICATION_BUTTON_DATA } from "./RoadmapFunctionality";
import Footer from "../../components/Footer/Footer";
import RoadmapDisplay from "./RoadmapFlow/RoadmapDisplay";
import LandingPage from "../../components/LandingPage/LandingPage";
import { IMAGES } from "../../data/ImageData";
import { API_DELETE_ROADMAP, API_GENERATE_ROADMAP, API_GET_ROADMAP } from "../../apis/RoadmapApis";
import { useSelector } from "react-redux";
import { API_GENERATE_QUIZZES } from "../../apis/QuizApis";
import { API_RECOMMEND_COURSES } from "../../apis/CourseApis";
const RoadmapMain = () => {
  const navigate = useNavigate();
  const [ShowNotification, setShowNotification] = useState(false);
  const { token,user_attributes } =useSelector((state) => state.authToken);
  const [RoadmapData, setRoadmapData] = useState({});
    const [ShowSpinner, setShowSpinner] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const getRoadmap = async()=>{
    const response = await API_GET_ROADMAP(token)
    console.log(response?.roadmap_data)
    setRoadmapData(response?.roadmap_data)
    if (!response?.roadmap_data) {
        setShowNotification(true);
      }
  }
  const regenerateRoadmapHandler = async() => {
    await API_GENERATE_ROADMAP(token, null, true, setShowSpinner);
    API_RECOMMEND_COURSES(token)
    API_GENERATE_QUIZZES(token,user_attributes?.id)
    message.success("Roadmap Regenerated Successfully!");
    getRoadmap()
};
const deleteRoadmapHandler = async()=>{
    await API_DELETE_ROADMAP(token,setShowSpinner,navigate)
}
  useEffect(() => {
    getRoadmap()
  }, [navigate]);

  return (
    <>
        {/* {ShowSpinner && <Spin fullscreen/>} */}
      <NavbarMain />
      {ShowNotification && ( <GenericNotification message={"Onboarding Required"} description={ "You need to complete the onboarding process before generating your roadmap." } buttons={ROADMAP_NOTIFICATION_BUTTON_DATA(navigate)} /> )}
      {ShowNotification && <LandingPage imageSrc={IMAGES.roadmap2} whiteText={"AI Generated"} accentText={"Pathways"} btnText={"Proceed To Onboarding"} onClick={()=>navigate('/onboarding')} description={" Get personalized learning roadmaps tailored to your skills, goals, and pace. IntelliPath uses AI to dynamically adjust your curriculum, helping you achieve success with an efficient, customized learning path."}/>}
      {!ShowNotification && <>
      <RoadmapDisplay RoadmapData = {RoadmapData} regenerateRoadmapHandler={regenerateRoadmapHandler} deleteRoadmapHandler={deleteRoadmapHandler}/>
      </>}
      <Footer/>
    </>
  );
};

export default RoadmapMain;

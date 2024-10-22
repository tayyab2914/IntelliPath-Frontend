import React, { useEffect, useState } from "react";
import NavbarMain from "../../components/Navbar/NavbarMain";
import { IS_ROADMAP_GENERATED } from "../../utils/TempSettings";
import { useNavigate } from "react-router-dom";
import GenericNotification from "../../components/Notification/GenericNotification";
import { notification } from "antd";
import { ROADMAP_NOTIFICATION_BUTTON_DATA } from "./RoadmapFunctionality";
import Footer from "../../components/Footer/Footer";
import RoadmapLandingPage from "./RoadmapLandingPage";

const RoadmapMain = () => {
  const navigate = useNavigate();
  const [ShowNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (!IS_ROADMAP_GENERATED) {
      setShowNotification(true);
    }
  }, [navigate]);

  return (
    <>
      <NavbarMain />
      {ShowNotification && ( <GenericNotification message={"Onboarding Required"} description={ "You need to complete the onboarding process before generating your roadmap." } buttons={ROADMAP_NOTIFICATION_BUTTON_DATA(navigate)} /> )}
      {ShowNotification && <RoadmapLandingPage/>}
      {!ShowNotification && <>
      
      </>}
      <Footer/>
    </>
  );
};

export default RoadmapMain;

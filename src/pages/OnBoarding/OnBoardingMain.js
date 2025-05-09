import React, { useState, useEffect } from "react";
import NavbarMain from "../../components/Navbar/NavbarMain";
import Footer from "../../components/Footer/Footer";
import TitleMain from "../../components/Title/TitleMain";
import Steps from "../../components/Steps/Steps";
import Question from "./Question";
import { message, Spin } from "antd";
import "./styles/OnBoarding.css";
import { ONBOARDING_DATA } from "../../data/OnBoardingData";
import { useSelector } from "react-redux";
import { API_GENERATE_ROADMAP } from "../../apis/RoadmapApis";
import { useNavigate } from "react-router-dom";
import { API_RECOMMEND_COURSES } from "../../apis/CourseApis";
import CustomSpinner from "../../components/Loader/CustomSpinner";
import { GENERATING_ROADMAP_MESSAGES } from "../../components/Loader/SpinnerMessages";

const OnBoardingMain = () => {
  const [CurrentStep, setCurrentStep] = useState(0);
  const [SelectedGoal, setSelectedGoal] = useState("");
  const [UserSelections, setUserSelections] = useState({});
  const [ShowQuestionnaire, setShowQuestionnaire] = useState(true);
  const [ShowSpinner, setShowSpinner] = useState(false);
  const navigate = useNavigate()
  const { token, blind_mode, isLoggedIn, user_attributes, rerender_app } =
    useSelector((state) => state.authToken);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const onOptionSelect = (option, questionNum) => {
    setUserSelections((prevState) => ({ ...prevState, [questionNum]: option }));
    if (questionNum === 1) {
      setSelectedGoal(option);
    }
    if (CurrentStep < ONBOARDING_DATA.length - 1) {
      setCurrentStep(CurrentStep + 1);
    } else {
      setShowQuestionnaire(false);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(CurrentStep - 1);
  };

  const verifyCompletion = async () => {
    if (CurrentStep === ONBOARDING_DATA.length - 1 && !ShowQuestionnaire) {
      await API_GENERATE_ROADMAP(token, UserSelections, false,setShowSpinner);
      API_RECOMMEND_COURSES(token)
      message.success("Onboarding complete!");
      navigate('/roadmap')
    }
  };
  useEffect(() => {
    verifyCompletion();
  }, [UserSelections]);

  return (
    <>
    {ShowSpinner && <CustomSpinner fullscreen={true} messages={GENERATING_ROADMAP_MESSAGES}/>}
      <NavbarMain />
      <TitleMain
        title={"Onboarding"}
        description={"Lets Customize Your Learning Journey!"}
      />
      <Steps currentStep={CurrentStep + 1} />
      {ShowQuestionnaire && (
        <Question
          data={ONBOARDING_DATA[CurrentStep]}
          onSelect={onOptionSelect}
          selectedGoal={SelectedGoal}
          questionNum={CurrentStep}
          handlePreviousStep={handlePreviousStep}
        />
      )}
      <Footer />
    </>
  );
};

export default OnBoardingMain;

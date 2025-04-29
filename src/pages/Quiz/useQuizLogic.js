import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { API_COMPLETE_QUIZ, API_GET_QUIZ } from "../../apis/QuizApis";
import { GET_CURRENT_LEVEL_AND_QUIZ, calculateQuizMarks } from "./Quizfunctionality";
import { message } from "antd";

const useQuizLogic = () => {
  const [quizData, setQuizData] = useState({});
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState({});
  const [showResultModal, setShowResultModal] = useState(false);
  const [showGithubModal, setShowGithubModal] = useState(false);
  const [showResultBtn, setShowResultBtn] = useState(false);
  const [RoadmapModule, setRoadmapModule] = useState("");

  const { token, user_attributes } = useSelector((state) => state.authToken);
  const location = useLocation();
  const navigate = useNavigate();
  const questionRefs = useRef([]);

  const getQuizData = async (roadmap_module) => {
    setRoadmapModule(roadmap_module);
    const response = await API_GET_QUIZ(token, roadmap_module);
    console.log("API_GET_QUIZz", response);
    if (response?.quiz_data?.is_completed) {
      setShowGithubModal(true);
      return;
    }
    const quizCurrentLevel = GET_CURRENT_LEVEL_AND_QUIZ(response?.quiz_data);
    if (quizCurrentLevel == 404) {
      message.error("Quiz not found!");
      navigate("/roadmap");
    } else if (quizCurrentLevel) {
      setQuizData(quizCurrentLevel);
    } else {
        message.success(`All quizzes attempted for ${roadmap_module}`);
      navigate("/roadmap");
    }
  };

  const handleAnswerChange = (questionIndex, optionIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = optionIndex;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = async () => {
    const score = calculateQuizMarks(quizData, answers,setResult,setShowResultBtn,setShowResultModal);
        if(score != -1)
       { 
            await API_COMPLETE_QUIZ(token,RoadmapModule,quizData?.quiz_level,score)
            setResult(score)
        }
  };

  const proceedHandler = () => {
    getQuizData(RoadmapModule);
    setShowResultModal(false);
    setShowResultBtn(false);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const roadmap_module = searchParams.get("roadmap_module");
    if (roadmap_module) getQuizData(roadmap_module);
  }, [location.search]);

  useEffect(() => {
    if (quizData?.questions?.length) {
      setAnswers(Array(quizData.questions.length).fill(null));
    }
  }, [quizData]);

  return { quizData, answers, handleAnswerChange, handleSubmit, proceedHandler, result, showResultModal, setShowResultModal, showGithubModal, setShowGithubModal, showResultBtn, questionRefs, };
};

export default useQuizLogic;

import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { API_COMPLETE_QUIZ, API_GENERATE_QUIZ_BY_MODULE } from "../../apis/QuizApis";
import {
  GET_CURRENT_LEVEL_AND_QUIZ,
  calculateQuizMarks,
} from "./Quizfunctionality";
import { message } from "antd";

const useQuizLogic = () => {
  const [quizData, setQuizData] = useState({});
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState({});
  const [showResultModal, setShowResultModal] = useState(false);
  const [showGithubModal, setShowGithubModal] = useState(false);
  const [showResultBtn, setShowResultBtn] = useState(false);
  const [RoadmapModule, setRoadmapModule] = useState("");
  const [ShowSpinner, setShowSpinner] = useState(false);

  const { token, user_attributes } = useSelector((state) => state.authToken);
  const location = useLocation();
  const navigate = useNavigate();
  const questionRefs = useRef([]);

  const getQuizData = async (roadmap_module) => {
    setRoadmapModule(roadmap_module);
    let response;
    let retries = 0;
    const MAX_RETRIES = 3;
    do {
        response = await API_GENERATE_QUIZ_BY_MODULE(token, roadmap_module,setShowSpinner);
        console.log('retries',retries)
        retries++;
    } while(response?.quiz_data?.error && retries < MAX_RETRIES && !ShowSpinner)

    console.log('API_GENERATE_QUIZ_BY_MODULE',response)
   

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
    const { score, totalQuestions } = calculateQuizMarks( quizData, answers );
    if (score != -1) {
      const response = await API_COMPLETE_QUIZ( token, RoadmapModule, quizData?.quiz_level, score );
      if (response) {
        const correct_answers = score;
        const incorrect_answers = totalQuestions - score;

        setResult({ correct_answers, incorrect_answers });
        setShowResultBtn(true);
        setShowResultModal(true);
        message.success("Quiz submitted successfully!");
      }
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
    if (quizData?.question?.length) {
      setAnswers(Array(quizData.question.length).fill(null));
    }
  }, [quizData]);

  return { quizData, ShowSpinner, answers, handleAnswerChange, handleSubmit, proceedHandler, result, showResultModal, setShowResultModal, showGithubModal, setShowGithubModal, showResultBtn, questionRefs, };
};

export default useQuizLogic;

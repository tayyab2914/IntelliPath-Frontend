import React, { useEffect, useState, useRef } from "react";
import NavbarMain from "../../components/Navbar/NavbarMain";
import TitleMain from "../../components/Title/TitleMain";
import { Col, Radio, Row, message } from "antd";
import "./styles/Quiz.css";
import { QUIZ_DATA, RESULT_DATA } from "../../data/QuizData";
import MyButton from "../../components/Button/Button";
import useWindowWidth from "../../hooks/useWindowWidth";
import Footer from "../../components/Footer/Footer";
import QuizHeader from "./QuizHeader";
import ResultModal from "./ResultModal";
import { SubmitAndVerifyAnswers } from "./Quizfunctionality";

const QuizMain = () => {
  const [quizData, setQuizData] = useState(QUIZ_DATA);
  const [showResultModal, setShowResultModal] = useState(false);
  const [result, setResult] = useState(RESULT_DATA);
  const [ShowResultBtn, setShowResultBtn] = useState(false);
  const windowWidth = useWindowWidth();
  const [answers, setAnswers] = useState(Array(QUIZ_DATA?.questions?.length || 0).fill(null));

  const questionRefs = useRef([]);

  useEffect(() => {
    if (quizData?.questions?.length) {
      questionRefs.current = quizData.questions.map(() => React.createRef());
    }
  }, [quizData]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleAnswerChange = (questionIndex, optionIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = optionIndex;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    SubmitAndVerifyAnswers(answers,questionRefs,setShowResultModal,setShowResultModal)
 
  };
const proceedHandler = ()=>{
    message.success("Proceeding to next level")
    setShowResultModal(false)
    setShowResultBtn(false)
    //call new data api
}
  return (
    <div>
      <NavbarMain />
      <div className="generic-container">
        <div className="quiz-page-main">
          <TitleMain title={"Exam system"} description={"Challenge Yourself with a Variety of Quizzes Across Different Levels"} />
          <QuizHeader quizData={quizData} />

          {quizData?.questions?.map((item, questionIndex) => (
            <Row className="quiz-question-row" key={questionIndex} ref={questionRefs?.current[questionIndex]} >
              <Col xs={24} className="quiz-question-col">
                <p className="quiz-question"> Question {questionIndex + 1}: {item?.question} </p>
                <Radio.Group onChange={(e) => handleAnswerChange(questionIndex, e.target.value)} value={answers[questionIndex]} >
                  {item?.options?.map((option, optionIndex) => ( <p key={optionIndex} className="quiz-option"> <Radio value={optionIndex}>{option}</Radio> </p> ))}
                </Radio.Group>
              </Col>
            </Row>
          ))}

          {showResultModal && (
            <ResultModal correct_answer={result.correct_answers} incorrect_answer={result.incorrect_answers} visible={showResultModal} onClose={() => setShowResultModal(false)} quizData={quizData} onProceed={proceedHandler} />
          )}
            
          <Row className="quiz-submit-row">
            <Col xs={24} className="quiz-submit-col">
             {ShowResultBtn ?  <MyButton variant="filled" onClick={()=>setShowResultModal(true)} text={"Show Result"} w={windowWidth < 576 ? "100%" : "250px"} />
             :
             <MyButton variant="filled" onClick={handleSubmit} text={"Submit Quiz"} w={windowWidth < 576 ? "100%" : "250px"} />}
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuizMain;

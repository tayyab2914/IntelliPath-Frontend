import React from "react";
import TitleMain from "../../components/Title/TitleMain";
import QuizHeader from "./QuizHeader";
import QuizQuestion from "./QuizQuestion";
import ResultModal from "./ResultModal";
import MyButton from "../../components/Button/Button";
import { Row, Col, Spin } from "antd";
import useWindowWidth from "../../hooks/useWindowWidth";
import CustomSpinner from "../../components/Loader/CustomSpinner";
import { GENERATING_QUIZ_MESSAGES } from "../../components/Loader/SpinnerMessages";

const QuizPage = ({ quizData, answers,ShowSpinner, handleAnswerChange, handleSubmit, proceedHandler, result, showResultModal, setShowResultModal,   showResultBtn, questionRefs }) => {
  const windowWidth = useWindowWidth();

  return (
      <div className="quiz-page-main">
        {ShowSpinner && <CustomSpinner fullscreen={true} messages={GENERATING_QUIZ_MESSAGES}/>}
        <TitleMain title="Exam system" description="Challenge Yourself with a Variety of Quizzes Across Different Levels" />
        { !quizData?.is_completed &&<QuizHeader quizData={quizData} />}

        {quizData?.quiz?.map((question, index) => (
          <QuizQuestion key={index} question={question} questionIndex={index} questionRefs={questionRefs} handleAnswerChange={handleAnswerChange} answers={answers} />
        ))}

        {showResultModal && (
          <ResultModal result={result} visible={showResultModal} onClose={() => setShowResultModal(false)} quizData={quizData} onProceed={proceedHandler} />
        )}

        

       { !quizData?.is_completed && <Row className="quiz-submit-row">
          <Col xs={24} className="quiz-submit-col">
            {showResultBtn ? (
              <MyButton variant="filled" onClick={() => setShowResultModal(true)} text="Show Result" w={windowWidth < 576 ? "100%" : "250px"} />
            ) : (
              <MyButton variant="filled" onClick={handleSubmit} text="Submit Quiz" w={windowWidth < 576 ? "100%" : "250px"} />
            )}
          </Col>
        </Row>}
    </div>
  );
};

export default QuizPage;

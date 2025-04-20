import React from "react";
import TitleMain from "../../components/Title/TitleMain";
import QuizHeader from "./QuizHeader";
import QuizQuestion from "./QuizQuestion";
import ResultModal from "./ResultModal";
import QuizGithubModal from "./QuizGithubModal";
import MyButton from "../../components/Button/Button";
import { Row, Col } from "antd";
import useWindowWidth from "../../hooks/useWindowWidth";

const QuizPage = ({ quizData, answers, handleAnswerChange, handleSubmit, proceedHandler, result, showResultModal, setShowResultModal, showGithubModal, setShowGithubModal, showResultBtn, questionRefs }) => {
  const windowWidth = useWindowWidth();

  return (
      <div className="quiz-page-main">
        <TitleMain title="Exam system" description="Challenge Yourself with a Variety of Quizzes Across Different Levels" />
        { !quizData?.is_completed &&<QuizHeader quizData={quizData} />}

        {quizData?.questions?.map((question, index) => (
          <QuizQuestion key={index} question={question} questionIndex={index} questionRefs={questionRefs} handleAnswerChange={handleAnswerChange} answers={answers} />
        ))}

        {showResultModal && (
          <ResultModal correct_answer={result} visible={showResultModal} onClose={() => setShowResultModal(false)} quizData={quizData} onProceed={proceedHandler} />
        )}

        {showGithubModal && <QuizGithubModal visible={showGithubModal} onClose={() => setShowGithubModal(false)} quizData={quizData}/>}

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

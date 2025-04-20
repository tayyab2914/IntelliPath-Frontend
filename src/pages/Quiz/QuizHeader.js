import { Col, Row } from "antd";
import React from "react";
import { GetTags } from "./Quizfunctionality";

const QuizHeader = ({ quizData }) => {
  return (
    <Row className="quiz-header-row">
      <Col xs={24} className="quiz-header-col">
        <p className="quiz-header-goal">Quiz: {quizData?.quiz_topic} Knowledge</p>
        <GetTags level={quizData?.quiz_level} />
      </Col>
    </Row>
  );
};

export default QuizHeader;

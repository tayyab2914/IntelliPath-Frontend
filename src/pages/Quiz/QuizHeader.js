import { Col, Row } from "antd";
import React from "react";
import { GetTags } from "./Quizfunctionality";

const QuizHeader = ({ quizData }) => {
  return (
    <Row className="quiz-header-row">
      <Col xs={24} className="quiz-header-col">
        <p className="quiz-header-goal">Quiz: {quizData?.topic} Knowledge</p>
        <GetTags level={quizData?.level} />
      </Col>
    </Row>
  );
};

export default QuizHeader;

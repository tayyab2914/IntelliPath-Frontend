import { Col, Row } from "antd";
import React from "react";
import { GetTags } from "./Quizfunctionality";
import { useLocation } from "react-router-dom";

const QuizHeader = ({ quizData }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const roadmap_module = searchParams.get("roadmap_module");
  return (
    <Row className="quiz-header-row">
      <Col xs={24} className="quiz-header-col">
        <p className="quiz-header-goal">Quiz: {roadmap_module} Knowledge</p>
      </Col>
      <Col xs={24} style={{marginTop:"5px"}}>
        <GetTags level={quizData?.quiz_level} />
      </Col>
    </Row>
  );
};

export default QuizHeader;

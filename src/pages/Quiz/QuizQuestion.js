import { Col, Radio, Row } from 'antd'
import React from 'react'

const QuizQuestion = ({question, questionIndex,questionRefs,handleAnswerChange,answers}) => {
  return (
    <Row className="quiz-question-row" key={questionIndex} ref={questionRefs?.current[questionIndex]} >
        <Col xs={24} className="quiz-question-col">
            <p className="quiz-question"> Question {questionIndex + 1}: {question?.question} </p>
            <Radio.Group onChange={(e) => handleAnswerChange(questionIndex, e.target.value)} value={answers[questionIndex]} >
                {question?.options?.map((option, optionIndex) => ( <p key={optionIndex} className="quiz-option"> <Radio value={optionIndex}>{option}</Radio> </p> ))}
            </Radio.Group>
        </Col>
    </Row>
  )
}

export default QuizQuestion

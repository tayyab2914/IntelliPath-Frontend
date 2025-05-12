import { Modal } from "antd";
import React from "react";
import "./styles/ResultModal.css"; // Make sure this includes styles for `.correct` and `.incorrect`

const ResultDetailsModal = ({ quizData, isVisible, onClose, result, answers }) => {
  return (
    <div>
      <Modal
        title="Overall Performance"
        visible={isVisible}
        onOk={onClose}
        onCancel={onClose}
    footer={false}
        width={600}
      >
        <div className="result-details">
        {quizData?.quiz?.map((q, idx) => {
          const selectedIndex = answers?.[idx];
          const userAnswer = q.options[selectedIndex]; // Get selected option string
          const isCorrect = userAnswer === q.answer;

          return (
            <div key={idx} className="question-block">
              <p>
                <strong>{idx + 1}. {q.question}</strong>
              </p>
              <ul>
                {q.options.map((option, i) => {
                  const isUserChoice = i === selectedIndex;
                  const isCorrectAnswer = option === q.answer;

                  let className = "option-item";
                  if (isUserChoice && !isCorrectAnswer) className += " incorrect";
                  if (isCorrectAnswer) className += " correct";

                  return (
                    <li key={i} className={className}>
                      {option}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}</div>
      </Modal>
    </div>
  );
};

export default ResultDetailsModal;

import React, { useEffect } from "react";
import { Tag } from "antd";

const Question = ({ data, selectedGoal, onSelect, questionNum }) => {

  return (
    <div className="onboarding-main">
      <div className="onboarding-main-inner">
        <div className="onboarding-question-outer">
          <Tag color="cyan" className="onboarding-question" data-aos="fade-right"> {data.Question} </Tag>
        </div>
        <br />
        <div className="onboarding-answer-outer">
          <div className="onboarding-answer-main">
            {questionNum !== 2 &&
              data.Options.map((option) => (
                <Tag className="onboarding-answer" data-aos="fade-left" key={option} onClick={() => onSelect(option, questionNum)}  > {option} </Tag>
              ))}

            {questionNum === 2 &&
              data.Options[selectedGoal] &&
              data.Options[selectedGoal].map((option) => (
                <Tag className="onboarding-answer" data-aos="fade-left" key={option} onClick={() => onSelect(option, questionNum)} > {option} </Tag>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;

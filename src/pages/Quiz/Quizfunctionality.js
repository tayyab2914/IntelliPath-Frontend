import "./styles/Quiz.css";
import { QUIZ_DATA } from "../../data/QuizData";
import { CheckCircleOutlined,LoadingOutlined,LockOutlined   } from "@ant-design/icons";
import { message, Tag } from "antd";
import { useEffect } from "react";
import './styles/Quiz.css'
export const GetTags = ({ level }) => {
  return (
    <>
    {console.log(level)}
    {level == "Beginner" && <span className="quiz-header-tag-component">
      <Tag color="blue"><LoadingOutlined className="quiz-header-tag-icon"/>Beginner</Tag>
      <Tag color="green"><LockOutlined className="quiz-header-tag-icon"/>Intermediate</Tag>
      <Tag color="red"><LockOutlined className="quiz-header-tag-icon"/>Advanced</Tag>
    </span>
    }
    {level == "Intermediate" && <span className="quiz-header-tag-component">
      <Tag color="blue"><CheckCircleOutlined className="quiz-header-tag-icon"/>Beginner</Tag>
      <Tag color="green"><LoadingOutlined className="quiz-header-tag-icon"/>Intermediate</Tag>
      <Tag color="red"><LockOutlined className="quiz-header-tag-icon"/>Advanced</Tag>
    </span>
    }
    {level == "Advanced" && <span className="quiz-header-tag-component">
      <Tag color="blue"><CheckCircleOutlined className="quiz-header-tag-icon"/>Beginner</Tag>
      <Tag color="green"><CheckCircleOutlined className="quiz-header-tag-icon"/>Intermediate</Tag>
      <Tag color="red"><LoadingOutlined className="quiz-header-tag-icon"/>Advanced</Tag>
    </span>
    }
    </>
  );
};

export const getPercentages = (correct_answer,incorrect_answer)=>{
    
  const total = correct_answer + incorrect_answer;
  const correctPercentage = ((correct_answer / total) * 100).toFixed(2);
  const incorrectPercentage = ((incorrect_answer / total) * 100).toFixed(2);
  return {total,correctPercentage,incorrectPercentage}
}

export const SubmitAndVerifyAnswers = (answers,questionRefs,setShowResultModal,setShowResultBtn) => {
    const firstUnansweredIndex = answers.findIndex((answer) => answer === null);

    if (firstUnansweredIndex !== -1) {
      questionRefs?.current[firstUnansweredIndex]?.current?.scrollIntoView({ behavior: "smooth" });
      message.error("Please answer all questions before submitting.");
    } else {
      setShowResultModal(true);
      setShowResultBtn(true)
      console.log("Selected Answers:", answers);
      message.success(`Your answers: ${JSON.stringify(answers)}`);
    }
  };
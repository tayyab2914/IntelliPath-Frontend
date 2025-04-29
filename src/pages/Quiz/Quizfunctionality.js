import "./styles/Quiz.css";
import { QUIZ_DATA } from "../../data/QuizData";
import { CheckCircleOutlined,LoadingOutlined,LockOutlined   } from "@ant-design/icons";
import { message, Tag } from "antd";
import { useEffect } from "react";
import './styles/Quiz.css'
export const GetTags = ({ level }) => {
  return (
    <>
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

export const getPercentages = (correct_answer,quizData)=>{
  const total = quizData?.questions?.length;
  const correctPercentage = ((correct_answer / total) * 100).toFixed(2);

  const incorrectPercentage = 100 - correctPercentage
  return {total,correctPercentage,incorrectPercentage}
}

export const calculateQuizMarks = (quizData, answers, setResult, setShowResultBtn, setShowResultModal) => {
    console.log(quizData, answers)
    if (!quizData || !quizData?.questions) return -1;
  
    // Check for unanswered questions
    const anyUnanswered = answers.some(answer => answer === null);
    if (anyUnanswered) {
      message.error("Please attempt all questions before submitting!");
      return -1;
    }
  
    let score = 0;
  
    quizData.questions.forEach((question, index) => {
      if (question.options[answers[index]] === question.answer) {
        score += 1;
      }
    });
  
  
    const totalQuestions = quizData.questions.length;
    const correct_answers = score;
    const incorrect_answers = totalQuestions - score;
  
    setResult({ correct_answers, incorrect_answers });
  
    setShowResultBtn(true);
    setShowResultModal(true);
    message.success("Quiz submitted successfully!");
    return score;
  };
  


  export const GET_CURRENT_LEVEL_AND_QUIZ = (quizData)=>{
    if (!quizData || !quizData.questions) return 404;
  
    return quizData.questions.find(level => !level.is_completed) || null;
  }
  
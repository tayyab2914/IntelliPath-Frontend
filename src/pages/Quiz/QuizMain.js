import React from "react";
import NavbarMain from "../../components/Navbar/NavbarMain";
import Footer from "../../components/Footer/Footer";
import QuizPage from "./QuizPage";
import useQuizLogic from "./useQuizLogic";

const QuizMain = () => {
  const quizProps = useQuizLogic();

  
  return (
    <div>
      <NavbarMain />
      <div className="generic-container">
        <QuizPage {...quizProps} />
      </div>
      <Footer />
    </div>
  );
};

export default QuizMain;

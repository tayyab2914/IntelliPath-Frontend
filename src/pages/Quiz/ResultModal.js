import React, { useState } from "react";
import { message, Modal, Progress } from "antd";
import MyButton from "../../components/Button/Button";
import './styles/ResultModal.css';
import MyIcon from "../../components/Icon/MyIcon";
import { getPercentages } from "./Quizfunctionality";
import ResultDetailsModal from "./ResultDetailsModal";

const ResultModal = ({ visible, onClose, onProceed, quizData, result,answers }) => {
  const [showResult, setShowResult] = useState(false);
  const { total, correctPercentage, incorrectPercentage } = getPercentages(result, quizData);
  return (
    <Modal
      title="Overall Performance"
      visible={visible}
      onOk={onProceed}
      onCancel={onClose}
      footer={[
        <span>
          <MyButton key="view" variant="outlined" text="View Result" onClick={() => setShowResult(true)} />
          <MyButton key="proceed" text="Proceed to Next Level" onClick={onProceed} />
        </span>
      ]}
    >
      <div className="result-main">
        <Progress type="circle" percent={Number(correctPercentage)} size={120} strokeWidth={10} format={() => `${result?.correct_answers}/${quizData?.quiz?.length}`} />

        

        <div className="result-description">
          <p> <MyIcon type={'tickColored'} size="md" /> <span className="result-description-text">Correct answers </span>{+correctPercentage}% </p>
          <p> <MyIcon type={'crossColored'} size="md" /> <span className="result-description-text">Incorrect answers </span>{+incorrectPercentage}% </p>
        </div>
      
         <ResultDetailsModal answers={answers} quizData={quizData} result={result} isVisible={showResult} onClose={()=>setShowResult(false)}/>
 
      </div>
    </Modal>
  );
};

export default ResultModal;

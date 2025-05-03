import React from "react";
import { message, Modal, Popconfirm, Progress } from "antd";
import MyButton from "../../components/Button/Button";
import './styles/ResultModal.css';
import MyIcon from "../../components/Icon/MyIcon";
import { RESULT_DATA } from '../../data/QuizData'; 
import { getPercentages } from "./Quizfunctionality";

const ResultModal = ({ visible, onClose, onProceed, quizData,result }) => {
const {total,correctPercentage,incorrectPercentage} = getPercentages(result,quizData)

  const retakeQuizHandler = ()=>{
    message.info('retakeQuizHandler clicked')
  }

  return (
    <Modal title="Overall Performance" visible={visible} onOk={onProceed} onCancel={onClose}
      footer={
        [ 
            // <MyButton text={"Retake"} onClick={retakeQuizHandler} variant="outlined-dark"/>
            // ,quizData?.level !== "Advanced" && <Popconfirm title="Are you sure you want to proceed, you want be able to retake quiz of current level?" onConfirm={onProceed} okText="Yes" cancelText="No" className='roadmap-popconfirm' placement="topRight">
                <MyButton key="proceed"  text="Proceed to Next Level" onClick={onProceed}/>
            // </Popconfirm>
            
        ]}
    >
      <div className="result-main">
        <Progress type="circle" percent={correctPercentage} size={120} strokeWidth={10} format={(percent) => `${percent} Days`}/>
        <div  className="result-description">
          <p> <MyIcon type={'tickColored'} size="md" /> <span className="result-description-text">Correct answers </span>{+correctPercentage}% </p>
          <p> <MyIcon type={'crossColored'} size="md" /> <span className="result-description-text">Incorrect answers </span>{+incorrectPercentage}% </p>
        </div>
      </div>
    </Modal>
  );
};

export default ResultModal;

import React from "react";
import "./styles/Steps.css";
import { Progress } from "antd";

const Steps = ({ currentStep }) => {
  const totalSteps = 6; // Total number of steps
  const progressPercent = (currentStep / totalSteps) * 100;

  return (
    <div style={{ textAlign: "center" }}>
      <Progress
        steps={totalSteps}
        percent={progressPercent}
        size={[10, 10]}
        format={() => ` `} 
      />
    </div>
  );
};

export default Steps;

import React from "react";
import "./AutoTextCropper.css";
import { Tooltip } from "antd";
const AutoTextCropper = ({ text, textStyles, numOfLines = 1, onClick,  TooltipTitle="" }) => {
  return (
    <Tooltip title={TooltipTitle}>
      <span
        className="two-line-ellipsis"
        style={{ textAlign: "start" }}
        onClick={onClick}
      >
        <div className="flex-parent">
          <div className="flex-child short-and-fixed"></div>

          <div className={`flex-child long-and-truncated-${numOfLines}`}>
            <span style={textStyles}>{text}</span>
          </div>

          <div className="flex-child short-and-fixed"></div>
        </div>
      </span>
    </Tooltip>
  );
};

export default AutoTextCropper;

import React from "react";
import "./styles/Button.css";
import { DEFAULT_BUTTON_HEIGHT } from "../../utils/GlobalSettings";

const MyButton = ({ variant = "filled", text, onClick, w='100%', h = DEFAULT_BUTTON_HEIGHT ,fs = '16px', m='10px 0px 0px 0px',style}) => {
  return (
    <>
      {variant == "filled" && (
        <button className="btn-filled" style={{ height: h, width: w , fontSize:fs, margin:m,...style}} onClick={onClick}>
          {text}
        </button>
      )}
      {variant == "outlined" && (
        <button className="btn-outlined" style={{ height: h, width: w , fontSize:fs, margin:m,...style}} onClick={onClick} >
          {text}
        </button>
      )}
      
      {variant == "outlined-dark" && (
        <button className="btn-outlined-dark" style={{ height: h, width: w , fontSize:fs, margin:m,...style}} onClick={onClick} >
          {text}
        </button>
      )}
      {variant == "outlined-filled" && (
        <button className="btn-outlined-filled" style={{ height: h, width: w, fontSize:fs, margin:m ,...style}} onClick={onClick} >
          {text}
        </button>
      )}
    </>
  );
};

export default MyButton;

import React from "react";
import "../styles/Button.css"; 

const CustomButton = ({ text }) => {
  return (
    <button className="custom-btn">
      {text}
      <span className="arrow">➜</span>
      <span className="wave"></span> 
    </button>
  );
};

export default CustomButton;

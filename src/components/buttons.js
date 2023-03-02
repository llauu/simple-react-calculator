import React from 'react';
import '../styles/button.css';

function Button(props) {
  const isOperator = (value) => {
    return isNaN(value) && value !== '.' && value !== '=';
  };

  return (
    <div
      className={`button-container${
        isOperator(props.children) ? ' operator' : ''
      }`}
      onClick={() => props.clickHandler(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Button;

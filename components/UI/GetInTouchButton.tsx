import React, { FC } from 'react';
import './ui.css'; // Assuming you'll add .square-button styles here

interface SquareButtonProps {
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties
}

const GetInTouchButton: FC<SquareButtonProps> = ({ onClick, className, style }) => {

  const buttonStyle: React.CSSProperties = {
    paddingTop: '3px',
    paddingLeft: '15px',
    paddingRight: '15px',
    border: 'solid 2px #444444',
    cursor: 'pointer',
    backgroundColor: '#FFF5DC',
    outline: 'none',
  };

  const combinedStyle = {
    ...buttonStyle,
    ...style
  }

  return (
    <button className={`square-button ${className}`} style={combinedStyle} onClick={onClick}>
      Get in Touch
    </button>
  );
};

export default GetInTouchButton;

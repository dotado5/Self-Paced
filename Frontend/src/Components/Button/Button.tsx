import React from "react";
import { ButtonProps } from "../../Types/Homepage";
import "./Button.css";

const Button: React.FC<ButtonProps> = ({
  content,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {content}
    </button>
  );
};

export default Button;

import React from "react";
import { InputProps } from "../../Types/auth";
import "./InputCard.css";

const Input: React.FC<InputProps> = ({
  label,
  onChange,
  placeholder,
  type,
  className,
  value,
  name,
}: InputProps) => {
  return (
    <div className={`inputCard ${className}`}>
      <label htmlFor="">{label}</label>
      <input
        type={type}
        onChange={(e) => onChange && onChange(e)}
        placeholder={placeholder}
        value={value}
        name={name}
      />
    </div>
  );
};

export default Input;

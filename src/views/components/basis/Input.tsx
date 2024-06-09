import React, { ChangeEventHandler } from "react";

interface InputProps {
  inputType: string;
  inputClass: string;
  placeholder: string;
  value?: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ handleChange, inputType, inputClass, placeholder, value }: InputProps) => {
  return (
    <input
      type={inputType}
      onChange={handleChange}
      value={value}
      className={"py-2 outline-none " + inputClass}
      placeholder={placeholder}
    />
  );
};

export default Input;
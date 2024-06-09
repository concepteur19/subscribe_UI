import React from "react";

interface Props {
  children?: React.ReactNode;
  label?: string;
  inputBg?: string
}

const InputDiv: React.FC<Props> = ({ children, label, inputBg }) => {
  return (
    <>
      <div className={` flex justify-between p-4  rounded-xl ${inputBg? inputBg : 'bg-[#0B0B1A]'}`}>
       {label && <label htmlFor={label} className=" font-redRoseLight "> {label} </label>}
        {children}
      </div>
    </>
  );
};

export default InputDiv;

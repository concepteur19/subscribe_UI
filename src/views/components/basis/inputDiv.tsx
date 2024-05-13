import React from "react";

interface Props {
  children?: React.ReactNode;
  label?: string;
  inputBg?: string
}

const InputDiv: React.FC<Props> = ({ children, label, inputBg }) => {
  return (
    <>
      <div className={` flex justify-between p-4  rounded-xl ${inputBg? inputBg : 'bg-black-2'}`}>
       {label && <span className=" font-redRoseLight "> {label} </span>}
        {children}
      </div>
    </>
  );
};

export default InputDiv;

import React from "react";

interface Props {
  children?: React.ReactNode;
  label?: string
}

const InputDiv: React.FC<Props> = ({ children, label }) => {
  return (
    <>
      <div className=" flex justify-between p-4 bg-black-2 rounded-xl ">
       {label && <span className=" font-redRoseLight "> {label} </span>}
        {children}
      </div>
    </>
  );
};

export default InputDiv;

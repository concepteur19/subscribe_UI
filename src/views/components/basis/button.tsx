import React, { ReactNode } from "react";

type ButtonProps = {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  addclass?: string
};

const Button: React.FC<ButtonProps> = ({ iconLeft, iconRight, addclass }) => {
  return (
    <button className={addclass + ' bg-blue-700 text-white rounded py-2 text-sm w-24'}>
      {iconLeft} button {iconRight}
    </button>
  );
};

export default Button;
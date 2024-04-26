import React from "react";

interface LogoCardProps {
    imgSrc: string
}

const LogoCard: React.FC<LogoCardProps> = ({imgSrc}) => {
  return (
    <span className="linear-gratient rounded-xl w-11 h-11 flex items-center justify-center p-[2px]">
      <img src={imgSrc} alt="logo" width={40} height={40} />
    </span>
  );
};

export default LogoCard;

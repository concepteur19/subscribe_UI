import React from "react";

interface LogoCardProps {
  imgSrc: string;
  s?: number;
}

const LogoCard: React.FC<LogoCardProps> = ({ imgSrc, s }) => {
  // console.log("lien image", imgSrc);
  return (
        <span className="linear-gratient rounded-xl w-11 h-11 flex items-center justify-center p-[2px]">
          <img src={imgSrc} alt="" width={s ? s : 40} height={s ? s : 40} />
        </span>
  );
};

export default LogoCard;

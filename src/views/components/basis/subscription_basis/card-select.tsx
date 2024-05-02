import React, { FC, useEffect, useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import InputDiv from "../inputDiv";

interface CardSelectProps {
  setOption: (option: string) => void;
  option: string;
  options: string[];
  label: string;
}

const CardSelect: FC<CardSelectProps> = ({
  setOption,
  options,
  option,
  label,
}) => {
  const [isSelectOpen, setSelectOpen] = useState<Boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelectedOption = (option: string) => {
    setOption(option);
    setSelectOpen(!isSelectOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setSelectOpen(false);
      // setSelectOpen(!isSelectOpen);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={selectRef}>
      {/* <div className="flex justify-between  p-4 bg-black-2 rounded-xl ">
        <span className=" font-redRoseLight ">{label}</span>
      </div> */}

      <InputDiv label={label}>
        <div
          className=" cursor-pointer flex items-center space-x-1"
          onClick={() => setSelectOpen(!isSelectOpen)}
        >
          <span> {option} </span>
          <IoChevronDown size={18} />
        </div>
      </InputDiv>

      <div className="flex justify-end relative">
        <ul
          className={
            isSelectOpen
              ? "absolute bg-[#00000006] backdrop-blur-[9px] border border-primary-2 -top-3 right-3 rounded-xl py-3"
              : "hidden"
          }
        >
          {options.map((option, index) => {
            return (
              <li
                key={option + index}
                className={`py-[10px] pl-5 pr-7 hover:bg-black-2 cursor-pointer `}
                onClick={() => handleSelectedOption(option)}
              >
                {option}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CardSelect;

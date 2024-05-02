import { FC } from "react";
import Input from "../Input";
import Button from "../buttons/Button";

const searchBar: FC = () => {
  const searchBarChange = () => {};
  const searchBarClick = () => {};

  return (
    <div className="relative">
      <Input
        inputType="text"
        placeholder="Search subscription..."
        handleChange={searchBarChange}
        inputClass=" w-[288px] bg-transparent border border-[#212A3B] pl-4 py-2 rounded-[8px] text-sm"
      />

      <Button
        btnBg=" bg-[#F1F5F9]"
        btnBorder=" border border-[#212A3B] rounded-[4px]"
        btnP=" px-2"
        btnText=" text-[#64748B] text-[10px]"
        buttonText="⌘ K"
        btnClass="absolute top-2 right-1"
        handleClick={searchBarClick}
      />
    </div>
  );
};

export default searchBar;

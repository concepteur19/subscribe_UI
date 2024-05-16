import { format, getYear } from "date-fns";
import React, { FC, useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import LogoCard from "../../../components/basis/logoCard";
import dollar from "../../../../assets/images/png/$.png";
import Button from "../../../components/basis/buttons/Button";
import InputDiv from "../../../components/basis/inputDiv";
import SelectList from "../../../components/basis/subscription_basis/select_list";

export interface DetailSubscription {
  type: string;
  cycle: string;
  remind: string;
  payment: string;
}
interface Props {
  amount?: string;
  cycle?: string;
  plan?: string;
  dueDate?: string;
  subscriptionLabel: string;
  btnBgColor?: string;
  buttonText?: string;
  detailSubscription?: DetailSubscription | undefined;
  logo?: string;
  sizeLogo?: number
}

const AddSubscriptionComponent: FC<Props> = ({
  amount,
  cycle,
  plan,
  dueDate,
  subscriptionLabel,
  btnBgColor,
  buttonText,
  logo,
  sizeLogo,

  detailSubscription,
}) => {
  const selectsLabels = ["Type", "Cycle", "Payment Method", "Remind me"];

  const options = {
    plan: ["Base", "Standart", "Premium"],
    cycle: ["Monthly", "Semester", "Yearly"],
    payment: ["UPI", "Stripe", "Paypal"],
    remind: ["Never", "1 day before", "3 days before", "7 days before"],
  };

  const [optionPayment, setOptionPayment] = useState<string | undefined>(
    options?.payment[0]
  );
  const [optionCycle, setOptionCycle] = useState<string | undefined>(
    options?.cycle[0]
  );
  const [optionRemind, setOptionRemind] = useState<string | undefined>(
    options?.remind[0]
  );
  const [planType, setPlanType] = useState<string>("Select the plan type");

  const today = new Date();
  const [selected, setSelected] = useState<Date | undefined>();
  const [isDatePickerOpen, setPickerOpen] = useState<Boolean>(false);

  const [isInputShow, setIsInputShow] = useState<boolean>(false);

  let dateSelected = <p>Select date</p>;
  if (selected) {
    dateSelected = <p> {format(selected, "dd MMM yyyy")}</p>;
  }

  const handleDaySelection = () => {
    setPickerOpen(false);
  };

  const css = `
  .rdp-day_selected{
    background-color: #4649E5;
    font-weight: bold;
  }

  .DayPicker-Day--hover{
    background-color: #4649E5;
    font-weight: bold;
  }

  .rdp-dropdown{
    background: #101019;
    outline: none;
    border: none;
  }

`;

  const rootRef = useRef<HTMLDivElement>(null);
  const planTypeInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        rootRef.current &&
        !rootRef.current.contains(event.target as Node) &&
        isDatePickerOpen
      ) {
        setPickerOpen(false);
      }

      if (
        planTypeInputRef.current &&
        !planTypeInputRef.current.contains(event.target as Node) &&
        isInputShow
      ) {
        setIsInputShow(false);
      }
    };

    rootRef.current?.addEventListener("click", handleDocumentClick);
    // planTypeInputRef.current?.addEventListener("click", handleDocumentClick);

    document.addEventListener("click", handleDocumentClick);

    return () => {
      rootRef.current?.removeEventListener("click", handleDocumentClick);
      planTypeInputRef.current?.removeEventListener(
        "click",
        handleDocumentClick
      );
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isDatePickerOpen, isInputShow]);

  return (
    <div className="md:flex md:flex-col lg:flex-row items-start md:space-y-48 lg:space-y-0 md:px-[50px] lg:px-[100px] xl:px-[220px] 2xl:px-[20%] font-redRoseBold ">
      <div className="relative flex flex-col justify-between h-[85vh] md:h-fit w-full md:space-y-10">
        <div className="space-y-6 ">
          <div className=" flex justify-between ">
            <div className="space-y-4">
              <LogoCard imgSrc={logo? logo : dollar} s={sizeLogo}/>
              <h1 className="  text-2xl text-white-1">{subscriptionLabel}</h1>
            </div>

            {amount && (
              <div className="space-y-4 text-right text-white-0 ">
                <h1 className=" text-[32px] text-white-1">${amount}</h1>
                <p className="flex flex-col font-redRose">
                  <div className="flex items-center space-x-1 justify-end ">
                    {" "}
                    <span> {cycle}</span>{" "}
                    <span className="w-1 h-1 rounded-full bg-[#D9D9D9] "></span>{" "}
                    <span>{plan}</span>{" "}
                  </div>
                  <span>
                    {" "}
                    Payment due in{" "}
                    <span className=" text-[#1ED760] ">
                      {dueDate} days
                    </span>{" "}
                  </span>
                </p>
              </div>
            )}
          </div>

          <div className="space-y-4">
            {amount && (
              <InputDiv
                label="Missed Payement On"
                inputBg="text-black-2 bg-white-2"
              >
                {" "}
                <div className=" font-redRose text-red ">
                  {" "}
                  12 Dec 2023{" "}
                </div>{" "}
              </InputDiv>
            )}

            <div ref={rootRef}>
              <InputDiv label="Started on">
                {!amount ? (
                  <div
                    className="cursor-pointer"
                    onClick={() => setPickerOpen(!isDatePickerOpen)}
                  >
                    {dateSelected}
                  </div>
                ) : (
                  "17 May 2024"
                )}
              </InputDiv>

              <div
                className={
                  isDatePickerOpen ? "flex justify-end space-y-1 " : "hidden"
                }
              >
                <div className="bg-[#00000006] backdrop-blur-[9px] border border-primary-2  handleSelectedOption rounded-xl absolute z-50">
                  <style>{css}</style>
                  <DayPicker
                    mode="single"
                    required
                    showOutsideDays
                    fixedWeeks
                    fromYear={getYear(today) - 4}
                    // toYear={getYear(today)}
                    toDate={today}
                    selected={selected}
                    onSelect={setSelected}
                    captionLayout="dropdown-buttons"
                    // footer={footer}
                    onDayClick={handleDaySelection}
                    onDayMouseEnter={(day, modifiers, e) => {
                      const target = e.target as HTMLElement;
                      target.classList.add("DayPicker-Day--hover");
                    }}
                    onDayMouseLeave={(day, modifiers, e) => {
                      const target = e.target as HTMLElement;
                      target.classList.remove("DayPicker-Day--hover");
                    }}
                  />
                </div>
              </div>
            </div>

            {/* {isDetail && } */}

            <SelectList
              selectsLabels={selectsLabels}
              options={options}
              optionCycle={optionCycle}
              setOptionCycle={setOptionCycle}
              optionPayment={optionPayment}
              setOptionPayment={setOptionPayment}
              optionRemind={optionRemind}
              setOptionRemind={setOptionRemind}
              planType={planType}
              setPlanType={setPlanType}
              detailSubscription={detailSubscription}
            />
          </div>
        </div>

        {buttonText && (
          <div className=" flex justify-start md:py-4">
            <Button
              btnBg={btnBgColor}
              btnBorder=" rounded-xl"
              btnClass=" center w-full md:w-fit"
              btnP="py-[14px] md:px-10 "
              btnText="font-redRoseBold text-[16px] text-[#fff] "
              buttonText={buttonText}
            />
          </div>
        )}

      </div>
    </div>
  );
};

export default AddSubscriptionComponent;

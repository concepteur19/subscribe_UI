import { format, getYear } from "date-fns";
import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import LogoCard from "@/src/views/components/basis/logoCard";
import dollar from "@/src/assets/images/png/$.png";
import Button from "@/src/views/components/basis/buttons/Button";
import InputDiv from "@/src/views/components/basis/inputDiv";
import SelectList from "@/src/views/components/basis/subscription_basis/select_list";
import PlanType from "@/src/models/PlanType.model";
import SubscriptionController from "@/src/controllers/subscription/SubscriptionController";
import { useNavigate } from "react-router-dom";
import UserContext from "@/src/contexts/userDataContext";
import Input from "../Input";
import { SubscriptionContext } from "@/src/contexts/SubscriptionContext";

export interface DetailSubscription {
  type: string;
  cycle: string;
  remind: string;
  payment: string;
  end_on?: Date | string;
  start_on?: Date | string;
}
interface Props {
  amount?: string;
  cycle?: string;
  planDetail?: string;
  dueDate?: string;
  subscriptionLabel: string | React.ReactNode;
  btnBgColor?: string;
  buttonText?: string;
  detailSubscription?: DetailSubscription | undefined;
  logo?: string;
  sizeLogo?: number;
  planTypes?: PlanType[];
  deleteSubscription?: () => void;

  defaultSub_id?: number;
}

const AddSubscriptionComponent: FC<Props> = ({
  amount,
  cycle,
  planDetail,
  dueDate,
  subscriptionLabel,
  btnBgColor,
  buttonText,
  logo,
  sizeLogo,
  planTypes,

  deleteSubscription,
  detailSubscription,
  defaultSub_id,
}) => {
  const { id } = useContext(UserContext)!;
  const context = useContext(SubscriptionContext);

  // Ensure the context is not undefined
  if (!context) {
    throw new Error('ModifySubscription must be used within a SubscriptionProvider');
  }

  const { setIsSubscriptionsModified } = context;

  const [planName, setPlan] = useState<string[] | undefined>([]);
  const [subscriptionName, setName] = useState<string>("");
  const [amount$, setAmount] = useState<number>();
  const [selected, setSelected] = useState<Date | undefined>(new Date());
  const [isDatePickerOpen, setPickerOpen] = useState<Boolean>(false);
  const [isInputShow, setIsInputShow] = useState<boolean>(false);
  const [isSubmitable, setIsSubmitable] = useState<boolean>(true);

  const selectsLabels = ["Type", "Cycle", "Payment Method", "Remind me"];

  const options = {
    plan: planName,
    cycle: ["Monthly", "Semester", "Yearly"],
    payment: ["UPI", "Stripe", "Paypal"],
    remind: [
      "Never",
      "1 day before",
      "3 days before",
      "5 days before",
      "7 days before",
    ],
  };

  const [optionPayment, setOptionPayment] = useState<string | undefined>(
    options.payment[0]
  );
  const [optionCycle, setOptionCycle] = useState<string | undefined>(
    options.cycle[0]
  );
  const [optionRemind, setOptionRemind] = useState<string | undefined>(
    options.remind[0]
  );
  const [planType, setPlanType] = useState<string>("Select the plan type");

  useEffect(() => {
    const plantypeMap = planTypes?.map((planType) => planType.type);
    setPlan(plantypeMap);
  }, [planTypes]);

  const handleDaySelection = () => {
    setPickerOpen(false);
  };

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

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isDatePickerOpen, isInputShow]);

  const navigate = useNavigate();

  const submitSubscription = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (
      (!defaultSub_id &&
        (planName?.indexOf(planType) === -1 || planType === "" || !selected)) ||
      !selected
    ) {
      setIsSubmitable(false);
      return;
    }

    setIsSubmitable(true);

    const indexOfRemind = options.remind.indexOf(optionRemind!);
    const reminder =
      indexOfRemind === 0
        ? 0
        : indexOfRemind === 1
        ? 1
        : indexOfRemind === 2
        ? 3
        : indexOfRemind === 3
        ? 5
        : 7;

    const plantypeFound = planTypes?.find(
      (plantype$) => plantype$.type === planType
    );

    // console.log("date dfdf--------------", selected);

    const response = await SubscriptionController.addSubscription({
      user_id: id!,
      defaultSub_id: defaultSub_id ? defaultSub_id : undefined,
      amount: defaultSub_id ? undefined : amount$,
      service_name: defaultSub_id ? undefined : subscriptionName,
      plan_type: plantypeFound ? plantypeFound.id?.toString()! : planType,
      cycle: optionCycle!.toLocaleLowerCase(),
      payment_method: optionPayment!,
      reminder: reminder,
      start_on: selected!,
    });

    // console.log("add subscription response", response);
    if (response.status) {
      setIsSubscriptionsModified(true)
      navigate("/home");
    }
  };

  

  let dateSelected = <p>Select date</p>;
  if (selected) {
    dateSelected = <p> {format(selected, "dd MMM yyyy")}</p>;
  }

  const isCustom = !defaultSub_id
  // Determine if the form is being used to add a new custom subscription
  const isAddingCustomSubscription = !defaultSub_id && !amount && !cycle && !planDetail && !dueDate;

  console.log("is custom ", isCustom);

  return (
    <div className=" md:flex md:flex-col lg:flex-row items-start md:space-y-48 lg:space-y-0 md:px-[50px] lg:px-[100px] xl:px-[220px] 2xl:px-[20%] font-redRoseBold ">
      {amount || buttonText ? (
        <div className="relative flex flex-col justify-between h-[91vh] md:h-fit w-full md:space-y-10">
          <div className={sizeLogo || logo ? "space-y-6" : "space-y-[42px]"}>
            <div className=" flex justify-between ">
              {(logo && subscriptionLabel) || subscriptionLabel ? (
                <div className="space-y-4">
                  {sizeLogo || logo ? (
                    <LogoCard imgSrc={logo ? logo : dollar} s={sizeLogo} />
                  ) : null}
                  <h1 className="  text-2xl text-white-1 ">
                    { subscriptionLabel }
                  </h1>
                </div>
              ) : (
                <div className="space-y-4">
                  <span className=" bg-[#7c756f9b] opacity-50 rounded-xl w-11 h-11 flex items-center justify-center p-[2px]"></span>
                  <p className="text-2xl text-white-1 w-40 h-8 bg-[#7c756f9b] opacity-50 rounded-xl "></p>
                </div>
              )}

              {amount && (
                <div className="space-y-4 text-right text-white-0 ">
                  <h1 className=" text-[32px] text-white-1">${amount}</h1>
                  <p className="flex flex-col font-redRose">
                    <div className="flex items-center space-x-1 justify-end ">
                      {" "}
                      <span> {cycle}</span>{" "}
                      <span className="w-1 h-1 rounded-full bg-[#D9D9D9] "></span>{" "}
                      <span>{planDetail}</span>{" "}
                    </div>
                    <span>
                      {" "}
                      { Number(dueDate) > 0 && " Payment due in "}
                      <span className={Number(dueDate) > 0 ? " text-[#1ED760] " : " text-red " } >
                        {Number(dueDate) > 0 ? `${dueDate} days` : "Due date passed"}
                        {/* {dueDate}  */}
                      </span>{" "}
                    </span>
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-4">
              {/* Validation soumisssion */}
              {options && !isSubmitable && (
                <p className="text-red text-xs font-redRoseLight pl-2 ">
                  Svp Remplissez correctement le formulaire, <br /> un des champ
                  n'a pas de selection.
                </p>
              )}
              
              {/* fin validation */}
              { isAddingCustomSubscription && (
                <div className="flex flex-col space-y-4 font-redRoseLight text-sm">
                  <Input
                    inputType="text"
                    inputClass="p-4 py-4 outline-none rounded-xl bg-[#0B0B1A] text-[16px] "
                    placeholder="Enter the subscription name"
                    handleChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    inputType="text"
                    inputClass="p-4 py-4 outline-none rounded-xl bg-[#0B0B1A] text-[16px] "
                    placeholder="Enter the plan type"
                    handleChange={(e) => setPlanType(e.target.value)}
                  />
                  <Input
                    inputType="number"
                    inputClass="p-4 py-4 outline-none rounded-xl bg-[#0B0B1A] text-[16px] "
                    placeholder="Enter the subscription amount"
                    handleChange={(e) => setAmount(parseFloat(e.target.value))}
                  />
                </div>
              )}

              {amount ? (
                <InputDiv
                  label="Missed Payement On"
                  inputBg="text-black-2 bg-white-2"
                >
                  <div className=" font-redRose text-red ">
                    {`${detailSubscription?.end_on!}`}
                  </div>
                </InputDiv>
              ) : null}

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
                    <span>{`${detailSubscription?.start_on!}`}</span>
                  )}
                </InputDiv>

                <div
                  className={isDatePickerOpen ? "flex justify-end" : "hidden"}
                >
                  <div className="bg-[#00000006] backdrop-blur-[9px] border border-primary-2 rounded-xl absolute z-50">
                    {/* <style>{css}</style> */}
                    <DayPicker
                      mode="single"
                      required
                      showOutsideDays
                      fixedWeeks
                      fromYear={getYear(new Date()) - 4}
                      toDate={new Date()}
                      selected={selected}
                      onSelect={setSelected}
                      captionLayout="dropdown-buttons"
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
                // isSubmitable={isSubmitable}
              />
            </div>
          </div>

          {buttonText && (
            <div className=" flex justify-start md:py-4">
              <Button
                btnBg={btnBgColor}
                btnBorder=" rounded-[6px]"
                btnClass=" center w-full md:w-fit"
                btnP="py-[14px] md:px-10 "
                btnText="font-redRoseBold text-[16px] text-[#fff] "
                buttonText={buttonText}
                handleClick={ buttonText === "Delete Subscription" ? deleteSubscription : submitSubscription}
              />
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default AddSubscriptionComponent;

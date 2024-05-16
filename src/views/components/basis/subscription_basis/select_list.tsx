import React, { FC } from "react";
import CardSelect from "./card-select";
import { useLocation } from "react-router-dom";
import { DetailSubscription } from "./addSubscriptionComponent";

interface OptionProps {
  plan: string[];
  cycle: string[];
  payment: string[];
  remind: string[];
}

interface Props {
  selectsLabels?: string[];
  options?: OptionProps;

  optionCycle?: string | undefined;
  setOptionCycle?: (option: string) => void;

  optionPayment?: string | undefined;
  setOptionPayment?: (option: string) => void;

  optionRemind?: string | undefined;
  setOptionRemind?: (option: string) => void;

  planType?: string | undefined;
  setPlanType?: (option: string) => void;

  detailSubscription: DetailSubscription | undefined;
}

const SelectList: FC<Props> = ({
  selectsLabels,
  options,
  optionCycle,
  setOptionCycle,
  optionPayment,
  setOptionPayment,
  optionRemind,
  setOptionRemind,
  planType,
  setPlanType,

  detailSubscription,
}) => {
  const location = useLocation();
  const ispath = location.pathname === "/home/addSubscription";
  const path = location.pathname;
  const pathTab = path.split("/");

  return (
    <div className="space-y-4">
      {/* add a ccomponent */}
      {options &&
        selectsLabels &&
        selectsLabels.map((label, index) => {
          let options$: string[] = [];
          if (index === 0) {
            options$ = options.plan;
          } else if (index === 1) {
            options$ = options.cycle;
          } else if (index === 2) {
            options$ = options.payment;
          } else if (index === 3) {
            options$ = options.remind;
          }

          return (
            <div>
              {pathTab[pathTab.length - 2] !== "subscription" && pathTab[3] !== "custom" ? (
                <CardSelect
                  key={label + index}
                  setOption={
                    index === 1
                      ? setOptionCycle
                      : index === 2
                      ? setOptionPayment
                      : index === 0
                      ? setPlanType
                      : setOptionRemind
                  }
                  option={
                    index === 1
                      ? optionCycle
                      : index === 2
                      ? optionPayment
                      : index === 0
                      ? planType
                      : optionRemind
                  }
                  label={label}
                  options={options$}
                />
              ) : (
                <CardSelect
                  label={label}
                  type={detailSubscription?.type}
                  cycle={detailSubscription?.cycle}
                  payment={detailSubscription?.payment}
                  remind={detailSubscription?.remind}
                />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default SelectList;

import React, { FC } from "react";
import CardSelect from "./card-select";

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
  setPlanType
}) => {
  

  return (
    <div className="space-y-4">
      {/* add a ccomponent */}
      {options && selectsLabels &&
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
          );
        })}
    </div>
  );
};

export default SelectList;

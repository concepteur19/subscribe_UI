import { log } from "console";

const getDaysDifference = (date1: Date, date2: Date): number => {
    const oneDay = 24 * 60 * 60 * 1000;
    const endOnDate = new Date(date2);
    // Math.round(
    //   Math.abs((endOnDate.getTime() - date1.getTime()) / oneDay)
    // );
    return Math.round(
      (endOnDate.getTime() - date1.getTime()) / oneDay
    );
  };

  export default getDaysDifference
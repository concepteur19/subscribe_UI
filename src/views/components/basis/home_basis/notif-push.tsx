import { format } from "date-fns";
import React from "react";

interface Notif{
    service_name: string;
    end_on: Date | string;
    logo: string;
}

interface NotifPushProps{
    notif: Notif
}



const NotifPush = ({notif}: NotifPushProps) => {
    const dueDate = notif
        ? format(new Date(notif.end_on), "dd/MM/yyyy")
        : "Date not available";
  return (
    <div className="flex justify-center items-center space-x-1 sm:space-x-4">
      <img
        src={`${process.env.REACT_APP_API_URL}/storage/${notif.logo}`}
        width={46}
        height={46}
        alt=""
      />
      <div className="flex flex-col space-y-[6px]">
        <span className="text-[16px]">{notif.service_name}</span>
        <div className="text-[13px] space-x-2">
          <span className="text-[#9898AA]">Due date :</span>
          <span className="text-[#F01A16]">{`${dueDate}`}</span>
        </div>
      </div>
    </div>
  );
};

export default NotifPush;

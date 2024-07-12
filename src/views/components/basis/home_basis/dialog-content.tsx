import React, { useEffect, useState } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../../ui/dialog";
import { PiCheck } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import NotifPush from "./notif-push";
import Button from "../buttons/Button";
import { Dialog, DialogDescription } from "../../ui/dialog";
import subscribe from "@/src/assets/images/subscribeIcon.svg";
import NotificationController from "@/src/controllers/notification/NotificationController";

interface DialogContentProps {
  notifPushs: any[];
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
}

const CustomDialogContent: React.FC<DialogContentProps> = ({
  notifPushs,
  isDialogOpen,
  setIsDialogOpen,
}) => {
  const [notifMap, setNotifMap] = useState<any[]>([]);
  const [message, setMessage] = useState<string>();
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  useEffect(() => {
    const notifToMap = notifPushs.map((notif) => ({
      ...notif,
      isApprouve: false,
      isReject: false,
    }));

    setNotifMap(notifToMap);
  }, [notifPushs]);

  const handleClick = (notifId: number, action: string) => {
    setNotifMap((prevNotifMap) =>
      prevNotifMap.map((notif) =>
        notif.id === notifId
          ? {
              ...notif,
              isApprouve:
                action === "approuve" ? !notif.isApprouve : notif.isApprouve,
              isReject: action === "reject" ? !notif.isReject : notif.isReject,
            }
          : notif
      )
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const idApprouve = notifMap
      .filter((notif) => notif.isApprouve)
      .map((notif) => notif.id);

    const idReject = notifMap
      .filter((notif) => notif.isReject)
      .map((notif) => notif.id);

    try {
      await NotificationController.updateNotifications(idApprouve, idReject)
        .then((response) => {
          setMessage(response.message);
          setShowSuccessMessage(true);
        })
        .catch((error) => {
          console.log("error updatting notifications");
        });

      setTimeout(() => {
        setIsDialogOpen(false);
        setShowSuccessMessage(false);
        setMessage(undefined);
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.error("Error approving payment:", error);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <div
        className={`fixed inset-0 z-50 bg-[#050511] bg-opacity-0 backdrop-blur-[6px] ${
          isDialogOpen ? "block" : "hidden"
        }`}
      ></div>

      <DialogContent className="text-[#ffffff] bg-[#0B0C26] border border-[#303163] rounded-3xl ">
        {showSuccessMessage && (
          <div className=" transition-all duration-300 rounded-lg p-4 text-center py-6">
            <p className=" text-primary-0 font-poppinsbold text-xl">
              {message}
            </p>
          </div>
        )}
        <form action="" onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-2xl font-russOne font-normal text-white-2 text-center flex flex-col items-center space-y-4 ">
              <div className="p-[23px] rounded-full bg-[#4649E512] ">
                <img src={subscribe} alt="Logo" />
              </div>
              <h1>SubScribe Tracker</h1>
            </DialogTitle>
            {notifMap.map((notif, index) => (
              <div className="space-y-6" key={notif.id}>
                <div className="flex justify-between items-center">
                  <NotifPush notif={notif} />
                  <div className="font-redRose space-x-2 space-y-2 sm:space-y-0 flex flex-col sm:flex-row items-center">
                    <span
                      className={`cursor-pointer flex items-center  text-[16px] space-x-[6px] ${
                        notif.isReject ? " text-red" : "text-[#9898AA]"
                      } ${notif.isApprouve ? "disabled" : ""}`}
                      onClick={() => handleClick(notif.id, "reject")}
                    >
                      <RxCross2 size={14} /> <span> Rejected</span>
                    </span>

                    <span
                      className={`cursor-pointer flex items-center  text-[16px] space-x-[6px] ${
                        notif.isApprouve ? "text-[#625AFA]" : "text-[#9898AA]"
                      } ${notif.isReject ? "disabled" : ""}`}
                      onClick={() => handleClick(notif.id, "approuve")}
                    >
                      <PiCheck size={14} /> <span> Done </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </DialogHeader>
          <DialogFooter className="w-full">
            <Button
              btnType="submit"
              buttonText="Confirm"
              btnBorder="rounded-[6px] border-none"
              btnBg="bg-white-2"
              btnP="p-4 py-[10px]"
              btnText="text-primary-0 font-redRoseBold text-[16px] justify-center"
            />
            <DialogDescription className="font-redRose font-light text-sm text-white-2 text-center">
              By clicking Confirm, you approve all these subscriptions. This
              action is irreversible.
            </DialogDescription>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialogContent;

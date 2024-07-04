import React from 'react';
import { DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../../ui/dialog';
import { PiCheck } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';
import NotifPush from './notif-push';
import Button from '../buttons/Button';
import { Dialog, DialogDescription } from '../../ui/dialog';
import subscribe from "@/src/assets/images/subscribeIcon.svg";

interface DialogContentProps {
  notifPushs: any[];
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
  handleApproveClick: (notificationId: number) => void;
  handleRejectClick: (notificationId: number) => void;
}

const CustomDialogContent: React.FC<DialogContentProps> = ({
  notifPushs,
  isDialogOpen,
  setIsDialogOpen,
  handleApproveClick,
  handleRejectClick,
}) => {
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <div
        className={`fixed inset-0 z-50 bg-[#050511] bg-opacity-0 backdrop-blur-[6px] ${
          isDialogOpen ? "block" : "hidden"
        }`}
      ></div>
      <DialogContent className="text-[#ffffff] bg-[#0B0C26] border border-[#303163] rounded-3xl ">
        <DialogHeader>
          <DialogTitle className="text-2xl font-russOne font-normal text-white-2 text-center flex flex-col items-center space-y-4 ">
            <div className="p-[23px] rounded-full bg-[#4649E512] ">
              <img src={subscribe} alt="Logo" />
            </div>
            <h1>SubScribe Tracker</h1>
          </DialogTitle>
          {notifPushs.map((notif) => (
            <div className="space-y-6" key={notif.id}>
              <div className="flex justify-between items-center">
                <NotifPush notif={notif} />
                <div className="font-redRose space-x-2 space-y-2 sm:space-y-0 flex flex-col sm:flex-row items-center">
                  <Button
                    btnText="text-[16px] text-[#9898AA] items-start space-x-[6px]"
                    buttonText="Rejected"
                    btnIcon={<RxCross2 size={14} />}
                    handleClick={() => handleRejectClick(notif.id)}
                  />
                  <Button
                    btnText="text-[16px] text-[#625AFA] items-start space-x-[6px]"
                    buttonText="Done"
                    btnIcon={<PiCheck size={14} />}
                    handleClick={() => handleApproveClick(notif.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </DialogHeader>
        <DialogFooter className="w-full">
          <Button
            buttonText="Confirm"
            btnBorder="rounded-[6px] border-none"
            btnBg="bg-white-2"
            btnP="p-4 py-[10px]"
            btnText="text-primary-0 font-redRoseBold text-[16px] justify-center"
            handleClick={() => setIsDialogOpen(false)}
          />
          <DialogDescription className="font-redRose font-light text-sm text-white-2 text-center">
            By clicking Confirm, you approve all these subscriptions. This action is irreversible.
          </DialogDescription>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialogContent;


// {/* <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//         <div
//           className={`fixed inset-0 z-50 bg-[#050511] bg-opacity-0 backdrop-blur-[6px] ${
//             isDialogOpen ? "block" : "hidden"
//           }`}
//         ></div>
//         <DialogContent className="text-[#ffffff] bg-[#0B0C26] border border-[#303163] rounded-3xl ">
//           <DialogHeader>
//             <DialogTitle className="text-2xl font-russOne font-normal text-white-2 text-center flex flex-col items-center space-y-4 ">
//               <div className="p-[23px] rounded-full bg-[#4649E512] ">
//                 <img src={subscribe} alt="Logo" />
//               </div>
//               <h1>SubScribe Tracker</h1>
//             </DialogTitle>
//             {notifPushs &&
//               notifPushs.map((notif) => {
//                 return (
//                   <div className="space-y-6">
//                     <div className="flex justify-between items-center">
//                       <NotifPush notif={notif} />
//                       <div className="font-redRose space-x-2 space-y-2 sm:space-y-0 flex flex-col sm:flex-row items-center">
//                         <Button
//                           btnText="text-[16px] text-[#9898AA] items-start space-x-[6px]"
//                           buttonText="Rejected"
//                           btnIcon={<RxCross2 size={14} />}
//                           handleClick={() => handleRejectClick(notif.id)}
//                         />
//                         <Button
//                           btnText="text-[16px] text-[#625AFA] items-start space-x-[6px]"
//                           buttonText="Done"
//                           btnIcon={<PiCheck size={14} />}
//                           handleClick={() => handleApproveClick(notif.id)}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//           </DialogHeader>
//           <DialogFooter className="w-full">
//             <Button
//               buttonText="Confirm"
//               btnBorder="rounded-[6px] border-none"
//               btnBg="bg-white-2"
//               btnP="p-4 py-[10px]"
//               btnText="text-primary-0 font-redRoseBold text-[16px] justify-center"
//               handleClick={() => setIsDialogOpen(false)}
//             />
//             <DialogDescription className="font-redRose font-light text-sm text-white-2 text-center">
//               By clicking Confirm, you approve all these subscriptions. This
//               action is irreversible.
//             </DialogDescription>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog> */}
import React from "react";
import {
  Dialog,
  DialogContent
} from "@/src/views/components/ui/dialog";
import Button from "../../components/basis/buttons/Button";
import Input from "../../components/basis/Input";

type Props = {
  isModalEditOpen: boolean;
  setModalEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleUserEdit: (e: React.FormEvent) => void;
  errorMessage?: string;
  newUsername: string;
  setNewUsername: React.Dispatch<React.SetStateAction<string>>;
  newPhoto: File | null;
  setNewPhoto: React.Dispatch<React.SetStateAction<File | null>>;
  newPhoneNumber: string;
  setNewPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
};

export default function ModalEdit({
  isModalEditOpen,
  setModalEditOpen,
  handleUserEdit,
  errorMessage,
  newUsername,
  setNewUsername,
  newPhoto,
  setNewPhoto,
  newPhoneNumber,
  setNewPhoneNumber,
}: Props) {
  return (
    <>
      {/* Edit profile dialog */}
      <Dialog open={isModalEditOpen} onOpenChange={setModalEditOpen}>
        <div
          className={`fixed inset-0 z-50 bg-[#050511] bg-opacity-0 backdrop-blur-[6px] ${
            isModalEditOpen ? "block" : "hidden"
          }`}
        ></div>
        <DialogContent className=" bg-white-2 rounded-3xl pt-6 pb-10  md:px-12 flex justify-center ">
          <div className="w-[95%] sm:w-full ">
            {/* Edit profile form */}
            <form action="" onSubmit={handleUserEdit} className="space-y-3">
              <h1 className="text-lg  font-redRoseBold ">Edit Profile</h1>

              {errorMessage && <div className="text-red">{errorMessage}</div>}

              <div className=" flex flex-col space-y-1">
                <label htmlFor="username" className=" font-normal">
                  Username
                </label>
                <Input
                  inputClass=" border border-[#CFCFDF] rounded-md px-5 "
                  inputType="text"
                  placeholder=""
                  value={newUsername}
                  handleChange={(e) => setNewUsername(e.target.value)}
                />
              </div>
              <div className=" flex flex-col space-y-1">
                <label htmlFor="photo" className=" font-normal">
                  Photo
                </label>
                <Input
                  inputClass=" border border-[#CFCFDF] rounded-md px-5"
                  inputType="file"
                  placeholder=""
                  handleChange={(e) =>
                    setNewPhoto((e.target.files && e.target.files[0]) || null)
                  }
                />
              </div>
              <div className=" flex flex-col space-y-1">
                <label htmlFor="phone" className=" font-normal">
                  Phone number
                </label>
                <Input
                  inputClass=" border border-[#CFCFDF] rounded-md px-5"
                  inputType="text"
                  placeholder=""
                  value={newPhoneNumber}
                  handleChange={(e) => setNewPhoneNumber(e.target.value)}
                />
              </div>

              <div className="w-full pt-5">
                <Button
                  buttonText="Save changes"
                  btnBorder=" rounded-[6px] border-none"
                  btnBg=" bg-primary-0"
                  btnClass="w-full"
                  btnP="p-4 py-[10px]"
                  btnText=" text-primary-0 font-redRoseBold text-[16px] justify-center "
                  btnType="submit"
                />
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

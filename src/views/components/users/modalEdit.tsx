import React, { useState } from "react";
import { Dialog, DialogContent } from "@/src/views/components/ui/dialog";
import Button from "../../components/basis/buttons/Button";
import Input from "../../components/basis/Input";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    handleUserEdit(e);
    setTimeout(() => {
      setIsLoading(false);
      setModalEditOpen(false);
    }, 2000); // Simulating a delay for demonstration
  };

  return (
    <>
      <Dialog open={isModalEditOpen} onOpenChange={setModalEditOpen}>
        <div
          className={`fixed inset-0 z-50 bg-[#050511] bg-opacity-0 backdrop-blur-[6px] ${
            isModalEditOpen ? "block" : "hidden"
          }`}
        ></div>
        <DialogContent className="bg-white-2 rounded-3xl pt-6 pb-10 md:px-6 flex justify-center max-w-md">
          <div className="w-[95%] sm:w-full">
            <form action="" onSubmit={handleSubmit} className="space-y-3">
              <h1 className="text-lg font-bold">Edit Profile</h1>

              {errorMessage && <div className="text-red-500">{errorMessage}</div>}

              <div className="flex flex-col space-y-1">
                <label htmlFor="username" className="font-normal">
                  Username
                </label>
                <Input
                  inputClass="border border-[#CFCFDF] rounded-md px-5"
                  inputType="text"
                  placeholder=""
                  value={newUsername}
                  handleChange={(e) => setNewUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="phone" className="font-normal">
                  Phone number
                </label>
                <Input
                  inputClass="border border-[#CFCFDF] rounded-md px-5"
                  inputType="text"
                  placeholder=""
                  value={newPhoneNumber}
                  handleChange={(e) => setNewPhoneNumber(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="photo" className="font-normal">
                  Photo
                </label>
                <div className="flex items-center space-x-2">
                  <label
                    htmlFor="photo-upload"
                    className="flex items-center bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
                  >
                    <i className="fas fa-upload mr-2"></i> Choisir un fichier
                    <input
                      id="photo-upload"
                      type="file"
                      className="hidden"
                      onChange={(e) =>
                        setNewPhoto((e.target.files && e.target.files[0]) || null)
                      }
                    />
                  </label>
                  <span className="border border-[#CFCFDF] px-4 py-2 rounded bg-gray-100">
                    {newPhoto ? newPhoto.name : "Aucun fichier choisi"}
                  </span>
                </div>
              </div>

              <div className="w-full pt-5">
                <button
                  type="submit"
                  className={`w-full p-4 py-[10px] rounded-[6px] border-none text-white-2 flex items-center justify-center ${isLoading ? "bg-primary-0" : "bg-primary-0"}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    "Save changes"
                  )}
                </button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}


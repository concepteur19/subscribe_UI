import React, {
  FormEvent,
  // FormEventHandler,
  useContext,
  useState,
} from "react";
import profilePhoto from "@/src/assets/images/png/profilePhoto.png";
import profileM from "../../assets/images/png/ProfileM.png";
import InputDiv from "../components/basis/inputDiv";
import Button from "../components/basis/buttons/Button";
import ScreenSizeContext from "@/src/contexts/screenSizeContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "@/src/contexts/userDataContext";
import UserController from "@/src/controllers/user/UserController";
import ModalEdit from "../components/users/modalEdit";

function Setting() {
  // Get screen size from context
  const { screenSize } = useContext(ScreenSizeContext)!;

  // Get user data from context
  const { id, username, phone_number, photo, email } = useContext(UserContext)!;

  // State to manage the edit profile modal
  const [isModalEditOpen, setModalEditOpen] = useState<boolean>(false);

  // States for form fields
  const [newUsername, setNewUsername] = useState<string>("");
  const [newPhoto, setNewPhoto] = useState<File | null>(null);
  const [newPhoneNumber, setNewPhoneNumber] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string | null>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigate = useNavigate();

  // Handle logout functionality
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:8000/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Clear local storage and navigate to login page
      localStorage.clear();
      navigate("/Login");
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  // Handle user profile edit
  const handleUserEdit = async (e: FormEvent) => {
    e.preventDefault();

    // Validation: check if at least one field is entered
    if (!newUsername && !newPhoto && !newPhoneNumber) {
      setErrorMessage("Please enter at least one field to update.");
      return;
    }

    // Clear any previous error messages
    setErrorMessage("");

    try {
      const formData = new FormData();

      if (id) formData.append("id", id.toString());
      if (newUsername) formData.append("username", newUsername);
      if (newPhoto) formData.append("image", newPhoto);
      if (newPhoneNumber) formData.append("phone_number", newPhoneNumber);

      const response = await UserController.updateUser(formData);

      if (response.message) setSuccessMessage(response.message);

      // Update user information in local storage
      const updatedUser = await UserController.retrieveConnectedUser();
      localStorage.setItem("user", JSON.stringify(updatedUser));

      // Close modal and clear form fields after successful update
      setModalEditOpen(false);
      setNewUsername("");
      setNewPhoto(null);
      setNewPhoneNumber("");

      // Refresh the page after 5 seconds to observe changes
      setTimeout(() => {
        navigate(window.location.pathname);
        setSuccessMessage(null);
      }, 1000);
    } catch (error) {
      console.error("Profile update error", error);
    }
  };

  return (
    <>
      <div className=" w-full md:space-y-12 ">
        {/* Header section with profile photo and edit button */}
        <div className=" bg-gradient-to-b from-[#4649E566] via-[#24132f] to-[#F2474700] md:bg-none flex flex-col md:flex-row md:justify-between items-center sm:px-24 md:px-28 lg:px-36 xl:px-[25%] 2xl:px-[30%] py-16 md:py-0">
          <div className=" flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 sm:space-x-3 ">
            <div className="  ">
              {photo !== undefined ? (
                <img
                  src={"http://localhost:8000/storage/" + photo}
                  alt=""
                  className="w-[120px] h-[120px] md:w-[58px] md:h-[58px] rounded-full"
                />
              ) : (
                <img
                  src={screenSize.width > 768 ? profileM : profilePhoto}
                  alt=""
                />
              )}
            </div>
            <h1 className=" font-redRoseBold text-white-1 md:text-[22px] text-2xl">
              {username}
            </h1>
          </div>
          <Button
            btnP=" py-[14px]"
            btnBg=" bg-primary-0"
            buttonText=" Edit profile"
            btnText="text-white-2"
            btnBorder=" rounded-xl w-[134px] "
            btnClass="mt-8 md:mt-0"
            handleClick={() => setModalEditOpen(true)}
          />
        </div>

        {successMessage ? (
          <div className=" text-[#10B981] text-center py-4">
            {successMessage}
          </div>
        ) : null}

        {/* Account and support information section */}
        <div className=" space-y-6 lg:space-y-10 p-6 sm:px-24 md:px-28 lg:px-36 xl:px-[25%] 2xl:px-[30%] ">
          <div className=" space-y-4">
            <h1 className=" pb-2">My account</h1>
            <InputDiv label="Email">
              <div className=" text-[16px]">{email}</div>
            </InputDiv>

            <InputDiv label="Phone">
              <div className=" text-[16px]"> {phone_number} </div>
            </InputDiv>
          </div>

          <div className=" space-y-4">
            <h1 className=" pb-2">Support</h1>
            <InputDiv>
              <div className=" text-[16px] ">Contact support</div>
            </InputDiv>

            <InputDiv>
              <div className="text-[16px]">Support creators</div>
            </InputDiv>
          </div>
        </div>

        {/* Logout button section */}
        <div className="fixed md:relative bottom-0 left-0 flex justify-center md:justify-start items-center p-6 w-full sm:px-24 md:px-28 lg:px-36 xl:px-[25%] 2xl:px-[30%] ">
          <Button
            buttonText="Logout"
            btnClass="w-full md:w-[134px]"
            btnP=" px-auto py-[14px]"
            btnBorder=" rounded-xl "
            btnText=" text-[16px] font-redRoseBold "
            btnBg=" bg-red"
            handleClick={handleLogout}
          />
        </div>
      </div>

      {/* Edit profile dialog */}
      <ModalEdit
        isModalEditOpen={isModalEditOpen}
        setModalEditOpen={setModalEditOpen}
        handleUserEdit={handleUserEdit}
        newPhoneNumber={newPhoneNumber}
        newPhoto={newPhoto}
        newUsername={newUsername}
        setNewUsername={setNewUsername}
        setNewPhoneNumber={setNewPhoneNumber}
        setNewPhoto={setNewPhoto}
        errorMessage={errorMessage}
      />
       
    </>
  );
}

export default Setting;

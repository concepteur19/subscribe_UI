import { useEffect, useState } from "react";
import subsLogin from '@/src/assets/subsLogin.svg'
import { Link, useNavigate } from "react-router-dom";
import userSignIn from "../../../controllers/auth/loginController";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Button from "../../components/basis/buttons/Button";
import { BiLogoGoogle } from "react-icons/bi";
import RegisterController from "@/src/controllers/auth/resgisterController";

export function SignIn() {
  const navigate = useNavigate();

  const [user, setUser] = useState([]);
  const [userToRegistrate, setUserToRe] = useState({});

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log("response google", res.data);
          setUserToRe(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const registerUser = async (user$) => {
    const response = await RegisterController.googleRegistration({
      username: user$.name,
      email: user$.email,
      photo: user$.picture
    });
    console.log("réponse", response);

    if (response.status) {
      const user = response.data;
      localStorage.setItem("user", JSON.stringify(user));
      // console.log(responseLogin.data.token);
      localStorage.setItem("token", user.token);
      navigate("/home");
    } else {
      console.log("Invalid credentials");
      // setErrors({ ...errors, general: "Invalid credentials" });
    }
  };

  useEffect(() => {
    registerUser(userToRegistrate);
  }, [userToRegistrate]);

  return (
    <>
      <div className="px-3 flex items-center h-screen">
        <div className="bg-[#fff] py-[35px] px-[25px] max-w-[370px] rounded-xl m-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center justify-center">
              <img src={subsLogin} alt="Logo" />
            </div>
            <form
              className="flex flex-col items-center gap-4 w-full"
              
            >
              <div className='flex flex-col items-center gap-2'>
                <h1 className='text-[28px] font-redRoseBold text-[#4649E5] '>SubScribe Connect</h1>
                <p className='text-[16px] text-[#2F384F]'>Sign In to track your subscription</p>
              </div>
              
              
              {/* Bouton de connexion avec Google */}
              <div className=" w-full flex justify-center items-center hover:text-white-2 text-primary-0">
                <Button
                  handleClick={login}
                  btnIcon={<BiLogoGoogle className="" size={24} />}
                  buttonText=" Continue with Google "
                  btnP="py-3"
                  btnType="button"
                  btnClass="w-full hover:text-black-0 font-redRoseBold"
                  btnText="text-primary-0 hover:text-white-2 text-[16px]"
                  btnBorder="  rounded-[6px] border border-primary-0 hover:border-none border-opacity-60 hover:bg-primary-0 "
                />
              </div>

            
              <p className="text-[14px] text-[#2F384F] text-center flex flex-col items-center gap-2">
                By clicking continue, you acknowledge that you have read and
                agree to <div className="inline"> <Link to="/terms"><span className="">Terms of Service</span></Link> & <Link to="/privacy"><span>Privacy Policy</span></Link></div>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

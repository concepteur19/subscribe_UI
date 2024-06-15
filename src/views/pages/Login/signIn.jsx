import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import subscribe from "../../../assets/images/subscribeIcon.svg";
import userSignIn from "../../../controllers/auth/loginController";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Button from "../../components/basis/buttons/Button";
import { BiLogoGoogle } from "react-icons/bi";
import RegisterController from "@/src/controllers/auth/resgisterController";

export function SignIn() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {
      email: "",
      password: "",
      general: "",
    };

    if (!data.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      validationErrors.email = "Email is invalid";
    }

    if (!data.password) {
      validationErrors.password = "Password is required";
    }

    setErrors(validationErrors);

    if (!validationErrors.email && !validationErrors.password) {
      try {
        const responseLogin = await userSignIn({
          email: data.email,
          password: data.password,
        });
        console.log(responseLogin);
        // const response = await axios.post("http://localhost:8000/api/login", {
        //   email: data.email,
        //   password: data.password,
        // });

        if (responseLogin.status) {
          const user = responseLogin.data;
          localStorage.setItem("user", JSON.stringify(user));
          // console.log(responseLogin.data.token);
          localStorage.setItem("token", user.token);
          navigate("/home");
        } else {
          setErrors({ ...errors, general: "Invalid credentials" });
        }
      } catch (error) {
        console.error("Login error", error);
        setErrors({ ...errors, general: "Login failed" });
      }
    }
  };

  const [user, setUser] = useState([]);
  const [userToRegistrate, setUserToRe] = useState({})

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
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
          setUserToRe(res.data)
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  useEffect(
    () => {
      const registerUser = async () => {
        const response = await RegisterController.googleRegistration({username: userToRegistrate.name, email: userToRegistrate.email})
        console.log(response);

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
      }
      
      registerUser()
    },
    [userToRegistrate]
  )


  return (
    <>
      <div className="px-3 pt-[120px] max-sm:pt-[70px]">
        <div className="bg-[#fff] py-[35px] px-[25px] max-w-[370px] rounded-xl m-auto">
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center justify-center">
              <img src={subscribe} alt="Logo" />
            </div>
            <form
              className="flex flex-col items-start gap-6 w-full"
              onSubmit={handleSubmit}
            >
              <h1 className="font-redRoseBold text-[22px] text-[#000]">
                Login
              </h1>
              {errors.general && (
                <div className="w-full bg-red-100 text-red-700 p-3 rounded mb-4">
                  {errors.general}
                </div>
              )}
              <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-[#000] font-medium text-[14px]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    autoComplete="off"
                    name="email"
                    className="text-[16px] border border-stone-300 rounded-md px-3 py-4 w-full leading-[125%] border-[#D8DADC] outline-none"
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-[14px] text-[#F01A16] leading-[125%] font-sembold">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="password"
                    className="text-[#000] font-medium text-[14px]"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="********"
                    name="password"
                    className="text-[16px] border border-stone-300 rounded-md px-3 py-4 w-full leading-[125%] border-[#D8DADC] outline-none"
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="text-[14px] text-[#F01A16] leading-[125%] font-sembold">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>
              {/* Bouton de connexion avec Google */}
              <div className=" w-full flex justify-center items-center hover:text-white-2 text-primary-0">
                <Button 
                  handleClick={login}
                  btnIcon={ <BiLogoGoogle className="" size={24}/> }
                  buttonText=" Se connecter avec google "
                  btnP="py-3"
                  btnType="button"
                  btnClass="w-full hover:text-black-0 "
                  btnText="text-primary-0 hover:text-white-2 text-sm"
                  btnBorder="  rounded border border-primary-0 hover:border-none border-opacity-60 hover:bg-primary-0 "
                />
                
              </div>

              <button
                type="submit"
                className=" py-3 px-4 text-white rounded-md cursor-pointer font-semiBold text-[16px] bg-[#4649E5] hover:bg-[#3B3EAC] transition duration-300 ease-in-out w-full text-[#fff] font-redRoseBold"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

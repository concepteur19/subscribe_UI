import { useState } from "react";
import { useNavigate } from "react-router-dom";
import subscribe from "../../../assets/images/subscribeIcon.svg";
import userSignIn from "../../../controllers/auth/loginController";

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
          localStorage.setItem('user', JSON.stringify(user));
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
              <button
                type="submit"
                className="py-3 px-4 text-white rounded-md cursor-pointer font-semiBold text-[16px] bg-[#4649E5] hover:bg-[#3B3EAC] transition duration-300 ease-in-out w-full text-[#fff] font-redRoseBold"
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

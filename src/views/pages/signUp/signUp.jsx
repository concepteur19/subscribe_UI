import subscribe from '../../../assets/images/subscribeIcon.svg';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function SignUp() {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!data.email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            validationErrors.email = 'Email is invalid';
        } 

        if (!data.username.trim()) {
            validationErrors.username = 'Username is required';
        }

        if (!data.password.trim()) { 
            validationErrors.password = 'Password is required';
        } else if (data.password.length < 6) {
            validationErrors.password = 'Password must be at least 6 characters';
        }

        

        if (!validationErrors.email && !validationErrors.username && !validationErrors.password) {
            try {
                const response = await axios.post('http://localhost:8000/api/register', {
                    username: data.username,
                    email: data.email,
                    password: data.password
                });

                console.log(response.data);

                if (response.data.code === 200) {
                    // Redirect to login page

                    navigate('/Login'); // If using react-router-dom v5
                    // navigate('/login'); // If using react-router-dom v6
                } else if (response.data.status_code === 422) {
                    validationErrors.email = 'Email is taken';
                }
            } catch (error) {
                console.error(error);
                // Handle error (e.g., show error message)
            }
        }

        setErrors(validationErrors);
    };


    return (
        <>
            <div className='px-3 pt-[90px] max-sm:pt-[50px]'>
                <div className='bg-[#fff] py-[35px] px-[25px] max-w-[370px] rounded-xl m-auto'>
                    <div className='flex flex-col items-start gap-6'>
                        <div className='flex items-center justify-center'>
                            <img src={subscribe} alt="Logo" />
                        </div>
                        <form 
                            className='flex flex-col items-start gap-6 w-full'
                            onSubmit={handleSubmit}
                        >
                            
                            <h1 className='font-redRoseBold text-[22px] text-[#000]'>Create Account</h1>
                            <div className='flex flex-col gap-4 w-full'>
                            <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="username"
                                        className='text-[#000] font-medium text-[14px]'
                                    >username</label>
                                    <input 
                                        type="text" 
                                        placeholder="janeDoe56"
                                        autoComplete="off"
                                        name="username"
                                        className="border border-stone-300 rounded-md px-3 py-4 w-full leading-[125%] border-[#D8DADC] outline-none text-[#000] font-medium text-[16px]"
                                        onChange={handleChange}
                                    />
                                    {errors.username && (
                                        <di v className='flex items-center gap-2'>
                                            <div className='flex items-center justify-center'>
                                                <svg        
                                                    className="vuesax-outline-info-circle2"
                                                    width="18"
                                                    height="19"
                                                    viewBox="0 0 18 19"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                    <path
                                                        d="M9 17.6125C4.5525 17.6125 0.9375 13.9975 0.9375 9.54999C0.9375 5.10249 4.5525 1.48749 9 1.48749C13.4475 1.48749 17.0625 5.10249 17.0625 9.54999C17.0625 13.9975 13.4475 17.6125 9 17.6125ZM9 2.61249C5.175 2.61249 2.0625 5.72499 2.0625 9.54999C2.0625 13.375 5.175 16.4875 9 16.4875C12.825 16.4875 15.9375 13.375 15.9375 9.54999C15.9375 5.72499 12.825 2.61249 9 2.61249Z"
                                                        fill="#F01A16"
                                                    />
                                                    <path
                                                        d="M9 10.8625C8.6925 10.8625 8.4375 10.6075 8.4375 10.3V6.54999C8.4375 6.24249 8.6925 5.98749 9 5.98749C9.3075 5.98749 9.5625 6.24249 9.5625 6.54999V10.3C9.5625 10.6075 9.3075 10.8625 9 10.8625Z"
                                                        fill="#F01A16"
                                                    />
                                                    <path
                                                        d="M9 13.3C8.9025 13.3 8.805 13.2775 8.715 13.24C8.625 13.2025 8.5425 13.15 8.4675 13.0825C8.4 13.0075 8.3475 12.9325 8.31 12.835C8.2725 12.745 8.25 12.6475 8.25 12.55C8.25 12.4525 8.2725 12.355 8.31 12.265C8.3475 12.175 8.4 12.0925 8.4675 12.0175C8.5425 11.95 8.625 11.8975 8.715 11.86C8.895 11.785 9.105 11.785 9.285 11.86C9.375 11.8975 9.4575 11.95 9.5325 12.0175C9.6 12.0925 9.6525 12.175 9.69 12.265C9.7275 12.355 9.75 12.4525 9.75 12.55C9.75 12.6475 9.7275 12.745 9.69 12.835C9.6525 12.9325 9.6 13.0075 9.5325 13.0825C9.4575 13.15 9.375 13.2025 9.285 13.24C9.195 13.2775 9.0975 13.3 9 13.3Z"
                                                        fill="#F01A16"
                                                    />
                                                </svg>
                                            </div>
                                            <p className='text-[14px] text-[#F01A16] leading-[125%] font-sembold'>
                                                {errors.username}
                                            </p>
                                        </di>
                                    )}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="email"
                                        className='text-[#000] font-medium text-[14px]'
                                    >Email</label>
                                    <input 
                                        type="email" 
                                        placeholder="example@gmail.com"
                                        autoComplete="off"
                                        name="email"
                                        className="border border-stone-300 rounded-md px-3 py-4 w-full leading-[125%] border-[#D8DADC] outline-none text-[#000] font-medium text-[16px]"
                                        onChange={handleChange}
                                    />
                                    {errors.email && (
                                        <div className='flex items-center gap-2'>
                                            <div className='flex items-center justify-center'>
                                                <svg        
                                                    className="vuesax-outline-info-circle2"
                                                    width="18"
                                                    height="19"
                                                    viewBox="0 0 18 19"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                    <path
                                                        d="M9 17.6125C4.5525 17.6125 0.9375 13.9975 0.9375 9.54999C0.9375 5.10249 4.5525 1.48749 9 1.48749C13.4475 1.48749 17.0625 5.10249 17.0625 9.54999C17.0625 13.9975 13.4475 17.6125 9 17.6125ZM9 2.61249C5.175 2.61249 2.0625 5.72499 2.0625 9.54999C2.0625 13.375 5.175 16.4875 9 16.4875C12.825 16.4875 15.9375 13.375 15.9375 9.54999C15.9375 5.72499 12.825 2.61249 9 2.61249Z"
                                                        fill="#F01A16"
                                                    />
                                                    <path
                                                        d="M9 10.8625C8.6925 10.8625 8.4375 10.6075 8.4375 10.3V6.54999C8.4375 6.24249 8.6925 5.98749 9 5.98749C9.3075 5.98749 9.5625 6.24249 9.5625 6.54999V10.3C9.5625 10.6075 9.3075 10.8625 9 10.8625Z"
                                                        fill="#F01A16"
                                                    />
                                                    <path
                                                        d="M9 13.3C8.9025 13.3 8.805 13.2775 8.715 13.24C8.625 13.2025 8.5425 13.15 8.4675 13.0825C8.4 13.0075 8.3475 12.9325 8.31 12.835C8.2725 12.745 8.25 12.6475 8.25 12.55C8.25 12.4525 8.2725 12.355 8.31 12.265C8.3475 12.175 8.4 12.0925 8.4675 12.0175C8.5425 11.95 8.625 11.8975 8.715 11.86C8.895 11.785 9.105 11.785 9.285 11.86C9.375 11.8975 9.4575 11.95 9.5325 12.0175C9.6 12.0925 9.6525 12.175 9.69 12.265C9.7275 12.355 9.75 12.4525 9.75 12.55C9.75 12.6475 9.7275 12.745 9.69 12.835C9.6525 12.9325 9.6 13.0075 9.5325 13.0825C9.4575 13.15 9.375 13.2025 9.285 13.24C9.195 13.2775 9.0975 13.3 9 13.3Z"
                                                        fill="#F01A16"
                                                    />
                                                </svg>
                                            </div>
                                            <p className='text-[14px] text-[#F01A16] leading-[125%] font-sembold'>
                                                {errors.email}
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="password"
                                        className='text-[#000] font-medium text-[14px]'
                                    >Password</label>
                                    <input 
                                        type="password" 
                                        placeholder="********"
                                        name="password"
                                        className="border border-stone-300 rounded-md px-3 py-4 w-full leading-[125%] border-[#D8DADC] outline-none text-[#000] font-medium text-[16px]"
                                        onChange={handleChange}
                                    />
                                    {errors.password && (
                                        <div className='flex items-center gap-2'>
                                            <div className='flex items-center justify-center'>
                                                <svg        
                                                    className="vuesax-outline-info-circle2"
                                                    width="18" Flogin
                                                    height="19"
                                                    viewBox="0 0 18 19"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                    <path
                                                        d="M9 17.6125C4.5525 17.6125 0.9375 13.9975 0.9375 9.54999C0.9375 5.10249 4.5525 1.48749 9 1.48749C13.4475 1.48749 17.0625 5.10249 17.0625 9.54999C17.0625 13.9975 13.4475 17.6125 9 17.6125ZM9 2.61249C5.175 2.61249 2.0625 5.72499 2.0625 9.54999C2.0625 13.375 5.175 16.4875 9 16.4875C12.825 16.4875 15.9375 13.375 15.9375 9.54999C15.9375 5.72499 12.825 2.61249 9 2.61249Z"
                                                        fill="#F01A16"
                                                    />
                                                    <path
                                                        d="M9 10.8625C8.6925 10.8625 8.4375 10.6075 8.4375 10.3V6.54999C8.4375 6.24249 8.6925 5.98749 9 5.98749C9.3075 5.98749 9.5625 6.24249 9.5625 6.54999V10.3C9.5625 10.6075 9.3075 10.8625 9 10.8625Z"
                                                        fill="#F01A16"
                                                    />
                                                    <path
                                                        d="M9 13.3C8.9025 13.3 8.805 13.2775 8.715 13.24C8.625 13.2025 8.5425 13.15 8.4675 13.0825C8.4 13.0075 8.3475 12.9325 8.31 12.835C8.2725 12.745 8.25 12.6475 8.25 12.55C8.25 12.4525 8.2725 12.355 8.31 12.265C8.3475 12.175 8.4 12.0925 8.4675 12.0175C8.5425 11.95 8.625 11.8975 8.715 11.86C8.895 11.785 9.105 11.785 9.285 11.86C9.375 11.8975 9.4575 11.95 9.5325 12.0175C9.6 12.0925 9.6525 12.175 9.69 12.265C9.7275 12.355 9.75 12.4525 9.75 12.55C9.75 12.6475 9.7275 12.745 9.69 12.835C9.6525 12.9325 9.6 13.0075 9.5325 13.0825C9.4575 13.15 9.375 13.2025 9.285 13.24C9.195 13.2775 9.0975 13.3 9 13.3Z"
                                                        fill="#F01A16"
                                                    />
                                                </svg>
                                            </div>
                                            <p className='text-[14px] text-[#F01A16] leading-[125%] font-sembold'>
                                                {errors.password}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className='py-3 px-4 text-white rounded-md cursor-pointer font-semiBold  text-[16px] bg-[#4649E5] hover:bg-[#3B3EAC] transition duration-300 ease-in-out w-full text-[#fff]'
                                
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
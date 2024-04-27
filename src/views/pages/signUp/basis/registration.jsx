import youtube from "@/assets/images/youtube.svg";
import netflix from "@/assets/images/netflix.svg";
import spotify from "@/assets/images/spotify.svg";
import primeVideo from "@/assets/images/prime-video.svg";
import { useState } from 'react';

export function RegistrationPageElements(){

    const [Data, setData] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    

    const [errors, setErrors] = useState({});

    
    const handleChange = (e) => {  
        const {name, value} = e.target;
        setData({
            ...Data,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        if(!Data.email.trim()){
            validationErrors.email = "email is required";
        }else if(!/\S+@\S+\.\S+/.test(Data.email)){
            validationErrors.email = "email is invalid";
        }


        if(!Data.username.trim()){
            validationErrors.username = "username is required";
        }

        
        if(!Data.password.trim()){
            validationErrors.password = "password is required";
        }else if(Data.password.length < 8){
            validationErrors.password = "password must be at least 8 characters";
        }

        if(Data.confirmPassword !== Data.password){
            validationErrors.confirmPassword = "passwords do not match";
        }

        setErrors(validationErrors);

        if(Object.keys(validationErrors).length === 0){
            alert("Registed successfully")
        }
        
    }


    return (
        <>
            <div className="hero-section-wrapper truncate"
                style={{
                    position: 'relative',
                    height: "100vh",
                }}
            >
                <div className="hero-section-content flex flex-col items-center pt-10">
                    <div className="registration-card flex bg-white"
                        style={{
                            padding: "20px 30px",
                            borderRadius: "14px",
                        }}
                    >
                        <form className="registration-card-content flex flex-col items-start gap-6 " onSubmit={handleSubmit}>
                            <div className="card-title">
                                <h1
                                    style={{
                                        fontSize: "22px",
                                        fontWeight: "700",
                                        color: "#000",
                                        lineHeight: "130%",
                                    }}
                                >Registration</h1>
                            </div>
                            <div className="card-inputs flex flex-col gap-4" >
                                <div className="input-email flex flex-col gap-2">
                                    <label htmlFor="inputEmail">Email</label>
                                    <input 
                                        className='outline-none border border-solid' 
                                        style={{
                                            borderColor: "#D8DADC",
                                            borderRadius: "10px",
                                            lineHeight: "125%",
                                            padding: "12px 16px",
                                        }}
                                        type="email" 
                                        placeholder="example@gmail.com" 
                                        id="inputEmail" 
                                        autoComplete='off' 
                                        onChange={handleChange} 
                                        name='email'
                                    />
                                    {errors.email && 
                                        <div className="error-email flex items-center gap-2">
                                            <div className="error-icon flex items-center justify-center">
                                                <svg class="vuesax-outline-info-circle2" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 17.6125C4.5525 17.6125 0.9375 13.9975 0.9375 9.54999C0.9375 5.10249 4.5525 1.48749 9 1.48749C13.4475 1.48749 17.0625 5.10249 17.0625 9.54999C17.0625 13.9975 13.4475 17.6125 9 17.6125ZM9 2.61249C5.175 2.61249 2.0625 5.72499 2.0625 9.54999C2.0625 13.375 5.175 16.4875 9 16.4875C12.825 16.4875 15.9375 13.375 15.9375 9.54999C15.9375 5.72499 12.825 2.61249 9 2.61249Z" fill="#F01A16" />
                                                    <path d="M9 10.8625C8.6925 10.8625 8.4375 10.6075 8.4375 10.3V6.54999C8.4375 6.24249 8.6925 5.98749 9 5.98749C9.3075 5.98749 9.5625 6.24249 9.5625 6.54999V10.3C9.5625 10.6075 9.3075 10.8625 9 10.8625Z" fill="#F01A16" />
                                                    <path d="M9 13.3C8.9025 13.3 8.805 13.2775 8.715 13.24C8.625 13.2025 8.5425 13.15 8.4675 13.0825C8.4 13.0075 8.3475 12.9325 8.31 12.835C8.2725 12.745 8.25 12.6475 8.25 12.55C8.25 12.4525 8.2725 12.355 8.31 12.265C8.3475 12.175 8.4 12.0925 8.4675 12.0175C8.5425 11.95 8.625 11.8975 8.715 11.86C8.895 11.785 9.105 11.785 9.285 11.86C9.375 11.8975 9.4575 11.95 9.5325 12.0175C9.6 12.0925 9.6525 12.175 9.69 12.265C9.7275 12.355 9.75 12.4525 9.75 12.55C9.75 12.6475 9.7275 12.745 9.69 12.835C9.6525 12.9325 9.6 13.0075 9.5325 13.0825C9.4575 13.15 9.375 13.2025 9.285 13.24C9.195 13.2775 9.0975 13.3 9 13.3Z" fill="#F01A16" />
                                                </svg>
                                            </div>
                                            <p
                                                style={{
                                                    fontSize: "14px",
                                                    color: "#F01A16",
                                                    lineHeight: "125%",
                                                    fontWeight: "500"
                                                }}
                                            >{errors.email}</p>
                                        </div>
                                    }
                                </div>
                                <div className="input-username flex flex-col gap-2">
                                    <label htmlFor="inputUsername">Username</label>
                                    <input 
                                        className='outline-none border border-solid' 
                                        style={{
                                            borderColor: "#D8DADC",
                                            borderRadius: "10px",
                                            lineHeight: "125%",
                                            padding: "12px 16px",
                                        }}
                                        type="text" 
                                        placeholder="JaneDoe65" 
                                        id="inputUsername" 
                                        autoComplete='off' 
                                        onChange={handleChange} 
                                        name='username'
                                    />
                                    {errors.username &&
                                        <div className="error-username flex items-center gap-2">
                                            <div className="error-icon flex items-center justify-center">
                                                <svg class="vuesax-outline-info-circle2" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 17.6125C4.5525 17.6125 0.9375 13.9975 0.9375 9.54999C0.9375 5.10249 4.5525 1.48749 9 1.48749C13.4475 1.48749 17.0625 5.10249 17.0625 9.54999C17.0625 13.9975 13.4475 17.6125 9 17.6125ZM9 2.61249C5.175 2.61249 2.0625 5.72499 2.0625 9.54999C2.0625 13.375 5.175 16.4875 9 16.4875C12.825 16.4875 15.9375 13.375 15.9375 9.54999C15.9375 5.72499 12.825 2.61249 9 2.61249Z" fill="#F01A16" />
                                                    <path d="M9 10.8625C8.6925 10.8625 8.4375 10.6075 8.4375 10.3V6.54999C8.4375 6.24249 8.6925 5.98749 9 5.98749C9.3075 5.98749 9.5625 6.24249 9.5625 6.54999V10.3C9.5625 10.6075 9.3075 10.8625 9 10.8625Z" fill="#F01A16" />
                                                    <path d="M9 13.3C8.9025 13.3 8.805 13.2775 8.715 13.24C8.625 13.2025 8.5425 13.15 8.4675 13.0825C8.4 13.0075 8.3475 12.9325 8.31 12.835C8.2725 12.745 8.25 12.6475 8.25 12.55C8.25 12.4525 8.2725 12.355 8.31 12.265C8.3475 12.175 8.4 12.0925 8.4675 12.0175C8.5425 11.95 8.625 11.8975 8.715 11.86C8.895 11.785 9.105 11.785 9.285 11.86C9.375 11.8975 9.4575 11.95 9.5325 12.0175C9.6 12.0925 9.6525 12.175 9.69 12.265C9.7275 12.355 9.75 12.4525 9.75 12.55C9.75 12.6475 9.7275 12.745 9.69 12.835C9.6525 12.9325 9.6 13.0075 9.5325 13.0825C9.4575 13.15 9.375 13.2025 9.285 13.24C9.195 13.2775 9.0975 13.3 9 13.3Z" fill="#F01A16" />
                                                </svg>
                                            </div>
                                            <p
                                                style={{
                                                    fontSize: "14px",
                                                    color: "#F01A16",
                                                    lineHeight: "125%",
                                                    fontWeight: "500"
                                                }}
                                            >{errors.username}</p>
                                        </div>
                                    }
                                </div>
                                <div className="input-password flex flex-col gap-2">
                                    <label htmlFor="inputPassword">Create password</label>
                                    <input 
                                        className='outline-none border border-solid' 
                                        style={{
                                            borderColor: "#D8DADC",
                                            borderRadius: "10px",
                                            lineHeight: "125%",
                                            padding: "12px 16px",
                                        }}
                                        type="password" 
                                        placeholder="********" 
                                        id="inputPassword" 
                                        onChange={handleChange}
                                        name='password'/>
                                    {errors.password &&
                                        <div className="error-password flex items-center gap-2">
                                            <div className="error-icon flex items-center justify-center">
                                                <svg class="vuesax-outline-info-circle2" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 17.6125C4.5525 17.6125 0.9375 13.9975 0.9375 9.54999C0.9375 5.10249 4.5525 1.48749 9 1.48749C13.4475 1.48749 17.0625 5.10249 17.0625 9.54999C17.0625 13.9975 13.4475 17.6125 9 17.6125ZM9 2.61249C5.175 2.61249 2.0625 5.72499 2.0625 9.54999C2.0625 13.375 5.175 16.4875 9 16.4875C12.825 16.4875 15.9375 13.375 15.9375 9.54999C15.9375 5.72499 12.825 2.61249 9 2.61249Z" fill="#F01A16" />
                                                    <path d="M9 10.8625C8.6925 10.8625 8.4375 10.6075 8.4375 10.3V6.54999C8.4375 6.24249 8.6925 5.98749 9 5.98749C9.3075 5.98749 9.5625 6.24249 9.5625 6.54999V10.3C9.5625 10.6075 9.3075 10.8625 9 10.8625Z" fill="#F01A16" />
                                                    <path d="M9 13.3C8.9025 13.3 8.805 13.2775 8.715 13.24C8.625 13.2025 8.5425 13.15 8.4675 13.0825C8.4 13.0075 8.3475 12.9325 8.31 12.835C8.2725 12.745 8.25 12.6475 8.25 12.55C8.25 12.4525 8.2725 12.355 8.31 12.265C8.3475 12.175 8.4 12.0925 8.4675 12.0175C8.5425 11.95 8.625 11.8975 8.715 11.86C8.895 11.785 9.105 11.785 9.285 11.86C9.375 11.8975 9.4575 11.95 9.5325 12.0175C9.6 12.0925 9.6525 12.175 9.69 12.265C9.7275 12.355 9.75 12.4525 9.75 12.55C9.75 12.6475 9.7275 12.745 9.69 12.835C9.6525 12.9325 9.6 13.0075 9.5325 13.0825C9.4575 13.15 9.375 13.2025 9.285 13.24C9.195 13.2775 9.0975 13.3 9 13.3Z" fill="#F01A16" />
                                                </svg>
                                            </div>
                                            <p
                                                style={{
                                                    fontSize: "14px",
                                                    color: "#F01A16",
                                                    lineHeight: "125%",
                                                    fontWeight: "500"
                                                }}
                                            >{errors.password}</p>
                                        </div>
                                    }
                                </div>
                                <div className="input-confirm-password flex flex-col gap-2">
                                    <label htmlFor="inputConfirmPassword">Confirm password</label>
                                    <input 
                                        className='outline-none border border-solid' 
                                        style={{
                                            borderColor: "#D8DADC",
                                            borderRadius: "10px",
                                            lineHeight: "125%",
                                            padding: "12px 16px",
                                        }}
                                        type="password" 
                                        placeholder="********" 
                                        id="inputConfirmPassword" 
                                        onChange={handleChange} 
                                        name='confirmPassword'
                                    />
                                    {errors.confirmPassword &&
                                        <div className="error-confirm-password flex items-center gap-2">
                                            <div className="error-icon flex items-center justify-center">
                                                <svg class="vuesax-outline-info-circle2" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 17.6125C4.5525 17.6125 0.9375 13.9975 0.9375 9.54999C0.9375 5.10249 4.5525 1.48749 9 1.48749C13.4475 1.48749 17.0625 5.10249 17.0625 9.54999C17.0625 13.9975 13.4475 17.6125 9 17.6125ZM9 2.61249C5.175 2.61249 2.0625 5.72499 2.0625 9.54999C2.0625 13.375 5.175 16.4875 9 16.4875C12.825 16.4875 15.9375 13.375 15.9375 9.54999C15.9375 5.72499 12.825 2.61249 9 2.61249Z" fill="#F01A16" />
                                                    <path d="M9 10.8625C8.6925 10.8625 8.4375 10.6075 8.4375 10.3V6.54999C8.4375 6.24249 8.6925 5.98749 9 5.98749C9.3075 5.98749 9.5625 6.24249 9.5625 6.54999V10.3C9.5625 10.6075 9.3075 10.8625 9 10.8625Z" fill="#F01A16" />
                                                    <path d="M9 13.3C8.9025 13.3 8.805 13.2775 8.715 13.24C8.625 13.2025 8.5425 13.15 8.4675 13.0825C8.4 13.0075 8.3475 12.9325 8.31 12.835C8.2725 12.745 8.25 12.6475 8.25 12.55C8.25 12.4525 8.2725 12.355 8.31 12.265C8.3475 12.175 8.4 12.0925 8.4675 12.0175C8.5425 11.95 8.625 11.8975 8.715 11.86C8.895 11.785 9.105 11.785 9.285 11.86C9.375 11.8975 9.4575 11.95 9.5325 12.0175C9.6 12.0925 9.6525 12.175 9.69 12.265C9.7275 12.355 9.75 12.4525 9.75 12.55C9.75 12.6475 9.7275 12.745 9.69 12.835C9.6525 12.9325 9.6 13.0075 9.5325 13.0825C9.4575 13.15 9.375 13.2025 9.285 13.24C9.195 13.2775 9.0975 13.3 9 13.3Z" fill="#F01A16" />
                                                </svg>
                                            </div>
                                            <p
                                                style={{
                                                    fontSize: "14px",
                                                    color: "#F01A16",
                                                    lineHeight: "125%",
                                                    fontWeight: "500"
                                                }}
                                            >{errors.confirmPassword}</p>
                                        </div>
                                    }
                                </div>
                            </div>
                            <button 
                                type='submit'
                                style={{
                                    backgroundColor: "#4649E5",
                                    color: "#fff",
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    padding: "12px 16px",
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer'
                                
                                }}
                            >Sign Up</button>
                        </form>
                    </div> 
                </div>
                
                <img 
                    src={youtube} 
                    alt="" className='youtube-widget max-xl:hidden'
                    style={{
                        position: 'absolute',
                        right:"-5%",
                        top: '58px'
                    }}
                />
                <img 
                    src={netflix} 
                    alt="" className='netflix-widget max-xl:hidden'
                    style={{
                        position: 'absolute',
                        right:"0%",
                        top: '420px'
                    }}
                />
                <img 
                    src={spotify} 
                    alt="" className='spotify-widget max-xl:hidden'
                    style={{
                        position: 'absolute',
                        left:"0%",
                        top: '102px'
                    }}
                />
                <img 
                    src={primeVideo} 
                    alt="" className='prime-video-widget max-xl:hidden'
                    style={{
                        position: 'absolute',
                        left:"0%",
                        top: '470px'
                    }} 
                />
            </div>
        </>
    )
}
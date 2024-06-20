// import { Button } from "react-day-picker";
import { Link } from "react-router-dom";
import logo from "@/src/assets/images/subscribeIcon.svg";

export function PrivacyPolicy(){
    return (
        <>
            <div className="px-3">
                <div className="flex flex-col gap-2 mx-auto md:max-w-lg w-full my-4">
                    <div className="flex justify-between items-center w-full space-y-8">
                        <div className="logo flex items-center justify-center">
                            <img src={logo} alt="" />
                        </div>  
                        <div className="flex items-center gap-3"> 
                            <div className="nav-buttons">
                                <Link to="/login">
                                    <button className="login-button px-[14px] py-[8px] text-[15.5px]  bg-primary-0 text-white rounded-[8px] cursor-pointer">
                                        Login
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-2xl my-2 font-redRoseBold">Privacy Policy</h1>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl my-1 font-redRoseBold">Introduction</h2>
                        <p className="text-[#BBBBC8] text-[14px] leading-[150%]">Welcome to SubScribe! We are committed to protecting your privacy. This Privacy Policy explains how SubScribe ("we", "us", "our") 
                        collects, uses, discloses, and safeguards your information when you use our app, Chrome extension, and website. Please read this policy carefully to understand our views and practices regarding your personal data.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl my-1 font-redRoseBold">Information We Collect</h2>
                        <p className="text-[#BBBBC8] text-[14px] leading-[150%]"> <span className="text-[16px] text-white-2 font-redRoseBold">Personal Information</span><br/>
                        When you register on our app, use our services, or contact us, we may collect the following personal information:
                        <br/><br/>
                        <ul className="list-disc list-inside">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Subscription details (such as service name, subscription dates, and costs)</li>
                            <li>Payment information (if applicable)</li>
                        </ul>
                        <br/>
                        <span className="text-[16px] text-white-2 font-redRoseBold">Usage Data</span>
                        <br/>
                        We collect information about how you use our app and services, including:
                        <br/><br/>
                        <ul className="list-disc list-inside">
                            <li>Device information (e.g., device type, operating system, and unique device identifiers)</li>
                            <li>Log data (e.g., IP address, browser type, and usage patterns)</li>
                            <li>Cookies and similar technologies (to enhance your user experience)</li>
                        </ul>
                        
                        
                        </p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
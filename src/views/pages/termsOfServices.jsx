// import { Button } from "react-day-picker";
import { Link } from "react-router-dom";
import logo from "@/src/assets/images/subscribeIcon.svg";

export function TermsOfServices(){
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
                    <h1 className="text-2xl my-2 font-redRoseBold">Terms & Conditions</h1>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl my-1 font-redRoseBold">Introduction</h2>
                        <p className="text-[#BBBBC8] text-[14px] leading-[150%]">Welcome to SubScribe! By downloading or using our app, Chrome extension, and website, you agree to comply with and be bound by the following terms and conditions. 
                        Please read them carefully. If you do not agree with these terms, you should not use our services.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl my-1 font-redRoseBold">Intellectual Property</h2>
                        <p className="text-[#BBBBC8] text-[14px] leading-[150%]">You are not permitted to copy, modify, or distribute the app, any part of the app, or our trademarks in any way. You are also not allowed to attempt to extract 
                        the source code of the app, translate the app into other languages, or create derivative versions. All rights, including trademarks, copyrights, database rights, and other intellectual property rights related to the app, 
                        remain the property of SubScribe.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl my-1 font-redRoseBold">Usage of SubScribe</h2>
                        <p className="text-[#BBBBC8] text-[14px] leading-[150%]">SubScribe is designed to help users track their subscriptions such as Spotify, Netflix, and more. We strive to ensure that the app is useful and efficient. 
                        However, we reserve the right to make changes to the app or to charge for its services at any time for any reason. Any charges for the app or its services will be clearly communicated to you.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl my-1 font-redRoseBold">Personal Data</h2>
                        <p className="text-[#BBBBC8] text-[14px] leading-[150%]">SubScribe processes personal data that you provide to us to deliver our service. It is your responsibility to keep your device and access to the app secure. 
                        We recommend that you do not jailbreak or root your phone, which can compromise security features and potentially cause the app to malfunction</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl my-1 font-redRoseBold">Third-Party Services</h2>
                        <p className="text-[#BBBBC8] text-[14px] leading-[150%]">The app uses third-party services, each of which has its own terms and conditions. You can find the terms and conditions of these third-party service providers at the following links:

Google Play Services</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl my-1 font-redRoseBold">Connectivity and Usage</h2>
                        <p className="text-[#BBBBC8] text-[14px] leading-[150%]">Certain functions of the app require an active internet connection. The connection can be via Wi-Fi or provided by your mobile network provider. SubScribe cannot be held responsible if the app does not function fully due to lack of internet access.<br/><br/>

If you use the app outside of a Wi-Fi area, be aware that your mobile provider’s terms will still apply. This may result in charges for data usage, including roaming charges if used outside your home territory. By using the app, you accept responsibility for any such charges.<br/><br/>

It is also your responsibility to ensure your device remains charged. SubScribe cannot be held responsible if the app is unavailable due to your device running out of battery.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl my-1 font-redRoseBold">Liability</h2>
                        <p className="text-[#BBBBC8] text-[14px] leading-[150%]">While we strive to ensure the app is updated and correct at all times, we rely on third-party information and cannot accept liability for any loss, direct or indirect, resulting from reliance on the app’s functionality</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl my-1 font-redRoseBold">Updates and Termination</h2>
                        <p className="text-[#BBBBC8] text-[14px] leading-[150%]">We may update the app from time to time. The app is currently available on various platforms, and system requirements may change. You will need to download updates to continue using the app. We do not guarantee that the app will always be updated to remain relevant or compatible with your device’s version.<br/> <br/>

We may also terminate the app’s availability at any time without notice. Upon termination, your rights and licenses under these terms will end, and you must stop using the app and delete it from your device.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl my-1 font-redRoseBold">Changes to Terms and Conditions</h2>
                        <p className="text-[#BBBBC8] text-[14px] leading-[150%]">SubScribe may update these terms and conditions periodically. You are advised to review this page regularly for any changes. We will notify you of any changes by posting the new terms on this page. These terms are effective as of 2024-06-24</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-xl my-1 font-redRoseBold">Contact Us</h2>
                        <p className="text-[#BBBBC8] text-[14px] leading-[150%]">If you have any questions or suggestions about these terms and conditions, please contact us at <Link to="mailto:talchrist10@gmail.com" className="underline text-primary-0">support@subscribe.com</Link>.<br/><br/>

By using SubScribe, you agree to these terms and conditions. Thank you for choosing SubScribe to manage your subscriptions efficiently!</p>
                    </div>
                </div>
            </div>
        </>
    )
}
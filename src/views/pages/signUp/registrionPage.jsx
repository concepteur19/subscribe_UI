import { Navbar } from "../signIn/basis/navBar";
import RegistrationPageElements from "./basis/registration";

export default function SignUpPage() {
    return (
        <>
            <div className="registration-page">
                
               <Navbar />
                <RegistrationPageElements />
            </div>
        </>
    )
}
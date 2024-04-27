import { Navbar } from "../signIn/basis/navBar";
import { RegistrationPageElements } from "./basis/registration";

export function RegistrationPage() {
    return (
        <>
            <div className="registration-page">
                
               <Navbar />
                <RegistrationPageElements />
            </div>
        </>
    )
}
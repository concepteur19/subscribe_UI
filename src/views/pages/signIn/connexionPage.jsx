import { Navbar } from "./basis/navBar";
import ConnexionPageElements from "./basis/connexion";

export function LoginPage() {
    return (
        <>
            <div className="registration-page">
                
               <Navbar />
                <ConnexionPageElements />
            </div>
        </>
    )
}

export default LoginPage;
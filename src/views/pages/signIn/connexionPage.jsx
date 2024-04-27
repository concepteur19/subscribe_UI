import { Navbar } from "./basis/navBar";
import { ConnexionPageElements } from "./basis/connexion";

export function ConnexionPage() {
    return (
        <>
            <div className="registration-page">
                
               <Navbar />
                <ConnexionPageElements />
            </div>
        </>
    )
}

export default ConnexionPage;
import { HeroSectionElements } from "../basis/heroElements";
import { Navbar } from "../basis/navBar";

export function HeroSection(){
    return (
        <>
            <div className="hero-section">
                <Navbar/>
                <HeroSectionElements/>
            </div>
        </>
    )
}
import logo from "../../../../assets/logo.svg";
// let logo = require("../../../../assets/logo.svg") as any;

export function Navbar(){
    return (
        <>
            <div className="nav-bar-wrapper flex justify-center pt-7 pb-1 px-36 max-xl:px-20 max-lg:px-4">
                <div className="nav-bar-container flex justify-between items-center w-full">
                    <div className="logo flex items-center justify-center">
                        <img src={logo} alt="" />
                    </div>
                    <div className="nav-links flex items-center max-lg:hidden">
                        <a href="#1" 
                            style={{
                                padding: "9.95px 14.46px 10.44px 14.46px",
                                color: "#fff",
                                fontSize: "15.5px"
                            }}
                        >product</a>
                        <a href="#2"
                            style={{
                                padding: "9.95px 14.46px 10.44px 14.46px",
                                color: "#fff",
                                fontSize: "15.5px"
                            }}
                        >Feature</a>
                        <a href="#3"
                            style={{
                                padding: "9.95px 14.46px 10.44px 14.46px",
                                color: "#fff",
                                fontSize: "15.5px"
                            }}
                        >How it work</a>
                        <a href="#4"
                            style={{
                                padding: "9.95px 14.46px 10.44px 14.46px",
                                color: "#fff",
                                fontSize: "15.5px"
                            }}
                        >Company</a>
                        
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
                                <path d="M17.25 12.6157C17.25 13.0296 16.9139 13.3657 16.5 13.3657H1.5C1.08608 13.3657 0.75 13.0296 0.75 12.6157C0.75 12.2018 1.08608 11.8657 1.5 11.8657H16.5C16.9139 11.8657 17.25 12.2018 17.25 12.6157Z" fill="white"/>
                                <path d="M17.25 6.99072C17.25 7.40465 16.9139 7.74072 16.5 7.74072H1.5C1.08608 7.74072 0.75 7.40465 0.75 6.99072C0.75 6.5768 1.08608 6.24072 1.5 6.24072H16.5C16.9139 6.24072 17.25 6.5768 17.25 6.99072Z" fill="white"/>
                                <path d="M17.25 1.36572C17.25 1.77965 16.9139 2.11572 16.5 2.11572H1.5C1.08608 2.11572 0.75 1.77965 0.75 1.36572C0.75 0.951798 1.08608 0.615723 1.5 0.615723H16.5C16.9139 0.615723 17.25 0.951798 17.25 1.36572Z" fill="white"/>
                            </svg>
                        </div>
                        <div className="nav-buttons max-sm:hidden">
                            <button className="login-button"
                                style={{
                                    backgroundColor: "transparent",
                                    color: "#fff",
                                    fontSize: "15.5px",
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: "12.66px 14.34px 13.34px 14.46px",
                                    cursor: 'pointer'
                                }}
                            >Login</button>
                            <button className="getStarted-button"
                                style={{
                                    backgroundColor: "#4649E5",
                                    color: "#fff",
                                    fontSize: "15.5px",
                                    fontWeight: "500",
                                    border: 'none',
                                    borderRadius: '8px',
                                    padding: "12px 24.34px 11.59px 23px",
                                    cursor: 'pointer'
                                }}
                            >Get started</button>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}

export function HeroSectionElements(){
    return (
        <>
            <div id="product" className="hero-section px-8 pb-[100px] max-sm:px-4 max-sm:pb-[70px]">
                <div className="hero-section-content flex flex-col items-center pt-[110px] mx-auto max-w-[1276.8px] max-sm:pt-[101px]">
                    <div className="title">
                        <h1 className='text-[76px] text-white text-center font-bold leading-[110%] tracking-[1.96px] max-w-[655px] mb-[20px] w-full max-sm:text-[40px] max-sm:mb-[20px] '>
                        Collect all your 
                        Subscriptions<br/> 
                        <span className='text-[#4649E5]'>in one location</span>
                        </h1>
                    </div>
                    <div className="description flex flex-col justify-center">
                        <p className="text-[24.8px] text-white text-center font-normal leading-[150%] mb-[40px] max-w-[655px] max-sm:w-[350px] max-sm:text-[20px]">An intuitive platform to manage all your<br/> subscriptions, freeing up your time for what matters most: enjoying.</p>
                        <div className="hero-buttons flex items-center justify-center gap-3">
                            <button 
                                className="hero-getStarted-btn cursor-pointer pt-4 pl-8 pb-4 pr-8 text-white bg-[#4649E5] border border-solid border-[#232330] rounded-[8px] text-[15.5px] font-semibold">Get Started</button>
                            <button className="Book-demo-btn cursor-pointer pt-4 pl-8 pb-4 pr-8 text-[#4649E5] bg-white border border-solid border-[#232330] rounded-[8px] text-[15.5px] font-semibold">Book a demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
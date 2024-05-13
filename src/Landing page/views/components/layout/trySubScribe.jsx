import funFlip from '../../../elements/fun-flip-icon.svg';
import footerLogo from '../../../elements/footer-logo.svg';
import linkdinIcon from '../../../elements/linkdin-icon.svg';
import twitter from '../../../elements/twitter-icon.svg';
import dribbble from '../../../elements/dribbble-icon.svg';
import tryBackgroun from '../../../elements/tryBg.svg'

export function TrySubScribeSection () {
    return (
        <>
            <div className='px-8 max-sm:px-4' >
            <div className="flex justify-center items-center flex-col gap-3 mx-auto">
                <div className="flex flex-col items-center justify-center gap-[66.14px] max-w-[1276.8px] h-[499.16px] w-full bg-cover bg-center bg-no-repeat relative rounded-[32px] max-sm:h-[470px] max-sm:gap-[50px] max-sm:w-full"
                    style={{
                        backgroundImage: `url(${tryBackgroun})`
                    }}
                >
                    <div className="flex flex-col items-center gap-[20px]">
                        <h2 className='text-[52.74px] leading-[110%] tracking-[-1.34px] font-redRoseBold text-[#fff] text-center max-w-[560px] text-white max-sm:text-[32px] max-sm:text-center max-sm:w-[300px]'>Try SubScribe now</h2>
                    </div>
                    <div className="flex gap-[20px] max-sm:flex-col">
                        <button className='text-[16.53px] bg-[#fff] text-[#2B44E7] cursor-pointer py-[18px] px-8 rounded-[8px]'>Get Started now</button>
                        <button className='text-[16.53px] bg-none text-[#fff] cursor-pointer py-[18px] px-8 border border-solid border-[#fff] rounded-[8px]'>Book a demo</button>
                    </div>
                    <img src={funFlip} alt="" className='absolute bottom-[-50px] right-[50.14px] max-sm:right-[10.14px] max-sm:bottom-[-70.14px] '/>
                </div>
                
                <div className="bg-[#F7F7F7] h-[250px] flex justify-center items-center rounded-[32px] max-w-[1276.8px] w-full px-6 max-sm:h-[350px]">
                    <div className="flex flex-col items-center gap-11 w-full mx-auto">
                        <div className='flex max-w-[1177px] w-full justify-between items-center max-sm:flex-col max-sm:gap-8'>
                            <div className="logo">
                                <img src={footerLogo} alt="" />
                            </div>
                            <div className="flex gap-[79px] items-center max-md:gap-[20px]">
                                <a href="#" className='text-[#000]'>Features</a>
                                <a href="#" className='text-[#000]'>Company</a>
                                <a href="#" className='text-[#000]'>Legal</a>
                            </div>
                            <div className="flex gap-[15px] items-center">
                                <div className="w-[42px] h-[42px] border border-solid border-[#D8D8E6] flex justify-center items-center rounded-full">
                                    <img src={dribbble} alt="" />
                                </div>
                                <div className="w-[42px] h-[42px] border border-solid border-[#D8D8E6] flex justify-center items-center rounded-full">
                                    <img src={twitter} alt="" />
                                </div>
                                <div className="w-[42px] h-[42px] border border-solid border-[#D8D8E6] flex justify-center items-center rounded-full">
                                    <img src={linkdinIcon} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="copyright">
                            <p className='text-[13.43px] leading-[150%] text-[#5B5A59] max-w-[280px] text-center'>© SubScribe. 2023 — All rights reserved.</p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            </div>
            
        </>
    )
}
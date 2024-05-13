import authorQuoteGreen from '../../../elements/author-quote-green.svg';
import authorQuoteBlue from '../../../elements/author-quote-blue.svg';
import authorQuoteYellow from '../../../elements/author-quote-yellow.svg';

export function Testimonial (){
    return(
        <>
            <div className="pb-[85px] px-8 max-sm:px-4 ">
                <div className="flex flex-col items-center gap-[66.14px] mx-auto max-w-[1276.8px] w-full">
                    <div className="flex flex-col items-center gap-[20px]">
                        <h2 className='text-[52.74px] leading-[110%] tracking-[-1.34px] font-redRoseBold text-[#fff] text-center max-w-[560px] max-sm:text-[32px]'>Features that meet the specific needs of users</h2>
                        <p className='text-[24.8px] leading-[150%] text-white text-center max-w-[560px] max-sm:text-[20px]'>Power your subscription experience with features tailored to each user.</p>
                    </div>
                    <div className="inline-flex items-center gap-3 max-[875px]:flex-col max-[875px]:gap-8">
                        <div className="p-[58px] inline-flex flex-col border border-solid border-[#1B1B3D] rounded-[16px] max-xl:p-[30px] max-lg:px-[10px] max-[875px]:px-[18px] max-sm:w-full">
                            <div className="testimonial-card-body">
                                <p className='text-[18.6px] leading-[150%] text-[#ACABAA] max-w-[307px] pl-5'>This site has really simplified my life by bringing all my subscriptions together in one place. It's so much easier to manage now!</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div class="div-quote-author">
                                    <img src={authorQuoteGreen} alt="" />
                                </div>
                                <p className='text-[16.53px] leading-[150%] text-[#ACABAA] max-w-[313.84px] pl-5'>Co-Founder @SubScribe</p>
                            </div>
                        </div>
                        <div className="p-[58px] inline-flex flex-col border border-solid border-[#1B1B3D] rounded-[16px] max-xl:p-[30px] max-lg:px-[10px] max-[875px]:px-[18px] max-sm:w-full">
                            <div className="testimonial-card-body">
                                <p className='text-[18.6px] leading-[150%] text-[#ACABAA] max-w-[307px] pl-5'>I love subscription renewal notifications. It's saved me many a time from forgetting to renew my favourite services.</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div class="div-quote-author">
                                    <img src={authorQuoteBlue} alt="" />
                                </div>
                                <p className='text-[16.53px] leading-[150%] text-[#ACABAA] max-w-[313.84px] pl-5'>Co-Founder @SubScribe</p>
                            </div>
                        </div>
                        <div className="p-[58px] inline-flex flex-col border border-solid border-[#1B1B3D] rounded-[16px] max-xl:p-[30px] max-lg:px-[10px] max-[875px]:px-[18px] max-sm:w-full">
                            <div className="testimonial-card-body">
                                <p className='text-[18.6px] leading-[150%] text-[#ACABAA] max-w-[307px] pl-5'>The interface is so intuitive and user-friendly. I can add, modify and delete subscriptions in just a few clicks</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div class="div-quote-author">
                                    <img src={authorQuoteYellow} alt="" />
                                </div>
                                <p className='text-[16.53px] leading-[150%] text-[#ACABAA] max-w-[313.84px] pl-5'>Co-Founder @SubScribe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
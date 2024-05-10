import characterCapGreen from '../../../elements/character-cap-green.svg';
import remindSubscription from '../../../elements/remind-subscription.svg';

export function FeatureSection() {


    return (
        <div className="flex justify-center pb-[180px] px-8 max-sm:px-4 max-sm:pb-[80px]">
            <div className="flex justify-between max-w-[1276.8px] w-full gap-3 mx-auto max-lg:flex-col max-lg:items-center">
                <div className="feature-section-container-left max-lg:max-w-[578px]">
                    <div className="flex items-start flex-col gap-5">
                        <h2 className='text-[52.74px] leading-[110%] tracking-[-1.34px] font-bold text-white text-center max-w-[578px] text-start max-lg:max-w-full max-lg:text-center max-sm:text-[32px]'>Features that meet the specific needs of users</h2>
                        <p className='text-[24.8px] leading-[150%] text-white text-center max-w-[403px] text-start mb-[30px] max-lg:max-w-full max-lg:text-center max-sm:text-[20px]'>Power your subscription experience with features tailored to each user.</p>
                    </div>
                    <div className="features-list flex flex-col justify-center">
                        <div className="flex gap-5 items-center h-[69.61px] max-lg:justify-center">
                            <span className='text-[24.8px] leading-[150%] text-[#505058] max-w-[412px] w-full max-sm:text-[18px] max-sm:max-w-[300px]'>Set a reminder for subscriptions</span>
                            <div className="right-arrow-icon flex items-center justify-center w-6 h-6">
                                <svg class="svg" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.7882 6.48001L20.0114 11.7751C20.4572 12.1544 20.4833 12.8339 20.0679 13.2464L13.7882 19.48" stroke="white" stroke-width="3" stroke-miterlimit="10" />
                                    <path d="M19.9507 12.48H4.84003" stroke="white" stroke-width="3" stroke-miterlimit="10" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center h-[69.61px] max-lg:justify-center">
                            <span className='text-[24.8px] leading-[150%] text-[#505058] max-w-[412px] w-full max-sm:text-[18px] max-sm:max-w-[300px]'>Track your subscription expenses </span>
                            <div className="right-arrow-icon flex items-center justify-center w-6 h-6"> </div>
                        </div>
                        <div className="flex gap-5 items-center h-[69.61px] max-lg:justify-center">
                            <span className='text-[24.8px] leading-[150%] text-[#505058] max-w-[412px] w-full max-sm:text-[18px] max-sm:max-w-[300px]'>Add default Custom subscriptions</span>
                            <div className="right-arrow-icon flex items-center justify-center w-6 h-6"> </div>
                        </div>
                        <div className="flex gap-5 items-center h-[69.61px] max-lg:justify-center">
                            <span className='text-[24.8px] leading-[150%] text-[#505058] max-w-[412px] w-full max-sm:text-[18px] max-sm:max-w-[300px]'>Some ideas of features ?</span>
                            <div className="right-arrow-icon flex items-center justify-center w-6 h-6"> </div>
                        </div>
                    </div>
                </div>
                <div className="pt-[38px] pr-[4.8px] pb-[48.52px] pl-[57.6px] bg-[#101019] inline-flex rounded-[24px] max-xl:pl-[26px]">
                    <div className="inline-flex flex-col items-center gap-[50px]">
                        <div className="character-cap-green flex items-center justify-end max-w-[530px] w-full">
                            <img src={characterCapGreen} alt="" />
                        </div>    
                        <div className="remind-subscription">
                            <img src={remindSubscription} alt="" />
                        </div>
                        <p className='text-base ledading-[150%] text-[#505058] max-w-[450px] texte-center'>Meet your inbox. The home for your feedback from all of your sources. Make sure no feedback gets unnoticed.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
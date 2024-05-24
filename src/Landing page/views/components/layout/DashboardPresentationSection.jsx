import dashboardImage from '../../../elements/dashboard.svg';
import phoneDashboard from '../../../elements/phone.svg';

export function DashboardPresentationSection() {
    return (
        <>
            <div className='px-8 max-sm:px-4'>
                <div className="flex flex-col justify-center items-center gap-[96.5px] mt-[105px] pb-[199.91px] mx-auto max-w-[1276.8px] max-sm:mt-[85px] max-sm:pb-[80px]">
                    <div className="flex flex-col items-center gap-[20px]">
                        <h2 className='text-[52.74px] leading-[110%] tracking-[-1.34px] font-redRoseBold text-[#fff] text-center max-w-[560px] max-sm:text-[32px]'>You have everything on the same page</h2>
                        <p className='text-[24.8px] leading-[150%] text-white text-center max-w-[560px] max-sm:text-[20px]'>Streamlined Subscription Management: All Services, One Simple Interface</p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-[#101019] max-w-[1276.8px] w-full h-[748.09px] rounded-[24px] max-lg:h-[573px]">
                        <img src={dashboardImage} className='max-[1350px]:w-[937.69px] max-[1350px]:h-[549.6px] max-lg:w-[791.26px] max-lg:h-[463.77px] max-sm:hidden' alt="" />
                        <img src={phoneDashboard} className='hidden max-sm:block' alt=''/>
                    </div>
                </div>
            </div>
            
        </>
    )
}
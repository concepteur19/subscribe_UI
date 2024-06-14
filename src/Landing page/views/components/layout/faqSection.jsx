

export function FaqSection (){
    return(
        <>
            <div className="pb-[85px] px-8 max-sm:px-4 ">
                <div className="flex flex-col items-center gap-[66.14px] mx-auto max-w-[1276.8px] w-full">
                    <div className="flex flex-col items-center gap-[20px]">
                        <h2 className='text-[52.74px] leading-[110%] tracking-[-1.34px] font-redRoseBold text-[#fff] text-center max-w-[847px] max-sm:text-[32px]'>Frequently Asked Questions</h2>
                    </div>
                    <div className="flex gap-7 max-[875px]:flex-col max-[875px]:gap-8">
                        <div className="flex flex-col gap-7">
                            <div className="flex flex-col gap-2 p-8 bg-[#0B0B1A] rounded-[8px]">
                                <h3 className="text-redRoseBold text-[18.4px]">What is Subscribe?</h3>
                                <p className="text-[#A2A2A2] text-[16px] max-w-[436.72px] leading-[26px]">Subscribe is an intuitive platform designed to help you manage all your subscriptions in one convenient location. It streamlines your subscription management.</p>
                            </div>
                            <div className="flex flex-col gap-2 p-8 bg-[#0B0B1A] rounded-[8px]">
                                <h3 className="text-redRoseBold text-[18.4px]">Is my data safe with Subscribe?</h3>
                                <p className="text-[#A2A2A2] text-[16px] max-w-[436.72px] leading-[26px]">Absolutely. At Subscribe, we prioritize your data security. We use advanced encryption methods to ensure that all your personal information and subscription details are stored securely.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-7">
                            <div className="flex flex-col gap-2 p-8 bg-[#0B0B1A] rounded-[8px]">
                                <h3 className="text-redRoseBold text-[18.4px]">How can Subscribe help me?</h3>
                                <p className="text-[#A2A2A2] text-[16px] max-w-[436.72px] leading-[26px]">Subscribe helps you keep track of all your subscription services, reminding you of renewal dates, tracking your expenses, and ensuring you never miss an important update or payment. It’s your go-to tool for efficient subscription management.</p>
                            </div>
                            <div className="flex flex-col gap-2 p-8 bg-[#0B0B1A] rounded-[8px]">
                                <h3 className="text-redRoseBold text-[18.4px]">Can I use Subscribe on multiple devices?</h3>
                                <p className="text-[#A2A2A2] text-[16px] max-w-[436.72px] leading-[26px]">Yes, Subscribe is designed to work seamlessly across multiple devices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
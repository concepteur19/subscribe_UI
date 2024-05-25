

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
                                <h3 className="text-redRoseBold text-[18.4px]">What is Design Maestro?</h3>
                                <p className="text-[#A2A2A2] text-[16px] max-w-[436.72px] leading-[26px]">Design Maestro is a FREE package of macros that you
                                can use in the Keyboard Maestro app for macOS.
                                Wonder how Design Maestro automations can help
                                you? Read </p>
                            </div>
                            <div className="flex flex-col gap-2 p-8 bg-[#0B0B1A] rounded-[8px]">
                                <h3 className="text-redRoseBold text-[18.4px]">I have an idea for automation! Where do I submit it?</h3>
                                <p className="text-[#A2A2A2] text-[16px] max-w-[436.72px] leading-[26px]">If you have an idea for automation that we could
                                implement in the next versions of Design Maestro let us
                                know . We’ll review it and if it will find it useful we will implement it!  </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-7">
                            <div className="flex flex-col gap-2 p-8 bg-[#0B0B1A] rounded-[8px]">
                                <h3 className="text-redRoseBold text-[18.4px]">What is Keyboard Maestro?</h3>
                                <p className="text-[#A2A2A2] text-[16px] max-w-[436.72px] leading-[26px]">macOS where you can automate virtually anything.
                                Applications or websites, text or images, simple or
                                complex, on command or scheduled. If you can
                                perform it manually, Keyboard Maestro can almost
                                certainly automate it for you. Whether it is typing your
                                email address, going to Gmail or Twitter, launching
                                Pages, or duplicating a line, Keyboard Maestro can
                                help.</p>
                            </div>
                            <div className="flex flex-col gap-2 p-8 bg-[#0B0B1A] rounded-[8px]">
                                <h3 className="text-redRoseBold text-[18.4px]">Can I use Keyboard Maestro for Windows or Linux?</h3>
                                <p className="text-[#A2A2A2] text-[16px] max-w-[436.72px] leading-[26px]">No. Keyboard Maestro is only available for macOS.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
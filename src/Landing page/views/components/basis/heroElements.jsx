import { Link } from "react-router-dom"


export function HeroSectionElements(){
    return (
        <>
            <div id="product" className="hero-section px-8 pb-[100px] max-sm:px-4 max-sm:pb-[70px]">
                <div className="hero-section-content flex flex-col items-center pt-[40px] mx-auto max-w-[1276.8px]">
                    <div className="flex items-center rounded-[10px] px-4 py-2 gap-2 border border-solid border-[#13143A] bg-[#0E0F2F] mb-[35px]">
                        <span className="text-[#717184]">Propulsed with</span>
                        <div>
                            <svg class="group-22817" width="67" height="12" viewBox="0 0 67 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 10.5622V2.11074H19.5858C20.0929 2.11074 20.5476 2.22956 20.9502 2.4669C21.3526 2.70444 21.6724 3.02837 21.91 3.4388C22.1473 3.84933 22.2661 4.31231 22.2661 4.82733C22.2661 5.35059 22.1473 5.82149 21.91 6.23985C21.6724 6.65852 21.3526 6.99048 20.9502 7.23595C20.5476 7.48161 20.0929 7.60419 19.5858 7.60419H17.8111V10.5622H16ZM17.7869 5.97426H19.3806C19.5737 5.97426 19.7467 5.92405 19.8998 5.82332C20.0526 5.7228 20.1754 5.58792 20.268 5.41889C20.3604 5.24986 20.4069 5.05664 20.4069 4.83933C20.4069 4.62202 20.3604 4.43306 20.268 4.27196C20.1754 4.11096 20.0526 3.98218 19.8998 3.88552C19.7467 3.78896 19.5737 3.74068 19.3806 3.74068H17.7869V5.97426ZM23.4131 10.5622V1.62784H25.1276V10.5622H23.4131ZM28.8944 10.6829C28.3631 10.6829 27.8842 10.538 27.4577 10.2483C27.0309 9.95853 26.6928 9.56426 26.4435 9.0651C26.1939 8.56614 26.0692 7.9947 26.0692 7.3506C26.0692 6.7068 26.196 6.13537 26.4495 5.6362C26.7031 5.13724 27.0472 4.74693 27.4818 4.46508C27.9164 4.18343 28.4115 4.04255 28.9669 4.04255C29.2808 4.04255 29.5684 4.0889 29.8301 4.1814C30.0916 4.27399 30.321 4.40074 30.5182 4.56164C30.7154 4.72274 30.8823 4.90783 31.0193 5.11701C31.1561 5.3265 31.2527 5.55174 31.3091 5.79314L30.9469 5.73276V4.1753H32.6493V10.5622H30.9228V9.02881L31.3091 8.99263C31.2446 9.21807 31.1401 9.43141 30.9952 9.63256C30.8503 9.83381 30.6711 10.0128 30.4579 10.1698C30.2445 10.3268 30.0052 10.4516 29.7396 10.5441C29.474 10.6365 29.1921 10.6829 28.8944 10.6829ZM29.3652 9.19784C29.6871 9.19784 29.969 9.12151 30.2104 8.96854C30.4519 8.81567 30.639 8.60029 30.7718 8.3226C30.9046 8.04491 30.9711 7.72098 30.9711 7.3506C30.9711 6.98845 30.9046 6.67061 30.7718 6.39689C30.639 6.12327 30.4519 5.90789 30.2104 5.75095C29.969 5.59392 29.6871 5.51545 29.3652 5.51545C29.0514 5.51545 28.7756 5.59392 28.5383 5.75095C28.3007 5.90789 28.1136 6.12327 27.9768 6.39689C27.8399 6.67061 27.7716 6.98845 27.7716 7.3506C27.7716 7.72098 27.8399 8.04491 27.9768 8.3226C28.1136 8.60029 28.3007 8.81567 28.5383 8.96854C28.7756 9.12151 29.0514 9.19784 29.3652 9.19784ZM36.1987 10.6829C35.7319 10.6829 35.3313 10.5803 34.9974 10.3751C34.6633 10.1698 34.4059 9.8761 34.2247 9.49372C34.0436 9.11145 33.9531 8.6506 33.9531 8.11129V4.1753H35.6675V7.8336C35.6675 8.12338 35.7158 8.37505 35.8124 8.58819C35.909 8.80154 36.0457 8.96457 36.2229 9.07719C36.3999 9.18991 36.6172 9.24622 36.8748 9.24622C37.0599 9.24622 37.231 9.21603 37.388 9.15566C37.545 9.09528 37.6817 9.00889 37.7985 8.89607C37.915 8.78345 38.0056 8.6506 38.0702 8.49763C38.1345 8.34486 38.1667 8.17979 38.1667 8.00263V4.1753H39.8811V10.5622H38.2513L38.1909 9.24622L38.5048 9.10128C38.4082 9.39919 38.2471 9.66875 38.0219 9.91025C37.7964 10.1516 37.5269 10.3409 37.2129 10.4777C36.899 10.6144 36.561 10.6829 36.1987 10.6829ZM43.5151 10.6829C42.9194 10.6829 42.3902 10.5842 41.9275 10.3872C41.4645 10.19 41.0924 9.91828 40.8107 9.57219L41.8852 8.65456C42.1267 8.92016 42.4002 9.11145 42.7063 9.22803C43.012 9.34482 43.3178 9.40316 43.6238 9.40316C43.7445 9.40316 43.8551 9.38913 43.9558 9.36088C44.0564 9.33272 44.143 9.29257 44.2154 9.24012C44.2878 9.18788 44.3422 9.12354 44.3784 9.047C44.4147 8.97057 44.4327 8.88814 44.4327 8.79951C44.4327 8.62255 44.3626 8.48201 44.2154 8.38897C44.136 8.33876 44.0101 8.28631 43.8411 8.22594C43.6721 8.16556 43.4547 8.09919 43.1892 8.02672C42.7786 7.92223 42.4304 7.79945 42.1448 7.65847C41.859 7.5178 41.6317 7.35873 41.4627 7.18157C41.3178 7.01264 41.207 6.82958 41.1306 6.63229C41.0541 6.43511 41.0159 6.21576 41.0159 5.97426C41.0159 5.68448 41.0803 5.42092 41.2091 5.18349C41.3377 4.94615 41.5169 4.74277 41.7463 4.57374C41.9758 4.40471 42.2393 4.27399 42.5372 4.1814C42.8348 4.0889 43.1488 4.04255 43.4789 4.04255C43.8089 4.04255 44.1309 4.08291 44.4448 4.1632C44.7587 4.24381 45.0503 4.35846 45.3201 4.50736C45.5897 4.65637 45.8251 4.8314 46.0264 5.03255L45.1089 6.04673C44.9639 5.90992 44.801 5.78521 44.6199 5.67238C44.4387 5.55977 44.2516 5.47134 44.0584 5.40679C43.8653 5.34245 43.6921 5.31023 43.5393 5.31023C43.4023 5.31023 43.2797 5.32233 43.1711 5.34642C43.0624 5.37061 42.9718 5.40893 42.8994 5.46117C42.827 5.51362 42.7726 5.57583 42.7364 5.6483C42.7002 5.72077 42.6821 5.80127 42.6821 5.8898C42.6821 5.97843 42.7041 6.06289 42.7484 6.14329C42.7927 6.2239 42.8551 6.2923 42.9357 6.34851C43.0241 6.39689 43.1548 6.4532 43.328 6.51754C43.501 6.58208 43.7364 6.65455 44.0343 6.73485C44.4207 6.83964 44.7485 6.95633 45.0183 7.08501C45.2879 7.21389 45.5031 7.36269 45.6642 7.53172C45.8009 7.67667 45.9016 7.84173 45.966 8.02672C46.0304 8.21201 46.0627 8.41723 46.0627 8.64247C46.0627 9.03694 45.9519 9.3871 45.7306 9.69294C45.5091 9.99888 45.2054 10.2404 44.8191 10.4173C44.4327 10.5943 43.9981 10.6829 43.5151 10.6829ZM48.0305 2.87143C47.7003 2.87143 47.4429 2.789 47.2578 2.62394C47.0725 2.45897 46.9801 2.22753 46.9801 1.92962C46.9801 1.6561 47.0746 1.43279 47.2638 1.25959C47.4528 1.0866 47.7085 1 48.0305 1C48.3604 1 48.618 1.08263 48.8032 1.2475C48.9882 1.41257 49.0808 1.63994 49.0808 1.92962C49.0808 2.20334 48.9861 2.42878 48.7972 2.60574C48.6079 2.7829 48.3523 2.87143 48.0305 2.87143ZM47.1853 10.5622V4.1753H48.8997V10.5622H47.1853ZM54.1758 10.6829C53.894 10.6829 53.6205 10.6426 53.3548 10.5622C53.0892 10.4818 52.8478 10.3711 52.6304 10.2301C52.4131 10.0894 52.232 9.92834 52.0871 9.74722C51.9423 9.56609 51.8496 9.37897 51.8094 9.18585L52.1958 9.04091L52.1113 10.538H50.4935V1.62784H52.22V5.67238L51.8819 5.53964C51.9302 5.34642 52.0226 5.1593 52.1596 4.97817C52.2963 4.79714 52.4693 4.63614 52.6788 4.49527C52.8879 4.35449 53.1174 4.24381 53.3669 4.1632C53.6163 4.08291 53.874 4.04255 54.1396 4.04255C54.6949 4.04255 55.1919 4.18546 55.6307 4.47108C56.0692 4.75689 56.4134 5.14933 56.6629 5.6483C56.9124 6.14746 57.0373 6.71889 57.0373 7.36269C57.0373 8.0068 56.9144 8.57813 56.669 9.07719C56.4234 9.57636 56.0835 9.96869 55.6487 10.2543C55.2141 10.5401 54.7231 10.6829 54.1758 10.6829ZM53.7653 9.22203C54.0871 9.22203 54.3669 9.14356 54.6045 8.98663C54.8417 8.82959 55.0289 8.61228 55.1658 8.3346C55.3027 8.05691 55.3711 7.73308 55.3711 7.36269C55.3711 7.00054 55.3047 6.67864 55.1718 6.39689C55.0391 6.11524 54.852 5.89783 54.6105 5.74486C54.369 5.59209 54.0871 5.51545 53.7653 5.51545C53.4433 5.51545 53.1617 5.59209 52.9202 5.74486C52.6788 5.89783 52.4915 6.11524 52.3588 6.39689C52.2259 6.67864 52.1596 7.00054 52.1596 7.36269C52.1596 7.73308 52.2259 8.05691 52.3588 8.3346C52.4915 8.61228 52.6788 8.82959 52.9202 8.98663C53.1617 9.14356 53.4433 9.22203 53.7653 9.22203ZM58.0995 10.5622V1.62784H59.814V10.5622H58.0995ZM64.2206 10.6829C63.5283 10.6829 62.9228 10.5422 62.4036 10.2603C61.8845 9.97865 61.4819 9.59231 61.1963 9.10128C60.9104 8.61045 60.7676 8.04695 60.7676 7.41097C60.7676 6.91201 60.848 6.45716 61.0091 6.04673C61.17 5.6362 61.3955 5.28005 61.6853 4.97817C61.9751 4.67639 62.3191 4.44302 62.7175 4.27796C63.116 4.11309 63.5486 4.03046 64.0154 4.03046C64.45 4.03046 64.8524 4.11096 65.2228 4.27196C65.5929 4.43306 65.9129 4.65637 66.1826 4.94198C66.4522 5.2278 66.6595 5.56586 66.8044 5.95617C66.9493 6.34668 67.0137 6.76717 66.9976 7.21785L66.9855 7.74903H61.8543L61.5766 6.69867H65.5729L65.3798 6.91598V6.65039C65.3635 6.43307 65.2932 6.23802 65.1684 6.06483C65.0435 5.89183 64.8848 5.75502 64.6915 5.65429C64.4983 5.55377 64.281 5.50346 64.0396 5.50346C63.6853 5.50346 63.3855 5.57186 63.1401 5.70867C62.8945 5.84558 62.7074 6.04673 62.5787 6.31232C62.4498 6.57791 62.3855 6.89992 62.3855 7.27823C62.3855 7.66457 62.4679 7.99867 62.633 8.28032C62.7978 8.56217 63.0314 8.78131 63.3333 8.93835C63.6351 9.09528 63.9913 9.17375 64.4018 9.17375C64.6834 9.17375 64.941 9.12964 65.1744 9.04091C65.4078 8.95248 65.6574 8.79951 65.923 8.58209L66.744 9.72912C66.5105 9.93851 66.253 10.1135 65.9713 10.2543C65.6895 10.3952 65.3997 10.5018 65.1021 10.5743C64.8042 10.6466 64.5104 10.6829 64.2206 10.6829Z" fill="#1F2961" />
                                <path d="M9.04912 4.52054C8.8309 6.61169 7.00257 8.16599 4.90006 8.16599H4.0905V10.08C4.0905 11.1404 3.23089 12 2.1705 12H0.671997C0.300863 12 0 11.6991 0 11.328V7.38749L1.00761 5.97376C1.18997 5.7179 1.52521 5.62242 1.81501 5.74381L2.38815 5.98386C2.67705 6.10486 3.01123 6.00975 3.19311 5.75476L4.53655 3.87133C4.71798 3.61698 5.05143 3.52231 5.33944 3.64338L6.44341 4.10747C6.73202 4.22879 7.06616 4.13386 7.24787 3.87892L8.53976 2.06641C8.94472 2.77837 9.14266 3.62416 9.04912 4.52054Z" fill="url(#paint0_linear_669_625)" />
                                <path d="M0.658418 5.77452C0.823076 5.5435 1.0626 5.36582 1.34119 5.31224C1.55842 5.27045 1.77257 5.29238 1.97064 5.37534L2.54364 5.61533C2.57666 5.62916 2.61141 5.63617 2.64693 5.63617C2.73425 5.63617 2.8167 5.59367 2.86747 5.52249L4.18631 3.67354C4.35094 3.44273 4.59039 3.26534 4.8688 3.21187C5.08523 3.17032 5.29808 3.19209 5.49446 3.27464L6.59842 3.73873C6.63173 3.75274 6.66678 3.75984 6.70256 3.75984C6.7896 3.75984 6.87169 3.71756 6.92215 3.64676L8.306 1.70521C7.56544 0.672888 6.35604 0 4.989 0H0.671997C0.300863 0 0 0.300863 0 0.671997V6.69832L0.658418 5.77452Z" fill="url(#paint1_linear_669_625)" />
                                <defs>
                                    <linearGradient id="paint0_linear_669_625" x1="2.96827" y1="4.50872" x2="5.49463" y2="8.92985" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#909CF7" />
                                        <stop offset="1" stop-color="#4B38D8" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_669_625" x1="1.59676" y1="-0.271658" x2="4.20019" y2="4.28436" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#909CF7" />
                                        <stop offset="1" stop-color="#4B38D8" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className="title">
                        <h1 className='text-[76px] text-[#fff] text-center font-redRoseBold leading-[110%] tracking-[1.96px] max-w-[655px] mb-[20px] w-full max-sm:text-[40px] max-sm:mb-[20px] '>
                        Collect all your 
                        Subscriptions<br/> 
                        <span className='text-[#4649E5]'>in one location</span>
                        </h1>
                    </div>
                    <div className="description flex flex-col justify-center">
                        <p className="text-[24.8px] text-white text-center font-normal leading-[150%] mb-[40px] max-w-[655px] max-sm:w-[350px] max-sm:text-[20px]">An intuitive platform to manage all your<br/> subscriptions, freeing up your time for what matters most: enjoying.</p>
                        <div className="hero-buttons flex items-center justify-center gap-3">
                            <Link to="/login"><button className="hero-getStarted-btn cursor-pointer pt-4 pl-8 pb-4 pr-8 text-[#fff] bg-[#4649E5] border border-solid border-[#232330] rounded-[8px] text-[15.5px] font-redRoseBold">Get Started</button></Link>
                            <Link to="/login"><button className="Book-demo-btn cursor-pointer pt-4 pl-8 pb-4 pr-8 text-[#4649E5] bg-[#fff] border border-solid border-[#232330] rounded-[8px] text-[15.5px] font-redRoseBold">Book a demo</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
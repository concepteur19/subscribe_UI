export function NavBar () {

    return (
        <>
            <div className="nav-bar">
                <div className="nav-bar-content">
                    <div className="logo">
                        <svg class="frame-2720" width="152" height="26" viewBox="0 0 152 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2932 0.499756H22.1543L6.44063 15.3331C6.38156 15.4998 6.31067 15.8775 6.49971 16.0553C6.68875 16.2331 7.12983 16.1294 7.32675 16.0553C11.2256 12.4998 19.0825 5.27753 19.0825 5.27753C19.0825 5.27753 19.5026 4.98852 19.7914 4.83309C21.2726 4.0358 22.4153 3.93228 24.1038 4.16642C26.2331 4.4617 27.6094 5.16576 28.8297 6.83309C29.9534 8.36838 30.1658 9.65367 29.893 11.4998C29.6784 12.953 28.8297 14.3701 28.298 14.9442C27.7664 15.5183 16.9558 25.4998 16.9558 25.4998H8.03563L23.6312 10.8886C23.71 10.6479 23.7421 10.2469 23.454 10.0553C23.1689 9.86579 22.7254 10.0923 22.5679 10.1664C19.1219 13.4812 12.1826 20.122 11.9936 20.1664C11.7573 20.222 11.6392 20.4998 9.92601 21.4998C8.55549 22.2998 6.16495 22.1294 5.141 21.9442C4.2352 21.6294 2.59665 21.0327 1.53747 19.8331C0.283714 18.4131 0.0606151 17.1109 0.00154099 15.3331C-0.0457183 13.9109 1.0058 12.1849 1.53747 11.4998L13.2932 0.499756Z" fill="white" />
                            <path d="M35.1967 17.4811C39.1898 17.6997 41.8931 17.809 43.3067 17.809C43.6419 17.809 43.9042 17.7143 44.0936 17.5248C44.2977 17.3208 44.3997 17.0512 44.3997 16.716V14.7486H39.3719C37.8418 14.7486 36.7269 14.4062 36.0274 13.7212C35.3425 13.0217 35 11.9069 35 10.3767V9.72091C35 8.19073 35.3425 7.08317 36.0274 6.39824C36.7269 5.69872 37.8418 5.34897 39.3719 5.34897H47.0447V8.40933H40.2463C39.3719 8.40933 38.9347 8.84652 38.9347 9.72091V10.1581C38.9347 11.0325 39.3719 11.4697 40.2463 11.4697H44.1811C45.6093 11.4697 46.6585 11.8049 47.3289 12.4752C47.9992 13.1456 48.3344 14.1949 48.3344 15.623V16.716C48.3344 18.1442 47.9992 19.1935 47.3289 19.8638C46.6585 20.5342 45.6093 20.8694 44.1811 20.8694C43.4379 20.8694 42.6509 20.8548 41.8202 20.8257L39.8091 20.7382C38.3227 20.6653 36.7852 20.5633 35.1967 20.4322V17.4811Z" fill="white" />
                            <path d="M55.4371 17.6997C56.2095 17.6997 57.0839 17.554 58.0603 17.2625V9.06512H61.8857V20.6508H58.4975L58.2789 19.5578C57.594 20.0096 56.8872 20.3447 56.1585 20.5633C55.4444 20.7674 54.8396 20.8694 54.3441 20.8694H53.3605C52.3695 20.8694 51.5752 20.5706 50.9777 19.9731C50.3802 19.3756 50.0815 18.5814 50.0815 17.5904V9.06512H53.9069V16.9346C53.9069 17.1532 53.9798 17.3354 54.1255 17.4811C54.2713 17.6268 54.4534 17.6997 54.672 17.6997H55.4371Z" fill="white" />
                            <path d="M71.8242 12.5627C71.8242 12.3441 71.7514 12.1619 71.6056 12.0162C71.4599 11.8705 71.2777 11.7976 71.0591 11.7976H70.5127C69.9006 11.7976 69.3687 11.8267 68.9169 11.885C68.4797 11.9433 68.1372 11.987 67.8895 12.0162V17.6997H70.9498C71.5328 17.6997 71.8242 17.4082 71.8242 16.8253V12.5627ZM67.8895 9.28372C69.3031 8.99226 70.5418 8.84652 71.6056 8.84652H72.3707C73.3617 8.84652 74.1559 9.14527 74.7534 9.74277C75.3509 10.3403 75.6497 11.1345 75.6497 12.1255V17.1532C75.6497 18.2462 75.3364 19.106 74.7097 19.7327C74.0976 20.3447 73.2451 20.6508 72.1521 20.6508H64.064V5.34897H67.8895V9.28372Z" fill="white" />
                            <path d="M77.3792 17.4811C81.3722 17.6997 84.0755 17.809 85.4891 17.809C85.8243 17.809 86.0866 17.7143 86.2761 17.5248C86.4801 17.3208 86.5821 17.0512 86.5821 16.716V14.7486H81.5544C80.0242 14.7486 78.9093 14.4062 78.2098 13.7212C77.5249 13.0217 77.1824 11.9069 77.1824 10.3767V9.72091C77.1824 8.19073 77.5249 7.08317 78.2098 6.39824C78.9093 5.69872 80.0242 5.34897 81.5544 5.34897H89.2271V8.40933H82.4288C81.5544 8.40933 81.1172 8.84652 81.1172 9.72091V10.1581C81.1172 11.0325 81.5544 11.4697 82.4288 11.4697H86.3635C87.7917 11.4697 88.8409 11.8049 89.5113 12.4752C90.1817 13.1456 90.5169 14.1949 90.5169 15.623V16.716C90.5169 18.1442 90.1817 19.1935 89.5113 19.8638C88.8409 20.5342 87.7917 20.8694 86.3635 20.8694C85.6203 20.8694 84.8333 20.8548 84.0027 20.8257L81.9916 20.7382C80.5051 20.6653 78.9676 20.5633 77.3792 20.4322V17.4811Z" fill="white" />
                            <path d="M102.538 20.4322C99.8128 20.7236 97.4083 20.8694 95.3243 20.8694C94.3333 20.8694 93.5391 20.5706 92.9416 19.9731C92.3441 19.3756 92.0453 18.5814 92.0453 17.5904V12.5627C92.0453 11.4697 92.3514 10.6172 92.9634 10.0051C93.5901 9.37844 94.4499 9.06512 95.5429 9.06512H102.538V12.0162H96.7452C96.1622 12.0162 95.8708 12.3076 95.8708 12.8906V17.1532C95.8708 17.3718 95.9437 17.554 96.0894 17.6997C96.2351 17.8454 96.4173 17.9183 96.6359 17.9183C97.9475 17.9183 99.9148 17.809 102.538 17.5904V20.4322Z" fill="white" />
                            <path d="M110.95 12.2348C110.032 12.2348 109.084 12.4534 108.108 12.8906V20.6508H104.283V9.06512H107.671L107.889 10.486C109.143 9.39302 110.454 8.84652 111.824 8.84652H112.808V12.2348H110.95Z" fill="white" />
                            <path d="M119.146 9.50232V20.6508H115.321V12.4534H113.681V9.50232H119.146ZM115.321 5.13037H119.146V8.19073H115.321V5.13037Z" fill="white" />
                            <path d="M129.099 12.5627C129.099 12.3441 129.026 12.1619 128.881 12.0162C128.735 11.8705 128.553 11.7976 128.334 11.7976H127.788C127.176 11.7976 126.644 11.8267 126.192 11.885C125.755 11.9433 125.412 11.987 125.165 12.0162V17.6997H128.225C128.808 17.6997 129.099 17.4082 129.099 16.8253V12.5627ZM125.165 9.28372C126.578 8.99226 127.817 8.84652 128.881 8.84652H129.646C130.637 8.84652 131.431 9.14527 132.028 9.74277C132.626 10.3403 132.925 11.1345 132.925 12.1255V17.1532C132.925 18.2462 132.611 19.106 131.985 19.7327C131.373 20.3447 130.52 20.6508 129.427 20.6508H121.339V5.34897H125.165V9.28372Z" fill="white" />
                            <path d="M139.376 11.579C138.793 11.579 138.502 11.8705 138.502 12.4534V13.6557H142.218V12.4534C142.218 11.8705 141.926 11.579 141.343 11.579H139.376ZM145.606 20.4322C142.793 20.7236 140.243 20.8694 137.955 20.8694C136.964 20.8694 136.17 20.5706 135.572 19.9731C134.975 19.3756 134.676 18.5814 134.676 17.5904V12.3441C134.676 11.2511 134.982 10.3986 135.594 9.78649C136.221 9.15985 137.081 8.84652 138.174 8.84652H142.546C143.639 8.84652 144.491 9.15985 145.103 9.78649C145.73 10.3986 146.043 11.2511 146.043 12.3441V16.3881H138.502V17.2625C138.502 17.4811 138.574 17.6633 138.72 17.809C138.866 17.9547 139.048 18.0276 139.267 18.0276C140.709 18.0276 142.822 17.9183 145.606 17.6997V20.4322Z" fill="white" />
                            <path d="M147.565 17.3718H151.5V20.6508H147.565V17.3718Z" fill="white" />
                        </svg>
                    </div>
                    <div className="nav-links">
                        <a href="#">Product</a>
                        <a href="#">Features</a>
                        <a href="#">How it work</a>
                        <a href="#">Company</a>
                        
                    </div>
                    <div className="nav-DarkLight-buttons">
                        <div className="DarkLight-mode-icon">
                            <svg class="svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16Z" stroke="#38475D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 3V4" stroke="#38475D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 20V21" stroke="#38475D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3 12H4" stroke="#38475D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20 12H21" stroke="#38475D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.364 5.63599L17.657 6.34299" stroke="#38475D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.34299 17.657L5.63599 18.364" stroke="#38475D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.63599 5.63599L6.34299 6.34299" stroke="#38475D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.657 17.657L18.364 18.364" stroke="#38475D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="nav-buttons">
                            <button className="login-button">Login</button>
                            <button className="signUp-button">Get started</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
import Link from 'next/link';
import React from 'react';
import MobileMenus from './mobile-menus';

const Sidebar = ({isActive, setIsActive}) => {

    return (
        <>
    <div className="tt-offcanvas-wrapper">
        <div className={`tt-offcanvas ${isActive ? "opened" : ""}`}>
            <div className="tt-offcanvas-close" onClick={() => setIsActive(false)}>
                <span><i className="fas fa-times"></i></span>
            </div>

                <div className="logo-box">
                    <Link href="/" aria-label="logo image"><img src="/assets/images/resources/footer-logo1.png"
                            width="155" alt="" /></Link>
                </div>
                <div className="mobile-nav__container"></div>

                
                <div className={`tt-mobile-menu mean-container d-xl-none`}> 
                    <div className="mean-bar">
                        <MobileMenus />
                    </div>
                </div>

                <div className="mobile-nav__container"></div>

                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <a href="mailto:needhelp@packageName__.com">needhelp@seacab.com</a>
                    </li>
                    <li>
                        <i className="fa fa-phone-alt"></i>
                        <a href="tel:666-888-0000">666 888 0000</a>
                    </li>
                </ul>
                <div className="mobile-nav__top">
                    <div className="mobile-nav__social">
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-facebook-square"></a>
                        <a href="#" className="fab fa-pinterest-p"></a>
                        <a href="#" className="fab fa-instagram"></a>
                    </div>
                </div>
        </div>
    </div>    

<div className={`body-overlay ${isActive ? "opened"  : ""}`} onClick={() => setIsActive(false)}></div>
        </>
    );
};

export default Sidebar;
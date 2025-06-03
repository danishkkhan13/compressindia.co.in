'use client';

import React, { useState, useEffect } from 'react';
import NavMenu from './NavMenu';
import Sidebar from './sidebar';
import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';

const HeaderOne = () => {
    const [isActive, setIsActive] = useState(false);
    const [show, setShow] = useState(false);
    const [showSticky, setShowSticky] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setShowSticky(scrollTop > 100); // 👈 toggle sticky class when scrollY > 100
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={`main-header sticky-header clearfix fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showSticky ? 'translate-y-0 shadow-md' : '-translate-y-full'
                    }`}
                style={{ backgroundColor: '#000' }} // 👈 optional: make header background solid
            >
                <nav className="main-menu clearfix">
                    <div className="container clearfix">
                        <div className="main-menu-wrapper clearfix">
                            <div className="main-menu-wrapper__left">
                                <div className="main-menu-wrapper__logo">
                                    <Link href="/" className="block text-left">
                                        <div className="flex flex-col items-start">
                                            <Image
                                                src="/assets/images/resources/logo-1.png"
                                                alt="Logo"
                                                width={235}
                                                height={44}
                                                className="h-[44px] w-[235px]"
                                            />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="main-menu-wrapper__right">
                                <div className="main-menu-wrapper__main-menu">
                                    <a onClick={() => setIsActive(true)} className="mobile-nav__toggler">
                                        <i className="fa fa-bars"></i>
                                    </a>
                                    <NavMenu />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <Sidebar isActive={isActive} setIsActive={setIsActive} />
            <div className="body-overlay"></div>
        </>
    );
};

export default HeaderOne;

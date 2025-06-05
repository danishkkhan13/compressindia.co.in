'use client';
import React, { useState, useEffect } from 'react';
import NavMenu from './NavMenu';
import Sidebar from './sidebar';
import Link from 'next/link';
import Image from 'next/image';

const HeaderOne = () => {
    const [isActive, setIsActive] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Main Header */}
            <header className="main-header fixed top-0 left-0 w-full z-[9999] bg-black transition-transform duration-300">
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
                                    <a
                                        onClick={() => setIsActive(true)}
                                        className="mobile-nav__toggler"
                                    >
                                        <i className="fa fa-bars"></i>
                                    </a>
                                    <NavMenu />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Sticky Header */}
            <div
                className={`stricky-header stricked-menu main-menu main-menu-two ${scroll ? 'stricky-fixed' : ''
                    }`}
            >
                <div className="sticky-header__content">
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
                                    <a
                                        onClick={() => setIsActive(true)}
                                        className="mobile-nav__toggler"
                                    >
                                        <i className="fa fa-bars"></i>
                                    </a>
                                    <NavMenu />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Sidebar isActive={isActive} setIsActive={setIsActive} />
            <div className={`body-overlay ${isActive ? 'active' : ''}`}></div>
        </>
    );
};

export default HeaderOne;

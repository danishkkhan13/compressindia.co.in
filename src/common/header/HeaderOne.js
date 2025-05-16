import React, { useState, useEffect } from 'react';
import NavMenu from './NavMenu';
import Sidebar from './sidebar';
import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';

const HeaderOne = () => {
    useEffect(() => {

        $('select').niceSelect();

        if ($("#polyglot-language-options").length) {
            $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
              effect: 'slide',
              animSpeed: 500,
              testMode: true,
              onChange: function (evt) {
                alert("The selected language is: " + evt.selectedItem);
              }
        
            });
        }
            
    }, []);
    const [isActive, setIsActive] = useState(false);
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <header className="main-header clearfix">
                <div className="main-header__top clearfix">
                    <div className="container clearfix">
                        <div className="main-header__top-inner clearfix">
                            <div className="main-header__top-left">
                                <ul className="main-header__top-address">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-email"></span>
                                        </div>
                                        <div className="text">
                                            <p><a href="mailto:exampal@gmail.com">exampal@gmail.com</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-wall-clock"></span>
                                        </div>
                                        <div className="text">
                                            <p>Sun - Fri: 8.00am - 10.00pm</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="main-header__top-right">
                                <div className="main-header__top-right-search">
                                    <a href="#" className="search-toggler" variant="primary" onClick={handleShow}> <i className="fa fa-search"></i></a>
                                    <div className="search-popup">
                                        <Modal show={show} onHide={handleClose} className="search-popup__overlay search-toggler">
                                            <div className="search-popup__content">
                                                <form action="#">
                                                    <label for="search" className="sr-only">search here</label>
                                                    <input type="text" id="search" placeholder="Search Here..." />
                                                    <button type="submit" aria-label="search submit" className="thm-btn">
                                                        <i className="fa fa-search" aria-hidden="true"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </Modal>
                                    </div>
                                </div>

                                <div className="main-header__top-right-social">
                                    <a href="#"><i className="fab fa-facebook"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                </div>

                                <div class="language-switcher">
                                    <div id="polyglotLanguageSwitcher">
                                        <form action="#">
                                            <select id="polyglot-language-options">
                                                <option id="en" value="en" selected>England</option>
                                                <option id="fr" value="fr">France</option>
                                                <option id="de" value="de">Germany</option>
                                                <option id="it" value="it">Italy</option>
                                                <option id="es" value="es">Span</option>
                                            </select>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="main-menu clearfix">
                    <div className="container clearfix">
                        <div className="main-menu-wrapper clearfix">
                            <div className="main-menu-wrapper__left">
                                <div className="main-menu-wrapper__logo">
                                    <Link href="/"><img src="/assets/images/resources/logo-1.png" alt="" /></Link>
                                </div>
                            </div>
                            <div className="main-menu-wrapper__right">
                                <div className="main-menu-wrapper__main-menu">
                                    <a onClick={() => setIsActive(true)} className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                                    <NavMenu />
                                </div>
                                <Link href="/contact" className="thm-btn main-header__btn">
                                    <span>Contact Us</span>
                                    <div className="liquid"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <Sidebar isActive={isActive} setIsActive={setIsActive} />

            <div className="body-overlay"></div>
        </>
    )
}

export default HeaderOne;
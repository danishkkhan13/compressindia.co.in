import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'font-awesome/css/font-awesome.min.css';

const FooterOne = () => {
    return (
        <>
            {/* Call Button */}
            <div className="call-btn">
                <a href="tel:+918655011465">
                    <i className="fa fa-phone"></i> <span>Call Us</span>
                </a>
            </div>

            {/* WhatsApp Button */}
            <div className="whatsapp-btn">
                <a target='blank' href="https://api.whatsapp.com/send?phone=918655011465">
                    <i className="fab fa-whatsapp"></i> <span>WhatsApp</span>
                </a>
            </div>

            <footer className="footer-one">
                <div className="footer-one__bg" style={{ backgroundImage: `url(/assets/images/footer/footer.jpg)` }}></div>
                <div className="footer-one__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="footer-one__top-wrapper">
                                    <div className="row">
                                        {/* Start Footer Widget Column */}
                                        <div className="col-xl-4 col-lg-4 col-md-4 wow animated fadeInUp" data-wow-delay="0.1s">
                                            <div className="footer-widget__column footer-widget__aboutUs">
                                                <div className="footer-widget__aboutUs-logo">
                                                    <Link href="/">
                                                        <Image
                                                            src="/assets/images/resources/Compress White Logo.svg"
                                                            alt="Logo"
                                                            width={235}
                                                            height={44}
                                                            className="h-[44px] w-[235px]"
                                                        />
                                                    </Link>
                                                </div>
                                                <p className="footer-widget__aboutUs-text">We help businesses maximize their
                                                    online presence with a personalized approach to digital marketing.</p>

                                                <div className="social-link">
                                                    <ul>
                                                        <li><a href="#"><span className="icon-facebook"></span></a></li>
                                                        <li><a href="#"><span className="icon-instagram"></span></a></li>
                                                        <li><a href="#"><span className="icon-twitter"></span></a></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        {/* End Footer Widget Column */}

                                        {/* Start Footer Widget Column */}
                                        <div className="col-xl-4 col-lg-4 col-md-4 wow animated fadeInUp" data-wow-delay="0.3s">
                                            <div className="footer-widget__column footer-widget__links mar-l">
                                                <h2 className="footer-widget__title">Useful Links</h2>
                                                <ul className="footer-widget__links-list">
                                                    <li className="footer-widget__links-list-item"><Link href="/aboutUs">About Us</Link></li>
                                                    {/* <li className="footer-widget__links-list-item"><Link href="/service-one">Services</Link></li> */}
                                                    <li className="footer-widget__links-list-item"><Link href="/privacy">Privacy Policy</Link></li>
                                                    <li className="footer-widget__links-list-item"><Link href="/term">Terms and Conditions</Link></li>
                                                    <li className="footer-widget__links-list-item"><Link href="/contactUs">Contact Us</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Footer Widget Column */}

                                        {/* Start Footer Widget Column */}
                                        <div className="col-xl-4 col-lg-4 col-md-4 wow animated fadeInUp" data-wow-delay="0.5s">
                                            <div className="footer-widget__column footer-widget__links mrt-60">
                                                <h2 className="footer-widget__title">Our Service</h2>
                                                <ul className="footer-widget__links-list">
                                                    <li className="footer-widget__links-list-item"><Link href="/one-time-services">One Time Service</Link></li>
                                                    <li className="footer-widget__links-list-item"><Link href="/chemical-jet-services">Chemical Jet Services</Link></li>
                                                    <li className="footer-widget__links-list-item"><Link href="/ac-dismantle-services-2-2">Dismantle Services</Link></li>
                                                    <li className="footer-widget__links-list-item"><Link href="/ac-installation-services">AC Installation Services</Link></li>
                                                    <li className="footer-widget__links-list-item"><Link href="/ac-dismantle-services">AC Dismantle Services</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Footer Widget Column */}

                                        {/* Start Footer Widget Column */}
                                        {/* <div className="col-xl-3 col-lg-3 col-md-6 wow animated fadeInUp" data-wow-delay="0.7s">
                                            <div className="footer-widget__column footer-widget__gallery mrt-60">
                                                <h2 className="footer-widget__title">Our Offers</h2>
                                                <ul>
                                                    <li className="footer-widget__gallery-single">
                                                        <div className="img-box">
                                                            <img src="/assets/images/services/incrediable-deal.png" alt="" />
                                                            <div className="overlay-icon">
                                                                <Link href="/"><span className="icon-link"></span></Link>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="footer-widget__gallery-single">
                                                        <div className="img-box">
                                                            <img src="/assets/images/footer/footer-v1-img2.png" alt="" />
                                                            <div className="overlay-icon">
                                                                <Link href="/"><span className="icon-link"></span></Link>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="footer-widget__gallery-single">
                                                        <div className="img-box">
                                                            <img src="/assets/images/footer/footer-v1-img3.png" alt="" />
                                                            <div className="overlay-icon">
                                                                <Link href="/"><span className="icon-link"></span></Link>
                                                            </div>
                                                        </div>
                                                    </li>


                                                </ul>
                                            </div>
                                        </div> */}
                                        {/* End Footer Widget Column */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Start Footer One Bottom */}
                <div className="footer-one__bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="footer-one__bottom-inner">
                                    <div className="footer-one__bottom-text">
                                        <p>
                                            Copyright © 2025 <Link href="/">Compress India</Link>. All Rights Reserved.

                                            Developed with<span style={{ color: 'red' }}>❤️</span>{" "}
                                            <Link href="https://dynsimulation.com" target="_blank" rel="noopener noreferrer"> by
                                                Dynsimulation
                                            </Link>
                                        </p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Footer One Bottom */}
            </footer>

        </>
    )
}

export default FooterOne;
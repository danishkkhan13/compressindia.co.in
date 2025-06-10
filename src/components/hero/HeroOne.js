import React, { useEffect } from "react";
import Link from "next/link";
import BackgroundOne from '../../../public/assets/images/backgrounds/slide1.webp';
import BackgroundTwo from '../../../public/assets/images/backgrounds/slide2.webp';
import BackgroundThree from '../../../public/assets/images/backgrounds/slide3.webp';

const HeroOne = () => {

    useEffect(() => {

        if ($('.main-slider-one__carousel').length) {
            $('.main-slider-one__carousel').owlCarousel({
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                loop: true,
                margin: 0,
                dots: false,
                nav: true,
                singleItem: true,
                smartSpeed: 500,
                autoplay: true,
                autoplayTimeout: 9000,
                navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1024: {
                        items: 1
                    }
                }
            });
        }

    }, []);

    return (
        <>
            <section className="main-slider-one">
                <div className="main-slider-one__carousel owl-carousel owl-theme">
                    {/* Start Main Slider One Single */}
                    <div className="main-slider-one__single">
                        <div className="top-shape"></div>
                        <div className="bottom-shape"></div>
                        <div className="image-layer" style={{ backgroundImage: `url(${BackgroundOne.src})` }}></div>
                        <div className="container">
                            <div className="main-slider-one__content">
                                {/* <div className="tagline">
                                    <p>PCB Board Repairing</p>
                                </div> */}
                                <div className="title">
                                    <h2>PCB Board Repairing</h2>
                                </div>
                                <div className="text">
                                    <p>Revive, Repair, Reconnect: Precision PCB Board Repairing for <br /> Seamless Performance. Your Electronics Deserve Expert Care, We Deliver Excellence.</p>
                                </div>
                                <div className="btn-box">
                                    <Link href="/contactUs" className="thm-btn">
                                        <span>Request Services</span>
                                        <div className="liquid"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Main Slider One Single */}

                    {/* Start Main Slider One Single */}
                    <div className="main-slider-one__single">
                        <div className="top-shape"></div>
                        <div className="bottom-shape"></div>
                        <div className="image-layer" style={{ backgroundImage: `url(${BackgroundTwo.src})` }}>
                        </div>
                        <div className="container">
                            <div className="main-slider-one__content">

                                <div className="title">
                                    <h2>New AC<br /> Installation & <br />Dismantle </h2>
                                </div>
                                <div className="text">
                                    <p>Seamless AC Solutions: Expert Installation & Hassle-Free <br />Dismantle Services. Your Comfort, Our Craftsmanship. </p>
                                </div>
                                <div className="btn-box">
                                    <Link href="/contactUs" className="thm-btn">
                                        <span>Request Services</span>
                                        <div className="liquid"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Main Slider One Single */}

                    {/* Start Main Slider One Single */}
                    <div className="main-slider-one__single">
                        <div className="top-shape"></div>
                        <div className="bottom-shape"></div>
                        <div className="image-layer" style={{ backgroundImage: `url(${BackgroundThree.src})` }}>
                        </div>
                        <div className="container">
                            <div className="main-slider-one__content">
                                <div className="tagline">
                                    <p>AC Maintenance	</p>
                                </div>
                                <div className="title">
                                    <h2>Examples of great cleaning <br /> that get it right.</h2>
                                </div>
                                <div className="text">
                                    <p>Preserve Peak Performance: Elevate your AC's lifespan with<br />our meticulous Maintenance Services. Breathe Easy,<br />Stay Cool, and Keep Your Comfort in Check.	</p>
                                </div>
                                <div className="btn-box">
                                    <Link href="/contactUs" className="thm-btn">
                                        <span>Select Deal</span>
                                        <div className="liquid"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Main Slider One Single */}
                </div>
            </section>
        </>
    )
}

export default HeroOne;
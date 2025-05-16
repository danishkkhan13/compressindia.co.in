import React from 'react';
import Link from 'next/link';

const AboutOne = () => {
    return (
        <>
            <section className="about-one pd-120-0-120">
                <div className="about-one__img2 wow slideInRight" data-wow-delay="500ms">
                    <img className="float-bob-x" src="/assets/images/about/about-v1-img2.png" alt="About" />
                </div>
                <div className="container">
                    <div className="row">
                        {/* Start About One Img */}
                        <div className="col-xl-6">
                            <div className="about-one__img clearfix">
                                <div className="about-one__img-inner">
                                    <img src="/assets/images/about/about-v1-img1.jpg" alt="About" />
                                </div>
                                <div className="experince-box">
                                    <h2>25 +Years Experince</h2>
                                </div>
                            </div>
                        </div>
                        {/* End About One Img */}

                        {/* Start About One Content */}
                        <div className="col-xl-6">
                            <div className="about-one__content">
                                <div className="section-title">
                                    <span className="section-title__tagline">About Us</span>
                                    <h2 className="section-title__title">We Have 25 Years Of <br /> Experience In This Field</h2>
                                </div>
                                <div className="about-one__content-inner">
                                    <p className="about-one__content-text1">will reenergize your ome and enhance your life. From every day this man housekeeping to. </p>
                                    <p className="about-one__content-text2">will reenergize your ome and enhance your life. From everyday housekeeping to routine cleanings, our professional this to members can provide you.</p>
                                    <div className="about-one__content-list">
                                        <ul>
                                            <li>
                                                <p>We provide janitorial and specialized is services.</p>
                                            </li>
                                            <li>
                                                <p>Tonstantly evolving and your brand must evolve.</p>
                                            </li>
                                            <li>
                                                <p>Tempor incididunt ut labore dolore magna aliqua.</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="about-one__content-btn">
                                        <Link href="/about" className="thm-btn">
                                            <span>About More</span>
                                            <div className="liquid"></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End About One Content */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutOne;
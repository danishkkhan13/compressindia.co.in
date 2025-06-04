import React from 'react';
import Link from 'next/link';

const aboutUsOne = () => {
    return (
        <>
            <section className="aboutUs-one pd-120-0-120">
                {/* <div className="aboutUs-one__img2 wow slideInRight" data-wow-delay="500ms">
                    <img className="float-bob-x" src="/assets/images/aboutUs/aboutUs.png" alt="aboutUs" />
                </div> */}
                <div className="container">
                    <div className="row">
                        {/* Start aboutUs One Img */}
                        <div className="col-xl-6">
                            <div className="aboutUs-one__img clearfix">
                                <div className="aboutUs-one__img-inner">
                                    <img src="/assets/images/about/about.jpg" alt="about" />
                                </div>
                                <div className="experince-box">
                                    <h2>10 +Years Experince</h2>
                                </div>
                            </div>
                        </div>
                        {/* End aboutUs One Img */}

                        {/* Start aboutUs One Content */}
                        <div className="col-xl-6">
                            <div className="aboutUs-one__content">
                                <div className="section-title">
                                    <span className="section-title__tagline">WHO WE ARE ?</span>
                                    <h2 className="section-title__title">We Have 10 Years Of <br /> Experience In This Field</h2>
                                </div>
                                <div className="aboutUs-one__content-inner">
                                    {/* <p className="aboutUs-one__content-text1">will reenergize your ome and enhance your life. From every day this man housekeeping to. </p> */}
                                    <p className="aboutUs-one__content-text2">Compress India Pvt. Ltd., based in Mumbai since 2015, specializes in air conditioning repair and has over 10 years of industry expertise. We offer a wide range of cooling and refrigeration services for both residential and commercial clients. Our certified technicians are dedicated to delivering top-notch maintenance and customer satisfaction.</p>
                                    <div className="aboutUs-one__content-list">
                                        <ul>
                                            <li>
                                                <p>Compress India Pvt. Ltd., Mumbai-based since 2015, specializes in AC & HVAC service and manufacturing, offering a wide range of cooling and refrigeration products.</p>
                                            </li>
                                            <li>
                                                <p>Our service division manages all repairs, maintenance, and contracts, while our manufacturing unit produces commercial cooling and refrigeration equipment.</p>
                                            </li>
                                            <li>
                                                <p>We offer a wide range of customizable services and products tailored to customer needs, with details on our offerings to follow shortly.</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="aboutUs-one__content-btn">
                                        <Link href="/aboutUs" className="thm-btn">
                                            <span>aboutUs More</span>
                                            <div className="liquid"></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End aboutUs One Content */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default aboutUsOne;
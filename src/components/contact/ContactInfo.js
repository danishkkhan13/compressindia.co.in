import React from 'react';

const ContactInfo = () => {
    return (
        <>
            <section className="contact-box">
                <div className="container">
                    <div className="row">
                        {/* Start Contact Box Single */}
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1500ms">
                            <div className="contact-box__single text-center">
                                <div className="contact-box__single-icon">
                                    <span className="fa fa-map-marker"></span>
                                </div>
                                <div className="contact-box__single-text">
                                    <h2><a href="#">Our Location</a></h2>
                                    <p>354 Oakridge, Camden <br />NJ 08102 - USA</p>
                                </div>
                            </div>
                        </div>
                        {/* End Contact Box Single */}
                        
                        {/* Start Contact Box Single */}
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms">
                            <div className="contact-box__single text-center">
                                <div className="contact-box__single-icon">
                                    <span className="icon-email"></span>
                                </div>
                                <div className="contact-box__single-text">
                                    <h2><a href="#">Email Address</a></h2>
                                    <p><a href="mailto:exampal@gmail.com">exampal@gmail.com</a></p>
                                    <p><a href="mailto:exampal@gmail.com">www.unicktheme.com</a></p>
                                </div>
                            </div>
                        </div>
                        {/* End Contact Box Single */}

                        {/* Start Contact Box Single */}
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1500ms">
                            <div className="contact-box__single text-center">
                                <div className="contact-box__single-icon">
                                    <span className="fa fa-phone"></span>
                                </div>
                                <div className="contact-box__single-text">
                                    <h2><a href="#">Phone Number</a></h2>
                                    <p><a href="tel:123456789">+012 (999) 666 22</a></p>
                                    <p><a href="tel:123456789">+856352287</a></p>
                                </div>
                            </div>
                        </div>
                        {/* End Contact Box Single */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactInfo;
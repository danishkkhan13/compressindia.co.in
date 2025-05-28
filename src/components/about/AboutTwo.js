import React, { useEffect } from 'react';

const aboutUsTwo = () => {
    useEffect(() => {

        if ($(".count-bar").length) {
            $(".count-bar").appear(
                function () {
                    var el = $(this);
                    var percent = el.data("percent");
                    $(el).css("width", percent).addClass("counted");
                }, {
                accY: -50
            }
            );
        }

        if ($(".progress-levels .progress-box .bar-fill").length) {
            $(".progress-box .bar-fill").each(
                function () {
                    $(".progress-box .bar-fill").appear(function () {
                        var progressWidth = $(this).attr("data-percent");
                        $(this).css("width", progressWidth + "%");
                    });
                }, {
                accY: 0
            }
            );
        }

    }, []);
    return (
        <>
            <section className="aboutUs-two">
                <div className="container">
                    <div className="row">
                        {/* Start aboutUs Two Img */}
                        <div className="col-xl-6">
                            <div className="aboutUs-two__img clearfix">
                                <div className="aboutUs-two__img1 wow slideInLeft" data-wow-delay="100ms"
                                    data-wow-duration="2500ms">
                                    <div className="aboutUs-two__img1-inner">
                                        <img src="/assets/images/aboutUs/aboutUs-v2-img1.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="aboutUs-two__img2 wow zoomIn" data-wow-delay="100ms" data-wow-duration="3500ms">
                                    <div className="aboutUs-two__img2-inner">
                                        <img src="/assets/images/aboutUs/aboutUs-img.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End aboutUs Two Img */}

                        {/* Start aboutUs Two Content */}
                        <div className="col-xl-6">
                            <div className="aboutUs-two__content">
                                <div className="section-title">
                                    <span className="section-title__tagline">aboutUs Us</span>
                                    <h2 className="section-title__title">We Have 25 Years Of <br /> Experience In This Field
                                    </h2>
                                </div>
                                <div className="aboutUs-two__content-inner">
                                    <div className="text">
                                        <p>will reenergize your ome and enhance your life. From everyday housekeeping to
                                            routine cleanings, our professional this to members can provide you.</p>
                                    </div>
                                    <div className="aboutUs-two__content-list">
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
                                    <div className="aboutUs-two__progress">
                                        {/* Start aboutUs Two Progress Single */}
                                        <div className="aboutUs-two__progress-single">
                                            <h4 className="aboutUs-two__progress-title">Development</h4>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="58%">
                                                    <div className="count-text">58%</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End aboutUs Two Progress Single */}

                                        {/* Start aboutUs Two Progress Single */}
                                        <div className="aboutUs-two__progress-single mar-b0">
                                            <h4 className="aboutUs-two__progress-title">Design</h4>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="77%">
                                                    <div className="count-text">77%</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End aboutUs Two Progress Single */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End aboutUs Two Content */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default aboutUsTwo;
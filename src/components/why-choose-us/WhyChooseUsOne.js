import React, { useEffect } from 'react';

const WhyChooseUsOne = () => {
    useEffect(() => {

        if ($(".tabs-box").length) {
            $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
              e.preventDefault();
              var target = $($(this).attr("data-tab"));
        
              if ($(target).is(":visible")) {
                return false;
              } else {
                target
                  .parents(".tabs-box")
                  .find(".tab-buttons")
                  .find(".tab-btn")
                  .removeClass("active-btn");
                $(this).addClass("active-btn");
                target
                  .parents(".tabs-box")
                  .find(".tabs-content")
                  .find(".tab")
                  .fadeOut(0);
                target
                  .parents(".tabs-box")
                  .find(".tabs-content")
                  .find(".tab")
                  .removeClass("active-tab");
                $(target).fadeIn(300);
                $(target).addClass("active-tab");
              }
            });
        }

        if ($(".video-popup").length) {
            $(".video-popup").magnificPopup({
              type: "iframe",
              mainClass: "mfp-fade",
              removalDelay: 160,
              preloader: true,
        
              fixedContentPos: false
            });
        }
            
      }, []);
    return (
        <>
            <section className="tab-one pd-120-0-120 clearfix">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="section-title__tagline">Our Tab Contant</span>
                        <h2 className="section-title__title">Our daily or weekly attractive <br /> Tab planpolicy.</h2>
                    </div>
                    <div className="tab-one__tabs tabs-box">
                        <ul className="tab-buttons clearfix">
                            <li data-tab="#providing" className="tab-btn active-btn"><span>Providing</span></li>
                            <li data-tab="#emergency" className="tab-btn"><span>Emergency</span></li>
                            <li data-tab="#residential" className="tab-btn"><span>Residential</span></li>
                            <li data-tab="#furniture" className="tab-btn"><span>Furniture</span></li>
                        </ul>
                        <div className="tabs-content">
                            {/* Start Tab */}
                            <div className="tab active-tab" id="providing">
                                <div className="row clearfix">
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                        <div className="tab-one__content">
                                            <div className="title">
                                                <h2>We support him 75% on <br /> your tab insurance.</h2>
                                            </div>
                                            <div className="text">
                                                <p>will reenergize your ome and enhance your life. From everyday housekeeping to routine cleanings, our professional this to members can provide you.</p>
                                            </div>
                                            <ul className="tab-one__content-list">
                                                <li>We provide janitorial and specialized is services.</li>
                                                <li>Tonstantly evolving and your brand must evolve.</li>
                                                <li>Tempor incididunt ut labore dolore magna aliqua.</li>
                                                <li>Majority have suffered alteration in some form. </li>
                                                <li>Re injected humour, or randomised words evolving.</li>
                                                <li>This generators on the Internet to repeat predefined.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                        <div className="tab-one__img">
                                            <img src="/assets/images/resources/tab-v1-img.jpg" alt="" />
                                            <div className="icon">
                                                <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                                    <div className="tab-one__video-icon">
                                                        <span className="icon-play-button"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Tab */}

                            {/* Start Tab */}
                            <div className="tab" id="emergency">
                                <div className="row clearfix">
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                        <div className="tab-one__content">
                                            <div className="title">
                                                <h2>We support him 75% on <br /> your tab insurance.</h2>
                                            </div>
                                            <div className="text">
                                                <p>will reenergize your ome and enhance your life. From everyday housekeeping to routine cleanings, our professional this to members can provide you.</p>
                                            </div>
                                            <ul className="tab-one__content-list">
                                                <li>We provide janitorial and specialized is services.</li>
                                                <li>Tonstantly evolving and your brand must evolve.</li>
                                                <li>Tempor incididunt ut labore dolore magna aliqua.</li>
                                                <li>Majority have suffered alteration in some form. </li>
                                                <li>Re injected humour, or randomised words evolving.</li>
                                                <li>This generators on the Internet to repeat predefined.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                        <div className="tab-one__img">
                                            <img src="/assets/images/resources/tab-v1-img.jpg" alt="" />
                                            <div className="icon">
                                                <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                                    <div className="tab-one__video-icon">
                                                        <span className="icon-play-button"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Tab */}

                            {/* Start Tab */}
                            <div className="tab" id="residential">
                                <div className="row clearfix">
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                        <div className="tab-one__content">
                                            <div className="title">
                                                <h2>We support him 75% on <br /> your tab insurance.</h2>
                                            </div>
                                            <div className="text">
                                                <p>will reenergize your ome and enhance your life. From everyday housekeeping to routine cleanings, our professional this to members can provide you.</p>
                                            </div>
                                            <ul className="tab-one__content-list">
                                                <li>We provide janitorial and specialized is services.</li>
                                                <li>Tonstantly evolving and your brand must evolve.</li>
                                                <li>Tempor incididunt ut labore dolore magna aliqua.</li>
                                                <li>Majority have suffered alteration in some form. </li>
                                                <li>Re injected humour, or randomised words evolving.</li>
                                                <li>This generators on the Internet to repeat predefined.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                        <div className="tab-one__img">
                                            <img src="/assets/images/resources/tab-v1-img.jpg" alt="" />
                                            <div className="icon">
                                                <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                                    <div className="tab-one__video-icon">
                                                        <span className="icon-play-button"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Tab */}

                            {/* Start Tab */}
                            <div className="tab" id="furniture">
                                <div className="row clearfix">
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                        <div className="tab-one__content">
                                            <div className="title">
                                                <h2>We support him 75% on <br /> your tab insurance.</h2>
                                            </div>
                                            <div className="text">
                                                <p>will reenergize your ome and enhance your life. From everyday housekeeping to routine cleanings, our professional this to members can provide you.</p>
                                            </div>
                                            <ul className="tab-one__content-list">
                                                <li>We provide janitorial and specialized is services.</li>
                                                <li>Tonstantly evolving and your brand must evolve.</li>
                                                <li>Tempor incididunt ut labore dolore magna aliqua.</li>
                                                <li>Majority have suffered alteration in some form. </li>
                                                <li>Re injected humour, or randomised words evolving.</li>
                                                <li>This generators on the Internet to repeat predefined.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                        <div className="tab-one__img">
                                            <img src="/assets/images/resources/tab-v1-img.jpg" alt="" />
                                            <div className="icon">
                                                <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                                    <div className="tab-one__video-icon">
                                                        <span className="icon-play-button"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Tab */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyChooseUsOne;
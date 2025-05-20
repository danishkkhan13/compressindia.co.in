import React, { useEffect } from 'react';
import BackgroundOne from '../../../public/assets/images/about/contact.jpg';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactOne = () => {
    useEffect(() => {

        $('select').niceSelect();

    }, []);
    return (
        <>

            <section className="contact-one pd-120-0-120">
                <div className="contact-one__bg jarallax" data-jarallax data-speed="0.2" data-imgposition="50% 0%" style={{ backgroundImage: `url(${BackgroundOne.src})` }}>
                </div>

                <div className="container">
                    <div className="row">
                        {/* Start Contact One Form Box */}
                        <div className="col-xl-8">
                            <div className="contact-one__form-box">
                                <div className="section-title">
                                    <span className="section-title__tagline">Contact With Us</span>
                                    <h2 className="section-title__title">Write A Message</h2>
                                </div>
                                <form id="contact-form" name="contact_form" className="default-form2" action="assets/inc/sendmail.php" method="post">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="input-box">
                                                <input type="text" name="form_name" placeholder="Your Name" required />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="input-box">
                                                <input type="email" name="form_email" placeholder="Your Email" required />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="input-box">
                                                <div className="select-box">
                                                    <select className="selectmenu wide" name="form_category" required>
                                                        <option value="" disabled selected>Select Category</option>
                                                        <option value="ac-repair">AC Repair</option>
                                                        <option value="ac-installation-and-dismantle">AC Installation &amp; Dismantle</option>
                                                        <option value="gas-services">GAS Services</option>
                                                        <option value="chemical-jet-services">Chemical Jet Services</option>
                                                        <option value="pressure-testing">Pressure Testing</option>
                                                        <option value="fan-motor-installation">Fan Motor Installation</option>
                                                        <option value="coper-coil-installation">Coper Coil Installation</option>
                                                        <option value="customized-services">Customized Services</option>
                                                    </select>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-box">
                                                <textarea name="form_message" placeholder="Your Message" required rows="5"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-12 text-center">
                                            <div className="button-box">
                                                <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value="" />
                                                <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                                    <span>Confirm Appointment</span>
                                                    <i className="liquid"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* End Contact One Form Box */}

                        {/* Start Card Side Column */}
                        <div className="col-xl-4">
                            <div className="card shadow-sm p-4" style={{ background: "linear-gradient(to bottom right, #30cfd0 0%, #330867 100%)", color: "#fff", border: "none", borderRadius: "12px" }}>
                                <div className="section-title text-center mb-4">
                                    <div className="title"><strong>Contact Us</strong></div>
                                    <p className="small !text-left mt-[20px]">
                                        We stay in constant communication with our customers until the job is done. To get a free quote, or if you have questions or special requests, just drop us a line.
                                    </p>
                                </div>

                                <ul className="list-unstyled text-start ps-0">
                                    <li className="d-flex align-items-start mb-4">
                                        <div className="me-3">
                                            <FaMapMarkerAlt size={24} />
                                        </div>
                                        <div>
                                            <strong>Off no.103, 1st floor, Hi Tech Premises Co-Op.Soc.Ltd,</strong><br />
                                            Near SCLR Road, Kurla(W), Mumbai Maharashtra India
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center mb-4">
                                        <div className="me-3">
                                            <FaPhone size={24} />
                                        </div>
                                        <div>
                                            <strong>+91 8655011465</strong>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center mb-4">
                                        <div className="me-3">
                                            <FaEnvelope size={24} />
                                        </div>
                                        <div>
                                            <strong>sales@compressindia.in</strong>
                                        </div>
                                    </li>
                                </ul>

                                <div className="d-flex justify-content-center mt-3">
                                    <a href="#" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="text-white"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* End Card Side Column */}
                    </div>
                </div>
            </section>


        </>
    )
}

export default ContactOne;
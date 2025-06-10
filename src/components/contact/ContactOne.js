import React, { useEffect } from 'react';
import BackgroundOne from '../../../public/assets/images/about/contact.webp';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import $ from 'jquery';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactOne = () => {
    useEffect(() => {
        document
            .querySelectorAll('.disable-nice-select')
            .forEach(sel => {
                const wrap = sel.nextElementSibling;
                if (wrap?.classList.contains('nice-select')) {
                    wrap.remove();
                    sel.style.display = '';  // restore the original select
                }
            });
    }, []);

    useEffect(() => {
        $('.disable-nice-select').each(function () {
            if ($(this).next('.nice-select').length) {
                $(this).next('.nice-select').remove();
                $(this).show();
            }
        });
    }, []);
    // useEffect(() => {
    //     $('select:not(.disable-nice-select)').niceSelect();
    // }, []);

    const initialValues = {
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        phone: Yup.string()
            .matches(/^\d{10}$/, 'Phone must be 10 digits')
            .required('Phone is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        subject: Yup.string().required('Please select a subject'),
        message: Yup.string().required('Message is required'),
    });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
            const data = await response.json();

            if (response.ok) {
                toast.success("✅ Message sent successfully!");
                resetForm();
            } else {
                toast.error("❌ " + (data.message || "Failed to send message"));
            }
        } catch (err) {
            console.error("❌ Fetch failed:", err);
            toast.error("Failed to send message. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <>
            <ToastContainer />
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
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ isSubmitting }) => (
                                        <Form id="contact-form" name="contact_form" className="default-form2">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="input-box">
                                                        <Field type="text" name="name" placeholder="Your Name" required />
                                                        <ErrorMessage name="name" component="div" className="error-message" />
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="input-box">
                                                        <Field type="email" name="email" placeholder="Your Email" required />
                                                        <ErrorMessage name="email" component="div" className="error-message" />
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="input-box">
                                                        <Field type="text" name="phone" placeholder="Your Phone" required />
                                                        <ErrorMessage name="phone" component="div" className="error-message" />
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="input-box">
                                                        <div className="select-box">
                                                            <Field as="select" name="subject" className="selectmenu wide disable-nice-select">

                                                                <option value="" disabled>Select Category</option>
                                                                <option value="ac-repair">AC Repair</option>
                                                                <option value="ac-installation-and-dismantle">AC Installation &amp; Dismantle</option>
                                                                <option value="gas-services">GAS Services</option>
                                                                <option value="chemical-jet-services">Chemical Jet Services</option>
                                                                <option value="pressure-testing">Pressure Testing</option>
                                                                <option value="fan-motor-installation">Fan Motor Installation</option>
                                                                <option value="coper-coil-installation">Coper Coil Installation</option>
                                                                <option value="customized-services">Customized Services</option>
                                                            </Field>
                                                            <ErrorMessage name="subject" component="div" className="error-message" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="input-box">
                                                        <Field as="textarea" name="message" placeholder="Your Message" required rows="5" />
                                                        <ErrorMessage name="message" component="div" className="error-message" />
                                                    </div>
                                                </div>

                                                <div className="col-12 text-center">
                                                    <div className="button-box">
                                                        <Field type="hidden" name="form_botcheck" value="" />
                                                        <button className="thm-btn" type="submit" disabled={isSubmitting}>
                                                            <span>{isSubmitting ? 'Please wait...' : 'Confirm Appointment'}</span>
                                                            <i className="liquid"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>

                            </div>
                        </div>
                        {/* End Contact One Form Box */}

                        {/* Start Card Side Column */}
                        <div className="col-xl-4">
                            <div className="card shadow-sm p-4" style={{ background: "linear-gradient(to bottom right, #30cfd0 0%, #330867 100%)", color: "#fff", border: "none", borderRadius: "12px", marginTop: "45px" }}>
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
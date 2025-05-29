import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery'; // Make sure jQuery is installed

const ContactThree = () => {
    useEffect(() => {
        $('.disable-nice-select').each(function () {
            if ($(this).next('.nice-select').length) {
                $(this).next('.nice-select').remove();
                $(this).show();
            }
        });
    }, []);

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
            <ToastContainer position="top-right" autoClose={4000} />
            <section className="contact-page-form">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="contact-page-form__inner">
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ isSubmitting, errors, touched }) => (
                                        <Form className="contact-page-form__form">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                    <div className="contact-page-form__input-box">
                                                        <Field
                                                            name="name"
                                                            type="text"
                                                            placeholder="Your name"
                                                            className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`}
                                                        />
                                                        <ErrorMessage name="name" component="div" className="error-message" />
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                    <div className="contact-page-form__input-box">
                                                        <Field
                                                            name="phone"
                                                            type="text"
                                                            placeholder="Phone number"
                                                            className={`form-control ${touched.phone && errors.phone ? 'is-invalid' : ''}`}
                                                        />
                                                        <ErrorMessage name="phone" component="div" className="error-message" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                    <div className="contact-page-form__input-box">
                                                        <Field
                                                            name="email"
                                                            type="email"
                                                            placeholder="Email address"
                                                            className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                                                        />
                                                        <ErrorMessage name="email" component="div" className="error-message" />
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                    <div className="contact-page-form__input-box">
                                                        <Field
                                                            name="subject"
                                                            as="select"
                                                            className={`form-control disable-nice-select ${touched.subject && errors.subject ? 'is-invalid' : ''}`}
                                                        >
                                                            <option value="" disabled>Select Category</option>
                                                            <option value="ac-repair">AC Repair</option>
                                                            <option value="ac-installation-and-dismantle">AC Installation & Dismantle</option>
                                                            <option value="gas-services">GAS Services</option>
                                                            <option value="chemical-jet-services">Chemical Jet Services</option>
                                                            <option value="pressure-testing">Pressure Testing</option>
                                                            <option value="fan-motor-installation">Fan Motor Installation</option>
                                                            <option value="coper-coil-installation">Copper Coil Installation</option>
                                                            <option value="customized-services">Customized Services</option>
                                                        </Field>
                                                        <ErrorMessage name="subject" component="div" className="error-message" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                    <div className="contact-page-form__input-box">
                                                        <Field
                                                            as="textarea"
                                                            name="message"
                                                            placeholder="Write message"
                                                            className={`form-control ${touched.message && errors.message ? 'is-invalid' : ''}`}
                                                        />
                                                        <ErrorMessage name="message" component="div" className="error-message" />
                                                    </div>

                                                    <div className="contact-page-form__btn">
                                                        <button
                                                            type="submit"
                                                            className="thm-btn"
                                                            disabled={isSubmitting}
                                                        >
                                                            <span>{isSubmitting ? 'Please wait...' : 'Send Us Message'}</span>
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
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactThree;

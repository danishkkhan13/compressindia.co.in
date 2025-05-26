import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactThree = () => {
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
        console.log("🚀 Form submitted with:", values);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values),
            });

            console.log("📦 Raw fetch response:", response);

            const data = await response.json();
            console.log("📬 API returned:", data);

            if (response.ok) {
                toast.success("✅ Message sent!");
                resetForm(); // Optional: reset form after success
            } else {
                toast.error("❌ " + data.message);
            }
        } catch (err) {
            console.error("❌ Fetch failed:", err);
            toast.error("Failed to send message. Check network and console.");
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
                        <div className="col-xl-12 col-lg-12">
                            <div className="contact-page-form__inner">
                                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                                    {({ isSubmitting }) => (
                                        <Form className="contact-page-form__form contact-form-validated">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                    <div className="contact-page-form__input-box">
                                                        <Field name="name" type="text" placeholder="Your name" />
                                                        <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                    <div className="contact-page-form__input-box">
                                                        <Field name="phone" type="text" placeholder="Phone number" />
                                                        <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                    <div className="contact-page-form__input-box">
                                                        <Field name="email" type="email" placeholder="Email address" />
                                                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                    <div className="contact-page-form__input-box">
                                                        <Field
                                                            as="select"
                                                            name="subject"
                                                            className="..."
                                                        >
                                                            <option value="">-- Please select a subject --</option>
                                                            <option value="ac-installation">AC Installation</option>
                                                            <option value="ac-repair">AC Repair</option>
                                                            <option value="ac-servicing">AC Servicing</option>
                                                            <option value="other">Other</option>
                                                        </Field>

                                                        <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />



                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                    <div className="contact-page-form__input-box">
                                                        <Field as="textarea" name="message" placeholder="Write message" />
                                                        <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                                                    </div>
                                                    <div className="contact-page-form__btn">
                                                        <button className="thm-btn" type="submit" disabled={isSubmitting}>
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

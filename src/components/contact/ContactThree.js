import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom Select Component
const CustomSelect = ({ field, form, ...props }) => {
  const { name } = field;
  const { touched, errors } = form;
  
  return (
    <select 
      {...field} 
      {...props}
      className={`form-select ${touched[name] && errors[name] ? 'is-invalid' : ''}`}
    >
      {props.children}
    </select>
  );
};

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
        subject: Yup.string()
        .required('Please select a subject')
        .test('not-empty', 'Please select a subject', value => value && value.trim() !== ''),
        message: Yup.string().required('Message is required'),
    });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
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
                        <div className="col-xl-12 col-lg-12">
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
                                                            className={`form-control ${errors.name && touched.name ? 'is-invalid' : ''}`}
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
                                                            className={`form-control ${errors.phone && touched.phone ? 'is-invalid' : ''}`}
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
                                                            className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
                                                        />
                                                        <ErrorMessage name="email" component="div" className="error-message" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                                    <div className="contact-page-form__input-box">
                                                        <Field
                                                            name="subject"
                                                            component={CustomSelect}
                                                        >
                                                            <option value="">-- Please select a subject --</option>
                                                            <option value="ac-installation">AC Installation</option>
                                                            <option value="ac-repair">AC Repair</option>
                                                            <option value="ac-servicing">AC Servicing</option>
                                                            <option value="other">Other</option>
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
                                                            className={`form-control ${errors.message && touched.message ? 'is-invalid' : ''}`}
                                                        />
                                                        <ErrorMessage name="message" component="div" className="error-message" />
                                                    </div>
                                                    <div className="contact-page-form__btn">
                                                        <button 
                                                            className="thm-btn" 
                                                            type="submit" 
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

            <style jsx>{`
                .error-message {
                    color: #dc3545;
                    font-size: 0.875rem;
                    margin-top: 0.25rem;
                }
                .is-invalid {
                    border-color: #dc3545 !important;
                }
                .form-control, .form-select {
                    display: block;
                    width: 100%;
                    padding: 0.5rem 1rem;
                    font-size: 1rem;
                    line-height: 1.5;
                    color: #212529;
                    background-color: #fff;
                    border: 1px solid #ced4da;
                    border-radius: 0.25rem;
                    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
                }
                .form-select {
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
                    background-repeat: no-repeat;
                    background-position: right 0.75rem center;
                    background-size: 16px 12px;
                    appearance: none;
                }
                .form-control:focus, .form-select:focus {
                    border-color: #86b7fe;
                    outline: 0;
                    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
                }
            `}</style>
        </>
    );
};

export default ContactThree;
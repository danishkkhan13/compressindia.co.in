import React, { useState } from 'react';
import Link from 'next/link';
import {
    ServiceOneData,
    ServiceTwoData,
    ServiceThreeData,
} from '../../data/service';

// ✅ Reusable Services Section Component
const ServicesSection = ({ data, title, tagline, description }) => {
    const [visibleCount, setVisibleCount] = useState(8);


    return (
        <section className="services-one" style={{ padding: '75px 75px' }}>
            <div className="container">
                <div className="section-title text-center">
                    <span className="section-title__tagline">{tagline}</span>
                    <h2 className="section-title__title">{title}</h2>
                    <h6 className="text">{description}</h6>
                </div>
                <div className="row">
                    {data.slice(0, visibleCount).map((item, i) => (
                        <div
                            key={i}
                            className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft"
                            data-wow-delay={item.delay}
                            data-wow-duration={item.duration}
                        >
                            <div className="services-one__single">
                                <div className="services-one__single-img">
                                    <div className="services-one__single-img-inner">
                                        <img
                                            className="parallax-img"
                                            src={item.image}
                                            alt={item.alt}
                                        />
                                    </div>
                                </div>
                                <div className="services-one__single-content text-center">
                                    <h2>
                                        <Link href={item.link || '#'}>{item.heading}</Link>
                                    </h2>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ✅ Leadership Team Section Component
const LeadershipTeamSection = () => {
    const teamMembers = [
        {
            name: 'Wasik',
            title: 'Founder & CEO',
            description:
                'Visionary leader with over [X] years in the HVAC industry. Known for strategic thinking, technical expertise, and a relentless pursuit of excellence.',
            image: '/assets/images/team/wasik.jpg',
            alt: 'Wasik - Founder & CEO',
        },
        {
            name: 'Roger Rubin',
            title: 'Director of Operations',
            description:
                'Oversees end-to-end project execution, quality control, and customer relations. Passionate about timely delivery and innovation in HVAC practices.',
            image: '/assets/images/team/roger1.jpg',
            alt: 'Roger Rubin - Director of Operations',
        },
        {
            name: 'Roger Rubin',
            title: 'Head of Design & Engineering',
            description:
                'Leads a team of engineers in developing efficient, customized HVAC and refrigeration solutions tailored to industrial requirements.',
            image: '/assets/images/team/roger2.jpg',
            alt: 'Roger Rubin - Head of Design & Engineering',
        },

    ];

    return (
        <section className="team-section">
            <div className="container">
                <h2 className="title">Meet Our Leadership Team</h2>
                <p className="subtitle">
                    Get to know the people who are driving our mission and innovation in the HVAC industry.
                </p>

                <div className="team-grid">
                    <div className="team-card">
                        <img src="/assets/images/team/teem.webp" alt="Zeeshan Ansari - Managing director" className="avatar" />
                        <div className="info">
                            <h3 className="name">Zeeshan Ansari</h3>
                            <p className="role">Managing director</p>
                            <p className="desc">
                                Bringing years of HVAC experience, Zeeshan leads our team with a focus on quality, innovation, and customer satisfaction.
                            </p>
                        </div>
                    </div>

                    <div className="team-card">
                        <img src="/assets/images/team/teem.webp" alt="Nawaz Khan - Project head" className="avatar" />
                        <div className="info">
                            <h3 className="name">Nawaz Khan
                            </h3>
                            <p className="role">Project head</p>
                            <p className="desc">
                                Nawaz manages each project with precision and dedication, ensuring on-time delivery, safety, and high-performance HVAC results.
                            </p>
                        </div>
                    </div>

                    <div className="team-card">
                        <img src="/assets/images/team/teem.webp" alt="Ashraf alam - Technical head" className="avatar" />
                        <div className="info">
                            <h3 className="name">Ashraf alam</h3>
                            <p className="role">Technical head</p>
                            <p className="desc">
                                Ashraf leads our technical team with expert knowledge, ensuring every HVAC solution is efficient, reliable, and built to the highest standards.
                            </p>
                        </div>
                    </div>
                    <div className="team-card">
                        <img src="/assets/images/team/femalemembers.png" alt="Alfiya Shaikh - Sales Head" className="avatar" />
                        <div className="info">
                            <h3 className="name">Alfiya Shaikh</h3>
                            <p className="role">Sales Head</p>
                            <p className="desc">
                                Alfiya drives our sales strategy with a customer-first approach, building strong relationships and delivering tailored HVAC solutions that meet every client’s needs.
                            </p>
                        </div>
                    </div>

                    <div className="team-card">
                        <img src="/assets/images/team/femalemembers.png" alt="Nilofar Shaikh - Purchase Head" className="avatar" />
                        <div className="info">
                            <h3 className="name">Nilofar Shaikh</h3>
                            <p className="role">Purchase Head</p>
                            <p className="desc">
                                Nilofar oversees all procurement with efficiency and precision, ensuring quality materials and timely supply to support seamless HVAC project execution.
                            </p>
                        </div>
                    </div>

                    <div className="team-card">
                        <img src="/assets/images/team/femalemembers.png" alt="Amrin Ansari - Accounts Head" className="avatar" />
                        <div className="info">
                            <h3 className="name">Amrin Ansari</h3>
                            <p className="role">Accounts Head</p>
                            <p className="desc">
                                Amrin manages our financial operations with accuracy and integrity, ensuring smooth accounting, budgeting, and financial planning across all HVAC projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

// ✅ Page Component
const ServiceOne = () => {
    return (
        <>
            <ServicesSection
                data={ServiceOneData}
                title="Our core offerings include"


            />
            <ServicesSection
                data={ServiceTwoData}
                title="Our Services"


            />
            <ServicesSection
                data={ServiceThreeData}
                title="Our custom refrigeration solutions include:"

            />

            {/* 👥 Leadership Team Section */}
            <LeadershipTeamSection />
        </>
    );
};

export default ServiceOne;

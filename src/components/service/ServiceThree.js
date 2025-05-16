import React from 'react';
import Link from 'next/link';
import { ServiceThreeData } from '@/data/service';

const ServiceThree = () => {
    return (
        <>
            <section class="services-three">
                <div class="container">
                    <div class="section-title__style2">
                        <div class="section-title">
                            <span class="section-title__tagline">Our Services</span>
                            <h2 class="section-title__title">We Provide Best Service</h2>
                        </div>
                        <div class="text-box">
                            <p>will reenergize your ome and enhance your life. From everyday housekeeping to routine
                                cleanings, our professional this to members can provide you.</p>
                        </div>
                    </div>
                    <div class="row">
                        {ServiceThreeData.map((item, i) => (
                            <div key={i} class="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay={item.delay}>
                                <div class="services-three__single text-center">
                                    <div class="services-three__single-icon">
                                        <span class={item.icon}></span>
                                    </div>
                                    <div class="services-three__single-content">
                                        <h3><Link href={item.link}>{item.heading}</Link></h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceThree;
'use client';
import Image from "next/image";
import Link from "next/link";


const donots = [
    "Chillers",
    "Industrial hvac",
    "Industrial Systems Pipelines"

];

const dos = [
    "Ductwork",
    "Air - Conditioners",
    "Thermal Protection"

];
export default function WhatWeDo() {
    return (
        <section className="services-one pd-120-0-120">
            <div className="container">
                <div className="section-title text-center">
                    {/* <span class="section-title__tagline">Have Question?</span> */}
                    <h2 class="section-title__title">What We Do</h2></div>
                <div className="row">
                    {/* <div className="from-pink-100 to-blue-100 py-10 px-4 sm:px-10" style={{ display: 'flex' }}> */}
                    <div className="col-xl-6">
                        <p className="subtitle pb-4 text-black">Compress India began as a small venture offering air conditioning services across industries. Through relentless hard work and the strength of our experienced team, we have grown into a specialized HVAC company delivering comprehensive design, consultation, and project execution services.</p>
                        <div className="whatwedolist">
                            <div className="col-xl-6 col-lg-6">
                                {donots.map((item, index) => (
                                    <div key={index} className="text-black items-center mb-3 shadow-md team-cards">

                                        <span className="text-xl font-bold" style={{ paddingRight: '5px' }}>✔</span>
                                        <span className="text-sm sm:text-base font-medium">{item}</span>

                                    </div>
                                ))}
                            </div>
                            <div className="col-xl-6 col-lg-6" style={{ paddingLeft: '18px' }}>
                                {dos.map((item, index) => (
                                    <div key={index} className="text-black items-center mb-3 shadow-md team-cards">

                                        <span className="text-xl font-bold" style={{ paddingRight: '5px' }}>✔</span>
                                        <span className="text-sm sm:text-base font-medium">{item}</span>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div>
                            <div className="aboutUs-one__img-inner">
                                <Link
                                    href="https://www.youtube.com/watch?v=y5lgJYd2bwE"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src="/assets/images/team/compressvideo.webp"
                                        alt="Compressed Video"
                                        width={300}
                                        height={300}
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                </Link>
                            </div>
                        </div>

                    </div>
                    {/* </div> */}
                </div>
            </div>
        </section>
    );
}

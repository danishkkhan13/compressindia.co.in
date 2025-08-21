'use client'; // Only for App Router (Next.js 13+)
import Image from 'next/image';
import Link from 'next/link';
import FaqThree from '../faq3/FaqThree';



export default function Desirabledeal() {
    return (
        <section className="aboutUs-one">
            <div className="innerpage-box">
                <div className="container">
                    <div className="row">
                        <div className="innerpage-whitebox main-timeline">
                            {/* 🔼 IMAGE MOVED TO TOP HERE */}
                            <div className="mb-10 text-center">
                                <img
                                    src="/assets/images/services/desirable-deal.png"
                                    alt="Desirable Deal"
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                />
                            </div>
                            <div className="bg-white px-6 py-12 md:px-16 md:py-20">
                                <div className="max-w-7xl mx-auto" style={{ paddingBottom: '40px' }}>
                                    <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-1 wp-block-columns-is-layout-flex pt-4">
                                        <div className="pt-6">
                                            <h1 className="text-center pb-4 pt-4">Desirable Deal — AC Maintenance Specials in Mumbai & Navi Mumbai</h1>
                                        </div>
                                        <div className="pt-6">
                                            <p className="mb-6 text-gray-700 text-center mb-4">
                                                Explore the exclusive Desirable Deal from Compress India—your go-to AC maintenance specials in Mumbai & Navi Mumbai, designed to keep your cooling systems clean, efficient, and cost-effective.
                                            </p>
                                            <h2 className="text-center pb-4 pt-4">MAINTENANCE CONTRACT</h2></div>
                                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                                            <h2 className="wp-block-heading">PRICE : 1850/-</h2>
                                        </div>

                                        <div className="offers">
                                            {/* Yearly Contract Info */}
                                            <div className="col-xl-6">
                                                <h2 className="text-xl font-semibold mb-4 text-gray-800"><strong>What the Annual Labor & Service Contract Includes</strong></h2>
                                                <h3 className="fs-5 font-semibold mb-2 text-dark"><strong>Contract Overview</strong></h3>
                                                <ol className="text-gray-700 space-y-2 mb-2" style={{ listStyleType: 'disc', listStylePosition: 'outside' }}>
                                                    <li className="text-green-600"> <span className="text-gray-700">Type: Annual Labor + Service Contract (ALC)</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Price: ₹1,850 per year</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Coverage: Three water-jet AC servicing visits, spaced every four months</span></li>
                                                </ol>

                                                <h3 className="fs-5 font-semibold mb-2 text-dark mt-4"><strong>Service Features</strong></h3>
                                                <p className="mb-6 text-gray-700 mb-2">
                                                    Enjoy maintenance that includes:
                                                </p>
                                                <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside' }}>
                                                    <li className="text-green-600"> <span className="text-gray-700">Water-jet cleaning to remove accumulated dust and contaminants</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Repair labor for unexpected faults</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Free routine inspections at each visit</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Unlimited call-attend support for issues like water leaks, wiring faults, noise, or vibration</span></li>
                                                </ol>
                                            </div>

                                            {/* Benefits */}
                                            <div className="col-xl-6">
                                                <h2 className="text-xl font-semibold mb-4 text-gray-800 mt-4 mt-sm-0"><strong>Benefits of Choosing This AC Maintenance Deal</strong></h2>
                                                <ol className="text-gray-700 space-y-2 mb-2" style={{ listStyleType: 'disc', listStylePosition: 'outside' }}>
                                                    <li className="text-green-600"> <span className="text-gray-700">Cost Savings: Up to 25% discount on AC parts compared to regular market rates</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Convenience: Worry-free servicing with flexible payment after the second visit—experience our reliability first</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Prioritized Support: Quick response for emergencies and regular upkeep</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Optimized Cooling: Regular maintenance ensures better AC lifespan, efficiency, and cooling performance</span></li>
                                                </ol>
                                            </div>
                                        </div> {/* closes grid-cols container */}


                                        <div className="offers">
                                            {/* Yearly Contract Info */}
                                            <div className="col-xl-12">
                                                <h2 className="text-xl font-semibold mb-4 text-gray-800"><strong>Important Terms & Geographical Coverage</strong></h2>
                                                <h3 className="fs-5 font-semibold mb-2 text-dark mt-4"><strong>Service Area</strong></h3>
                                                <ol className="text-gray-700 space-y-2 mb-2" style={{ listStyleType: 'disc', listStylePosition: 'outside' }}>
                                                    <li className="text-green-600"> <span className="text-gray-700">Valid only in Mumbai & Navi Mumbai; additional transport charges apply for locations outside this zone</span></li>
                                                </ol>
                                                <h3 className="fs-5 font-semibold mb-2 text-dark mt-4"><strong>Additional Charges</strong></h3>
                                                <ol className="text-gray-700 space-y-2 mb-2" style={{ listStyleType: 'disc', listStylePosition: 'outside' }}>
                                                    <li className="text-green-600"> <span className="text-gray-700">24/7 emergency services during nights or public holidays may incur extra charges</span></li>
                                                </ol>
                                                <h3 className="fs-5 font-semibold mb-2 text-dark mt-4"><strong>Flexibility</strong></h3>
                                                <ol className="text-gray-700 space-y-2 mb-2" style={{ listStyleType: 'disc', listStylePosition: 'outside' }}>
                                                    <li className="text-green-600"> <span className="text-gray-700">Company reserves the right to adjust terms as needed from top-level authorization</span></li>
                                                </ol>
                                            </div>


                                        </div>
                                        <div className="offers">
                                            {/* whats Covered?*/}
                                            <div className="col-xl-6">
                                                <h2 className="text-xl font-semibold mb-4 text-gray-800"><strong>What's Covered Under This Maintenance Plan</strong></h2>
                                                <ol className="text-gray-700 space-y-2 mb-2" style={{ listStyleType: 'disc', listStylePosition: 'outside' }}>
                                                    <li className="text-green-600"> <span className="text-gray-700">Labor for all common malfunctions, including compressor issues,<br/> circuit board faults, fan motor problems, contactor failures, and<br/> wiring issues</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Leakage repairs: Evaporators, condensers, copper tubing, driers, etc.</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Blockage resolution in headers, distributors, expansion valves,<br/> capillary tubes</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">No part replacement charges—labor only</span></li>
                                                </ol>
                                            </div>

                                            {/* Not Covered */}
                                            <div className="col-xl-6">
                                                <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>NOT COREVED SERVICES :</strong></h3>
                                                <ol className="text-gray-700 space-y-2 mb-2" style={{ listStyleType: 'disc', listStylePosition: 'outside' }}>
                                                    <li className="text-green-600"> <span className="text-gray-700">Parts and materials for any component repair—can be sourced by the customer or provided at actual market cost</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Repair charges for major damages or natural wear-and-tear are not included</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">No coverage for accessory costs such as parts, wiring, or external hardware</span></li>
                                                </ol>
                                            </div>

                                        </div>
                                    </div> {/* closes wp-block-columns */}
                                    <hr className="border-t border-#222222 border-opacity-70 w-full my-4 h-[2px]" />
                                    <div>
                                        <h2 className="section-title__tagline text-center mt-[20px]"><strong>Important Note</strong></h2>
                                        <h6 className="text text-center">This is a labor-only annual service contract, not a full Annual Maintenance Contract (AMC). Make sure you understand all terms and conditions before subscribing to ensure it aligns with your AC upkeep needs.</h6>
                                    </div>
                                    <hr className="border-t border-#222222 border-opacity-10 w-full my-4 h-[2px]" />
                                    <div>
                                        <h2 className="section-title__tagline text-center mt-[20px]"><strong>Ready to Book Your Desirable Deal?</strong></h2>
                                        <h6 className="text text-center">Call us now to schedule your first service appointment and experience why this AC maintenance special in Mumbai & Navi Mumbai is trusted by homeowners and businesses alike. Enjoy top-tier performance, priority bookings, and value-driven cooling efficiency all year long.</h6>
                                    </div>
                                </div> {/* closes max-w-7xl */}
                                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center pt-7">
                                    Discover more
                                </h2>

                                <div className="text-center flex">
                                    {/* <div className="aboutUs-one__content-btn position-relative">
                                        <button className="thm-btns position-relative overflow-hidden" fdprocessedid="7vbap">
                                            <span className="text position-relative" style={{ zIndex: 2 }}>Desirable Deal (ALC Contract)</span>
                                            <span className="liquids">
                                            </span>
                                        </button>
                                    </div> */}
                                    <div className="aboutUs-one__content-btn position-relative">
                                        <Link href="/incredible-deal">
                                            <button className="thm-btns position-relative overflow-hidden" fdprocessedid="7vbap">
                                                <span className="text position-relative" style={{ zIndex: 2 }}>Incredible Deal (AMC Contract)</span>
                                                <span className="liquids">
                                                </span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div> {/* closes bg-white */}
                        </div> {/* closes innerpage-whitebox */}
                    </div>
                </div> {/* closes container */}
            </div> {/* closes innerpage-box */}
            <FaqThree />
        </section>

    );
}

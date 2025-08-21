'use client'; // Only for App Router (Next.js 13+)
import Image from 'next/image';
import Link from 'next/link';
import FaqFour from '../faq4/FaqFour';



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
                                    src="/assets/images/services/incrediable-deal.png"
                                    alt="Desirable Deal"
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                />
                            </div>
                            <div className="bg-white px-6 py-12 md:px-16 md:py-20">
                                <div className="max-w-7xl mx-auto" style={{ paddingBottom: '40px' }}>
                                    <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-1 wp-block-columns-is-layout-flex pt-4">
                                        <div className="pt-6">
                                            <h1 className="text-center pb-4 pt-4">Incredible Deal — Annual AC Maintenance Contract with Water-Jet Service in Mumbai & Navi Mumbai</h1>
                                        </div>
                                        <div className="pt-6">
                                            <p className="mb-6 text-gray-700 text-center mb-4">
                                                Unlock the Incredible Deal from Compress India—our premium annual AC maintenance contract featuring thorough Water-Jet cleaning. Designed for reliable performance, energy savings, and uninterrupted cooling all year long.
                                            </p>
                                        </div>
                                        <div className="pt-6">
                                            <h2 className="text-center pb-4 pt-4">MAINTENANCE CONTRACT</h2></div>
                                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                                            <h2 className="wp-block-heading">PRICE : 2,850/-</h2>
                                        </div>

                                        <div className="offers">
                                            {/* Yearly Contract Info */}
                                            <div className="col-xl-6">
                                                <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>ANNUAL LABOR CONTRACT :</strong></h3>
                                                <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside' }}>
                                                    <li className="text-green-600"> <span className="text-gray-700">Maintenance + Service Contract.</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Purpose of contract : Labor + Service Only .</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Type of contract  : AMC Contract.</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Amount : 2,850/- yearly.</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Total services included : 03 services.</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Duration of service : Each service after 04 months.</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Validity of contract : 12 months only.</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Type of service : Water Jet Services.</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Breakdown : All repair labor charges included for a year.</span></li>
                                                </ol>
                                            </div>

                                            {/* Benefits Section */}
                                            <div className="w-full xl:w-1/2 px-4">
                                                <h3 className="text-2xl font-semibold mb-4 text-gray-800 mt-4 mt-sm-0">
                                                    <strong>Exceptional Benefits of Our Premiere AC Maintenance Plan</strong>
                                                </h3>
                                                <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside' }}>
                                                    <li className="flex items-start">
                                                        <span className="text-green-600 mr-2"></span>
                                                        <span>Long-Term Cooling Efficiency: Regular deep cleaning maintains peak airflow and cooling capacity.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="text-green-600 mr-2"></span>
                                                        <span>Reduced Energy Bills: Cleaner coils and filters mean your AC uses less power to cool.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="text-green-600 mr-2"></span>
                                                        <span>Proactive Breakdown Prevention: Early detection of potential failures before they cost more.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="text-green-600 mr-2"></span>
                                                        <span>Convenient Annual Coverage: One contract covers three professional visits—simplifying upkeep with consistent service quality.</span>
                                                    </li>
                                                    <div className="aboutUs-one__content-btn">
                                                        <Link href="/one-time-services" className="thm-btn">
                                                            <span>Find out More</span>
                                                            <div className="liquid"></div>
                                                        </Link>
                                                    </div>
                                                </ol>


                                            </div>


                                        </div> {/* closes grid-cols container */}

                                        <div className="offers">
                                            {/* Annual Maintainance Info */}
                                            <div className="col-xl-6">
                                                <h2 className="text-xl font-semibold mb-4 text-gray-800"><strong>What the Annual Maintenance<br/> Contract Covers</strong></h2>
                                                <h3 className="fs-5 font-semibold mb-2 text-dark"><strong>Comprehensive Water-Jet Cleaning</strong></h3>
                                                <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside' }}>
                                                    <li className="text-green-600"> <span className="text-gray-700">Three scheduled high-pressure Water-Jet AC cleaning sessions <br/>over the year to ensure your AC operates efficiently and hygienically.</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Includes both indoor and outdoor unit cleaning to remove dust, <br/>mold, and grime.</span></li>
                                                </ol>
                                                <h3 className="fs-5 font-semibold mb-2 mt-3 text-dark"><strong>CRoutine HVAC System Checks</strong></h3>
                                                <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside' }}>
                                                    <li className="text-green-600"> <span className="text-gray-700">Each visit includes a full inspection and preventive maintenance <br/>to detect early issues, such as leaks, blockages, or electrical faults.</span></li>
                                                </ol>
                                            </div>

                                            {/* Pricing Section */}
                                            <div className="w-full xl:w-1/2 px-4">
                                                <h2 className="text-2xl font-semibold mb-4 text-gray-800 mt-4 mt-sm-0">
                                                    <strong>Pricing Details & Coverage<br/> Terms</strong>
                                                </h2>
                                                <h3 className="fs-5 font-semibold mb-2 text-dark"><strong>Affordable Annual Contract Rates</strong></h3>
                                                <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside' }}>
                                                    <li className="text-green-600"> <span className="text-gray-700">Pricing is based on AC tonnage and technical complexity; typically ranges between ₹2,500 to ₹5,000 per year. </span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Tailored to fit both small-scale and heavy-duty industrial systems.</span></li>
                                                </ol>
                                                <h3 className="fs-5 font-semibold mb-2 mt-3 text-dark"><strong>Service Availability</strong></h3>
                                                <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside' }}>
                                                    <li className="text-green-600"> <span className="text-gray-700">Available in Mumbai & Navi Mumbai.</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Ideal for commercial and industrial clients needing systematic AC system maintenance and chiller plant care.</span></li>
                                                </ol>


                                            </div>


                                        </div> {/* closes grid-cols container */}

                                        <div className="offers">
                                            {/* Annual Maintainance Info */}
                                            <div className="col-xl-6">
                                                <h2 className="text-xl font-semibold mb-4 text-gray-800"><strong>Key Contract Conditions</strong></h2>
                                                <h3 className="fs-5 font-semibold mb-2 text-dark"><strong>Payment Terms</strong></h3>
                                                <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside' }}>
                                                    <li className="text-green-600"> <span className="text-gray-700">Flexible payment options available for added convenience.</span></li>
                                                </ol>
                                                <h3 className="fs-5 font-semibold mb-2 mt-3 text-dark"><strong>Exclusions</strong></h3>
                                                <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside' }}>
                                                    <li className="text-green-600"> <span className="text-gray-700">Does not cover replacement of parts like compressors, fan motors, or electrical circuit components.</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Major repairs or refrigerant (gas) top-ups are managed separately.</span></li>
                                                </ol>
                                            </div>

                                            {/* Pricing Section */}
                                            <div className="w-full xl:w-1/2 px-4">
                                                <h2 className="text-2xl font-semibold mb-4 text-gray-800 mt-4 mt-sm-0">
                                                    <strong>Why Compress India Is Your Ideal HVAC Partner</strong>
                                                </h2>

                                                <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside' }}>
                                                    <li className="text-green-600"> <span className="text-gray-700">Proven expertise in AC and HVAC maintenance across Mumbai's industrial sectors.</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Skilled technicians delivering advanced Air-Conditioning servicing, system automation, and cooling restoration.</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Commitment to minimizing downtime and maximizing efficiency for industrial cooling systems.</span></li>
                                                </ol>

                                            </div>


                                        </div> {/* closes grid-cols container */}                                                                                   


                                        <div className="offers">
                                            {/* Yearly Contract Info */}
                                            <div className="col-xl-12">
                                                <h2 className="text-xl font-semibold mb-4 text-gray-800"><strong>TERMS & CONDITIONS :</strong></h2>
                                                <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside' }}>
                                                    <li className="text-green-600"> <span className="text-gray-700">As it is an offer from our side so all customers can pay after the 07days observing the service methods & satisfaction of the customer. </span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700"> This contract Specially applicable for Mumbai & Navi Mumbai region only.</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Transportation charges may apply or changes as per the location of consumers (if location is out of Mumbai or Navi Mumbai region) </span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700"> 24/7 call attend service may be charged additional in the time of night charges or public holidays. </span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">All the decision can be taken or changes may be done directly from the company authorities with or without taking any permissions from Top to bottom. </span></li>

                                                </ol>
                                            </div>


                                        </div>

                                        <div className="offers">
                                            {/* Yearly Contract Info */}
                                            <div className="col-xl-6">
                                                <h2 className="text-xl font-semibold mb-4 text-gray-800"><strong>COVERED SERVICES :</strong></h2>
                                                <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside' }}>
                                                    <li className="text-green-600"> <span className="text-gray-700">Failure of Compressor, Circuit board, fan motor, contactor & switch gears etc.</span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700"> Gas leakage problem in unit may be in evaporator (cooling coil), Copper tubes, Condenser, Drier etc. </span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700"> Blockage of Driers, Copper tubes (may be in headers, Distributor, Capillary tubes, Expansion valves etc. </span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700"> Damage of Insulation of Communication & Power cables & Copper tubes/Pipe etc. </span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700"> Natural damages will not considered in this format. Please read all the specifications & technical details carefully before selection of the contracts. </span></li>

                                                </ol>
                                            </div>

                                            {/* Benefits */}
                                            <div className="col-xl-6">
                                                <h2 className="text-xl font-semibold mb-4 text-gray-800 mt-4 mt-sm-0"><strong>NOT COREVED SERVICES :</strong></h2>
                                                <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside' }}>
                                                    <li className="text-green-600"> <span className="text-gray-700">As it's a yearly labor contract so the charges of components/parts/materials etc. are not covered.  </span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">Materials/parts can be arranged by the customer side or we can provide the same but cost of materials/parts will be additional and rates will be subjected as per market actual values. </span></li>
                                                    <li className="text-green-600"> <span className="text-gray-700">  Natural damages will not considered in this format. Please read all the specifications & technical details carefully before selection of the contracts.  </span></li>

                                                </ol>
                                            </div>

                                        </div>

                                    </div> {/* closes wp-block-columns */}
                                    <hr className="border-t border-#222222 border-opacity-70 w-full my-4 h-[2px]" />
                                    <div>
                                        <h2 className="section-title__tagline text-center mt-[20px]"><strong>NOTE :</strong></h2>
                                        <h6 className="text text-center">This is an AMC CONTRACT so any breakdown of machines will be covered in this deal</h6>
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
                                        <button className="thm-btns position-relative overflow-hidden" fdprocessedid="7vbap">
                                            <span className="text position-relative" style={{ zIndex: 2 }}>Incredible Deal (AMC Contract)</span>
                                            <span className="liquids">
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div> {/* closes bg-white */}
                        </div> {/* closes innerpage-whitebox */}
                    </div>
                </div> {/* closes container */}
            </div> {/* closes innerpage-box */}
            <FaqFour />
        </section>

    );
}

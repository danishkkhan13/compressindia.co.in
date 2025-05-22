'use client'; // Only for App Router (Next.js 13+)
import Image from 'next/image';



export default function Desirabledeal() {
    return (
        <section className="about-one">
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

                                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                                            <h2 className="wp-block-heading">PRICE : 2,550/-</h2>
                                        </div>

                                        <div className="offers">
                                            {/* Yearly Contract Info */}
                                            <div className="col-xl-6">
                                                <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>ANNUAL LABOR CONTRACT :</strong></h3>
                                                <ul className="text-gray-700 space-y-2">
                                                    <li className="text-green-600">›› <span className="text-gray-700">Yearly Labor + Service Contract.</span></li>
                                                    <li className="text-green-600">›› <span className="text-gray-700">Purpose of contract : Labor + Service Only .</span></li>
                                                    <li className="text-green-600">›› <span className="text-gray-700">Type of contract  : ALC Contract.</span></li>
                                                    <li className="text-green-600">›› <span className="text-gray-700">Amount : 1,850/- yearly.</span></li>
                                                    <li className="text-green-600">›› <span className="text-gray-700">Total services included : 03 services.</span></li>
                                                    <li className="text-green-600">›› <span className="text-gray-700">Duration of service : Each service after 04 months.</span></li>
                                                    <li className="text-green-600">›› <span className="text-gray-700">Validity of contract : 12 months only.</span></li>
                                                    <li className="text-green-600">›› <span className="text-gray-700">Type of service : Water Jet Services.</span></li>
                                                    <li className="text-green-600">›› <span className="text-gray-700">Breakdown : All repair labor charges included for a year.</span></li>
                                                </ul>
                                            </div>

                                            {/* Benefits */}
                                            <div className="col-xl-6">
                                                <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>BENEFITS :</strong></h3>
                                                <ul className="text-gray-700 space-y-2">
                                                    <li className="text-green-600">›› <span className="text-gray-700">Unlimited call attend for repair jobs.</span></li>
                                                    <li className="text-green-600">›› <span className="text-gray-700">Unlimited call attend for water leakage issues.</span></li>
                                                    <li className="text-green-600">›› <span className="text-gray-700">Unlimited call attend for wiring short circuit issues.</span></li>
                                                    <li className="text-green-600">›› <span className="text-gray-700">Free routine inspection for all kinds of ac’s.</span></li>
                                                    <li className="text-green-600">›› <span className="text-gray-700">Free call attend for noisy & vibration issues in ac’s.</span></li>
                                                    <li className="text-green-600">
                                                        ›› <strong className="text-black-700 font-semibold">
                                                            Our ALC contract customers will be avail benefits in repair & maintenance works, all ac parts rates would be discounted up to 25% compare to market rate
                                                        </strong>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div> {/* closes grid-cols container */}


                                        <div className="offers">
                                            {/* Yearly Contract Info */}
                                            <div className="col-xl-12">
                                                <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>TERMS & CONDITIONS :</strong></h3>
                                                <ul className="text-gray-700 space-y-2 pr-[80px]">
                                                    <li className="text-green-600">›› <span className="text-gray-700">As it is an offer from our side so all customers can pay on second service after observing the service quality & they can pay on 2nd service.</span></li>
                                                    <li className="text-green-600">›› <span className="text-gray-700">This contract Specially applicable for Mumbai & Navi Mumbai region only.</span></li>
                                                    <li className="text-green-600">›› <span className="text-gray-700">Transportation charges may apply or changes as per the location of consumers (if location is out of Mumbai or Navi Mumbai region) </span></li>
                                                    <li className="text-green-600">›› <span className="text-gray-700"> 24/7 call attend service may be charged additional in the time of night charges or public holidays. </span></li>
                                                    <li className="text-green-600">›› <span className="text-gray-700">All the decision can be taken or changes may be done directly from the company authorities with or without taking any permissions from Top to bottom. </span></li>

                                                </ul>
                                            </div>


                                        </div>
                                        <div className="offers">
                                            {/* Yearly Contract Info */}
                                            <div className="col-xl-6">
                                                <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>COVERED SERVICES :</strong></h3>
                                                <ul className="text-gray-700 space-y-2 pr-[80px] benefets">
                                                    <li className="text-green-600">›› <span className="text-gray-700">Failure of Compressor, Circuit board, fan motor, contactor & switch gears etc.</span></li>
                                                    <li className="text-green-600">›› <span className="text-gray-700"> Gas leakage problem in unit may be in evaporator (cooling coil), Copper tubes, Condenser, Drier etc. </span></li>
                                                    <li className="text-green-600">›› <span className="text-gray-700"> Blockage of Driers, Copper tubes (may be in headers, Distributor, Capillary tubes, Expansion valves etc. </span></li>
                                                    <li className="text-green-600">›› <span className="text-gray-700"> Damage of Insulation of Communication & Power cables & Copper tubes/Pipe etc. </span></li>
                                                    <li className="text-green-600">›› <span className="text-gray-700"> Natural damages will not considered in this format. Please read all the specifications & technical details carefully before selection of the contracts. </span></li>

                                                </ul>
                                            </div>

                                            {/* Benefits */}
                                            <div className="col-xl-6">
                                                <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>NOT COREVED SERVICES :</strong></h3>
                                                <ul className="text-gray-700 space-y-2">
                                                    <li className="text-green-600">›› <span className="text-gray-700">As it’s a yearly labor contract so the charges of components/parts/materials etc. are not covered.  </span></li>
                                                    <li className="text-green-600">›› <span className="text-gray-700">Materials/parts can be arranged by the customer side or we can provide the same but cost of materials/parts will be additional and rates will be subjected as per market actual values. </span></li>
                                                    <li className="text-green-600">›› <span className="text-gray-700">Natural damages will not considered in this format. Please read all the specifications & technical details carefully before selection of the contracts. </span></li>

                                                </ul>
                                            </div>

                                        </div>
                                    </div> {/* closes wp-block-columns */}
                                    <hr className="border-t border-#222222 border-opacity-70 w-full my-4 h-[2px]" />
                                    <div>
                                        <h2 className="section-title__tagline text-center mt-[20px]"><strong>NOTE :</strong></h2>
                                        <h6 className="text text-center">No any cost of parts are included in this contract. cost of parts / accessories will be extra</h6>
                                    </div>
                                </div> {/* closes max-w-7xl */}
                                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center pt-7">
                                    Discover more
                                </h2>

                                <div className="text-center flex">
                                    {/* <div className="about-one__content-btn position-relative">
                                        <button className="thm-btns position-relative overflow-hidden" fdprocessedid="7vbap">
                                            <span className="text position-relative" style={{ zIndex: 2 }}>Desirable Deal (ALC Contract)</span>
                                            <span className="liquids">
                                            </span>
                                        </button>
                                    </div> */}
                                    <div className="about-one__content-btn position-relative">
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
        </section>

    );
}

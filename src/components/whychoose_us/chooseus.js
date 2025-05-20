// WhyChooseUs.js (Next.js + Tailwind CSS)

import { FaRupeeSign, FaHome, FaHeart } from 'react-icons/fa';
import { MdLocalHospital } from 'react-icons/md';

export default function WhyChooseUs() {
    return (
        <section className="services-one pd-120-0-90">

            <div className="container">

                <div
                    className="bg-gradient-to-r from-teal-300 to-cyan-400 w-full py-20 px-4"
                    style={{
                        backgroundImage: `url('/assets/images/services/service6.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>
                <div className="bg-gradient-to-r from-teal-300 to-cyan-400 w-full py-20 px-4">

                    <div className="max-w-7xl mx-auto">
                        <h2 className="section-title__tagline text-center">Why Choose us</h2>

                        <div className="flex cardchooseus">
                            {/* Card 1 */}
                            <div className="flex col-md-3 col-sm-6 ml-0 mr-[22px] mb-[11px] mt-0">
                                <div className="text-teal-500 text-2xl font-bold mb-2 text-center owl-nav icones">
                                    <div className="whychoose text-teal-500 rounded-full w-20 h-20 flex items-center justify-center mb-4 transform-shape">
                                        <FaRupeeSign style={{ fontSize: '31px' }} className="text-teal-500 text-3xl text-center owl-nav" />
                                    </div>
                                </div>
                                <h3 className="text-teal-500 text-lg font-semibold mb-2">Minimum Charges</h3>
                                <p className="text-teal-500 text-sm max-w-xs ml-0 mr-[22px] mb-[11px] mt-0">
                                    Minimum Charges for Maximum Chill – Your Trusted Partner in Air Conditioner Repair.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="flex col-md-3 col-sm-6 ml-0 mr-[22px] mb-[11px] mt-0">
                                <div className="text-teal-500 text-2xl font-bold mb-2 text-center owl-nav icones">
                                    <div className="whychoose text-teal-500 rounded-full w-20 h-20 flex items-center justify-center mb-4 transform-shape">
                                        <FaHome style={{ fontSize: '31px' }} className="text-teal-500 text-3xl text-center owl-nav" />
                                    </div>
                                </div>
                                <h3 className="text-teal-500 text-lg font-semibold mb-2">Home Base Service</h3>
                                <p className="text-teal-500 text-sm max-w-xs ml-0 mr-[22px] mb-[11px] mt-0">
                                    Experience the Ease of Home Base Service: We Bring Expertise to Your Doorstep. Your Home, Our Priority.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="flex col-md-3 col-sm-6 ml-0 mr-[22px] mb-[11px] mt-0">
                                <div className="text-teal-500 text-2xl font-bold mb-2 text-center owl-nav icones">
                                    <div className="whychoose w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mb-4 shadow-md transform-shape">
                                        <MdLocalHospital className="text-teal-600" style={{ fontSize: '31px' }} />
                                    </div>
                                </div>
                                <h3 className="text-teal-500 text-lg font-semibold mb-2">24 Hours Emergency</h3>
                                <p className="text-teal-500 text-sm max-w-xs ml-0 mr-[22px] mb-[11px] mt-0">
                                    Reliable 24/7 Emergency Service: We're Always On Call to Tackle Your Urgent Needs. Your Safety, Our Swift Response.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="flex col-md-3 col-sm-6 ml-0 mr-[22px] mb-[11px] mt-0">
                                <div className="text-teal-500 text-2xl font-bold mb-2 text-center owl-nav icones">
                                    <div className="whychoose rounded-full w-20 h-20 flex items-center justify-center mb-4 transform-shape">
                                        <FaHeart style={{ fontSize: '31px' }} className="text-teal-500 text-center" />
                                    </div>
                                </div>
                                <h3 className="text-teal-500 text-lg font-semibold mb-2 ml-0 mr-[22px] mb-[11px] mt-0">Off Season Discount</h3>
                                <p className="text-teal-500 text-sm max-w-xs">
                                    Off-Season Bliss: Chill Out with Cool Savings! Enjoy Exclusive Discounts on Air Conditioner Repair Services. Embrace Comfort, Embrace Savings.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

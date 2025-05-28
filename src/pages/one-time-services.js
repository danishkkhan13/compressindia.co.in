import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Onetimeservice from "../components/service/Onetimeservice";
import FooterOne from "../common/footer/FooterOne";
import { FaWhatsapp } from 'react-icons/fa';

export default function onetimeservicePageOne() {
    return (
        <>
            <SEO pageTitle={"One-Time HVAC Maintenance & Repair in Mumbai | Compress India"} description={"Get fast, expert HVAC service in Mumbai with Compress India's one-time solutions—repairs, inspections, descaling & system optimization for industrial performance."} />
            <HeaderOne />

            <Breadcrumb
                heading="One Time Service"
                currentPage="One Time Service"
                backgroundImage="/assets/images/backgrounds/one-time-service.jpeg"
            />
            <section className="py-16 services-one pd-120-0-90 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="innerpage-whiteboxs main-timeline">
                            <div className="text-center mb-12" style={{ paddingBottom: '60px' }}>
                                <h5 className="text text-center pb-4">Effective rates for our valuable customers</h5>
                                <h2 className="text-3xl font-bold">ONE TIME SERVICES</h2>
                                <p className="text-gray-600 mt-2">Water Jet Services! Just a part of routine cleaning</p>
                            </div>
                            <div>
                                <Onetimeservice />
                                <div className="mb-12 text-center italic" style={{ paddingTop: '60px', fontSize: 'small' }}>
                                    <h6>
                                        DISCLAIMER : This is only chemical jet service charges , If breakdown / repair required rates may vary as per standard charges in the market
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <BrandOne /> */}
                <div className="grid grid-rows-2 gap-6 py-10" style={{
                    textAlign: 'center',
                    paddingBottom: '40px'
                }}>
                    <a
                        href="https://wa.me/918655011465"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            className="w-full bg-[#2F3338] text-white text-center py-4 rounded-full text-lg font-normal hover:bg-[#3c4045] transition"
                            style={{
                                width: '565px',
                                backgroundColor: '#32373c',
                                borderRadius: '5px',
                            }}
                        >
                            <FaWhatsapp size={24} color="#25D366" /> Book Now on WhatsApp
                        </button>
                    </a>


                </div>
                <div className="grid grid-rows-2 gap-6 py-10" style={{
                    textAlign: 'center',
                    paddingBottom: '40px'
                }}>

                    <button className="w-full bg-[#2F3338] text-white text-center py-4 rounded-full text-lg font-normal hover:bg-[#3c4045] transition" style={{
                        width: '565px',
                        backgroundColor: '#32373c',
                        borderRadius: '5px'
                    }}>
                        Compare with same deal
                    </button>
                </div>
            </section>

            <FooterOne />
        </>
    );
}
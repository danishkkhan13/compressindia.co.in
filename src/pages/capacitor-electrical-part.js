import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Onetimeservice from "../components/service/Onetimeservice";
import FooterOne from "../common/footer/FooterOne";

export default function capacitorelectricalpartPageOne() {
    return (
        <>
            <SEO pageTitle={"Capacitor / Electrical Part"} />
            <HeaderOne />
            <Breadcrumb
                heading="Capacitor / Electrical Part"
                currentPage="Capacitor / Electrical Part"
            />
            <section className="py-16 services-one pd-120-0-90 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="innerpage-whiteboxs main-timeline">
                            <div className="text-center mb-12" style={{ paddingBottom: '60px' }}>
                                <h5 className="text text-center pb-4">Effective rates for our valuable customers</h5>
                                <h2 className="text-3xl font-bold">CAPACITOR & ELECTRICAL PARTS</h2>
                                <p className="text-gray-600 mt-2">Capacitor & Electrical Parts Replacement ! Supply & installation of capacitor & electrical parts in Air conditioner</p>
                            </div>
                            <div>
                                <Onetimeservice />
                                <div className="mb-12 text-center italic" style={{ paddingTop: '60px', fontSize: 'small' }}>
                                    <p>
                                        DISCAILMER : This is only for replacement of capacitor / electrical parts charges , If breakdown / repair required rates may vary as per standard charges in the market
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
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
                        Book Now
                    </button>

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
            {/* <BrandOne /> */}

            <FooterOne />
        </>
    );
}
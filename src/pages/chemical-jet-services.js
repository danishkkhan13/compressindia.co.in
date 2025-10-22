import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import FaqSix from '../components/faq6/FaqSix';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import Image from "next/image";

export default function chemicaljetservicePageOne() {
  const services = [
    {
      title: 'Split Air Conditioners',
      price: 1200,
      image: '/assets/images/services/ac.webp',
    },
    {
      title: 'Window Air Conditioners',
      price: 950,
      image: '/assets/images/services/window-AC.webp',
    },
    {
      title: 'Portable Air Conditioners',
      price: 950,
      image: '/assets/images/services/Portable-AC.webp',
    },
    {
      title: 'Cassette Air Conditioners',
      price: 1850,
      image: '/assets/images/services/cassette-AC.webp',
      suffix: '/-TR',
    },
    {
      title: 'Tower Air Conditioners',
      price: 800,
      image: '/assets/images/services/tower-AC.webp',
      suffix: '/-TR',
    },
    {
      title: 'Ducted Air Conditioners',
      price: 800,
      image: '/assets/images/services/ducted-ac.webp',
      suffix: '/-TR',
    },
  ];


  // Dynamically calculate rows
  const rows = [];
  for (let i = 0; i < services.length; i += 3) {
    rows.push(services.slice(i, i + 3));
  }

  return (
    <>
      <SEO pageTitle={"Experienced Chemical Jet Services in Mumbai | Compress India"} description={"Affordable chemical jet cleaning in Mumbai by Compress India. Pricing: Split (₹1200), Window (₹950), Portable (₹950), Cassette (₹1850). Remove dirt, improve cooling, and boost efficiency. Schedule your cleaning now!"} />
      <HeaderOne />
      <Breadcrumb
        heading="Chemical Jet Services"
        currentPage="Chemical Jet Services"
        backgroundImage="/assets/images/backgrounds/chemical-jet-service.webp"
      />
      <section className="py-16 services-one pd-120-0-90 bg-white">
        <div className="container">
          <div className="row">
            <div className="innerpage-whiteboxs main-timeline">

              {/* Hero Section */}
              <div className="flex flex-col items-center justify-center h-screen text-center bg-white">
                <h1 className="text-3xl md:text-5xl font-bold pb-6 mb-4 mt-3">
                  Experienced Chemical Jet Services in Mumbai
                </h1>
                <p className="mb-6 text-gray-700 max-w-2xl ">
                  Get affordable chemical jet cleaning in Mumbai with Compress India, the trusted choice for restoring cooling performance and<br /> extending the life of your AC units.
                  Our specialized jet cleaning service removes deep-seated dirt, mold, and debris to ensure<br /> maximum efficiency and healthier air quality.
                </p>
              </div>

              {/* More Info 1 */}

              <div className="container mx-auto px-4" style={{ marginBottom: '70px' }}>
                {/* More Info 1 */}

                <div className="offers">

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Why Choose Our Chemical Jet AC Cleaning Services</strong></h3>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800"><strong>Professional Deep Cleaning for All AC Types</strong></h4>
                    <p className="mt-3 mb-2 text-gray-900 max-w-2xl ">
                      We provide expert chemical jet cleaning for:
                    </p>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '20px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">Split ACs - ₹1,200 per unit (Split AC Repair & Service)</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Window ACs - ₹950 per unit (Window AC Services)</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Portable ACs - ₹950 per unit (Portable AC Services)</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">SCassette ACs - ₹1,850 per unit (Cassette AC Installation)</span></li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2 mt-2 text-gray-800"><strong>Improved Cooling & Energy Efficiency</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '30px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">Our high-pressure jet cleaning method ensures your AC cools <br />faster, uses less energy, and operates without strain.</span></li>
                    </ol>
                  </div>

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Our Chemical Jet Cleaning <br />Process</strong></h3>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800"><strong>Step 1 - System Inspection</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">We check your AC's overall condition to determine cleaning requirements (AC Inspection Services).</span></li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2 mt-2 text-gray-800"><strong>Step 2 - High-Pressure Jet Cleaning</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">Using professional-grade equipment, we thoroughly clean coils, fins, and filters to remove dust, dirt, and biofilm.</span></li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2 mt-2 text-gray-800"><strong>Step 3 - Final Testing & Quality Check</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '30px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">We test your AC to ensure optimal cooling and performance before handing it back (AC Testing & Quality Check).</span></li>
                    </ol>
                  </div>

                </div>

                {/* More Info 2 */}

                <div className="offers">

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Benefits of Chemical Jet Services</strong></h3>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '20px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">Removes Tough Dirt & Bacteria from coils, filters, and fins</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Prevents Bad Odors caused by mold and moisture build-up</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Enhances Air Quality for a healthier indoor environment</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Extends AC Lifespan by preventing major breakdowns</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Reduces Energy Bills through improved cooling efficiency (AC Maintenance Plans)</span></li>
                    </ol>
                  </div>

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Service Coverage Area</strong></h3>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">We provide chemical jet AC cleaning services in Mumbai & Navi Mumbai, catering to residential AC customers, commercial HVAC clients, and industrial setups.</span></li>
                    </ol>
                  </div>

                </div>

                <div className="offers">

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Book Your Chemical Jet Service Today</strong></h3>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">Experience the difference of a professional chemical jet cleaning service in Mumbai. Call +91 86550 11465 or email sales@compressindia.in to schedule your cleaning and restore your AC's peak performance.</span></li>
                    </ol>
                  </div>

                </div>

              </div>

              {/* Main Offers Info */}
              <div className="text-center mb-12" style={{ paddingBottom: '60px' }}>
                <h5 className="text text-center pb-4">Effective rates for our valuable customers</h5>
                <h2 className="text-3xl font-bold">CHEMICAL JET SERVICES</h2>
                <p className="text-gray-600 mt-2">Breakdown Services ! Upgrade version of water service to improve cooling efficiency</p>
              </div>
              <div>
                <div className="max-w-6xl mx-auto px-4 space-y-12">
                  {rows.map((row, rowIndex) => (
                    <div key={rowIndex}>
                      <div className="servicese">
                        {row.map((service, idx) => (
                          <div key={idx} className="text-center w-full md:w-1/3">
                            <Image
                              src={service.image}
                              alt={service.title}
                              width={300}
                              height={200}
                              className="mx-auto object-contain h-48"
                            />
                            <h5 className="mt-4 font-semibold text-lg">
                              Price : {service.price}
                              {service.suffix || '/-'}
                            </h5>
                            <p className="text-sm uppercase mt-1 text-gray-700">{service.title}</p>
                          </div>
                        ))}
                      </div>
                      {rowIndex < rows.length - 1 && (
                        <hr className="border-t border-black mt-10 mb-2 w-full" />
                      )}
                    </div>
                  ))}

                </div>

                <div className="mb-12 text-center italic" style={{ paddingTop: '60px', fontSize: 'small' }}>
                  <h6>
                    DISCLAIMER : This is only
                    Chemical Jet Services charges , If breakdown / repair required rates may vary as per standard charges in the market
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              className="button-mobile w-full bg-[#2F3338] text-white text-center py-4 rounded-full text-lg font-normal hover:bg-[#3c4045] transition"
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

          <Link href="/ac-dismantle-services">
            <button
              className="button-mobile w-full bg-[#2F3338] text-white text-center py-4 rounded-full text-lg font-normal hover:bg-[#3c4045] transition"
              style={{
                width: "565px",
                backgroundColor: "#32373c",
                borderRadius: "5px",
              }}
            >
              Compare with same deal
            </button>
          </Link>
        </div>
        <FaqSix />
      </section>
      {/* <BrandOne /> */}

      <FooterOne />
    </>
  );
}
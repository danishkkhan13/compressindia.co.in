import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import FaqTen from '../components/faq10/FaqTen';
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";


export default function GaschargingservicesPageOne() {
  const services = [
    {
      title: "Split Air Conditioners",
      price: 1850,
      image: "/assets/images/services/ac.webp",
    },
    {
      title: "Window Air Conditioners",
      price: 1850,
      image: "/assets/images/services/window-AC.webp",
    },
    {
      title: "Portable Air Conditioners",
      price: 1850,
      image: "/assets/images/services/Portable-AC.webp",
    },
    {
      title: "Cassette Air Conditioners",
      price: 2050,
      image: "/assets/images/services/cassette-AC.webp",
      suffix: "/-TR",
    },
    {
      title: "Tower Air Conditioners",
      price: 1800,
      image: "/assets/images/services/tower-AC.webp",
      suffix: "/-TR",
    },
    {
      title: "Ducted Air Conditioners",
      price: 1800,
      image: "/assets/images/services/ducted-ac.webp",
      suffix: "/-TR",
    },
  ];

  const CANONICAL = "https://www.compressindia.co.in/gas-charging";
  const TITLE =
    "AC Gas Charging in Mumbai | Split, Window, Cassette – Compress India";
  const DESCRIPTION =
    "Affordable AC gas charging in Mumbai & Navi Mumbai. Split/Window/Portable ₹1850; Cassette ₹2050/TR; Tower ₹1800/TR; Ducted ₹1800/TR. Restore cooling efficiency—book today.";

  // Dynamically calculate rows
  const rows = [];
  for (let i = 0; i < services.length; i += 3) {
    rows.push(services.slice(i, i + 3));
  }
  return (
    <>
      {/* SEO meta */}
      <SEO pageTitle={TITLE} description={DESCRIPTION} canonical={CANONICAL} />

      {/* BreadcrumbList (Home → Gas Charging) */}
      <Script
        id="ld-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.compressindia.co.in/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Gas Charging",
                item: CANONICAL,
              },
            ],
          }),
        }}
      />

      {/* WebPage schema */}
      <Script
        id="ld-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${CANONICAL}#webpage`,
            url: CANONICAL,
            name: TITLE,
            description: DESCRIPTION,
            inLanguage: "en-IN",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://www.compressindia.co.in/#website",
              url: "https://www.compressindia.co.in/",
              name: "Compress India",
            },
            about: { "@id": "https://www.compressindia.co.in/#organization" },
          }),
        }}
      />

      {/* Service + OfferCatalog (priced gas charging) */}
      <Script
        id="ld-service-offercatalog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${CANONICAL}#service`,
            name: "AC Gas Charging / Refrigerant Refill",
            url: CANONICAL,
            description:
              "Refrigerant gas charging for Split, Window, Portable, Cassette, Tower and Ducted ACs. Includes leak check, vacuum, charge by weight/pressure and performance test.",
            serviceType: "Air Conditioner Gas Charging (HVAC)",
            areaServed: [
              { "@type": "City", name: "Mumbai" },
              { "@type": "City", name: "Navi Mumbai" },
            ],
            provider: {
              "@id": "https://www.compressindia.co.in/#organization",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "AC Gas Charging Rates",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Split AC – Gas Charging",
                  category: "HVACService",
                  priceCurrency: "INR",
                  price: "1850",
                  availability: "https://schema.org/InStock",
                  eligibleRegion: [
                    { "@type": "City", name: "Mumbai" },
                    { "@type": "City", name: "Navi Mumbai" },
                  ],
                },
                {
                  "@type": "Offer",
                  name: "Window AC – Gas Charging",
                  category: "HVACService",
                  priceCurrency: "INR",
                  price: "1850",
                  availability: "https://schema.org/InStock",
                  eligibleRegion: [
                    { "@type": "City", name: "Mumbai" },
                    { "@type": "City", name: "Navi Mumbai" },
                  ],
                },
                {
                  "@type": "Offer",
                  name: "Portable AC – Gas Charging",
                  category: "HVACService",
                  priceCurrency: "INR",
                  price: "1850",
                  availability: "https://schema.org/InStock",
                  eligibleRegion: [
                    { "@type": "City", name: "Mumbai" },
                    { "@type": "City", name: "Navi Mumbai" },
                  ],
                },
                {
                  "@type": "Offer",
                  name: "Cassette AC – Gas Charging",
                  category: "HVACService",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "2050",
                    priceCurrency: "INR",
                    unitText: "per TR",
                  },
                  availability: "https://schema.org/InStock",
                  eligibleRegion: [
                    { "@type": "City", name: "Mumbai" },
                    { "@type": "City", name: "Navi Mumbai" },
                  ],
                },
                {
                  "@type": "Offer",
                  name: "Tower AC – Gas Charging",
                  category: "HVACService",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "1800",
                    priceCurrency: "INR",
                    unitText: "per TR",
                  },
                  availability: "https://schema.org/InStock",
                  eligibleRegion: [
                    { "@type": "City", name: "Mumbai" },
                    { "@type": "City", name: "Navi Mumbai" },
                  ],
                },
                {
                  "@type": "Offer",
                  name: "Ducted AC – Gas Charging",
                  category: "HVACService",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "1800",
                    priceCurrency: "INR",
                    unitText: "per TR",
                  },
                  availability: "https://schema.org/InStock",
                  eligibleRegion: [
                    { "@type": "City", name: "Mumbai" },
                    { "@type": "City", name: "Navi Mumbai" },
                  ],
                },
              ],
            },
            potentialAction: {
              "@type": "ContactAction",
              target: "https://wa.me/918655011465",
            },
          }),
        }}
      />

      <HeaderOne />
      <Breadcrumb
        heading="GAS Charging"
        currentPage="GAS Charging"
        backgroundImage="/assets/images/backgrounds/ac-gas-charge.webp"
      />

      <section className="py-16 services-one pd-120-0-90 bg-white">
        <div className="container">
          <div className="row">
            <div className="innerpage-whiteboxs main-timeline">

              {/* Hero Section */}
              <div className="flex flex-col items-center justify-center h-screen text-center bg-white">
                <h1 className="text-3xl md:text-5xl font-bold pb-6 mb-4 mt-3">
                  Affordable AC Gas Charging Services in Mumbai
                </h1>
                <p className="mb-6 text-gray-700 max-w-2xl ">
                  At Compress India, we provide affordable AC gas charging services in Mumbai to restore your cooling system's performance and efficiency. Whether it's a Split, Window, or Portable AC, our certified technicians ensure accurate refrigerant refilling to keep your space cool and comfortable.
                </p>
              </div>

              <div className="container mx-auto px-4 text-center" style={{ marginBottom: '15px' }}>
                <h4 className="mb-6 mt-4 text-xs font-semibold text-gray-700">
                  We Service:
                </h4>
                <ol className="list-disc pl-6 space-y-2 text-gray-700" style={{ marginBottom: '20px' }}>
                  <li className="text-green-600">
                    <span className="text-gray-700">- Split AC gas charging : ₹1,850 per unit</span>
                  </li>
                  <li className="text-green-600">
                    <span className="text-gray-700">- Window AC gas charging : ₹1,850 per unit</span>
                  </li>
                  <li className="text-green-600">
                    <span className="text-gray-700">- Portable AC gas charging : ₹1,850 per unit</span>
                  </li>
                </ol>
              </div>

              {/* More Info 1 */}

              <div className="container mx-auto px-4" style={{ marginBottom: '70px' }}>
                {/* More Info 1 */}

                <div className="offers">

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Why Choose Our AC Gas Charging<br/> Service</strong></h3>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800"><strong>Restore Cooling Efficiency</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '20px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">Low refrigerant levels reduce cooling capacity and increase<br/> power consumption. Our AC gas refill in Mumbai restores<br/> your AC to peak performance.</span></li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800"><strong>Trained and Experienced Technicians</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '20px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">We follow precise gas charging methods, ensuring your AC<br/> repair and service is done to manufacturer standards.</span></li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800"><strong>Transparent Pricing</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '20px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">Our rates are fixed and transparent, so you know exactly<br/> what you'll pay before we start.</span></li>
                    </ol>
                  </div>

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Our AC Gas Charging<br/> Process</strong></h3>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800"><strong>Step 1 - Leak Detection and Inspection</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">Before charging, we inspect your AC for refrigerant leaks to avoid future cooling issues.</span></li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2 mt-2 text-gray-800"><strong>Step 2 - Accurate Refrigerant Filling</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">We use the correct refrigerant type and quantity based on your AC model specifications.</span></li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2 mt-2 text-gray-800"><strong>Step 3 - Performance Testing</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '30px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">Post-refill, we test the system for cooling efficiency and ensure optimal operation.</span></li>
                    </ol>
                  </div>

                </div>

                {/* More Info 2 */}

                <div className="offers">

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Benefits of Timely AC Gas<br/> Charging</strong></h3>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">Restores quick and efficient cooling</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Reduces energy consumption</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Prevents compressor damage</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Extends AC lifespan</span></li>
                    </ol>
                  </div>                  

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Additional AC Services You Might<br/> Need</strong></h3>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">AC Repair & Service - Complete AC maintenance solutions</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">AC Installation - Professional setup for all AC types</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Chemical Jet Cleaning - Deep cleaning for better airflow</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">AC Pressure Testing - Detect leaks before gas charging</span></li>
                    </ol>
                  </div>

                </div>

                <div className="offers">                

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Service Coverage</strong></h3>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">We offer AC gas charging services across Mumbai<br/> & Navi Mumbai, serving residential homes, offices,<br/> commercial facilities, and industrial clients.</span></li>
                    </ol>
                  </div>

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Book Your AC Gas Charging in Mumbai Today</strong></h3>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">Don't let low refrigerant levels compromise your comfort. Call<br/> +91 86550 11465 or email sales@compressindia.in to schedule<br/> your AC gas charging in Mumbai with Compress India.</span></li>
                    </ol>
                  </div>

                </div>

              </div>

              <div
                className="text-center mb-12"
                style={{ paddingBottom: "60px" }}
              >
                <h5 className="text text-center pb-4">
                  Effective rates for our valuable customers
                </h5>
                <h2 className="text-3xl font-bold">GAS CHARGING SERVICES</h2>
                <p className="text-gray-600 mt-2">
                  Gas Charging ! Process of filling the gas in the Air
                  conditioner
                </p>
              </div>
              <div>
                <div className="max-w-6xl mx-auto px-4 space-y-12">
                  {rows.map((row, rowIndex) => (
                    <div key={rowIndex}>
                      <div className="servicese">
                        {row.map((service, idx) => (
                          <div
                            key={idx}
                            className="text-center w-full md:w-1/3"
                          >
                            <Image
                              src={service.image}
                              alt={service.title}
                              width={300}
                              height={200}
                              className="mx-auto object-contain h-48"
                            />
                            <h5 className="mt-4 font-semibold text-lg">
                              Price : {service.price}
                              {service.suffix || "/-"}
                            </h5>
                            <p className="text-sm uppercase mt-1 text-gray-700">
                              {service.title}
                            </p>
                          </div>
                        ))}
                      </div>
                      {rowIndex < rows.length - 1 && (
                        <hr className="border-t border-black mt-10 mb-2 w-full" />
                      )}
                    </div>
                  ))}
                </div>
                <div
                  className="mb-12 text-center italic"
                  style={{ paddingTop: "60px", fontSize: "small" }}
                >
                  <h6>
                    DISCAILMER : This is only Gas Charging Service Charges , If
                    breakdown / repair required rates may vary as per standard
                    charges in the market
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="grid grid-rows-2 gap-6 py-10"
          style={{
            textAlign: "center",
            paddingBottom: "40px",
          }}
        >
          <a
            href="https://wa.me/918655011465"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="button-mobile button-mobile w-full bg-[#2F3338] text-white text-center py-4 rounded-full text-lg font-normal hover:bg-[#3c4045] transition"
              style={{
                width: "565px",
                backgroundColor: "#32373c",
                borderRadius: "5px",
              }}
            >
              <FaWhatsapp size={24} color="#25D366" /> Book Now on WhatsApp
            </button>
          </a>
        </div>
        <div
          className="grid grid-rows-2 gap-6 py-10"
          style={{
            textAlign: "center",
            paddingBottom: "40px",
          }}
        >
          <Link href="/pcb-board-repair">
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
        <FaqTen />
      </section>
      {/* <BrandOne /> */}

      <FooterOne />
    </>
  );
}

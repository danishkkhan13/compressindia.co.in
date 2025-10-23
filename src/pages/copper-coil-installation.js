import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import FaqFourteen from '../components/faq14/FaqFourteen';
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";


export default function coppercoilinstallationPageOne() {
  const services = [
    {
      title: "Split Air Conditioners",
      price: 3500,
      image: "/assets/images/services/ac.webp",
    },
    {
      title: "Window Air Conditioners",
      price: 3500,
      image: "/assets/images/services/window-AC.webp",
    },
    {
      title: "Portable Air Conditioners",
      price: 3500,
      image: "/assets/images/services/Portable-AC.webp",
    },
    {
      title: "Cassette Air Conditioners",
      price: 4850,
      image: "/assets/images/services/cassette-AC.webp",
      suffix: "/-TR",
    },
    {
      title: "Tower Air Conditioners",
      price: 6050,
      image: "/assets/images/services/tower-AC.webp",
      suffix: "/-TR",
    },
    {
      title: "Ducted Air Conditioners",
      price: 7500,
      image: "/assets/images/services/ducted-ac.webp",
      suffix: "/-TR",
    },
  ];
  const CANONICAL = "https://www.compressindia.co.in/copper-coil-installation";
  const TITLE =
    "Copper Coil Installation in Mumbai | Evaporator & Condenser Coil Replacement – Compress India";
  const DESCRIPTION =
    "Professional copper coil installation & replacement in Mumbai & Navi Mumbai. Split/Window/Portable ₹3500; Cassette ₹4850/TR; Tower ₹6050/TR; Ducted ₹7500/TR. Clean brazing, nitrogen purge, vacuum & testing.";

  // Dynamically calculate rows
  const rows = [];
  for (let i = 0; i < services.length; i += 3) {
    rows.push(services.slice(i, i + 3));
  }
  return (
    <>
      {/* SEO meta */}
      <SEO pageTitle={TITLE} description={DESCRIPTION} canonical={CANONICAL} />

      {/* BreadcrumbList */}
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
                name: "Copper Coil Installation",
                item: CANONICAL,
              },
            ],
          }),
        }}
      />

      {/* WebPage */}
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

      {/* Service + OfferCatalog */}
      <Script
        id="ld-service-offercatalog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${CANONICAL}#service`,
            name: "AC Copper Coil Installation & Replacement",
            url: CANONICAL,
            description:
              "Supply and installation/replacement of evaporator & condenser copper coils for Split, Window, Portable, Cassette, Tower and Ducted ACs. Includes brazing with nitrogen purging, vacuum, leak check and performance testing.",
            serviceType: "HVAC Coil Replacement (Copper)",
            areaServed: [
              { "@type": "City", name: "Mumbai" },
              { "@type": "City", name: "Navi Mumbai" },
            ],
            provider: {
              "@id": "https://www.compressindia.co.in/#organization",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Copper Coil Installation Rates",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Split/Window/Portable AC – Copper Coil Installation",
                  category: "HVACService",
                  priceCurrency: "INR",
                  price: "3500",
                  availability: "https://schema.org/InStock",
                  eligibleRegion: [
                    { "@type": "City", name: "Mumbai" },
                    { "@type": "City", name: "Navi Mumbai" },
                  ],
                },
                {
                  "@type": "Offer",
                  name: "Cassette AC – Copper Coil Installation",
                  category: "HVACService",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "4850",
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
                  name: "Tower AC – Copper Coil Installation",
                  category: "HVACService",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "6050",
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
                  name: "Ducted AC – Copper Coil Installation",
                  category: "HVACService",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "7500",
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
        heading="Copper Coil Installation"
        currentPage="Copper Coil Installation"
        backgroundImage="/assets/images/backgrounds/copper-coil.webp"
      />
      <section className="py-16 services-one pd-120-0-90 bg-white">
        <div className="container">
          <div className="row">
            <div className="innerpage-whiteboxs main-timeline">

              {/* Hero Section */}
              <div className="flex flex-col items-center justify-center h-screen text-center bg-white">
                <h1 className="text-3xl md:text-5xl font-bold pb-6 mb-4 mt-3">
                  Copper Coil Installation Services in Mumbai
                </h1>
                <p className="mb-6 text-gray-700 max-w-2xl ">
                  At Compress India, we provide professional copper coil installation services in Mumbai for all types of air conditioners, ensuring maximum cooling efficiency and durability. Our skilled technicians use high-quality copper coils that improve heat exchange performance, enhance energy efficiency, and extend your AC's lifespan.
                </p>
              </div>

              <div className="container mx-auto px-4 text-center" style={{ marginBottom: '15px' }}>
                <h4 className="mb-6 mt-4 text-xs font-semibold text-gray-700">
                  We Service:
                </h4>
                <ol className="list-disc pl-6 space-y-2 text-gray-700" style={{ marginBottom: '20px' }}>
                  <li className="text-green-600">
                    <span className="text-gray-700">- Split/Window/Portable AC Copper Coil Installation : ₹3,500 per unit</span>
                  </li>
                  <li className="text-green-600">
                    <span className="text-gray-700">- Cassette AC Copper Coil Installation : ₹4,850 per TR</span>
                  </li>
                  <li className="text-green-600">
                    <span className="text-gray-700">- Tower AC Copper Coil Installation : ₹6,050 per TR</span>
                  </li>
                  <li className="text-green-600">
                    <span className="text-gray-700">- Ducted AC Copper Coil Installation : ₹7,500 per TR</span>
                  </li>
                </ol>
              </div>

              {/* More Info 1 */}

              <div className="container mx-auto px-4" style={{ marginBottom: '70px' }}>
                {/* More Info 1 */}

                <div className="offers">

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Why Choose Our Copper Coil Installation Services</strong></h3>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800"><strong>Skilled HVAC Technicians</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '20px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">Our trained team specializes in AC installation and repair for<br/> residential, commercial, and industrial clients.</span></li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800"><strong>Premium Quality Copper Coils</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '20px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">We use high-grade copper coils that offer better thermal<br/> conductivity, resistance to corrosion, and long-lasting<br/> performance.</span></li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800"><strong>Complete AC Service Solutions</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '20px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">In addition to copper coil installation, we offer compressor<br/> installation, fan motor installation, and AC gas charging.</span></li>
                    </ol>
                  </div>

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Our Copper Coil Installation<br/> Process</strong></h3>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800"><strong>Step 1 - AC Inspection & Measurement</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">We assess your air conditioner's design and capacity to ensure the<br/> right copper coil size and fit.</span></li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2 mt-2 text-gray-800"><strong>Step 2 - Safe Coil Removal</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">We carefully remove the old or damaged coil without affecting other<br/> AC components.</span></li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2 mt-2 text-gray-800"><strong>Step 3 - New Coil Installation & Testing</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '30px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">We install the new copper coil, seal connections, and perform a full cooling efficiency test.</span></li>
                    </ol>
                  </div>

                </div>

                {/* More Info 2 */}

                <div className="offers">

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Benefits of Professional Copper Coil Installation</strong></h3>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">Improves cooling efficiency</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Reduces energy consumption</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Extends AC lifespan</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Prevents corrosion and leakage</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Ensures consistent performance</span></li>
                    </ol>
                  </div>                  

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Related AC Services You May<br/> Need</strong></h3>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">AC Pressure Testing - Detect refrigerant leaks early</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Chemical Jet Cleaning - Remove dirt for better airflow</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">AC Gas Charging - Maintain optimal refrigerant levels</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Annual Maintenance Contracts - Keep your AC in top shape year-round</span></li>
                    </ol>
                  </div>

                </div>

                <div className="offers">                

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Service Areas</strong></h3>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">We provide copper coil installation services across Mumbai<br/> & Navi Mumbai, serving homes, offices, retail stores, and<br/> industrial premises.</span></li>
                    </ol>
                  </div>

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Book Your Copper Coil Installation Today</strong></h3>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">Upgrade your AC's performance with expert copper coil installation in Mumbai by Compress India. Call +91 86550 11465 or email sales@compressindia.in to book your service today.</span></li>
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
                <h2 className="text-3xl font-bold">
                  COPPER COIL INSTALLATION SERVICES
                </h2>
                <p className="text-gray-600 mt-2">
                  Copper Coil Replacement ! Process of supply & installation of
                  the copper coils in Air conditioner
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
                    DISCAILMER : This is only Copper Coil Replacement Charges ,
                    If breakdown / repair required rates may vary as per
                    standard charges in the market
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
          <Link href="/customized-services">
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
        <FaqFourteen/>
      </section>
      {/* <BrandOne /> */}

      <FooterOne />
    </>
  );
}

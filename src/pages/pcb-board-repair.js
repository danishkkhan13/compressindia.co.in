import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import FaqEleven from '../components/faq11/FaqEleven';
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";


export default function PcbboardservicesPageOne() {
  const services = [
    {
      title: "Split Air Conditioners",
      price: 1750,
      image: "/assets/images/services/ac.webp",
    },
    {
      title: "Window Air Conditioners",
      price: 1750,
      image: "/assets/images/services/window-AC.webp",
    },
    {
      title: "Portable Air Conditioners",
      price: 1750,
      image: "/assets/images/services/Portable-AC.webp",
    },
    {
      title: "Cassette Air Conditioners",
      price: 2500,
      image: "/assets/images/services/cassette-AC.webp",
      suffix: "/-TR",
    },
    {
      title: "Tower Air Conditioners",
      price: 850,
      image: "/assets/images/services/tower-AC.webp",
      suffix: "/-TR",
    },
    {
      title: "Ducted Air Conditioners",
      price: 850,
      image: "/assets/images/services/ducted-ac.webp",
      suffix: "/-TR",
    },
  ];
  const CANONICAL = "https://www.compressindia.co.in/pcb-board-repair";
  const TITLE =
    "AC PCB Board Repair in Mumbai | Split, Window, Cassette – Compress India";
  const DESCRIPTION =
    "Fast AC PCB board repair in Mumbai & Navi Mumbai. Split/Window/Portable ₹1750; Cassette ₹2500/TR; Tower ₹850/TR; Ducted ₹850/TR. Expert diagnosis & component-level fixes.";

  // Dynamically calculate rows
  const rows = [];
  for (let i = 0; i < services.length; i += 3) {
    rows.push(services.slice(i, i + 3));
  }
  return (
    <>
      {/* Meta */}
      <SEO pageTitle={TITLE} description={DESCRIPTION} canonical={CANONICAL} />

      {/* BreadcrumbList (Home → PCB Board Repair) */}
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
                name: "PCB Board Repair",
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

      {/* Service + OfferCatalog (priced PCB repair) */}
      <Script
        id="ld-service-offercatalog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${CANONICAL}#service`,
            name: "AC PCB Board Repair",
            url: CANONICAL,
            description:
              "Component-level PCB board diagnosis and repair for Split, Window, Portable, Cassette, Tower and Ducted air conditioners. Includes testing, replacement of faulty components and final verification.",
            serviceType: "Air Conditioner PCB Repair (HVAC)",
            areaServed: [
              { "@type": "City", name: "Mumbai" },
              { "@type": "City", name: "Navi Mumbai" },
            ],
            provider: {
              "@id": "https://www.compressindia.co.in/#organization",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "PCB Board Repair Rates",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Split AC – PCB Repair",
                  category: "HVACService",
                  priceCurrency: "INR",
                  price: "1750",
                  availability: "https://schema.org/InStock",
                  eligibleRegion: [
                    { "@type": "City", name: "Mumbai" },
                    { "@type": "City", name: "Navi Mumbai" },
                  ],
                },
                {
                  "@type": "Offer",
                  name: "Window AC – PCB Repair",
                  category: "HVACService",
                  priceCurrency: "INR",
                  price: "1750",
                  availability: "https://schema.org/InStock",
                  eligibleRegion: [
                    { "@type": "City", name: "Mumbai" },
                    { "@type": "City", name: "Navi Mumbai" },
                  ],
                },
                {
                  "@type": "Offer",
                  name: "Portable AC – PCB Repair",
                  category: "HVACService",
                  priceCurrency: "INR",
                  price: "1750",
                  availability: "https://schema.org/InStock",
                  eligibleRegion: [
                    { "@type": "City", name: "Mumbai" },
                    { "@type": "City", name: "Navi Mumbai" },
                  ],
                },
                {
                  "@type": "Offer",
                  name: "Cassette AC – PCB Repair",
                  category: "HVACService",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "2500",
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
                  name: "Tower AC – PCB Repair",
                  category: "HVACService",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "850",
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
                  name: "Ducted AC – PCB Repair",
                  category: "HVACService",
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "850",
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
        heading="PCB Board Repair"
        currentPage="PCB Board Repair"
        backgroundImage="/assets/images/backgrounds/pcb-repaire.webp"
      />

      <section className="py-16 services-one pd-120-0-90 bg-white">
        <div className="container">
          <div className="row">
            <div className="innerpage-whiteboxs main-timeline">

              {/* Hero Section */}
              <div className="flex flex-col items-center justify-center h-screen text-center bg-white">
                <h1 className="text-3xl md:text-5xl font-bold pb-6 mb-4 mt-3">
                  Reliable PCB Board Repair Services in Mumbai
                </h1>
                <p className="mb-6 text-gray-700 max-w-2xl ">
                  At Compress India, we offer reliable PCB board repair services in Mumbai for Split, Window, and Portable AC units. Our expert technicians diagnose and repair faulty printed circuit boards to restore your AC's full functionality quickly and cost-effectively.
                </p>
              </div>

              <div className="container mx-auto px-4 text-center" style={{ marginBottom: '15px' }}>
                <h4 className="mb-6 mt-4 text-xs font-semibold text-gray-700">
                  We Service:
                </h4>
                <ol className="list-disc pl-6 space-y-2 text-gray-700" style={{ marginBottom: '20px' }}>
                  <li className="text-green-600">
                    <span className="text-gray-700">- Split AC PCB repair : ₹1,750 per unit</span>
                  </li>
                  <li className="text-green-600">
                    <span className="text-gray-700">- Window AC PCB repair : ₹1,750 per unit</span>
                  </li>
                  <li className="text-green-600">
                    <span className="text-gray-700">- Portable AC PCB repair : ₹1,750 per unit</span>
                  </li>
                </ol>
              </div>

              {/* More Info 1 */}

              <div className="container mx-auto px-4" style={{ marginBottom: '70px' }}>
                {/* More Info 1 */}

                <div className="offers">

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Why Choose Our PCB Board Repair Services</strong></h3>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800"><strong>Accurate Diagnosis and Repair</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '20px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">We perform detailed PCB inspections to detect burnt<br/> components, loose connections, or damaged circuits<br/> before carrying out precise repairs.</span></li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800"><strong>Experienced Technicians</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '20px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">Our certified professionals follow manufacturer-<br/>recommended repair practices, ensuring safe<br/> and effective AC PCB board repairs.</span></li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800"><strong>Affordable and Transparent Pricing</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '20px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">We offer competitive pricing with no hidden costs for<br/> AC repair and maintenance services.</span></li>
                    </ol>
                  </div>

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Our PCB Board Repair<br/> Process</strong></h3>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800"><strong>Step 1 - PCB Inspection</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">We assess the condition of your AC's PCB board, checking for<br/> burnt tracks, faulty relays, and short circuits.</span></li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2 mt-2 text-gray-800"><strong>Step 2 - Component Replacement or Repair</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">We replace damaged resistors, capacitors, ICs, and relays using<br/> high-quality components.</span></li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2 mt-2 text-gray-800"><strong>Step 3 - Functional Testing</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '30px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">After repairs, we test your AC to ensure the PCB board works seamlessly with the cooling system.</span></li>
                    </ol>
                  </div>

                </div>

                {/* More Info 2 */}

                <div className="offers">

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Benefits of Our PCB Repair<br/> Service</strong></h3>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">Saves cost compared to full PCB replacement</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Extends the lifespan of your AC unit</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Restores optimal cooling performance</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Prevents recurring electrical faults</span></li>
                    </ol>
                  </div>                  

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Additional AC Services You Might<br/> Need</strong></h3>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">AC Repair & Service - General maintenance for all AC types</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">AC Gas Charging - Restore cooling power with a refrigerant refill</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">AC Installation - Professional setup for residential and commercial spaces</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">AC Pressure Testing - Detect refrigerant leaks before major repairs</span></li>
                    </ol>
                  </div>

                </div>

                <div className="offers">                

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Service Coverage</strong></h3>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">We provide AC PCB board repair services across Mumbai<br/> & Navi Mumbai, serving residential, commercial, and<br/> industrial clients.</span></li>
                    </ol>
                  </div>

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Book Your PCB Board Repair in Mumbai Today</strong></h3>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">If your AC isn't functioning due to a faulty PCB board, call +91 86550 11465 or email sales@compressindia.in to schedule your PCB board repair service in Mumbai with Compress India.</span></li>
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
                  PCB BOARD REPAIR SERVICES
                </h2>
                <p className="text-gray-600 mt-2">
                  Circuit Board Repair ! Process of repairing short circuit /
                  damaged parts in circuits of the Air conditioner
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
                    DISCAILMER : This is only PCB Board Repair Service Charges ,
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
          <Link href="/capacitor-electrical-part">
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
        <FaqEleven />
      </section>
      {/* <BrandOne /> */}

      <FooterOne />
    </>
  );
}

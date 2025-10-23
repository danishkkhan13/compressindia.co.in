import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import FaqTwelve from '../components/faq12/FaqTwelve';
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
import Image from "next/image";
import Script from "next/script";


export default function compressorinstallationPageOne() {
  const services = [
    {
      title: 'Split Air Conditioners',
      price: 8500,
      image: '/assets/images/services/ac.webp',
    },
    {
      title: 'Window Air Conditioners',
      price: 8500,
      image: '/assets/images/services/window-AC.webp',
    },
    {
      title: 'Portable Air Conditioners',
      price: 8500,
      image: '/assets/images/services/Portable-AC.webp',
    },
    {
      title: 'Cassette Air Conditioners',
      price: 9500,
      image: '/assets/images/services/cassette-AC.webp',
      suffix: '/-TR',
    },
    {
      title: 'Tower Air Conditioners',
      price: 8500,
      image: '/assets/images/services/tower-AC.webp',
      suffix: '/-TR',
    },
    {
      title: 'Ducted Air Conditioners',
      price: 8500,
      image: '/assets/images/services/ducted-ac.webp',
      suffix: '/-TR',
    },
  ];
  const CANONICAL = "https://www.compressindia.co.in/compressor-installation";
  const TITLE = "Compressor Installation in Mumbai | Split, Window, Cassette – Compress India";
  const DESCRIPTION =
    "Expert AC compressor installation & replacement in Mumbai & Navi Mumbai. Split/Window/Portable ₹8500; Cassette ₹9500/TR; Tower ₹8500/TR; Ducted ₹8500/TR. Clean brazing, vacuum & testing.";


  // Dynamically calculate rows
  const rows = [];
  for (let i = 0; i < services.length; i += 3) {
    rows.push(services.slice(i, i + 3));
  }
  return (
    <>
       {/* Meta */}
       <SEO pageTitle={TITLE} description={DESCRIPTION} canonical={CANONICAL} />

{/* BreadcrumbList (Home → Compressor Installation) */}
<Script
  id="ld-breadcrumbs"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.compressindia.co.in/" },
        { "@type": "ListItem", position: 2, name: "Compressor Installation", item: CANONICAL },
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

{/* Service + OfferCatalog */}
<Script
  id="ld-service-offercatalog"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${CANONICAL}#service`,
      name: "AC Compressor Installation & Replacement",
      url: CANONICAL,
      description:
        "Removal of faulty compressor and installation of replacement unit with proper brazing, nitrogen purging, vacuum, refrigerant charge and performance testing for Split, Window, Portable, Cassette, Tower and Ducted ACs.",
      serviceType: "Air Conditioner Compressor Installation (HVAC)",
      areaServed: [{ "@type": "City", name: "Mumbai" }, { "@type": "City", name: "Navi Mumbai" }],
      provider: { "@id": "https://www.compressindia.co.in/#organization" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Compressor Installation Rates",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Split AC – Compressor Installation",
            category: "HVACService",
            priceCurrency: "INR",
            price: "8500",
            availability: "https://schema.org/InStock",
            eligibleRegion: [{ "@type": "City", name: "Mumbai" }, { "@type": "City", name: "Navi Mumbai" }],
          },
          {
            "@type": "Offer",
            name: "Window AC – Compressor Installation",
            category: "HVACService",
            priceCurrency: "INR",
            price: "8500",
            availability: "https://schema.org/InStock",
            eligibleRegion: [{ "@type": "City", name: "Mumbai" }, { "@type": "City", name: "Navi Mumbai" }],
          },
          {
            "@type": "Offer",
            name: "Portable AC – Compressor Installation",
            category: "HVACService",
            priceCurrency: "INR",
            price: "8500",
            availability: "https://schema.org/InStock",
            eligibleRegion: [{ "@type": "City", name: "Mumbai" }, { "@type": "City", name: "Navi Mumbai" }],
          },
          {
            "@type": "Offer",
            name: "Cassette AC – Compressor Installation",
            category: "HVACService",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "9500",
              priceCurrency: "INR",
              unitText: "per TR",
            },
            availability: "https://schema.org/InStock",
            eligibleRegion: [{ "@type": "City", name: "Mumbai" }, { "@type": "City", name: "Navi Mumbai" }],
          },
          {
            "@type": "Offer",
            name: "Tower AC – Compressor Installation",
            category: "HVACService",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "8500",
              priceCurrency: "INR",
              unitText: "per TR",
            },
            availability: "https://schema.org/InStock",
            eligibleRegion: [{ "@type": "City", name: "Mumbai" }, { "@type": "City", name: "Navi Mumbai" }],
          },
          {
            "@type": "Offer",
            name: "Ducted AC – Compressor Installation",
            category: "HVACService",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "8500",
              priceCurrency: "INR",
              unitText: "per TR",
            },
            availability: "https://schema.org/InStock",
            eligibleRegion: [{ "@type": "City", name: "Mumbai" }, { "@type": "City", name: "Navi Mumbai" }],
          },
        ],
      },
      potentialAction: { "@type": "ContactAction", target: "https://wa.me/918655011465" },
    }),
  }}
/>

<HeaderOne />
<Breadcrumb
  heading="Compressor Installation"
  currentPage="Compressor Installation"
  backgroundImage="/assets/images/backgrounds/compressor.webp"
/>

      <section className="py-16 services-one pd-120-0-90 bg-white">
        <div className="container">
          <div className="row">
            <div className="innerpage-whiteboxs main-timeline">

              {/* Hero Section */}
              <div className="flex flex-col items-center justify-center h-screen text-center bg-white">
                <h1 className="text-3xl md:text-5xl font-bold pb-6 mb-4 mt-3">
                  Compressor Installation Services in Mumbai
                </h1>
                <p className="mb-6 text-gray-700 max-w-2xl ">
                  At Compress India, we provide professional compressor installation services in Mumbai for all AC types, ensuring efficient cooling and long-lasting performance. Whether it’s a residential, commercial, or industrial setup, our certified AC technicians install compressors with precision and follow manufacturer guidelines for reliability and safety.
                </p>
              </div>

              <div className="container mx-auto px-4 text-center" style={{ marginBottom: '15px' }}>
                <h4 className="mb-6 mt-4 text-xs font-semibold text-gray-700">
                  We Service:
                </h4>
                <ol className="list-disc pl-6 space-y-2 text-gray-700" style={{ marginBottom: '20px' }}>
                  <li className="text-green-600">
                    <span className="text-gray-700">- Split AC compressor installation : ₹8,500 per unit</span>
                  </li>
                  <li className="text-green-600">
                    <span className="text-gray-700">- Cassette AC compressor installation : ₹9,500 per TR</span>
                  </li>
                </ol>
              </div>

              {/* More Info 1 */}

              <div className="container mx-auto px-4" style={{ marginBottom: '70px' }}>
                {/* More Info 1 */}

                <div className="offers">

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Why Choose Our Compressor<br/> Installation Services</strong></h3>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800"><strong>Skilled and Certified Technicians</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '20px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">Our team has years of experience handling AC compressor installations, ensuring correct fitting and smooth operation.</span></li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800"><strong>Transparent Pricing</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '20px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">We offer competitive rates with no hidden fees, making us<br/> a preferred choice for AC repair and servicing in Mumbai.</span></li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800"><strong>All AC Types Covered</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '20px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">From Split and Cassette ACs to ducted systems and<br/> commercial HVAC units, we install compressors for<br/> every model and capacity.</span></li>
                    </ol>
                  </div>

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Our Compressor Installation<br/> Process</strong></h3>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800"><strong>Step 1 - Inspection & Compatibility Check</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">We assess your AC unit to ensure the new compressor is compatible with your system specifications.</span></li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2 mt-2 text-gray-800"><strong>Step 2 - Safe Removal of Old Compressor</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">If replacing, we safely remove the old compressor and recover refrigerant as per environmental guidelines, often paired with AC pressure testing.</span></li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2 mt-2 text-gray-800"><strong>Step 3 - Precise Installation & Testing</strong></h4>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '30px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">We install the new compressor, connect refrigerant lines, perform AC gas charging if necessary, and test for optimal cooling.</span></li>
                    </ol>
                  </div>

                </div>

                {/* More Info 2 */}

                <div className="offers">

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Benefits of Choosing Professional Compressor Installation</strong></h3>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">Ensures maximum cooling efficiency</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Reduces the risk of breakdowns</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Extends the lifespan of your AC unit</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Maintains manufacturer warranty</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Prevents costly future repairs</span></li>
                    </ol>
                  </div>                  

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Additional AC & HVAC Services You May Need</strong></h3>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">AC Gas Charging - Restore refrigerant levels for better cooling</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">AC Pressure Testing - Detect leaks before compressor installation</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Chemical Jet Cleaning - Keep your AC coils clean for efficiency</span></li>
                      <li className="text-green-600"> <span className="text-gray-700">Annual Maintenance Contracts - Hassle-free upkeep for your cooling system</span></li>
                    </ol>
                  </div>

                </div>

                <div className="offers">                

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Service Coverage</strong></h3>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">We offer compressor installation services across Mumbai &<br/> Navi Mumbai, catering to residential AC customers, corporate<br/> offices, retail stores, and industrial facilities.</span></li>
                    </ol>
                  </div>

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800"><strong>Book Your Compressor Installation in Mumbai Today</strong></h3>
                    <ol className="text-gray-700 space-y-2" style={{ listStyleType: 'disc', listStylePosition: 'outside', marginBottom: '15px' }}>
                      <li className="text-green-600"> <span className="text-gray-700">Get your AC back to peak performance with expert compressor installation in Mumbai by Compress India. Call +91 86550 11465 or email sales@compressindia.in to schedule your installation today.</span></li>
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
                  COMPRESSOR INSTALLATION SERVICES
                </h2>
                <p className="text-gray-600 mt-2">
                  Compressor Replacement ! Process of supply & installation of
                  the (USED) compressor in Air conditioner
                </p>
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
                <div
                  className="mb-12 text-center italic"
                  style={{ paddingTop: "60px", fontSize: "small" }}
                >
                  <h6>
                    DISCAILMER : This is only Compressor Replacement Charges ,
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
          <Link href="/fan-motor-installation">
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
        <FaqTwelve/>
      </section>
      {/* <BrandOne /> */}

      <FooterOne />
    </>
  );
}

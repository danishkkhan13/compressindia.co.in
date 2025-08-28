import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import { FaWhatsapp } from "react-icons/fa";
import Script from "next/script";


export default function customizedservicesPageOne() {
  const CANONICAL = "https://www.compressindia.co.in/customized-services";
  const TITLE =
    "Customized HVAC Services in Mumbai | Bespoke AC Solutions – Compress India";
  const DESCRIPTION =
    "Tailor-made HVAC services in Mumbai & Navi Mumbai: inspection visits, spray painting, flap/swing motor fixes, copper tube insulation, power/communication rewiring and more. Book a custom solution today.";

  return (
    <>
      <SEO pageTitle={TITLE} description={DESCRIPTION} canonical={CANONICAL} />

      {/* BreadcrumbList (Home → Customized Services) */}
      <Script
        id="ld-breadcrumbs-customized"
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
                name: "Customized Services",
                item: CANONICAL,
              },
            ],
          }),
        }}
      />

      {/* WebPage schema */}
      <Script
        id="ld-webpage-customized"
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

      {/* Service + OfferCatalog (prices reflect “Start @ …”) */}
      <Script
        id="ld-service-customized"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${CANONICAL}#service`,
            name: "Customized HVAC & Refrigeration Services",
            url: CANONICAL,
            description:
              "Bespoke HVAC services including on-site inspection, spray painting for rust prevention, flap/swing motor replacement, capillary/expansion valve work, copper tube insulation replacement, and power/communication rewiring.",
            serviceType: "Customized HVAC Services",
            areaServed: [
              { "@type": "City", name: "Mumbai" },
              { "@type": "City", name: "Navi Mumbai" },
            ],
            provider: {
              "@id": "https://www.compressindia.co.in/#organization",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Customized Service Rates",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Visiting Charges – AC Inspection",
                  category: "HVACService",
                  priceCurrency: "INR",
                  price: "500",
                  availability: "https://schema.org/InStock",
                  eligibleRegion: [
                    { "@type": "City", name: "Mumbai" },
                    { "@type": "City", name: "Navi Mumbai" },
                  ],
                },
                {
                  "@type": "Offer",
                  name: "Spray Painting – Rust Prevention",
                  category: "HVACService",
                  priceCurrency: "INR",
                  price: "2500",
                  availability: "https://schema.org/InStock",
                  eligibleRegion: [
                    { "@type": "City", name: "Mumbai" },
                    { "@type": "City", name: "Navi Mumbai" },
                  ],
                },
                {
                  "@type": "Offer",
                  name: "Flap / Swing Motor Replacement",
                  category: "HVACService",
                  priceCurrency: "INR",
                  price: "1800",
                  availability: "https://schema.org/InStock",
                  eligibleRegion: [
                    { "@type": "City", name: "Mumbai" },
                    { "@type": "City", name: "Navi Mumbai" },
                  ],
                },
                {
                  "@type": "Offer",
                  name: "Copper Tube Insulation Replacement",
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
                  name: "Power / Communication Replacement",
                  category: "HVACService",
                  priceCurrency: "INR",
                  price: "2250",
                  availability: "https://schema.org/InStock",
                  eligibleRegion: [
                    { "@type": "City", name: "Mumbai" },
                    { "@type": "City", name: "Navi Mumbai" },
                  ],
                },
                {
                  "@type": "Offer",
                  name: "Capillary Tube / Expansion Valve Replacement",
                  category: "HVACService",
                  availability: "https://schema.org/InStock",
                  eligibleRegion: [
                    { "@type": "City", name: "Mumbai" },
                    { "@type": "City", name: "Navi Mumbai" },
                  ],
                  // Price varies by model; omitted intentionally
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
        heading="Customized Services"
        currentPage="Customized Services"
        backgroundImage="/assets/images/backgrounds/custome-service.webp"
      />

      <section className="py-16 services-one pd-120-0-90 bg-white">
        <div className="container">
          <div className="row">
            <div className="innerpage-whiteboxs main-timeline">
              <div
                className="text-center mb-12"
                style={{ paddingBottom: "60px" }}
              >
                <h5 className="text text-center pb-4">
                  Effective rates for our valuable customers
                </h5>
                <h2 className="text-3xl font-bold">CUSTOMIZED SERVICES</h2>
              </div>
              <div className="text-center">
                {/* Visiting Charges */}
                <div
                  className="grid md:grid-cols-2 gap-8"
                  style={{
                    textAlign: "center",
                    paddingBottom: "40px",
                  }}
                >
                  <div>
                    <h2 className="text-2xl font-bold text-blue-600">
                      Start @ ₹500/-
                    </h2>
                    <p className="text-lg font-medium">
                      <strong>VISITING CHARGES:</strong> For inspection of an
                      Air Conditioner
                    </p>
                  </div>
                </div>

                {/* Spray Painting */}
                <div
                  className="grid md:grid-cols-2 gap-8"
                  style={{
                    textAlign: "center",
                    paddingBottom: "40px",
                  }}
                >
                  <div>
                    <h2 className="text-2xl font-bold text-blue-600">
                      Start @ ₹2,500/-
                    </h2>
                    <p className="text-lg font-medium">
                      <strong>SPRAY PAINTING:</strong> For rusting prevention.
                    </p>
                  </div>
                </div>
                {/* Flap / Swing Motor Replacement */}
                <div
                  className="grid md:grid-cols-2 gap-8"
                  style={{
                    textAlign: "center",
                    paddingBottom: "40px",
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-bold text-blue-600">
                        Start @ ₹1,800/-
                      </h2>
                      <p className="text-lg font-medium">
                        <strong>FLAP / SWING MOTOR REPLACEMENT</strong>
                      </p>
                      <hr className="my-4 border-gray-300" />
                    </div>
                  </div>
                </div>
                {/* Book Appointment */}
                <div>
                  <h1 className="text-3xl font-bold text-green-700">
                    Book an appointment
                  </h1>
                </div>

                {/* Capillary Tube / Expansion Valve Replacement */}
                <div
                  className="grid md:grid-cols-2 gap-8"
                  style={{
                    textAlign: "center",
                    paddingBottom: "40px",
                  }}
                >
                  <div>
                    <p className="text-lg font-medium">
                      <strong>
                        CAPILLARY TUBE / EXPANSION VALVE REPLACEMENT
                      </strong>
                    </p>
                  </div>
                </div>
                {/* Copper Tube Insulation Replacement */}
                <div
                  className="grid md:grid-cols-2 gap-8"
                  style={{
                    textAlign: "center",
                    paddingBottom: "40px",
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-bold text-blue-600">
                        Start @ ₹1,850/-
                      </h2>
                      <p className="text-lg font-medium">
                        <strong>COPPER TUBE INSULATION REPLACEMENT</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Power / Communication Replacement */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-blue-600">
                      Start @ ₹2,250/-
                    </h2>
                    <p className="text-lg font-medium">
                      <strong>POWER / COMMUNICATION REPLACEMENT</strong>
                    </p>
                  </div>
                </div>
                <div
                  className="mb-12 text-center italic"
                  style={{ paddingTop: "60px", fontSize: "small" }}
                >
                  <h6>
                    DISCAILMER : For any kind of customization works may which
                    are not covered in this website please contact us
                    on…..info@compressindia.com / sales.compressindia@gmail.com
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
          {/* <button
            className="button-mobile w-full bg-[#2F3338] text-white text-center py-4 rounded-full text-lg font-normal hover:bg-[#3c4045] transition"
            style={{
              width: "565px",
              backgroundColor: "#32373c",
              borderRadius: "5px",
            }}
          >
            Our Factory Products
          </button> */}
        </div>
      </section>
      {/* <BrandOne /> */}

      <FooterOne />
    </>
  );
}

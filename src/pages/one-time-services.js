import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Onetimeservice from "../components/service/Onetimeservice";
import FooterOne from "../common/footer/FooterOne";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Script from "next/script";

export default function OnetimeservicePageOne() {
  const CANONICAL = "https://www.compressindia.co.in/one-time-services";
  const TITLE =
    "One-Time AC Repair & Service in Mumbai | Split, Window & Portable – Compress India";
  const DESCRIPTION =
    "Book expert one-time AC repair & service in Mumbai & Navi Mumbai. Split AC ₹850, Window AC ₹750, Portable AC ₹750. Certified technicians, transparent pricing, fast response.";

  return (
    <>
      {/* SEO meta */}
      <SEO pageTitle={TITLE} description={DESCRIPTION} canonical={CANONICAL} />

      {/* BreadcrumbList (Home → One Time Services) */}
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
                name: "One Time Services",
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

      {/* Service + OfferCatalog (priced one-time services) */}
      <Script
        id="ld-service-offercatalog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${CANONICAL}#service`,
            name: "One-Time AC Repair & Maintenance",
            url: CANONICAL,
            description:
              "Single-visit AC repair & maintenance by certified technicians. Includes inspection, cleaning, performance checks and minor fixes for Split, Window and Portable ACs.",
            serviceType: "Air Conditioner Repair & Maintenance (HVAC)",
            areaServed: [
              { "@type": "City", name: "Mumbai" },
              { "@type": "City", name: "Navi Mumbai" },
            ],
            provider: {
              "@id": "https://www.compressindia.co.in/#organization",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "One-Time AC Service Rates",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Split AC – One-Time Service",
                  category: "HVACService",
                  priceCurrency: "INR",
                  price: "850",
                  availability: "https://schema.org/InStock",
                  eligibleRegion: [
                    { "@type": "City", name: "Mumbai" },
                    { "@type": "City", name: "Navi Mumbai" },
                  ],
                },
                {
                  "@type": "Offer",
                  name: "Window AC – One-Time Service",
                  category: "HVACService",
                  priceCurrency: "INR",
                  price: "750",
                  availability: "https://schema.org/InStock",
                  eligibleRegion: [
                    { "@type": "City", name: "Mumbai" },
                    { "@type": "City", name: "Navi Mumbai" },
                  ],
                },
                {
                  "@type": "Offer",
                  name: "Portable AC – One-Time Service",
                  category: "HVACService",
                  priceCurrency: "INR",
                  price: "750",
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
        heading="One Time Service"
        currentPage="One Time Service"
        backgroundImage="/assets/images/backgrounds/one-time-service.jpeg"
      />
      <section className="py-16 services-one pd-120-0-90 bg-white">
        <div className="container">
          <div className="row">
            <div className="innerpage-whiteboxs main-timeline">
              {/* Hero Section */}
              <div className="flex flex-col items-center justify-center h-screen text-center bg-white">
                <h1 className="text-3xl md:text-5xl font-bold pb-6 mb-4 mt-3">
                  Expert AC Repair & Service in Mumbai
                </h1>
                <p className="mb-6 text-gray-700 max-w-2xl ">
                  Buster Deal — Seize the Blockbuster Deal from Compress
                  India—your top choice for AC water-jet maintenance services in
                  Mumbai & Navi Mumbai. Enjoy cleaner, more efficient cooling
                  with our premium annual service contract designed for ease and
                  value.
                </p>
              </div>

              {/* More Info 1 */}

              <div
                className="container mx-auto px-4"
                style={{ marginBottom: "70px" }}
              >
                {/* More Info 1 */}

                <div className="offers">
                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      <strong>
                        Comprehensive One-Time AC Repair & Maintenance
                      </strong>
                    </h3>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800">
                      <strong>Professional AC Inspection</strong>
                    </h4>
                    <ol
                      className="text-gray-700 space-y-2"
                      style={{
                        listStyleType: "disc",
                        listStylePosition: "outside",
                        marginBottom: "20px",
                      }}
                    >
                      <li className="text-green-600">
                        {" "}
                        <span className="text-gray-700">
                          We conduct a complete system check covering filters,
                          <br /> coils, refrigerant levels, and electrical
                          components to
                          <br /> identify performance issues before they
                          escalate.
                        </span>
                      </li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2 mt-2 text-gray-800">
                      <strong>Quick & Affordable AC Servicing</strong>
                    </h4>
                    <ol
                      className="text-gray-700 space-y-2"
                      style={{
                        listStyleType: "disc",
                        listStylePosition: "outside",
                        marginBottom: "30px",
                      }}
                    >
                      <li className="text-green-600">
                        {" "}
                        <span className="text-gray-700">
                          Our one-time AC service ensures your cooling unit is
                          <br /> restored to optimal performance without hidden
                          costs.
                        </span>
                      </li>
                    </ol>
                  </div>

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      <strong>Types of AC Repair & Service We Offer</strong>
                    </h3>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800">
                      <strong>Split AC Repair & Servicing in Mumbai</strong>
                    </h4>
                    <ol
                      className="text-gray-700 space-y-2"
                      style={{
                        listStyleType: "disc",
                        listStylePosition: "outside",
                        marginBottom: "15px",
                      }}
                    >
                      <li className="text-green-600">
                        {" "}
                        <span className="text-gray-700">
                          Specialized cleaning, gas pressure checks, and part
                          replacements for Split ACs to maintain efficient
                          cooling.
                        </span>
                      </li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2 mt-2 text-gray-800">
                      <strong>Window AC Repair & Servicing</strong>
                    </h4>
                    <ol
                      className="text-gray-700 space-y-2"
                      style={{
                        listStyleType: "disc",
                        listStylePosition: "outside",
                        marginBottom: "15px",
                      }}
                    >
                      <li className="text-green-600">
                        {" "}
                        <span className="text-gray-700">
                          Thorough cleaning and maintenance to improve airflow,
                          fix leaks, and extend the life of Window ACs.
                        </span>
                      </li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2 mt-2 text-gray-800">
                      <strong>Portable AC Servicing</strong>
                    </h4>
                    <ol
                      className="text-gray-700 space-y-2"
                      style={{
                        listStyleType: "disc",
                        listStylePosition: "outside",
                        marginBottom: "30px",
                      }}
                    >
                      <li className="text-green-600">
                        {" "}
                        <span className="text-gray-700">
                          Complete filter cleaning, motor checks, and cooling
                          performance restoration for portable units.
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>

                {/* More Info 2 */}

                <div className="offers">
                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      <strong>
                        Benefits of Choosing Compress India
                        <br /> for AC Repair & Service
                      </strong>
                    </h3>
                    <ol
                      className="text-gray-700 space-y-2"
                      style={{
                        listStyleType: "disc",
                        listStylePosition: "outside",
                        marginBottom: "20px",
                      }}
                    >
                      <li className="text-green-600">
                        {" "}
                        <span className="text-gray-700">
                          Certified Technicians with 10+ years of industry
                          experience
                        </span>
                      </li>
                      <li className="text-green-600">
                        {" "}
                        <span className="text-gray-700">
                          Transparent Pricing with no hidden charges
                        </span>
                      </li>
                      <li className="text-green-600">
                        {" "}
                        <span className="text-gray-700">
                          Fast Response for urgent service needs
                        </span>
                      </li>
                      <li className="text-green-600">
                        {" "}
                        <span className="text-gray-700">
                          Improved Cooling Performance with energy-efficient
                          maintenance
                        </span>
                      </li>
                      <li className="text-green-600">
                        {" "}
                        <span className="text-gray-700">
                          Extended AC Life through professional care
                        </span>
                      </li>
                    </ol>
                  </div>

                  <div className="col-xl-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      <strong>Service Coverage Area</strong>
                    </h3>
                    <ol
                      className="text-gray-700 space-y-2"
                      style={{
                        listStyleType: "disc",
                        listStylePosition: "outside",
                        marginBottom: "15px",
                      }}
                    >
                      <li className="text-green-600">
                        {" "}
                        <span className="text-gray-700">
                          We provide AC repair & maintenance services in Mumbai
                          & Navi Mumbai, catering to residential, commercial,
                          and industrial clients.
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Main Offers Info */}
              <div
                className="text-center mb-12"
                style={{ paddingBottom: "60px" }}
              >
                <h5 className="text text-center pb-4">
                  Effective rates for our valuable customers
                </h5>
                <h2 className="text-3xl font-bold">ONE TIME SERVICES</h2>
                <p className="text-gray-600 mt-2">
                  Water Jet Services! Just a part of routine cleaning
                </p>
              </div>

              <div>
                <Onetimeservice />
                <div
                  className="mb-12 text-center italic"
                  style={{ paddingTop: "60px", fontSize: "small" }}
                >
                  <h6>
                    DISCLAIMER : This is only One Time Service Charges , If
                    breakdown / repair required rates may vary as per standard
                    charges in the market
                  </h6>
                </div>

                <hr
                  class="border border-1 border-secondary"
                  style={{ marginTop: "50px", marginBottom: "20px" }}
                ></hr>

                <div className="flex flex-col items-center justify-center h-screen text-center bg-white mb-2 mt-2">
                  <h2 className="text-3xl md:text-5xl font-bold pb-6 mb-3 mt-5">
                    Book Your One-Time AC Service Today!
                  </h2>
                  <p className="mb-6 text-gray-700 max-w-2xl ">
                    Don't let a faulty AC affect your comfort. Contact Compress
                    India now to schedule your one-time AC repair & service in
                    Mumbai.
                    <br /> Call us at +91 86550 11465 or email
                    sales@compressindia.in for bookings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <BrandOne /> */}
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
              className="button-mobile w-full bg-[#2F3338] text-white text-center py-4 rounded-full text-lg font-normal hover:bg-[#3c4045] transition"
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
          <Link href="/chemical-jet-services">
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
      </section>

      <FooterOne />
    </>
  );
}

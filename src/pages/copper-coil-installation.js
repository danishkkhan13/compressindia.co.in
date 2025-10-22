import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
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
      </section>
      {/* <BrandOne /> */}

      <FooterOne />
    </>
  );
}

import Link from "next/link";
import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import AboutOne from "../components/about/AboutOne";
import WhyChooseUs from "../components/whychoose_us/chooseus";
import ContactOne from "../components/contact/ContactOne";
import FooterOne from "../common/footer/FooterOne";
import FaqOne from "../components/faq/FaqOne";
import PricingOne from "../components/pricing/PricingOne";
import Clients from "../components/clients/page";
import WhatWeDo from "../components/whatwedo/page";
import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* JSON-LD: Breadcrumb (Home → Air Compressor Services) */}
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
                name: "Air Compressor Repair & Services",
                item: "https://www.compressindia.co.in/schemea",
              },
            ],
          }),
        }}
      />

      {/* JSON-LD: WebSite */}
      <Script
        id="ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.compressindia.co.in/#website",
            url: "https://www.compressindia.co.in/",
            name: "Compress India",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.compressindia.co.in/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* JSON-LD: LocalBusiness (provider) */}
      <Script
        id="ld-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.compressindia.co.in/#organization",
            name: "Compress India",
            url: "https://www.compressindia.co.in/",
            image: "https://www.compressindia.co.in/logo.png", // ← update if available
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Mumbai Metropolitan Region",
            },
            priceRange: "₹₹",
            // Optional — fill if public:
            // telephone: "+91-XXXXXXXXXX",
            // address: {
            //   "@type": "PostalAddress",
            //   streetAddress: "XYZ Industrial Estate",
            //   addressLocality: "Mumbai",
            //   addressRegion: "MH",
            //   postalCode: "4000XX",
            //   addressCountry: "IN"
            // },
            // sameAs: [
            //   "https://www.facebook.com/yourpage",
            //   "https://www.instagram.com/yourprofile",
            //   "https://www.linkedin.com/company/yourcompany"
            // ]
          }),
        }}
      />

      {/* JSON-LD: Service (Air Compressor Repairs & AMC) */}
      <Script
        id="ld-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.compressindia.co.in/schemea#service",
            name: "Air Compressor Repair & Services in Mumbai",
            url: "https://www.compressindia.co.in/schemea",
            description:
              "Expert air compressor repair, preventive maintenance, AMC/CAMC, installation & commissioning, air dryer repair, and spares support across Mumbai.",
            serviceType:
              "Air compressor repair, maintenance, AMC/CAMC, installation",
            areaServed: { "@type": "City", name: "Mumbai" },
            provider: {
              "@id": "https://www.compressindia.co.in/#organization",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Air Compressor Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Breakdown Repair & Overhaul",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Preventive Maintenance & Health Check",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AMC / CAMC Contracts",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Installation & Commissioning",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Air Dryer & Filter Service",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Genuine Spares & Consumables",
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* META: use your SEO component (corrected title spelling) */}
      <SEO
        pageTitle="Affordable Air Compressor Repair & Services in Mumbai | Compress India"
        description="Reliable air compressor repair & services in Mumbai by Compress India. Get expert maintenance, AMC/CAMC, installation, and repairs for all major industrial compressor models at competitive rates."
        canonical="https://www.compressindia.co.in/schemea"
      />

      <HeaderOne />

      {/* <HeroOne /> */}

      <div className="absolute min-h-screen video-section">
        {/* Video Background */}
        <div className="w-full overflow-hidden flex items-center">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            style={{
              width: "100%",
              height: "100%",
              minHeight: "100vh;",
            }}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/assets/images/ac-gas-charge.webp"
          >
            <source
              src="/assets/images/compressindiahome.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Overlay */}
        <section className="mx-auto max-w-screen-xl px-[20px] font-medium text-sm z-50  justify-between">
          <div className="container">
            <div className="video-heading">
              <div className="herotext">
                <p className="section-title__tagline colorunset">
                  ALL YOUR PROPERTIES REQURIEMENTS
                </p>
                <h1
                  className="section-title__title section-title__titles"
                  style={{ color: "#ffffff" }}
                >
                  We build future , Where <br />
                  Engineering Excellence Meets
                  <br /> Climate Control
                </h1>
                <p className="aboutUs-one__content-text2">
                  ALL YOUR PROPERTIES REQURIEMENTS
                </p>
              </div>
              <div className="btn-box">
                <Link href="/contactUs" className="thm-btn">
                  <span>Request Services</span>
                  <div className="liquid"></div>
                </Link>
              </div>
            </div>
          </div>
          <section
            className="Toastify"
            aria-live="polite"
            aria-atomic="false"
            aria-relevant="additions text"
            aria-label="Notifications Alt+T"
          ></section>
        </section>
      </div>

      <AboutOne />
      <WhyChooseUs />
      <FaqOne />
      <ContactOne />
      <WhatWeDo />
      <PricingOne />
      <Clients />

      {/* <TeamOne />
			<WhyChooseUsOne />
			<TestimonialOne /> */}
      {/* <CtaOne />
			<BlogOne />
			<BrandOne /> */}
      <FooterOne />
    </>
  );
}

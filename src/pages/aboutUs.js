import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ServiceOne from "../components/service/ServiceOne";
import ContactOne from "../components/contact/ContactOne";
import FooterOne from "../common/footer/FooterOne";
import Image from "next/image";
import Script from "next/script";

export default function AboutUsPage() {
  const CANONICAL = "https://www.compressindia.co.in/aboutUs";
  const TITLE =
    "About Compress India | Industrial Air Compressor Repair & HVAC Services in Mumbai";
  const DESCRIPTION =
    "Learn about Compress India—Mumbai-based specialists in industrial air compressor repair, AMC/CAMC maintenance, installation, and HVAC cooling solutions across India.";

  return (
    <>
      {/* Meta (via your SEO component) */}
      <SEO pageTitle={TITLE} description={DESCRIPTION} canonical={CANONICAL} />

      {/* Structured Data: Breadcrumbs (Home → About Us) */}
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
                name: "About Us",
                item: CANONICAL,
              },
            ],
          }),
        }}
      />

      {/* Structured Data: AboutPage */}
      <Script
        id="ld-aboutpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": `${CANONICAL}#about`,
            url: CANONICAL,
            name: TITLE,
            description: DESCRIPTION,
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://www.compressindia.co.in/#website",
              url: "https://www.compressindia.co.in/",
              name: "Compress India",
            },
            about: { "@id": "https://www.compressindia.co.in/#organization" },
            inLanguage: "en-IN",
          }),
        }}
      />

      {/* Structured Data: Organization (HVACBusiness) */}
      <Script
        id="ld-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HVACBusiness",
            "@id": "https://www.compressindia.co.in/#organization",
            name: "Compress India",
            url: "https://www.compressindia.co.in/",
            logo: "https://www.compressindia.co.in/logo.png",
            image: "https://www.compressindia.co.in/logo.png",
            areaServed: [
              { "@type": "City", name: "Mumbai" },
              { "@type": "Country", name: "India" },
            ],
            priceRange: "₹₹",
            // Uncomment & fill if public:
            // telephone: "+91-XXXXXXXXXX",
            // address: {
            //   "@type": "PostalAddress",
            //   streetAddress: "Your Industrial Estate",
            //   addressLocality: "Mumbai",
            //   addressRegion: "MH",
            //   postalCode: "4000XX",
            //   addressCountry: "IN"
            // },
            // sameAs: [
            //   "https://www.facebook.com/yourpage",
            //   "https://www.linkedin.com/company/yourcompany",
            //   "https://www.instagram.com/yourprofile"
            // ]
          }),
        }}
      />

      <HeaderOne />
      <Breadcrumb
        heading="About Us"
        currentPage="About Us"
        backgroundImage="/assets/images/about/about-img.webp"
      />
      <aboutOne />

      <section className="services-one" style={{ padding: "75px 75px" }}>
        {/* Image Section */}
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="relative w-60 h-60 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-gradient-to-b from-green-400 to-blue-500">
                <Image
                  src="/assets/images/team/aziz-ansari.png"
                  alt="Aziz Ansari"
                  width={1000} // e.g., 96px
                  height={1000}
                  className="ceoimage"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="col-xl-8">
              <div className="lg:ml-12 text-center lg:text-left mt-8 lg:mt-0 max-w-2xl">
                <h3 className="section-title__tagline">
                  Founder & CEO, Compress India
                </h3>
                <h2 className="section-title__title">Aziz Ansari</h2>
                <p className="text-gray-700 mt-2 leading-relaxed">
                  At Compress India, our journey has been defined by
                  persistence, precision, and purpose. From humble beginnings to
                  serving diverse industries with customized HVAC solutions, we
                  are proud of the reputation we've built. Our commitment to
                  innovation and customer satisfaction drives us to go beyond
                  expectations every single day. We’re not just building
                  systems—we’re building trust, reliability, and a sustainable
                  future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="team-grid">
            <div className="team-card">
              <div className="info">
                <h3 className="name">Our Vision</h3>

                <p className="desc">
                  To become the leading industrial HVAC solutions provider in
                  India by delivering excellence through innovation, expertise,
                  and unwavering commitment.
                </p>
              </div>
            </div>

            <div className="team-card">
              <div className="info">
                <h3 className="name">Our Vision</h3>

                <p className="desc">
                  To be recognized as the most trusted and innovative HVAC
                  partner across industries—driving sustainable,
                  energy-efficient climate solutions that support industrial
                  growth and environmental responsibility.
                </p>
              </div>
            </div>

            <div className="team-card">
              <div className="info">
                <h3 className="name">Our Values</h3>

                <p className="desc">
                  Integrity – We uphold the highest standards of honesty and
                  transparency in all that we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceOne />
      {/* <ContactOne /> */}
      {/* <TeamOne /> */}
      {/* <BlogOne /> */}

      {/* <ContactOne />
			<TeamOne />
			<BlogOne /> */}
      {/* <BrandOne /> */}
      <FooterOne />
    </>
  );
}

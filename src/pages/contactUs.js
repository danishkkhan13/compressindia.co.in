import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ContactInfo from "../components/contact/ContactInfo";
import ContactThree from "../components/contact/ContactThree";
import ContactMap from "../components/contact/ContactMap";
import FooterOne from "../common/footer/FooterOne";
import Script from "next/script";

export default function ContactPage() {
  const CANONICAL = "https://www.compressindia.co.in/contactUs";
  const TITLE =
    "Contact Compress India | Air Compressor Repair, AC & HVAC Services in Mumbai";
  const DESCRIPTION =
    "Reach Compress India for industrial air compressor repair, AMC/CAMC maintenance, AC & HVAC service across Mumbai & Navi Mumbai. Call, email, or request a site visit.";

  return (
    <>
      <SEO pageTitle={TITLE} description={DESCRIPTION} canonical={CANONICAL} />

      {/* BreadcrumbList (Home → Contact Us) */}
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
                name: "Contact Us",
                item: CANONICAL,
              },
            ],
          }),
        }}
      />

      {/* ContactPage schema */}
      <Script
        id="ld-contactpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": `${CANONICAL}#contact`,
            url: CANONICAL,
            name: "Contact Compress India",
            description: DESCRIPTION,
            inLanguage: "en-IN",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://www.compressindia.co.in/#website",
              url: "https://www.compressindia.co.in/",
              name: "Compress India",
            },
            about: { "@id": "https://www.compressindia.co.in/#organization" },
            potentialAction: {
              "@type": "ContactAction",
              target: `${CANONICAL}#contact-form`, // wrap your form with id="contact-form"
            },
          }),
        }}
      />

      {/* Organization schema (HVACBusiness) */}
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
            logo: "https://www.compressindia.co.in/logo.png", // ← replace with your actual logo URL
            image: "https://www.compressindia.co.in/logo.png",
            areaServed: [
              { "@type": "City", name: "Mumbai" },
              { "@type": "City", name: "Navi Mumbai" },
              { "@type": "Country", name: "India" },
            ],
            priceRange: "₹₹",
            // Optional (uncomment & fill if public):
            // telephone: "+91-XXXXXXXXXX",
            // contactPoint: [
            //   { "@type": "ContactPoint", telephone: "+91-XXXXXXXXXX", contactType: "customer service", areaServed: "IN", availableLanguage: ["en", "hi", "mr"] }
            // ],
            // address: {
            //   "@type": "PostalAddress",
            //   streetAddress: "Your Industrial Estate, Area",
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
        heading="Contact Us"
        currentPage="Contact Us"
        backgroundImage="/assets/images/backgrounds/blockbuster-deal.webp"
      />
      <ContactInfo />
      <ContactThree />
      <ContactMap />
      <FooterOne />
    </>
  );
}

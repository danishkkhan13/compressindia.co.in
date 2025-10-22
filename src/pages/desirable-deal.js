import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Blockbusterdeal from "../components/offers/desirabledeal";
import FooterOne from "../common/footer/FooterOne";
import Script from "next/script";

export default function DesirableDealPage() {
  const CANONICAL = "https://www.compressindia.co.in/desirable-deal";
  const TITLE =
    "Desirable Deal: AC Maintenance Specials in Mumbai & Navi Mumbai | Compress India";
  const DESCRIPTION =
    "Limited-time AC maintenance specials by Compress India—professional cleaning, water-jet wash, and preventive service for better cooling and efficiency in Mumbai & Navi Mumbai.";

  return (
    <>
      {/* Meta via your SEO component */}
      <SEO pageTitle={TITLE} description={DESCRIPTION} canonical={CANONICAL} />

      {/* BreadcrumbList (Home → Desirable Deal) */}
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
                name: "Desirable Deal",
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
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://www.compressindia.co.in/#website",
              url: "https://www.compressindia.co.in/",
              name: "Compress India",
            },
            inLanguage: "en-IN",
            about: { "@id": "https://www.compressindia.co.in/#organization" },
          }),
        }}
      />

      {/* Service + Offer (promo) */}
      <Script
        id="ld-service-offer"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${CANONICAL}#service`,
            name: "AC Preventive Maintenance & Water-Jet Cleaning",
            url: CANONICAL,
            serviceType: "Air Conditioner Maintenance (HVAC)",
            areaServed: [
              { "@type": "City", name: "Mumbai" },
              { "@type": "City", name: "Navi Mumbai" },
            ],
            provider: {
              "@id": "https://www.compressindia.co.in/#organization",
            },
            offers: {
              "@type": "Offer",
              "@id": `${CANONICAL}#offer`,
              url: CANONICAL,
              name: "Desirable Deal – AC Maintenance Special",
              category: "HVACService",
              availability: "https://schema.org/InStock",
              eligibleRegion: [
                { "@type": "City", name: "Mumbai" },
                { "@type": "City", name: "Navi Mumbai" },
              ],
              // Optional (fill if public):
              // priceCurrency: "INR",
              // price: "1299",
              // validFrom: "2025-08-01",
              // validThrough: "2025-09-30"
            },
          }),
        }}
      />

      <HeaderOne />
      <Breadcrumb
        heading="DESIRABLE DEAL"
        currentPage="DESIRABLE DEAL"
        backgroundImage="/assets/images/backgrounds/blockbuster-deal.webp"
      />

      <Blockbusterdeal />
      <FooterOne />
    </>
  );
}

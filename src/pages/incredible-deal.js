import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Blockbusterdeal from "../components/offers/incredibledeal";
import FooterOne from "../common/footer/FooterOne";
import Script from "next/script";

export default function IncredibledealPage() {
  const CANONICAL = "https://www.compressindia.co.in/incredible-deal";
  const TITLE =
    "Incredible Deal: Annual AC Maintenance Contract (Water-Jet Cleaning) | Compress India";
  const DESCRIPTION =
    "Save with Compress India’s Incredible Deal—annual AC maintenance contract with professional water-jet cleaning for reliable, energy-efficient cooling across Mumbai & Navi Mumbai.";

  return (
    <>
      {/* Meta via your SEO component */}
      <SEO pageTitle={TITLE} description={DESCRIPTION} canonical={CANONICAL} />

      {/* BreadcrumbList (Home → Incredible Deal) */}
      <Script
        id="ld-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.compressindia.co.in/" },
              { "@type": "ListItem", position: 2, name: "Incredible Deal", item: CANONICAL },
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
            about: { "@id": "https://www.compressindia.co.in/#organization" },
            inLanguage: "en-IN",
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
            name: "Annual AC Maintenance Contract (with Water-Jet Cleaning)",
            url: CANONICAL,
            serviceType: "Air Conditioner Maintenance (HVAC)",
            areaServed: [
              { "@type": "City", name: "Mumbai" },
              { "@type": "City", name: "Navi Mumbai" },
            ],
            provider: { "@id": "https://www.compressindia.co.in/#organization" },
            offers: {
              "@type": "Offer",
              "@id": `${CANONICAL}#offer`,
              url: CANONICAL,
              name: "Incredible Deal – Annual AC Maintenance Contract",
              category: "HVACService",
              availability: "https://schema.org/InStock",
              eligibleRegion: [
                { "@type": "City", name: "Mumbai" },
                { "@type": "City", name: "Navi Mumbai" },
              ],
              // Optional (fill if public):
              // priceCurrency: "INR",
              // price: "XXXX",
              // validFrom: "2025-08-01",
              // validThrough: "2025-09-30"
            },
          }),
        }}
      />

      <HeaderOne />
      <Breadcrumb
        heading="INCREDIBLE DEAL"
        currentPage="INCREDIBLE DEAL"
        backgroundImage="/assets/images/backgrounds/blockbuster-deal.webp"
      />
      <Blockbusterdeal />
      <FooterOne />
    </>
  );
}

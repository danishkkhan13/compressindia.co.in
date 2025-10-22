import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Blockbusterdeal from "../components/offers/blockbusterdeal";
import FooterOne from "../common/footer/FooterOne";
import Script from "next/script";

export default function BlockbusterDealPage() {
  const CANONICAL = "https://www.compressindia.co.in/blockbuster-deal";
  const TITLE =
    "Blockbuster Deal: AC Water-Jet Cleaning & Maintenance in Mumbai | Compress India";
  const DESCRIPTION =
    "Limited-time AC water-jet cleaning & preventive maintenance by certified technicians across Mumbai & Navi Mumbai. Cleaner coils, better cooling, lower power use. Book now.";

  return (
    <>
      {/* Meta via your SEO component */}
      <SEO pageTitle={TITLE} description={DESCRIPTION} canonical={CANONICAL} />

      {/* BreadcrumbList (Home → Blockbuster Deal) */}
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
                name: "Blockbuster Deal",
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
            name: "AC Water-Jet Cleaning & Preventive Maintenance",
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
              name: "Blockbuster Deal – AC Water-Jet Maintenance",
              category: "HVACService",
              availability: "https://schema.org/InStock",
              eligibleRegion: [
                { "@type": "City", name: "Mumbai" },
                { "@type": "City", name: "Navi Mumbai" },
              ],
              // Optional (add if public):
              // priceCurrency: "INR",
              // price: "1499",
              // validFrom: "2025-08-01",
              // validThrough: "2025-09-30"
            },
          }),
        }}
      />

      <HeaderOne />
      <Breadcrumb
        heading="Blockbuster Deal"
        currentPage="Blockbuster Deal"
        backgroundImage="/assets/images/backgrounds/blockbuster-deal.webp"
      />

      <Blockbusterdeal />
      <FooterOne />
    </>
  );
}

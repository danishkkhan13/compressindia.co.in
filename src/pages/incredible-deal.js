import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Blockbusterdeal from "../components/offers/incredibledeal";
import FooterOne from "../common/footer/FooterOne";

export default function IncredibledealPage() {
  return (
    <>
      <SEO
        pageTitle={
          "Incredible Deal – Annual AC Maintenance Contract (Water-Jet Service) | Compress India"
        }
        description={
          "Unlock the Incredible Deal from Compress India—annual AC maintenance contract with water-jet service for long-lasting, efficient cooling performance."
        }
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

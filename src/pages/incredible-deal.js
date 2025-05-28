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
          "Incredible HVAC & Cooling Deals in Mumbai | Compress India Limited Offer"
        }
        description={
          "Take advantage of Compress India’s Incredible Deal—premium HVAC and industrial cooling services in Mumbai at unbeatable prices. Don’t miss out—offer ends soon!"
        }
      />
      <HeaderOne />
      <Breadcrumb
        heading="INCREDIBLE DEAL"
        currentPage="INCREDIBLE DEAL"
        backgroundImage="/assets/images/backgrounds/blockbuster-deal.jpg"
      />
      <Blockbusterdeal />
      <FooterOne />
    </>
  );
}

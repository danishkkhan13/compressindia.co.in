import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Blockbusterdeal from "../components/offers/blockbusterdeal";
import FooterOne from "../common/footer/FooterOne";

export default function BlockbusterDealPage() {
  return (
    <>
      <SEO
        pageTitle={
          "Blockbuster Deal – AC Water-Jet Maintenance Service (Mumbai & Navi Mumbai) | Compress India"
        }
        description={
          "Grab the Blockbuster Deal from Compress India! Get expert AC water-jet maintenance service in Mumbai & Navi Mumbai for cleaner, cooler performance."
        }
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

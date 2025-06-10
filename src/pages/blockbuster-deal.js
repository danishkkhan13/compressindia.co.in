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
          "Limited-Time HVAC Offers in Mumbai | Compress India Blockbuster Deal"
        }
        description={
          "Unlock exclusive HVAC deals in Mumbai with Compress India! Save on industrial cooling, chiller systems & more. Limited-time offer—grab your climate upgrade now!"
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

import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Blockbusterdeal from "../components/offers/desirabledeal";
import FooterOne from "../common/footer/FooterOne";

export default function BlockbusterdealPage() {
  return (
    <>
      <SEO
        pageTitle={
          "Desirable HVAC Service Deals in Mumbai | Compress India Offers"
        }
        description={
          "Looking for value-driven HVAC solutions in Mumbai? Compress India’s Desirable Deal offers reliable climate control, maintenance & cooling system upgrades at great prices."
        }
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

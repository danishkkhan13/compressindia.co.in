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
          "Desirable Deal - AC Maintenance Specials (Mumbai & Navi Mumbai) | Compress India"
        }
        description={
          "Explore the Desirable Deal from Compress India—exclusive AC maintenance specials in Mumbai & Navi Mumbai for cleaner, efficient cooling systems."
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

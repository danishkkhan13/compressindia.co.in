import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Terms from "../components/termandcondition/page";
import FooterOne from "../common/footer/FooterOne";

export default function TermsandConditionsPage() {
  return (
    <>
      <SEO
        pageTitle={
          "Terms & Conditions — Compress India HVAC Services (Mumbai)"
        }
        description={
          "View the Terms & Conditions of Compress India HVAC Services in Mumbai. Learn our service policies, terms, and guidelines for industrial cooling solutions."
        }
      />
      <HeaderOne />
      <Breadcrumb
        heading="Terms and Conditions"
        currentPage="Terms and Conditions"
        backgroundImage="/assets/images/backgrounds/one-time-service.jpeg"
      />
      <Terms />
      {/* <TeamOne />
            <ContactFour />
            <BrandOne /> */}
      <FooterOne />
    </>
  );
}

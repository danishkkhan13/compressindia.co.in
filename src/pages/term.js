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
          "Terms & Conditions | Compress India – HVAC Services in Mumbai"
        }
        description={
          "Review Compress India’s terms and conditions outlining service use, responsibilities, and client rights. Committed to transparency in all HVAC operations across Mumbai."
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

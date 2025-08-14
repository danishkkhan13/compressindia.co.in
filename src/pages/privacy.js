import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Privacy from "../components/privacypolicy/page";
import FooterOne from "../common/footer/FooterOne";

export default function TeamDetailsPage() {
  return (
    <>
      <SEO
        pageTitle={"Privacy Policy — Compress India HVAC Services (Mumbai)"}
        description={
          "Read the Privacy Policy of Compress India HVAC Services in Mumbai. Learn how we collect, use, and protect your personal information."
        }
      />
      <HeaderOne />
      <Breadcrumb
        heading="Privacy Policy"
        currentPage="Privacy Policy"
        backgroundImage="/assets/images/backgrounds/one-time-service.jpeg"
      />
      <Privacy />
      {/* <TeamOne />
            <ContactFour />
            <BrandOne /> */}
      <FooterOne />
    </>
  );
}

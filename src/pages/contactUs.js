import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ContactInfo from "../components/contact/ContactInfo";
import ContactThree from "../components/contact/ContactThree";
import ContactMap from "../components/contact/ContactMap";
import FooterOne from "../common/footer/FooterOne";

export default function ContactPage() {
  return (
    <>
      <SEO
        pageTitle={
          "Get in Touch with Compress India | AC & HVAC Services in Mumbai"
        }
        description={
          "Contact Compress India—your trusted AC & HVAC solutions provider in Mumbai & Navi Mumbai. Call, email, or visit us for expert service and support."
        }
      />
      <HeaderOne />
      <Breadcrumb
        heading="Contact Us"
        currentPage="Contact Us"
        backgroundImage="/assets/images/backgrounds/blockbuster-deal.webp"
      />
      <ContactInfo />
      <ContactThree />
      <ContactMap />
      <FooterOne />
    </>
  );
}

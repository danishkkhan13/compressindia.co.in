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
          "Contact Compress India | HVAC & Cooling Solutions in Mumbai"
        }
        description={
          "Reach out to Compress India for expert HVAC & industrial cooling solutions in Mumbai. Call or message us to discuss your project or service requirements today."
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

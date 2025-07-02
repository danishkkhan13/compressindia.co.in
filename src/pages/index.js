import Link from "next/link";
import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
// import HeroOne from "../components/hero/HeroOne";
import AboutOne from "../components/about/AboutOne";
import WhyChooseUs from "../components/whychoose_us/chooseus";
import ContactOne from "../components/contact/ContactOne";
import FooterOne from "../common/footer/FooterOne";
import FaqOne from "../components/faq/FaqOne";
import PricingOne from "../components/pricing/PricingOne";
import Clients from "../components/clients/page";
import WhatWeDo from "../components/whatwedo/page";


export default function Home() {
  return (
    <>
      <SEO
        pageTitle={
          "HVAC & Industrial Refrigeration Experts in Mumbai | Compress India"
        }
        description={
          "Reliable HVAC system design, turnkey execution, and custom refrigeration in Mumbai. Serving pharma, food, hospitality, & more. Elevate your climate control today!"
        }
      />
      <HeaderOne />

      {/* <HeroOne /> */}










      <div className="relative min-h-screen video-section">
        {/* Video Background */}
        <div className="w-full overflow-hidden flex items-center">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" style={{
              width: '100%', height: '100%'
            }}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/assets/images/ac-gas-charge.webp"
          >
            <source src="/assets/images/compressindiahome.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Overlay */}
        <section className="custom-section">
          <div className="video-heading">
            <div className="herotext">
              <p className="section-title__tagline colorunset">ALL YOUR PROPERTIES REQURIEMENTS</p>
              <h1 className="section-title__title" style={{ color: '#ffffff' }}>We build future , Where Engineering Excellence Meets Climate Control</h1>
              <p className="aboutUs-one__content-text2">ALL YOUR PROPERTIES REQURIEMENTS</p>
            </div>
            <div className="btn-box">
              <Link href="/contactUs" className="thm-btn">
                <span>Request Services</span>
                <div className="liquid"></div>
              </Link>
            </div>
          </div>
        </section>
      </div>


















      <AboutOne />
      <WhyChooseUs />
      <FaqOne />
      <ContactOne />
      <WhatWeDo />
      <PricingOne />
      <Clients />

      {/* <TeamOne />
			<WhyChooseUsOne />
			<TestimonialOne /> */}
      {/* <CtaOne />
			<BlogOne />
			<BrandOne /> */}
      <FooterOne />

    </>
  );
}

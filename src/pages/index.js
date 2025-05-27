import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import HeroOne from "../components/hero/HeroOne";
import AboutOne from "../components/about/AboutOne";
import WhyChooseUs from "../components/whychoose_us/chooseus";
import ContactOne from "../components/contact/ContactOne";
import FooterOne from "../common/footer/FooterOne";
import FaqOne from "../components/faq/FaqOne";
import PricingOne from "../components/pricing/PricingOne";


export default function Home() {
	return (
		<>
			<SEO pageTitle={"Home One"} />
			<HeaderOne />
			<HeroOne />
			<AboutOne />
			<WhyChooseUs />
			<FaqOne />
			<ContactOne />
			<PricingOne />
			{/* <ProjectOne /> */}

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
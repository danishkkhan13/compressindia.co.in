import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import HeroOne from "../components/hero/HeroOne";
import AboutOne from "../components/about/AboutOne";
import WhyChooseUs from "@/components/whychoose_us/chooseus";
import ServiceOne from "../components/service/ServiceOne";
import ProjectOne from "../components/project/ProjectOne";
import ContactOne from "../components/contact/ContactOne";
import TeamOne from "../components/team/TeamOne";
import WhyChooseUsOne from "../components/why-choose-us/WhyChooseUsOne";
import TestimonialOne from "../components/testimonial/TestimonialOne";
import CtaOne from "../components/cta/CtaOne";
import BlogOne from "../components/blog/BlogOne";
import BrandOne from "../components/brand/BrandTwo";
import FooterOne from "../common/footer/FooterOne";
import FaqOne from "../components/faq/FaqOne";
import PricingOne from "@/components/pricing/PricingOne";
import ContactBanner from "@/components/contactBanner/contactbanner";

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
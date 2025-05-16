import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ServiceThree from "../components/service/ServiceThree";
import BrandOne from "../components/brand/BrandOne";
import CtaOne from "../components/cta/CtaOne";
import FooterOne from "../common/footer/FooterOne";

export default function ServicePageOne() {
	return (
		<>
			<SEO pageTitle={"Service"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Service Page 2"
                currentPage="Service" 
            />
			<ServiceThree />
			<BrandOne />
			<CtaOne />
			<FooterOne />
		</>
	);
}
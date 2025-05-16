import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ServiceOne from "../components/service/ServiceOne";
import BrandOne from "../components/brand/BrandTwo";
import CtaOne from "../components/cta/CtaOne";
import FooterOne from "../common/footer/FooterOne";

export default function ServicePageOne() {
	return (
		<>
			<SEO pageTitle={"Service"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Service Page 1"
                currentPage="Service" 
            />
			<ServiceOne />
			<BrandOne />
			<CtaOne />
			<FooterOne />
		</>
	);
}
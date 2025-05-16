import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import CommercialCleaning from "../components/service/CommercialCleaning";
import BrandOne from "../components/brand/BrandTwo";
import FooterOne from "../common/footer/FooterOne";

export default function LibraryBusinessPage() {
	return (
		<>
			<SEO pageTitle={"Commercial Cleaning"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Commercial Cleaning"
                currentPage="Commercial Cleaning" 
            />
			<CommercialCleaning />
			<BrandOne />
			<FooterOne />
		</>
	);
}
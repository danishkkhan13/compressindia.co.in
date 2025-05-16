import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import TeamThree from "../components/team/TeamThree";
import BrandOne from "../components/brand/BrandOne";
import FooterOne from "../common/footer/FooterOne";

export default function TeamPage() {
	return (
		<>
			<SEO pageTitle={"Team Page"} />
			<HeaderOne />
			<Breadcrumb 
                heading="Team Page"
                currentPage="Team" 
            />
			<TeamThree />
			<BrandOne />
			<FooterOne />
		</>
	);
}
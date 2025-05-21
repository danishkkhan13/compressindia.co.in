import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Blockbusterdeal from "../components/offers/blockbusterdeal";
import FooterOne from "../common/footer/FooterOne";

export default function BlockbusterDealPage() {
    return (
        <>
            <SEO pageTitle={"Blockbuster Deal"} />
            <HeaderOne />
            <Breadcrumb
                heading="Blockbuster Deal"
                currentPage="Blockbuster Deal"
            />
            <Blockbusterdeal />
            <FooterOne />
        </>
    );
}

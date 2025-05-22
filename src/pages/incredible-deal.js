import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Blockbusterdeal from "../components/offers/incredibledeal";
import FooterOne from "../common/footer/FooterOne";

export default function IncredibledealPage() {
    return (
        <>
            <SEO pageTitle={"INCREDIBLE DEAL"} />
            <HeaderOne />
            <Breadcrumb
                heading="INCREDIBLE DEAL"
                currentPage="INCREDIBLE DEAL"
            />
            <Blockbusterdeal />
            <FooterOne />
        </>
    );
}

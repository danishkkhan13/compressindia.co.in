import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Blockbusterdeal from "../components/offers/desirabledeal";
import FooterOne from "../common/footer/FooterOne";

export default function BlockbusterdealPage() {
    return (
        <>
            <SEO pageTitle={"DESIRABLE DEAL"} />
            <HeaderOne />
            <Breadcrumb
                heading="DESIRABLE DEAL"
                currentPage="DESIRABLE DEAL"
                backgroundImage="/assets/images/backgrounds/blockbuster-deal.jpg"

            />
            <Blockbusterdeal />
            <FooterOne />
        </>
    );
}

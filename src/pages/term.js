import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import Terms from "../components/termandcondition/page";
import FooterOne from "../common/footer/FooterOne";

export default function TermsandConditionsPage() {
    return (
        <>
            <SEO pageTitle={"Privacy Policy"} />
            <HeaderOne />
            <Breadcrumb
                heading="Privacy Policy"
                currentPage="Privacy Policy"
            />
            <Terms />
            {/* <TeamOne />
            <ContactFour />
            <BrandOne /> */}
            <FooterOne />
        </>
    );
}
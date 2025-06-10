import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import aboutOne from "../components/about/AboutOne";
import ServiceOne from "../components/service/ServiceOne";
// import Product from "../components/product/page";
import ContactOne from "../components/contact/ContactOne";



import FooterOne from "../common/footer/FooterOne";
import Image from 'next/image';


export default function aboutUsPage() {
	return (
		<>
			<SEO pageTitle={"About Us"} />
			<HeaderOne />
			<Breadcrumb
				heading="About Us"
				currentPage="About Us"
				backgroundImage="/assets/images/about/about-img.webp"
			/>
			<aboutOne />
			<ServiceOne />
			{/* <ContactOne /> */}
			{/* <TeamOne /> */}
			{/* <BlogOne /> */}
			?
			{/* <Product /> */}
			<section className="aboutUs-one pd-100-0-120">
				<div className="container mx-auto px-4pb-20">
					<div className="row">
						<div className="flex items-center ourvision">

							{/* Text Section */}
							<div className="col-xl-6">
								<h2 className="text-3xl font-bold text-gray-900 mb-4">OUR VISION</h2>
								<p className="text-gray-700 text-lg leading-relaxed">
									At Compress India Private Limited, Our vision is clear to redefine the AC service / repair &amp; cooling industry <br />
									by setting the highest standards in customer satisfaction, technical expertise, and environmental responsibilities. <br />
									We look forward to not only meeting but exceeding your cooling needs.
								</p>
							</div>

							{/* Image Section */}
							<div className="col-xl-4">
								<img
									src="/assets/images/resources/vision.jpg"
									alt="Our Vision"
									className="w-[350px] h-auto object-contain pt-[50px] ourvisionimg" style={{
										Width: '351px',

									}}
								/>
							</div>

						</div>
					</div>
				</div>
			</section>




			{/* <ContactOne />
			<TeamOne />
			<BlogOne /> */}
			{/* <BrandOne /> */}
			<FooterOne />
		</>
	);
}
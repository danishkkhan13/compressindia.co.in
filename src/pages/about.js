import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import AboutOne from "../components/about/AboutOne";
import ServiceOne from "../components/service/ServiceOne";
import Product from "../components/product/page";
import ContactOne from "../components/contact/ContactOne";
import TeamOne from "../components/team/TeamOne";
import BlogOne from "../components/blog/BlogOne";
import BrandOne from "../components/brand/BrandTwo";
import FooterOne from "../common/footer/FooterOne";
import Image from 'next/image';


export default function AboutPage() {
	return (
		<>
			<SEO pageTitle={"About"} />
			<HeaderOne />
			<Breadcrumb
				heading="About Page"
				currentPage="About"
			/>
			<AboutOne />
			<ServiceOne />
			{/* <ContactOne /> */}
			{/* <TeamOne /> */}
			{/* <BlogOne /> */}
			?
			<Product />
			<section className="about-one pd-120-0-120">
				<div className="container">
					<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
						{/* Text Content */}
						<div className="md:w-2/3">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">OUR VISION</h2>
							<div className="flex justify-around w-full p-4 bg-gray-100">
								<p className=" leading-relaxed">
									At Compress India Private Limited, Our vision is clear to redefine the AC service / repair &amp; cooling industry <br />
									by setting the highest standards in customer satisfaction, technical expertise, and environmental responsibilities. <br />
									We look forward to not only meeting but exceeding our cooling needs.
								</p>


								{/* Image */}
								<div className="md:w-1/3 flex justify-center">
									<Image
										src="/images/resources/vision.jpg"
										alt="Our Vision"
										width={300}
										height={200}
										className="object-contain"
										priority
									/>
								</div>
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
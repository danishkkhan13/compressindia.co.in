// components/ContactDetails.tsx
import Image from "next/image";

export default function ContactBanner() {
    return (
        <section id="details" className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
                    {/* Left Empty / Decorative Side */}
                    <div className="hidden md:block md:w-5/12 bg-gray-100" />

                    {/* Right Content Side */}
                    <div className="w-full md:w-7/12 p-6 md:py-12 md:px-10 relative">
                        <div className="space-y-6">
                            {/* Phone Icon and Number */}
                            <div className="flex items-center space-x-4">
                                <div className="text-3xl text-cyan-600">
                                    <i className="fa fa-volume-control-phone"></i>
                                </div>
                                <a href="tel:+918655011465" className="text-xl font-semibold text-gray-800 hover:text-cyan-600 transition">
                                    +91 8655011465
                                </a>
                            </div>

                            {/* Email Row */}
                            <div className="flex items-center space-x-4">
                                <div className="text-xl text-cyan-600">
                                    <i className="fa fa-envelope"></i>
                                </div>
                                <a href="mailto:sales@compressindia.in" className="text-base text-gray-700 hover:text-cyan-600 transition">
                                    sales@compressindia.in
                                </a>
                            </div>

                            {/* Image */}
                            <div className="pt-6">
                                <Image
                                    src="/images/team/contact-girl.png"
                                    alt="Contact Girl"
                                    width={300}
                                    height={300}
                                    className="object-contain mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
import Image from "next/image";

export default function compressorinstallationPageOne() {
  const services = [
    {
      title: 'Split Air Conditioners',
      price: 8500,
      image: '/assets/images/services/ac.webp',
    },
    {
      title: 'Window Air Conditioners',
      price: 8500,
      image: '/assets/images/services/window-AC.webp',
    },
    {
      title: 'Portable Air Conditioners',
      price: 8500,
      image: '/assets/images/services/Portable-AC.webp',
    },
    {
      title: 'Cassette Air Conditioners',
      price: 9500,
      image: '/assets/images/services/cassette-AC.webp',
      suffix: '/-TR',
    },
    {
      title: 'Tower Air Conditioners',
      price: 8500,
      image: '/assets/images/services/tower-AC.webp',
      suffix: '/-TR',
    },
    {
      title: 'Ducted Air Conditioners',
      price: 8500,
      image: '/assets/images/services/ducted-ac.webp',
      suffix: '/-TR',
    },
  ];


  // Dynamically calculate rows
  const rows = [];
  for (let i = 0; i < services.length; i += 3) {
    rows.push(services.slice(i, i + 3));
  }
  return (
    <>
      <SEO
        pageTitle={
          "Compressor Installation Services in Mumbai | Compress India"
        }
        description={
          "Expert Compressor Installation in Mumbai by Compress India. All AC types serviced. Split ₹8500, Cassette ₹9500/TR. Call now to restore cooling!"
        }
      />
      <HeaderOne />
      <Breadcrumb
        heading="Compressor Installation"
        currentPage="Compressor Installation"
        backgroundImage="/assets/images/backgrounds/compressor.webp"
      />
      <section className="py-16 services-one pd-120-0-90 bg-white">
        <div className="container">
          <div className="row">
            <div className="innerpage-whiteboxs main-timeline">
              <div
                className="text-center mb-12"
                style={{ paddingBottom: "60px" }}
              >
                <h5 className="text text-center pb-4">
                  Effective rates for our valuable customers
                </h5>
                <h2 className="text-3xl font-bold">
                  COMPRESSOR INSTALLATION SERVICES
                </h2>
                <p className="text-gray-600 mt-2">
                  Compressor Replacement ! Process of supply & installation of
                  the (USED) compressor in Air conditioner
                </p>
              </div>
              <div>
                <div className="max-w-6xl mx-auto px-4 space-y-12">
                  {rows.map((row, rowIndex) => (
                    <div key={rowIndex}>
                      <div className="servicese">
                        {row.map((service, idx) => (
                          <div key={idx} className="text-center w-full md:w-1/3">
                            <Image
                              src={service.image}
                              alt={service.title}
                              width={300}
                              height={200}
                              className="mx-auto object-contain h-48"
                            />
                            <h5 className="mt-4 font-semibold text-lg">
                              Price : {service.price}
                              {service.suffix || '/-'}
                            </h5>
                            <p className="text-sm uppercase mt-1 text-gray-700">{service.title}</p>
                          </div>
                        ))}
                      </div>
                      {rowIndex < rows.length - 1 && (
                        <hr className="border-t border-black mt-10 mb-2 w-full" />
                      )}
                    </div>
                  ))}

                </div>
                <div
                  className="mb-12 text-center italic"
                  style={{ paddingTop: "60px", fontSize: "small" }}
                >
                  <h6>
                    DISCAILMER : This is only Compressor Replacement Charges ,
                    If breakdown / repair required rates may vary as per
                    standard charges in the market
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="grid grid-rows-2 gap-6 py-10"
          style={{
            textAlign: "center",
            paddingBottom: "40px",
          }}
        >
          <a
            href="https://wa.me/918655011465"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="button-mobile button-mobile w-full bg-[#2F3338] text-white text-center py-4 rounded-full text-lg font-normal hover:bg-[#3c4045] transition"
              style={{
                width: "565px",
                backgroundColor: "#32373c",
                borderRadius: "5px",
              }}
            >
              <FaWhatsapp size={24} color="#25D366" /> Book Now on WhatsApp
            </button>
          </a>
        </div>
        <div
          className="grid grid-rows-2 gap-6 py-10"
          style={{
            textAlign: "center",
            paddingBottom: "40px",
          }}
        >
          <Link href="/fan-motor-installation">
            <button
              className="button-mobile w-full bg-[#2F3338] text-white text-center py-4 rounded-full text-lg font-normal hover:bg-[#3c4045] transition"
              style={{
                width: "565px",
                backgroundColor: "#32373c",
                borderRadius: "5px",
              }}
            >
              Compare with same deal
            </button>
          </Link>
        </div>
      </section>
      {/* <BrandOne /> */}

      <FooterOne />
    </>
  );
}

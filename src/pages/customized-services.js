import SEO from "../common/seo/Seo";
import HeaderOne from "../common/header/HeaderOne";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FooterOne from "../common/footer/FooterOne";
import { FaWhatsapp } from "react-icons/fa";

export default function customizedservicesPageOne() {
  return (
    <>
      <SEO
        pageTitle={
          "Customized HVAC Solutions in Mumbai | Tailored Services by Compress India"
        }
        description={
          "Get fully customized HVAC and refrigeration services in Mumbai. Compress India designs bespoke climate systems to meet unique industrial and commercial requirements."
        }
      />
      <HeaderOne />
      <Breadcrumb
        heading="Customized Services"
        currentPage="Customized Services"
        backgroundImage="/assets/images/backgrounds/custome-service.webp"
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
                <h2 className="text-3xl font-bold">CUSTOMIZED SERVICES</h2>
              </div>
              <div className="text-center">
                {/* Visiting Charges */}
                <div
                  className="grid md:grid-cols-2 gap-8"
                  style={{
                    textAlign: "center",
                    paddingBottom: "40px",
                  }}
                >
                  <div>
                    <h2 className="text-2xl font-bold text-blue-600">
                      Start @ ₹500/-
                    </h2>
                    <p className="text-lg font-medium">
                      <strong>VISITING CHARGES:</strong> For inspection of an
                      Air Conditioner
                    </p>
                  </div>
                </div>

                {/* Spray Painting */}
                <div
                  className="grid md:grid-cols-2 gap-8"
                  style={{
                    textAlign: "center",
                    paddingBottom: "40px",
                  }}
                >
                  <div>
                    <h2 className="text-2xl font-bold text-blue-600">
                      Start @ ₹2,500/-
                    </h2>
                    <p className="text-lg font-medium">
                      <strong>SPRAY PAINTING:</strong> For rusting prevention.
                    </p>
                  </div>
                </div>
                {/* Flap / Swing Motor Replacement */}
                <div
                  className="grid md:grid-cols-2 gap-8"
                  style={{
                    textAlign: "center",
                    paddingBottom: "40px",
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-bold text-blue-600">
                        Start @ ₹1,800/-
                      </h2>
                      <p className="text-lg font-medium">
                        <strong>FLAP / SWING MOTOR REPLACEMENT</strong>
                      </p>
                      <hr className="my-4 border-gray-300" />
                    </div>
                  </div>
                </div>
                {/* Book Appointment */}
                <div>
                  <h1 className="text-3xl font-bold text-green-700">
                    Book an appointment
                  </h1>
                </div>

                {/* Capillary Tube / Expansion Valve Replacement */}
                <div
                  className="grid md:grid-cols-2 gap-8"
                  style={{
                    textAlign: "center",
                    paddingBottom: "40px",
                  }}
                >
                  <div>
                    <p className="text-lg font-medium">
                      <strong>
                        CAPILLARY TUBE / EXPANSION VALVE REPLACEMENT
                      </strong>
                    </p>
                  </div>
                </div>
                {/* Copper Tube Insulation Replacement */}
                <div
                  className="grid md:grid-cols-2 gap-8"
                  style={{
                    textAlign: "center",
                    paddingBottom: "40px",
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-bold text-blue-600">
                        Start @ ₹1,850/-
                      </h2>
                      <p className="text-lg font-medium">
                        <strong>COPPER TUBE INSULATION REPLACEMENT</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Power / Communication Replacement */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-blue-600">
                      Start @ ₹2,250/-
                    </h2>
                    <p className="text-lg font-medium">
                      <strong>POWER / COMMUNICATION REPLACEMENT</strong>
                    </p>
                  </div>
                </div>
                <div
                  className="mb-12 text-center italic"
                  style={{ paddingTop: "60px", fontSize: "small" }}
                >
                  <h6>
                    DISCAILMER : For any kind of customization works may which
                    are not covered in this website please contact us
                    on…..info@compressindia.com / sales.compressindia@gmail.com
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
          {/* <button
            className="button-mobile w-full bg-[#2F3338] text-white text-center py-4 rounded-full text-lg font-normal hover:bg-[#3c4045] transition"
            style={{
              width: "565px",
              backgroundColor: "#32373c",
              borderRadius: "5px",
            }}
          >
            Our Factory Products
          </button> */}
        </div>
      </section>
      {/* <BrandOne /> */}

      <FooterOne />
    </>
  );
}

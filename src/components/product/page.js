export default function FactoryProducts() {
    const products = [
        "DISPLAY COUNTERS",
        "DEEP FREEZERS",
        "VERTICAL FREEZERS",
        "COLD STORAGE / COLD ROOMS / COMMERCIAL STORAGE",
        "GLASS DOOR FREEZERS",
        "WATER COOLERS",
        "TABLE TOP FREEZERS",
        "KITCHEN HOOD",
        "SINK BASIN",
        "S.S WORK TABLES",
        "SHORMA COUNTERS",
        "BAIN MARIE",
    ];

    return (
        <section className="aboutUs-one pd-120-0-120">
            <div className="my-[60px]">
                <div className="container">
                    <div className="m-6">
                        <div className="text-center">
                            <h2 className="section-title__title">OUR FACTORY PRODUCTS</h2>
                            <h6 className="text">
                                Here, We would like to introduce you to our routine production line for cooling equipment that is used by
                                commercial & industrial sectors in day-to-day life. Let’s have a quick look at the products/equipment listed below.
                            </h6>
                        </div>
                        <div className="w-full flex flex-row justify-start px-4 md:px-10">
                            <ul className="text-left space-y-3 mb-12">
                                {products.map((item, idx) => (
                                    <li key={idx} className="text-gray-900 font-semibold flex items-start">
                                        <span className="text-teal-500 mr-2">»</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="font-semibold text-lg text-black">
                            We provide <span className="font-bold">Sales / Repair & Maintenance / Service & Contracts</span> for all above
                            shown services & products.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
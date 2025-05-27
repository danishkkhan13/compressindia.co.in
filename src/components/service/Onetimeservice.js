'use client';

import Image from 'next/image';

const services = [
    {
        title: 'Split Air Conditioners',
        price: 1200,
        image: '/assets/images/services/ac.webp',
    },
    {
        title: 'Window Air Conditioners',
        price: 950,
        image: '/assets/images/services/window-AC.webp',
    },
    {
        title: 'Portable Air Conditioners',
        price: 950,
        image: '/assets/images/services/Portable-AC.webp',
    },
    {
        title: 'Cassette Air Conditioners',
        price: 1850,
        image: '/assets/images/services/cassette-AC.webp',
        suffix: '/-TR',
    },
    {
        title: 'Tower Air Conditioners',
        price: 800,
        image: '/assets/images/services/tower-AC.webp',
        suffix: '/-TR',
    },
    {
        title: 'Ducted Air Conditioners',
        price: 800,
        image: '/assets/images/services/ducted-ac.webp',
        suffix: '/-TR',
    },
];

export default function OneTimeServices() {
    // Dynamically calculate rows
    const rows = [];
    for (let i = 0; i < services.length; i += 3) {
        rows.push(services.slice(i, i + 3));
    }

    return (

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



    );
}

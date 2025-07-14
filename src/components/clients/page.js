'use client'
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image'

const clients = [
    { src: '/assets/images/clients/clogo1.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo2.png', alt: 'Akshaya Patra' },
    { src: '/assets/images/clients/clogo3.png', alt: 'Aditya Birla Group' },
    { src: '/assets/images/clients/clogo4.png', alt: 'Hermes Paris' },
    { src: '/assets/images/clients/clogo5.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo6.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo7.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo8.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo9.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo10.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo11.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo12.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo13.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo14.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo15.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo16.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo17.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo18.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo19.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo20.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo21.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo22.png', alt: 'Cotton Association of India' },
    // Add more if needed
    { src: '/assets/images/clients/clogo23.png', alt: 'Akshaya Patra' },
    { src: '/assets/images/clients/clogo24.png', alt: 'Aditya Birla Group' },
    { src: '/assets/images/clients/clogo25.png', alt: 'Hermes Paris' },
    { src: '/assets/images/clients/clogo26.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo27.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo28.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo29.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo30.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo31.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo32.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo33.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo34.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo35.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo36.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo37.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo17.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo38.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo39.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo40.png', alt: 'Cotton Association of India' },
    { src: '/assets/images/clients/clogo41.png', alt: 'Cotton Association of India' },

]
export default function ClientsSection() {

    const [startIndex, setStartIndex] = useState(0)
    const visibleCount = 5

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prevIndex) =>
                (prevIndex + visibleCount) % clients.length
            )
        }, 3000) // change logo set every 3 seconds

        return () => clearInterval(interval)
    }, [])

    // Wrap-around logic
    const visibleClients =
        startIndex + visibleCount <= clients.length
            ? clients.slice(startIndex, startIndex + visibleCount)
            : [
                ...clients.slice(startIndex),
                ...clients.slice(0, (startIndex + visibleCount) % clients.length),
            ]

    return (
        <section className="py-10 text-white pd-120-0-90 backgrounds">
            <div className="container">
                <div className="section-title text-center">
                    <h3 className="section-title__tagline colorunset">Few of our Precious</h3>
                    <h2 className="section-title__title colorunset">Clients</h2>
                </div>
                <div className="">
                    <Swiper
                        modules={[Autoplay]}
                        loop
                        speed={1050}
                        grabCursor
                        autoplay={{
                            delay: 500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        spaceBetween={4}

                        // Default for large screens
                        slidesPerView={5}

                        // Override for smaller breakpoints
                        breakpoints={{
                            // when window width is >= 0px
                            0: {
                                slidesPerView: 2,
                            },
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 2,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 3,
                            },
                            // when window width is >= 1024px
                            1024: {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        {clients.map((client, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-1 rounded-md shadow-md flex items-center justify-center">
                                    <Image
                                        src={client.src}
                                        alt={client.alt}
                                        width={180}
                                        height={90}
                                        className="object-contain max-h-full"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

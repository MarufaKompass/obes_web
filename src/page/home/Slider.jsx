"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import obesity1 from "../../../public/images/home/obesity1.png";
import obesity2 from "../../../public/images/home/obesity2.png";
import obesity3 from "../../../public/images/home/obesity3.png";
import obesity4 from "../../../public/images/home/obesity4.png";

import "./slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [obesity1, obesity2, obesity3, obesity4];

export default function Slider() {
    return (
        <div className="w-full max-w-6xl mx-auto mt-10 px-4">
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                spaceBetween={15}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
                }}
                className="rounded-xl overflow-hidden"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                        <img
                            src={src.src || src}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-auto sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-xl shadow-md"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeadingWithoutSwiper from "../headingWithoutSwiper";
import { useSelector } from "react-redux";
import { BASEURL } from "@component/apiendpoints/api";

const Fourthcoming = () => {
    const { upcomingMagazine } = useSelector((state) => state?.siteSetting);
    const initialMagazine = upcomingMagazine?.data?.[0] || null;

    return (
        <section className="fourthcoming-section coming-sectionEdition">
            <HeadingWithoutSwiper name={"FOURTHCOMING LUXURY HOTEL EDITIONS"} />
            
            {/* Golden Line */}
          {/* Golden Line */}
<div className="relative w-full flex justify-center my-6">
    <img 
        src="/new/assets/img/1.png" 
        alt="Golden Line"
        className="w-4/5"
        style={{
            position: "absolute",
            top: "-30px",
            left: "50%",
            transform: "translateX(-50%) rotate(-15deg)",  
            zIndex: 10,
            pointerEvents: "none",
        }}
    />
</div>

            
            <div className="container">
                <div className="grid mt-10 grid-cols-12 gap-4">
                    {/* Left Side - Magazine Covers */}
                    <div className="col-span-full md:col-span-4">
                        <div className="relativeBox">
                            <div className="swiper-button-prev" id="custom-prev"></div>
                            <div className="swiper-button-next" id="custom-next"></div>
                            <Swiper
                                modules={[Autoplay, Navigation]}
                                navigation={{ prevEl: "#custom-prev", nextEl: "#custom-next" }}
                                spaceBetween={10}
                                slidesPerView={1}
                                className="p-0"
                            >
                                {upcomingMagazine?.data?.map((data, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={`${BASEURL}/${data?.magazine_cover_img}`}
                                            alt={`Slide ${index + 1}`}
                                            className="w-full h-auto rounded-md cursor-pointer"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    {/* Right Side - Always displays the first magazine */}
                    <div className="col-span-full md:col-span-8">
                        <div className="relativeBox">
                            <Swiper
                                modules={[Autoplay, Navigation]}
                                navigation={{ prevEl: "#custom-prev", nextEl: "#custom-next" }}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop={true}
                                spaceBetween={10}
                                slidesPerView={1}
                                className="p-0"
                            >
                                {initialMagazine?.magazine_display_img?.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={`${BASEURL}/${image}`}
                                            alt={`Slide ${index + 1}`}
                                            className="w-full h-auto rounded-md"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Fourthcoming;
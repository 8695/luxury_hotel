"use client"
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFlip, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import HearderNameIcon from '../hearderNameIcon';

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import HearderNameSection from "../hearderNameSection";


const LuxuryAward = () => {

  const route = useRouter();

  const { bestLuxuryHotelOfYear } = useSelector((state) => state.siteSetting);


  const handleRoute = (item) => {
    route.push(`/hotels/${item}`)
  }

  console.log("bestLuxuryHotelOfYear", bestLuxuryHotelOfYear);


  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration (in ms)
      easing: "ease-in-out", // Easing for the animation
      once: false,
      offset: 120,  // Whether animation should happen only once
    });
    AOS.refresh();
  });


  return (
    <section className="newly-listed-award luxuryHotelSec" style={{paddingBottom:"50px"}}>

      {/* <HearderNameSection name={"Best luxury hotel of the year"} /> */}
      {/* <h2 className="text-center pt-3">Best luxury hotel of the year</h2> */}
      <div className="container pt-4">
                    <div className="sectionInnerHead-new section-head-new">
                        {/* <h1 className="text-sm sm:text-xl md:text-sm lg:text-xl ml-2 md:ml-0 my-5 uppercase border-l-4 pl-3 border-[#846316] text-[#846316]">LATEST News</h1> */}
                        
                        <h2 className="section-heading">Best luxury hotel of the year</h2>
                        <div className="section-control">
                            <div className="swiper-button-next text-slate-300"></div>
                            <div className="swiper-button-prev text-slate-300"></div>
                            
                        </div>
                    </div>
                </div>
      <div className="container">
        <div className="row whater-effect">
        <div className="col-md-9" style={{ paddingTop: '42px' }} data-aos="fade-left">

            <Swiper className='newly-listedSwiper'
              spaceBetween={24}
              autoplay={{
                delay: 2000, // ✅ Auto-scroll every 2 seconds
                disableOnInteraction: false, // ✅ Keeps autoplay running even after user interaction
              }}
              loop={true} 
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              
              // loop={true}
              slidesPerView={3} // Adjust the number of slides visible at once
              // breakpoints={{
              //   768: {
              //     slidesPerView: 2, // 2 slides on medium screens
              //   },
              //   480: {
              //     slidesPerView: 1, // 1 slide on small screens
              //   },
              // }}
    modules={[Navigation, Pagination, EffectFlip, Autoplay]} 
            >
              {
                bestLuxuryHotelOfYear?.data?.length > 0 ?
                  bestLuxuryHotelOfYear?.data?.map((hotel, index) => (
                    <SwiperSlide key={index}>
                    <div className="hotel-cards">
                      <div className="hotel-img hotel-img-effect">
                        <img src={hotel?.hotelId?.images?.[0]} alt={hotel.name} />
                        <img src="./new/assets/img/runnerUp.png" className="hotel-of-yr-award"/>
                      </div>
                      <div className="hotel-content">
                        <h2 className="text-center text-white">{hotel?.year}</h2>
                        <button className="bg-[#ffffff] text-[#846316] px-3 py-1 blog-bottom-content rounded-md mt-3 uppercase w-full hotelNames cursor-pointer" onClick={()=>handleRoute(hotel?.hotelId?.slug)}>{hotel.hotelName}</button>
                        <button className="bg-[#846316] text-white px-3 py-1 blog-bottom-content rounded-md mt-3 uppercase w-full hotelcountry cursor-pointer" onClick={()=>handleRoute(hotel?.hotelId?.slug)}>{hotel.hotelId?.country?.country ?? "America"}</button>
                      </div>
                      <div className="hotel-img-reflect">
                          <img
                            src={hotel?.hotelId?.images?.[0]}
                            alt={hotel.name}
                            className="hotel-main-image-reflect"
                          />
                          <div className="hotel-reflection"></div>
                        </div>
                    </div>
                  </SwiperSlide>
                  
                  )):(
                    <>
                    <p>No Awarded Hotel</p>
                    </>
                  )}
                  
            </Swiper>
            
          </div>
      
          <div className="col-md-3" data-aos="fade-right">
              <div className="same-cards-best-luxury">
                <div
                  className=""
                  style={{
                    backgroundImage:
                      'url("/new/assets/img/nominate-hotel-bg.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    border: "2px solid #b79d13",
                    borderRadius: "12px",
                    height: "100%",
                  }}
                >
                  <div className="section-comman-text">
                    <h3
                      className="comman-text-heading"
                      style={{ textAlign: "center" }}
                    >
                      TOP LUXURY HOTEL OF THE YEAR
                    </h3>
                    <p className="comman-info" style={{ textAlign: "center" }}>
                      Experience the pinnacle of elegance and comfort at this
                      award-winning hotel, celebrated for its unmatched luxury
                      and world-class amenities. Indulge in the best!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </section>
  );
};

export default LuxuryAward;

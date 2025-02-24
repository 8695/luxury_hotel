"use client"
import { BASEURL } from '@component/apiendpoints/api';
import moment from 'moment';
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux'
import HearderNameSection from '../hearderNameSection';

const ExclusiveDeal = () => {

    const { exclusiveOffers } = useSelector((state) => state.siteSetting);

    const filterExlusiveOffers = exclusiveOffers?.hotel_offer?.filter((item) => item.show_on_home === true)
    console.log("getExclusiveOffers",filterExlusiveOffers)
    return (
        <>
            <section className="ExclusiveDeal ExclusiveDealSec" style={{  backgroundImage: 'url("/new/assets/img/5.png")',
                backgroundSize: 'cover'}}>
                
                <HearderNameSection name={"Exclusive Deal"} />
                <div data-aos="zoom-in" className="container">
                    <div className="grid my-[40px] grid-cols-2 md:grid-cols-6 lg:grid-cols-4 gap-4 pb-9">
                        {filterExlusiveOffers?.map((hotel) => {
                            return (
                                <div className="card w-40" style={{borderRadius:"20px"}}>
                                    <div className="card__content  relative  transition-transform duration-1000  font-bold">
                                        <div className="card__front absolute top-0 bottom-0 right-0 left-0 bg-[#C1121F]">
                                            <img style={{ maxHeight: "350px", height: "350px" }} src={`${BASEURL}/${hotel?.offer_image}`} />
                                            <span className="exclu_deal_name">{hotel?.hotel?.hotel_name}</span>
                                        </div>
                                        <div className="card__back absolute top-0 bottom-0 right-0 left-0 p-8 bg-[#9e7922]">
                                            <span className='offer-time'>
                                                Valid From: {hotel?.offer_from} </span>
                                            <span className='offer-time'>    Valid TO: {hotel?.offer_to} </span>
                                            <span className='offer-heading'>  {hotel?.offer_name} </span>

                                            <div className='text-center mt-4'>
                                                <Link href={`/hotels/${hotel?.hotel?.slug}`} className='theme-btn'> CLAIM  </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

   

                        <div className="card w-40 " data-aos="fade-right" style={{    borderRadius: "16px"}} >
                            <div className='' style={{
                            backgroundImage: 'url("/new/assets/img/nominate-hotel-bg.png")',
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                            border: "2px solid #b79d13",
                            borderRadius: "16px",
                            marginTop: "2px",
                            height: "100%"
                        }}>
                                <div className="section-comman-text">
                                    <h3 className="text-xl" style={{ textAlign: "center" }}>
                                        Exclusive Deals
                                    </h3>
                                    <p className="comman-info" style={{ textAlign: "center" }}>
                                        Catch up on the most recent updates and breaking stories from around the world. Stay informed, stay ahead!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default ExclusiveDeal
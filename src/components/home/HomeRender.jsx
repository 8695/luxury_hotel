import React, { useEffect } from 'react'
import HeroBanner from './HeroSection'
import FilterSection from './FilterSection'
import NewlyListedHotels from '../NewHotelList'
// import BrandSection from './brandSection'
import NewsletterSection from './NewsletterSection'
import ExclusiveDeal from './ExclusiveDeal'

import BrandSection from './BrandSection'

import VideoContainer from './VideoContainer'
import Fourthcoming from './Fourthcoming'
// import TravelNews from './Travel-News'
import LatestNews from './LatestNews'
import LuxuryAward from './LuxuryAward'
import { useDispatch, useSelector } from 'react-redux'
import { get_addons_home_Data, getAllHotels, getBestLuxuryHotelOfYear, getCountryVideos, getExclusiveOffers, getHomeData, getLatestNews, getNewlyListedHotel, getPartners, getTravelNews, getUpcomingMagazine, search_hotel, siteContentActions } from '@component/lib/slice/sitesSetting'
import TravelNews from './Travel-News'
import LuxGateWeek from './LuxGateWeek'



const HomeRender = () => {
  const dispatch=useDispatch()

useEffect(()=>{
dispatch(get_addons_home_Data())
dispatch(search_hotel())
dispatch(getNewlyListedHotel())
dispatch(getCountryVideos())
dispatch(getPartners())
dispatch(getAllHotels())
dispatch(getBestLuxuryHotelOfYear())
dispatch(getUpcomingMagazine())
dispatch(getLatestNews())
dispatch(getExclusiveOffers())
dispatch(getTravelNews())
dispatch(getHomeData())
},[])
  return (
    <>
    <HeroBanner/>
    <div className='col-md-12'>
    <div
                className="position-absolute start-50 translate-middle-x"
                style={{ backgroundImage: "url('/new/assets/img/transparent-bg.png')", backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', padding: '100px 0', top: '80%' }}
              >
                <div className="text-center p-4 bg-opacity-50 rounded w-11/12 mx-auto">
                  <p className="text-sm text-dark">
                    Luxury Hotels, a renowned global brand founded in England 17 years ago, is currently present in 89 countries.
                    We provide Luxury Hotels for affluent travelers through our online platform and in print and digital formats.
                    Each edition is accessible for free download on 5 different platforms and attracts 4-5 million online readers annually.
                  </p>
                  <p className="text-sm text-dark mt-3">
                    Through our Printed Edition Rotation Program, your hotel will be featured as one of the top Luxury Hotels and will ensure a
                    continuous influx of bookings and a consistent occupancy rate of 800,000 to 1 million tourists throughout the year, all
                    without any commission fees.
                  </p>
                </div>
              </div>
    </div>
    <div style={{
      backgroundImage: 'url("/new/assets/img/2.png")',
      backgroundSize: 'cover',
      // backgroundPosition: 'center center'
    }}>

    <FilterSection/>
    <NewlyListedHotels/>
    </div>
    <LuxGateWeek />
    <BrandSection/>  
    <div style={{  backgroundImage: 'url("/new/assets/img/3.png")',
            backgroundSize: 'cover'}}>
    <LuxuryAward />
      </div>   
    <Fourthcoming />
    
    <TravelNews />
   
    <VideoContainer/>  
     {/* <LatestNews /> */}
    <ExclusiveDeal/>
    <NewsletterSection/>
    </>
  )
}

export default HomeRender
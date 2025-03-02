import WinHolidayPage from '@component/components/commonPage/WinHolidayPage';
import HeadingWithoutSwiper from '@component/components/headingWithoutSwiper'
import VideoContainer from '@component/components/home/VideoContainer';
// import SwiperComponent from '@component/components/SwiperComponent'
import React from 'react'

function page() {
  return (
    <>
     <section data-aos="zoom-in" className="hero-banner">
        <VideoContainer />
    </section>
    <HeadingWithoutSwiper name={"Win a trip"} />
    <div className='container'>
    <WinHolidayPage />
    </div>
    </>
  )
}

export default page;
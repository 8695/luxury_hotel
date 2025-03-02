import Magazines from '@component/components/cards/Magazines'
import HeadingWithoutSwiper from '@component/components/headingWithoutSwiper'
import VideoContainer from '@component/components/home/VideoContainer'
import React from 'react'

const page = () => {
    return (
        <>
            <section data-aos="zoom-in" className='Magazines-section '>
            
        <VideoContainer />
   
                <HeadingWithoutSwiper name={"Luxury hotels Magazines"} />
                <div className='container whater-effect section-padding'>
                    <Magazines />
                </div>
            </section>
        </>
    )
}

export default page
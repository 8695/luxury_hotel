import HeadingWithoutSwiper from '@component/components/headingWithoutSwiper'
import TravelNews from '@component/components/home/Travel-News'
import React from 'react'

import PublishNewsPage from '@component/components/PublishNewsPage';
import VideoContainer from '@component/components/home/VideoContainer';

function page() {

  return (
    <>
      <div className='LatestNews-sec'>
      
        <VideoContainer />
    
        <HeadingWithoutSwiper name={"LATEST NEWS"} />
        <div className='container'>
          <PublishNewsPage />
        </div>
      </div>
    </>
  )
}

export default page
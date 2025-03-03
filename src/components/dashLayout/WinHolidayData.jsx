"use client";
import { apis } from '@component/apiendpoints/api';
import useRequest from '@component/hooks/UseRequest';
import React, { useEffect, useState } from 'react'
import Table from './Table';

function WinHolidayData() {

      const [winHolidayData, setWinHolidayData] = useState([]);
      const [searchTerm, setSearchTerm] = useState("");
      const [isTrue,setIsTrue] = useState(false)

    const { request: requestData, response: responseData, loading: loadingData } = useRequest(true);
    const userdetails = localStorage.getItem("userdetails");
  const hotel_deatails = localStorage.getItem("hotel_details");
    const userdetailsJsonString = JSON.parse(userdetails);
  const hotelDetailsJsonString = JSON.parse(hotel_deatails);

     useEffect(() => {
        // if (!showModal) {
        if (hotelDetailsJsonString?._id) {
    
          requestData("GET", `${apis.GET_ALL_WIN_HOLIDAY__DATA_DASHBOARD}/${hotelDetailsJsonString?._id}`);
        }
        // }
      }, []);

      useEffect(()=>{
        if(isTrue){
          requestData("GET", `${apis.GET_ALL_WIN_HOLIDAY__DATA_DASHBOARD}/${hotelDetailsJsonString?._id}`);
        }
       
      },[isTrue])

       useEffect(() => {
          if (responseData) {
            setWinHolidayData(responseData?.response);
          }
        }, [responseData]);
        const filteredData = winHolidayData.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          );

  return (
    <div className="dashboard-section p-0">

<div className="text-end">
        
        
        </div>
        <div className="white-box">
              <div className="with-input-btn ">
                <div className="form-group w-100">
                  <label className="comman-heading3 mb-2">Search by Holiday Title</label>
                  <input
                    type="text"
                    placeholder="Search by title"
                    className="form-control with-border"
                    value={searchTerm} // Bind the value to the state
                    onChange={(e) => setSearchTerm(e.target.value)} // Update the search term state
                  />
                </div>
              </div>
              <Table winHolidayData={filteredData} setIsTrue={setIsTrue} isTrue={isTrue}/>
            </div>
    </div>
  )
}

export default WinHolidayData
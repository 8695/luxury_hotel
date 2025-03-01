import React from 'react';
import HeadingWithoutSwiper from '../headingWithoutSwiper';


function WinHolidayDescriptionPage() {
    return (
        <>
            
            <section className='VideoContainer-sec'>
        <div >
          <img src="/new/assets/img/img1.jpg" style={{    width: "100%",
    // height:" 97%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"}}/>
        </div>
        <div className='VideoContainerText'>
          <figure className="banner-logo">
            <img src="/new/assets/img/logo.svg" alt="Luxury Hotels Logo" />
     
            <span
                style={{ fontSize: "25px", fontFamily: "Georgia", color: "#7B6929" }}
              >
                PRESENTS
              </span>
          </figure>
        </div>
      </section>
            <div className="text-center text-warning my-4 text-uppercase">
                <h4 style={{fontSize:"1.5rem"}}>Niranjan</h4>
                <h5 className="h5 my-3">Holiday Dates: January 30, 2025 - January 31, 2025</h5>
                <p className="small">Competition ends on January 25, 2025</p>
            </div>
            <div className="nominate-hotel-section">
                <section className="win-a-holiday">
                    <HeadingWithoutSwiper name={"Niranjan"} />
                    <div className="container py-4">
                        <div className="nav nav-tabs" id="myTabs" role="tablist">
                            <button className="nav-link active text-black" id="holiday-tab" data-bs-toggle="tab" data-bs-target="#holiday" type="button" role="tab" aria-controls="holiday" aria-selected="true">Holiday Description</button>
                            <button className="nav-link  text-black" id="conditions-tab" data-bs-toggle="tab" data-bs-target="#conditions" type="button" role="tab" aria-controls="conditions" aria-selected="false">Conditions</button>
                        </div>
                        <div className="tab-content py-3">
                            <div className="tab-pane fade show active" id="holiday" role="tabpanel" aria-labelledby="holiday-tab">
                                <div className="bg-white p-4 rounded shadow">
                                    <h5 className="text-uppercase text-[#846316]">Holiday Title</h5>
                                    <p>dsfkdl</p>
                                    <h5 className="text-uppercase text-[#846316]">Dates Holiday Valid For</h5>
                                    <p><strong>Valid From:</strong> January 30, 2025</p>
                                    <p><strong>Valid To:</strong> January 31, 2025</p>
                                    <h5 className="text-uppercase text-[#846316]">Entries must be submitted by</h5>
                                    <p>January 25, 2025</p>
                                    <h5 className="text-uppercase text-[#846316]">Number of Clients:</h5>
                                    <p>1 Adult and 5 Children</p>
                                    <h5 className="text-uppercase text-[#846316]">Room Type:</h5>
                                    <p>2 Deluxe Rooms</p>
                                    <h5 className="text-uppercase text-[#846316]">Package Highlights</h5>
                                    <p>ertert</p>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="conditions" role="tabpanel" aria-labelledby="conditions-tab">
                                <div className="bg-white p-4 rounded shadow">
                                    <h5 className="text-uppercase text-[#846316]">Conditions for Entry</h5>
                                    <h5 className="text-[#846316]">Winner Selection and Notification:</h5>
                                    <ul className='text-black'>
                                        <li>The winner will be chosen by the hotel.</li>
                                        <li>The selection will occur within 7 days of the competition's closing.</li>
                                        <li>The winner will be notified via email and receive a holiday voucher.</li>
                                    </ul>
                                    <h5 className="text-[#846316]">Social Media Obligation:</h5>
                                    <ul className='text-black'>
                                        <li>The winner must post about winning and share their experience on social media.</li>
                                        <li>They must send a copy of their post to winner@LuxuryHotelsMagazines.com.</li>
                                        <li>Tag @LuxuryHotels_original on Instagram.</li>
                                    </ul>
                                    <h5 className="text-[#846316]">Client Data Protection:</h5>
                                    <ul className='text-black'>
                                        <li>Data may be used for future promotions but will not be sold.</li>
                                    </ul>
                                    <form className="mt-4">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <input type="text" placeholder="First Name" className="form-control" name="first_name" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" placeholder="Last Name" className="form-control" name="last_name" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="email" placeholder="Email" className="form-control" name="user_email" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" placeholder="Country" className="form-control" name="user_country" />
                                            </div>
                                            <div className="col-12">
                                                <button className="save-btn w-100" type="submit" disabled>Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default WinHolidayDescriptionPage;

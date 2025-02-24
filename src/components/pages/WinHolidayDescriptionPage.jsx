import React from 'react';


function WinHolidayDescriptionPage() {
    return (
        <>
            <section className="hero-banner-util mb-4 text-center" style={{ backgroundImage: 'url(/img/win-a-holyday/winaholydaysingle.png)', backgroundSize: 'cover', backgroundPosition: 'center', padding: '50px 0' }}>
                <div>
                    <img src="/img/logoRed.svg" className="img-fluid" alt="Logo" />
                    <p className="text-uppercase text-warning mt-2">Presents</p>
                </div>
            </section>
            <div className="text-center text-warning my-4 text-uppercase">
                <h1 className="display-4">Niranjan</h1>
                <h3 className="h5 my-3">Holiday Dates: January 30, 2025 - January 31, 2025</h3>
                <p className="small">Competition ends on January 25, 2025</p>
            </div>
            <div className="my-4 container">
                <section className="win-a-holiday">
                    <div className="bg-primary py-3 text-center">
                        <h2 className="text-light px-3 py-2 bg-white d-inline-block text-uppercase">Niranjan</h2>
                    </div>
                    <div className="container py-4">
                        <div className="nav nav-tabs" id="myTabs" role="tablist">
                            <button className="nav-link active text-warning" id="holiday-tab" data-bs-toggle="tab" data-bs-target="#holiday" type="button" role="tab" aria-controls="holiday" aria-selected="true">Holiday Description</button>
                            <button className="nav-link text-warning" id="conditions-tab" data-bs-toggle="tab" data-bs-target="#conditions" type="button" role="tab" aria-controls="conditions" aria-selected="false">Conditions</button>
                        </div>
                        <div className="tab-content py-3">
                            <div className="tab-pane fade show active" id="holiday" role="tabpanel" aria-labelledby="holiday-tab">
                                <div className="bg-white p-4 rounded shadow">
                                    <h3 className="text-uppercase text-warning">Holiday Title</h3>
                                    <p>dsfkdl</p>
                                    <h3 className="text-uppercase text-warning">Dates Holiday Valid For</h3>
                                    <p><strong>Valid From:</strong> January 30, 2025</p>
                                    <p><strong>Valid To:</strong> January 31, 2025</p>
                                    <h3 className="text-uppercase text-warning">Entries must be submitted by</h3>
                                    <p>January 25, 2025</p>
                                    <h3 className="text-uppercase text-warning">Number of Clients:</h3>
                                    <p>1 Adult and 5 Children</p>
                                    <h3 className="text-uppercase text-warning">Room Type:</h3>
                                    <p>2 Deluxe Rooms</p>
                                    <h3 className="text-uppercase text-warning">Package Highlights</h3>
                                    <p>ertert</p>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="conditions" role="tabpanel" aria-labelledby="conditions-tab">
                                <div className="bg-white p-4 rounded shadow">
                                    <h3 className="text-uppercase text-warning">Conditions for Entry</h3>
                                    <h5 className="text-warning">Winner Selection and Notification:</h5>
                                    <ul>
                                        <li>The winner will be chosen by the hotel.</li>
                                        <li>The selection will occur within 7 days of the competition's closing.</li>
                                        <li>The winner will be notified via email and receive a holiday voucher.</li>
                                    </ul>
                                    <h5 className="text-warning">Social Media Obligation:</h5>
                                    <ul>
                                        <li>The winner must post about winning and share their experience on social media.</li>
                                        <li>They must send a copy of their post to winner@LuxuryHotelsMagazines.com.</li>
                                        <li>Tag @LuxuryHotels_original on Instagram.</li>
                                    </ul>
                                    <h5 className="text-warning">Client Data Protection:</h5>
                                    <ul>
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
                                                <button className="btn btn-primary w-100" type="submit" disabled>Submit</button>
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

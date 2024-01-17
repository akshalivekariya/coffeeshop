import React from 'react'

const Services = () => {
  return (
    <div d="servicespage">
      <section className="services-wrap section-gap">
                <div className="container">
                    <div className="section-title text-center pb-60">
                        <span className="subheading">Our Services</span>
                        <h2 className="title">Fresh &amp; Organic Beans</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-5">
                            <div className="row align-items-center">
                                <div className="col-sm-5">
                                    <img className="img-fluid mb-3 mb-sm-0" src="./images/service-1.jpg" alt="" />
                                </div>
                                <div className="col-sm-7">
                                    <h4><i className="fa fa-truck service-icon"></i>Fastest Service</h4>
                                    <p className="m-0">Only a few minutes to setup and then you’ll never run out of fresh roasted coffee again.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-5">
                            <div className="row align-items-center">
                                <div className="col-sm-5">
                                    <img className="img-fluid mb-3 mb-sm-0" src="./images/service-2.jpg" alt="" />
                                </div>
                                <div className="col-sm-7">
                                    <h4><i className="fa fa-coffee service-icon"></i>Fresh Coffee Beans</h4>
                                    <p className="m-0">Our Nostalgia blend, a full-bodied coffee, is an elegant deep flavour with touches of sweet vanilla, chocolate and brown sugar sweetness.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-5">
                            <div className="row align-items-center">
                                <div className="col-sm-5">
                                    <img className="img-fluid mb-3 mb-sm-0" src="./images/service-3.jpg" alt="" />
                                </div>
                                <div className="col-sm-7">
                                    <h4><i className="fa fa-award service-icon"></i>Best Quality Coffee</h4>
                                    <p className="m-0">It’s true. The perfect cup of coffee and a wholesome, delicious snack can make your day. So we make sure everything you choose is of the finest quality.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-5">
                            <div className="row align-items-center">
                                <div className="col-sm-5">
                                    <img className="img-fluid mb-3 mb-sm-0" src="./images/service-4.jpg" alt="" />
                                </div>
                                <div className="col-sm-7">
                                    <h4><i className="fa fa-table service-icon"></i>Online Table Booking</h4>
                                    <p className="m-0">Today, everything is digitalized and even we  also following the same path.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mcb-section section-gap">
                <div className='container'>
                    <div className="row">
                        <div className="col-md-6 mcb-wrap">
                            <div className="image_wrapper">
                                <img className="scale-with-grid" src="./images/service_coffee.jpg" alt="home_coffee2_pic1" width="100%" height="100%" />
                            </div>
                        </div>
                        <div className="col-md-6 mcb-content-wrap ps-5">
                            <div className="content-wrapper">
                                <div className="section-title text-center pb-3">
                                    <span className="subheading">Aim</span>
                                    <h2 className="title">Our Mission</h2>
                                </div>
                                <p>To provide the best quality coffee from social and environmentally responsible farms. We connect farmers and coffee enthusiasts to produce one of the best products on the market. Coffee is all about people, love and passion.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Services

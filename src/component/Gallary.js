import React from 'react'
import { MdAddIcCall } from "react-icons/md";

const Gallary = () => {
  return (
    <div>
             <section className="gallery-more-section section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="title pb-4">
                            <span className="subheading">Special</span>
                            <h2 className="title gallery-title">What Specialty Coffee</h2>
                        </div>
                        <div className="gallery-list-box-wrap">
                            <div className="gallery-list-box-row">
                                <div className="gallery-list-box-content">
                                    <h4>COFFEE CRAFTED FOR YOU, AND YOU, AND YOU</h4>
                                    <p>We aim to create an approachable environment where everyone has a seat at the table and the bean benefits all.</p>
                                </div> 
                            </div>
                            <div className="gallery-list-box-row">
                                <div className="gallery-list-box-content">
                                    <h4>LOVE FOR THE BEAN</h4>
                                    <p>With every brew, we pour our passion and expertise into designing a cup of coffee with your pleasure and tastes in mind.</p>
                                </div> 
                            </div>
                            <div className="gallery-list-box-row">
                                <div className="gallery-list-box-content">
                                    <h4>A GLOBAL COFFEE COMMUNITY</h4>
                                    <p>All our coffee is purchased at or above fair trade price from transparent and sustainable brokers and farmers.</p>
                                </div> 
                            </div>
                            <div className="gallery-list-box-row">
                                <div className="gallery-list-box-content">
                                    <h4>NOT YOUR AVERAGE COFFEE ROASTER</h4>
                                    <p>As coffee nerds, we have a quirky outlook sourced from the early days of science fiction, fantasy, and lore.</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0">
                            <div className="col-md-6">
                                <div className="gallery-box-images">
                                    <img src="./images/gallery-more-01.webp" className="coffee-fit-img img-thumbnail" alt="gallery-image"/>
                                </div>
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                        <div className="row g-0">
                            <div className="col-md-6"></div>
                            <div className="col-md-6">
                                <div className="gallery-box-images">
                                    <img src="./images/gallery-more-02.jpg" className="coffee-fit-img img-thumbnail" alt="gallery-image"/>
                                </div>
                            </div>
                        </div>
                        <div className="row g-0">
                            <div className="col-md-6">
                                <div className="gallery-box-images">
                                    <img src="./images/gallery-more-03.jpg" className="coffee-fit-img img-thumbnail" alt="gallery-image"/>
                                </div>
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                        <div className="row g-0">
                            <div className="col-md-6"></div>
                            <div className="col-md-6">
                                <div className="gallery-box-images">
                                    <img src="./images/gallery-more-04.jpg" className="coffee-fit-img img-thumbnail" alt="gallery-image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        <section className="gallery-area section-gap" id="gallery">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="menu-content pb-60">
                            <div className="title text-center">
                                <span className="subheading">Gallery</span>
                                <h2 className="title gallery-title">Our Coffees Gallery</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="img-pop-home">
                                <img className="img-fluid" src="./images/g1.jpg" alt=""/>
                            </div>
                            <div className="img-pop-home">
                                <img className="img-fluid" src="./images/g2.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="img-pop-home">
                                <img className="img-fluid" src="./images/g3.jpg" alt="" />
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="img-pop-home">
                                        <img className="img-fluid" src="./images/g4.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="img-pop-home">
                                        <img className="img-fluid" src="./images/g5.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default Gallary

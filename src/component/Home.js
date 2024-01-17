import React from "react";
import { Link ,} from 'react-router-dom'


// import Coffee_Capucino from "./component/Coffee_Capucino";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdCoffee,MdStar,MdSupervisorAccount } from "react-icons/md";
//import './fontawesome.all.min.css';
import './style.css';

function Home() {
    const Homepage = ({updateUser}) => {
        return (
            <div className="homepage">
                <h1>Hello Homepage</h1>
                <div className="button" onClick={() => updateUser({})} >Logout</div>
            </div>
        )
    }
    
    return (
        <div id="homepage">
            <section className="home">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="img-fluid d-block w-100"
                            src="./images/img1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <span className="subheading">Coffee</span>
                            <h3>WELCOME TO DRIP-COFFEE</h3>
                            <p>perfect cup of office coffee.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img-fluid d-block w-100"
                            src="./images/img2.jpg "
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <span className="subheading">Coffee</span>
                            <h3>COFFEE CAPTION</h3>
                            <p>A bad day with coffee is better than a good day without it</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img-fluid d-block w-100"
                            src="./images/img3.webp"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                           <span className="subheading">Coffee</span>
                            <h3>COFFEE HEAVEN</h3>
                            <p>
                            Coffee smells like freshly ground heaven.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <section className="video-sec-area section-gap">
                <div className="container">
                    <div className="row justify-content-start align-items-center">
                        <div className="col-lg-6 video-right justify-content-center align-items-center d-flex">
                            <div className="overlay overlay-bg"></div>
                            <a className="play-btn" href="https://www.youtube.com/watch?v=ARA0AxrnHdM">
                                <img className="img-fluid" src="./images/video-play.webp"  alt="about-video"/>
                            </a>
                        </div>
                        <div className="col-lg-6 video-left">
                            <h6>Live Coffee making process.</h6>
                            <h2>We Telecast our <br/>
                                Coffee Making Live</h2>
                            <p><span>We are here to listen from you deliver exellence</span></p>
                            <p className="video-content">
                            I had never made a cappuccino before testing this recipe. But, wow, am I glad that I tried it out! The creaminess and balance of the milk, foam, and espresso was just spectacular. I can make this in the comfort of my own home, and it makes my wallet happy, too!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section section-gap">
                <div className="container">
                    <div className="row justify-content-center pb-3">
                        <div className="col-md-7 heading-section ftco-animate text-center fadeInUp ftco-animated">
                            <span className="subheading">Sellers</span>
                            <h2 className="title mb-4">Best Coffee Sellers</h2>
                            <p>It’s amazing how the world begins to change through the eyes of a cup of coffee.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="menu-entry">
                            <Link to="/coffee_cappuccino" target="_blank" className="menu-img menu-img-1"></Link>
                                <div className="text text-center pt-4">
                                    <h3><a href="/coffee_capucino" target="_blank">Coffee Capuccino</a></h3>
                                    <p>2-finely ground dark roast coffee 4 ounces water</p>
                                    <p className="price"><span>₹ 300</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="menu-entry">
                                <a href="/coffee_americano" target="_blank" className="menu-img menu-img-2"></a>
                                <div className="text text-center pt-4">
                                    <h3><a href="/coffee_americano" target="_blank">Coffee Americano</a></h3>
                                    <p>2 ounces (2 shots) espresso
4 ounces hot water</p>
                                    <p className="price"><span>₹ 400</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="menu-entry">
                                <a href="/Coffee_Macchiato" target="_blank" className="menu-img menu-img-3"></a>
                                <div className="text text-center pt-4">
                                    <h3><a href="/Coffee_Macchiato" target="_blank">Coffee Macchiato</a></h3>
                                    <p>2 espresso shots(2 ounces)
2 ounces (¼ cup)milk foam</p>
                                    <p className="price"><span>₹ 295</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="menu-entry">
                                <a href="/coffee_affogato" target="_blank" className="menu-img menu-img-4"></a>
                                <div className="text text-center pt-4">
                                    <h3><a href="/coffee_affogato" target="_blank">Coffee Affogato</a></h3>
                                    <p>Strong brewed coffee Espresso powder hotwater</p>
                                    <p className="price"><span>₹ 240</span>
                                    
            </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
           
            <section className="ftco-counter ftco-bg-dark img" id="section-counter">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <div className="icon"><MdCoffee/><span className="MdCoffee"></span></div>
                                            <strong className="number" data-number="100">100</strong>
                                            <span>Coffee Branches</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <div className="icon"><MdStar/><span className="MdStar"></span></div>
                                            <strong className="number" data-number="85">85</strong>
                                            <span>Number of Awards</span>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <div className="icon"><MdSupervisorAccount/><span className="MdSupervisorAccount"></span></div>
                                            <strong className="number" data-number="10567">10,567</strong>
                                            <span>Happy Customer</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <div className="icon"><MdSupervisorAccount/><span className="MdSupervisorAccount"></span></div>
                                            <strong className="number" data-number="900">900</strong>
                                            <span>Staff</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
import  React from 'react';

const About = () => {
  return (
    <div>
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
            <section className="about-us-wrap section-gap">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="subheading">We Are</span>
                        <h2 className="title mb-4">About Us</h2>
                    </div>
                    <div className="row">
                    <div className="col-lg-4 py-0 py-lg-5">
                            <h1 className="mb-3">Our Story</h1>
                            <h5 className="mb-3">in 2008,we startes our business from a small shpo in surat..</h5>
                            <p className="content">with the support of people on this time we get this successfull stage on surat,and we wish we will give you all that effortes that the people wants from us....</p>
                            <p  className="signacture"> <img className="" src="./images/sig.jpg" /> </p>
                            <a href="" className="btn btn-first font-weight-bold py-2 px-4 mt-2">Learn More</a>
                        </div>
                        <div className="col-lg-4 py-5 py-lg-0 menu-col-img">
                            <div className="position-relative h-100">
                            <img className="position-absolute w-100 h-100" src="./images/about.png" />
                            </div>
                        </div>
                        <div className="col-lg-4 py-0 py-lg-5">
                            <h1 className="mb-3">Our Vision</h1>
                            <p className="content">To provide the best quality coffee from social and environmentally responsible farms. We connect farmers and coffee enthusiasts to produce one of the best products on the market. Coffee is all about people, love and passion.</p>
                            <h5 className="mb-3"><i className="fa fa-check text-primary mr-3"></i>The  smell of fresh - made </h5>
                            <h5 className="mb-3"><i className="fa fa-check text-primary mr-3"></i>coffee is one of the world's </h5>
                            <h5 className="mb-3"><i className="fa fa-check text-primary mr-3"></i>greatest inventions.........</h5> 
                            <a href="" className="btn btn-sec font-weight-bold py-2 px-4 mt-2">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
           
    </div>
  )
}

export default About
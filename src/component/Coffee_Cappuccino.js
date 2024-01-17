import React from 'react'
import { MdAddIcCall } from "react-icons/md";

const Coffee_Capucino = () => {
  return (
    <div>
        <section className="product-menu-baner-area">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="menu-content">
                        <div className="title ps-5">
                            <span className="subheading">Product</span>
                            <h2 className="title gallery-title pt-4">Our Coffee ☕</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="product-section section-gap">
            <div className='container'>
                <div className="section-title pb-5 text-center">
                    <p className='section-title-letter'>LET'S DESCRIBE OUR COFFEE.</p>
                    <h2 className="title">Coffee Capucino</h2>
                </div>
                <div className="row product-row">
                    <div className="col-md-8 product-wrap ">
                        <div className="image_wrapper">
                            <img className="scale-with-grid" src="./images/menu-7.webp" alt="home_coffee2_pic1" width="100%" height="100%" />
                        </div>
                    </div>
                    <div className="col-md-12 product-content-wrap pt-5">
                        <div className="content-wrapper">
                            <p>A cappuccino is a coffee-based drink made primarily from espresso and milk. It consists of one-third espresso, one-third heated milk and one-third milk foam and is generally served in a 6 to 8-ounce cup. The cappuccino is considered one of the original espresso drinks representative of Italian espresso cuisine and eventually Italian-American espresso cuisine.</p>
                            <p>A cappuccino is the perfect balance of espresso, steamed milk and foam. This coffee is all about the structure and the even splitting of all elements into equal thirds. An expertly made cappuccino should be rich, but not acidic and have a mildly sweet flavouring from the milk. And, because the milk is not actually mixed in it gives the espresso a stronger flavour.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Coffee_Capucino

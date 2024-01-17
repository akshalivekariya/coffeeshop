import React from 'react'
import { MdAddIcCall } from "react-icons/md";

const Coffee_Affogato = () => {
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
                    <h2 className="title">Coffee Affogato</h2>
                </div>
                <div className="row product-row">
                    <div className="col-md-8 product-wrap ">
                        <div className="image_wrapper">
                            <img className="scale-with-grid" src="./images/menu-4.webp" alt="home_coffee2_pic1" width="100%" height="100%" />
                        </div>
                    </div>
                    <div className="col-md-12 product-content-wrap pt-5">
                        <div className="content-wrapper">
                            <p>Affogato coffee consists of a shot of espresso and a scoop of vanilla-flavored ice cream. It’s commonly served with dessert due to its sweet taste. Affogato coffee is a modern beverage that has made waves in coffee shops and restaurants due to its distinct taste and heavy texture.  </p>
                            <p>An affogato couldn’t be simpler to create. There isn’t a set recipe to follow but rather a set of easy-to-follow steps that require almost zero prep. </p>
                            <p>A shot of hot, high-quality espresso is poured directly on the tightly-packed scoop and served immediately with a spoon—sort of like a hot, coffee-based root beer float. For a stronger coffee taste, use a double shot of espresso. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Coffee_Affogato

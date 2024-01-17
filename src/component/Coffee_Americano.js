import React from 'react'
import { MdAddIcCall } from "react-icons/md";

const Coffee_Americano = () => {
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
                    <h2 className="title">Coffee Americano</h2>
                </div>
                <div className="row product-row">
                    <div className="col-md-8 product-wrap ">
                        <div className="image_wrapper">
                            <img className="scale-with-grid" src="./images/menu-6.webp" alt="home_coffee2_pic1" width="100%" height="100%" />
                        </div>
                    </div>
                    <div className="col-md-12 product-content-wrap pt-5">
                        <div className="content-wrapper">
                            <p>An Americano is an espresso diluted with water. Well, it’s not quite that simple, but that’s the core of it. A long black is also made with espresso and water, but the way it is made is different from an Americano. What's important for now, is the Americano is a coffee drink, a way of serving coffee, and not a coffee brewing method. Think of it this way. When brewing coffee, you might use a French Press, pour-over, drip coffee machine, Aeropress, espresso machine, or one of the other popular methods to extract flavor from coffee grounds using hot, or in the case of cold brew, room-temperature water. An Americano, on the other hand, is like a latte, cappuccino, or mocha in the sense that the drink is made from coffee that already has been brewed.</p>
                            <p>An Americano is made by pouring hot water over one or two espresso shots, resulting in a drink of similar volume and strength to regular coffee. The key to an Americano is that it starts with espresso and adopts the flavors and aromas of the espresso, but with a less powerful taste. We’ll provide a more detailed recipe later, but that’s the basic idea. For now, take note that the espresso shot comes first, and then the hot water is added.</p>
                        </div>
                        <div className="content-img">
                            <img className="img-fluid" src="./images/The-americano-coffee.png" alt="product images" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Coffee_Americano

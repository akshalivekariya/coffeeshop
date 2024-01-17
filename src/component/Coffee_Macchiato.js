import React from 'react'
import { MdAddIcCall } from "react-icons/md";

const Coffee_Macchiato = () => {
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
                    <h2 className="title">Coffee Macchiato</h2>
                </div>
                <div className="row product-row">
                    <div className="col-md-8 product-wrap ">
                        <div className="image_wrapper">
                            <img className="scale-with-grid" src="./images/menu-5.webp" alt="home_coffee2_pic1" width="100%" height="100%" />
                        </div>
                    </div>
                    <div className="col-md-12 product-content-wrap pt-5">
                        <div className="content-wrapper">
                            <p>In Italian, the term "macchiato" translates as "marked" or "stained", meaning a stained or marked coffee. The macchiato is an espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through.</p>
                            <p>A macchiato is sometimes known as an espresso macchiato or a caffè macchiato. In the most basic terms, it is an espresso with a dash of milk. The name macchiato comes from Italian, and it means marked, stained, or spotted. This description relates to the milk’s mark when you add it to the dark, rich espresso. The quantity of milk is just enough to lighten the color of the coffee and pierce the smooth, black surface.</p>
                            <div className="content-img">
                             <img className="img-fluid" src="./images/macchiato-coffee.png" alt="product images" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Coffee_Macchiato

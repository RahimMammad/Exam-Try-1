import React from 'react'
import "./index.scss"
import Image from "../../assets/hero-banner.png.webp"

const Browse = () => {
  return (
    <div className='browse-main-container'>
        <div className='blue-bg'></div>
        <div className='browse-main'>
            <img src={Image} alt="" />
            <div className='browse-right'>
                <h4>Shop is fun</h4>
                <h1>BROWSE OUR PREMIUM PRODUCT</h1>
                <p>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</p>
                <button>Browse Now</button>
            </div>
        </div>
    </div>
  )
}

export default Browse
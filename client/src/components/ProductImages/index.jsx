import React from 'react'
import "./index.scss"

const ProductImages = () => {
  return (
    <div className='picture-main-container'>
        <div className='picture'>
            <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-slide1.png.webp" alt="" />
            <div className='hover-picture'></div>
        </div>
        <div className='picture'>
            <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-slide2.png.webp" alt="" />
            <div className='hover-picture'></div>
        </div>
        <div className='picture'>
            <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-slide3.png.webp" alt="" />
            <div className='hover-picture'></div>
        </div>
    </div>
  )
}

export default ProductImages
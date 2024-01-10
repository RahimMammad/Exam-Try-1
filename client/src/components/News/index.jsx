import React from 'react'
import "./index.scss"
import { FaArrowRightLong } from "react-icons/fa6";

const News = () => {
  return (
    <div className='news-main'>
        <div className='product-title'>
            <p>Popular Item in the market</p>
            <h2>Latest <span>News <div className='blue-border'></div></span></h2>
        </div>
        <div className="news-main-container">
            <div className="news">
                <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog1.png.webp" alt="" />
                <div className="admin-comment">
                    <p>By Admin</p>
                    <p><i class="fa-regular fa-face-smile"></i>2 Comments</p>
                </div>
                <h5>The Richland Center Shooping News and weekly shooper</h5>
                <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                <div className='read' style={{display: "flex", gap: "5px", alignItems: "center"}}><span>Read Me</span> <FaArrowRightLong className="arrow" /></div>
            </div>
            <div className="news">
                <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog2.png.webp" alt="" />
                <div className="admin-comment">
                    <p>By Admin</p>
                    <p><i class="fa-regular fa-face-smile"></i>2 Comments</p>
                </div>
                <h5>The Shopping News also offers top-quality printing services</h5>
                <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                <div className='read' style={{display: "flex", gap: "5px", alignItems: "center"}}><span>Read Me</span> <FaArrowRightLong className="arrow" /></div>
            </div>
            <div className="news">
                <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog3.png.webp" alt="" />
                <div className="admin-comment">
                    <p>By Admin</p>
                    <p><i class="fa-regular fa-face-smile"></i>2 Comments</p>
                </div>
                <h5>Professional design staff and efficient equipment you’ll find we offer</h5>
                <p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
                <div className='read' style={{display: "flex", gap: "5px", alignItems: "center"}}><span>Read Me</span> <FaArrowRightLong className="arrow" /></div>
            </div>
        </div>
    </div>
  )
}

export default News
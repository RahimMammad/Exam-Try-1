import React from 'react'
import "./index.scss"
import UseFetchData from '../../hooks/UseFetchData';
import Card from '../Product';
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';

const BestSellers = () => {
    const {data} = UseFetchData()
    console.log(data);
    return (
        <div className='product-main'>
            <div className='product-title'>
                <p>Popular Item in the market</p>
                <h2>Best <span>Sellers <div className='blue-border'></div></span></h2>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                modules={[Pagination, Navigation, Mousewheel, Keyboard]}
                className="mySwiper"
                navigation={true}
                mousewheel={true}
                keyboard={true}
                style={{paddingTop: "50px", paddingBottom: "70px"}}
            >
                {
                    data && data.map((item) => {
                        return (
                            <SwiperSlide><Card key={item._id} item={item} /></SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default BestSellers
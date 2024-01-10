import React from 'react'
import "./index.scss"
import { useNavigate } from "react-router-dom"
import { FaEye } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Card = ({item}) => {
  const navigate = useNavigate();
  console.log(item);
  return (
    <div className='card'>
        <div className='image'>
          <img src={item.image} alt="" />
          <div className="like-basket">
            <FaEye onClick={() => navigate(`/${item._id}`)}/>
            <CiShoppingCart onClick={() => addBasket(product)} />
            <CiHeart onClick={() => addWishlist(product)} />
          </div>
        </div>
        <h6>{item.category}</h6>
        <p>{item.name}</p>
        <span>${item.price}.00</span>
    </div>
  )
}

export default Card
import React, { useContext } from 'react'
import "./index.scss"
import { useNavigate } from "react-router-dom"
import { FaEye } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import UseFetchData from '../../hooks/UseFetchData';
import { BasketContext } from '../../context/BasketContext';
import { WishlistContext } from '../../context/WishlistContext';
import Swal from 'sweetalert2';

const Card = ({item}) => {
  const {basketArr, setBasketArr} = useContext(BasketContext)
  const {wishlistArr, setWishlistArr} = useContext(WishlistContext)
  const navigate = useNavigate();
  console.log(item);

  function addToBasket(item) {
    const find = basketArr.find((x) => x.id === item.id);
    if (find) {
      find.count++;
      find.total = find.price * find.count;
      setBasketArr([...basketArr]);

      Swal.fire({
        title: "Already In Cart!!! Count Increased",
        icon: "warning",
      });
      return;
    }
    Swal.fire({
      title: "Added To Cart!",
      icon: "success",
    });
    const total = item.price;
    setBasketArr([...basketArr, { ...item, count: 1, total }]);
  }

  const addToWishlist = () => {
    const find = wishlistArr.find((x) => x.id === item._id)
    if(find) {
        setWishlistArr([...basketArr])

        Swal.fire({
            title: "Already In Wishlist!!!",
            icon: "error",
          });
        return;
    }

    Swal.fire({
        title: "Added To Wishlist!",
        icon: "success",
      });
    setWishlistArr([...wishlistArr, {...item}])
  }
  return (
    <div className='card'>
        <div className='image'>
          <img src={item.image} alt="" />
          <div className="like-basket">
            <FaEye onClick={() => navigate(`/${item._id}`)}/>
            <CiShoppingCart onClick={() => addToBasket(item)} />
            <CiHeart onClick={() => addToWishlist(item)} />
          </div>
        </div>
        <h6>{item.category}</h6>
        <p>{item.name}</p>
        <span>${item.price}.00</span>
    </div>
  )
}

export default Card
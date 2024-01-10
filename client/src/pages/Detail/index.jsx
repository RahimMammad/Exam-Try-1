import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./index.scss"
import { BasketContext } from '../../context/BasketContext';
import Swal from 'sweetalert2';
import { WishlistContext } from '../../context/WishlistContext';

const Detail = () => {
    const { id } = useParams();
    const [productData, setProductData] = useState({});
    const {basketArr, setBasketArr} = useContext(BasketContext)
    const {wishlistArr, setWishlistArr} = useContext(WishlistContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/${id}`);
                setProductData(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    const addToBasket = (item) => {
        const existingItem = basketArr.find((x) => x.id === item._id);
      
        if (existingItem) {
          const updatedBasket = basketArr.map((basketItem) =>
            basketItem.id === item.id
              ? { ...basketItem, count: basketItem.count + 1, total: basketItem.price * (basketItem.count + 1) }
              : basketItem
          );
      
          setBasketArr(updatedBasket);
      
          Swal.fire({
            title: "Already In Cart!!! Count Increased",
            icon: "warning",
          });
        } else {
          const newItem = { ...item, count: 1, total: item.price };
          setBasketArr([...basketArr, newItem]);
      
          Swal.fire({
            title: "Added To Cart!",
            icon: "success",
          });
        }
      }

    const addToWishlist = () => {
        const find = wishlistArr.find((x) => x.id === productData._id)
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
        setWishlistArr([...wishlistArr, {...productData}])
    }

    return (
        <div className='detail-main'>
            <img src={productData.image} alt="" />
            <div className='detail-text'>
                <h2>{productData.name}</h2>
                <p>{productData.category}</p>
                <span>${productData.price}.00</span>
                <div className='btns'>
                    <button onClick={() => addToBasket(productData)}>Add To Card</button>
                    <button onClick={() => addToWishlist(productData)}>Add To Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default Detail;

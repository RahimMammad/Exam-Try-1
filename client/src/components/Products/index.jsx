import React from 'react'
import "./index.scss"
import UseFetchData from '../../hooks/UseFetchData'
import Card from '../Product'

const Products = () => {
    const {data} = UseFetchData()
    console.log(data);
  return (
    <div className='product-main'>
        <div className='product-title'>
            <p>Popular Item in the market</p>
            <h2>Trending <span>Product <div className='blue-border'></div></span></h2>
        </div>
        <div className="product-main-container">
            {
                data && data.map((item) => {
                    return (
                        <Card key={item._id} item={item} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Products
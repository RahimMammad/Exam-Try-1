import React from 'react'
import Browse from '../../components/Browse'
import ProductImages from '../../components/ProductImages'
import Products from '../../components/Products'
import BestSellers from '../../components/BestSellers'
import Discount from '../../components/Discount'
import News from '../../components/News'

const Home = () => {
  return (
    <div>
        <Browse />
        <Products />
        <Discount />
        <BestSellers />
        <News />
    </div>
  )
}

export default Home
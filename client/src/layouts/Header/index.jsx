import React from 'react'
import "./index.scss"
import Logo from "../../assets/logo.png.webp"
import { Link } from 'react-router-dom'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <nav>
        <img src={Logo} alt="" />
        <ul className='navbar'>
            <Link to={"/"}>Home</Link>
            <Link to={"/add"}>Add</Link>
            <Link>Blog</Link>
            <Link>Pages</Link>
            <Link>Contact</Link>
        </ul>
        <div className='magnify-shop'>
            <HiMagnifyingGlass style={{width: "20px", height: "20px"}} />
            <Link to="/basket"><CiShoppingCart style={{width: "20px", height: "20px"}} /></Link>
        </div>
        <button className='buy-now-btn'>Buy Now</button>
    </nav>
  )
}

export default Header
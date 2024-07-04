import React from 'react'
import './style.css'
import CART_SVG from '../../assets/svg/shopping-cart-icon.svg';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  // useSelector for access store value
  const cartData = useSelector((state) => state?.cartImages);
  return (
    <>
      <div className='header'>
        <span>What the Splash !!!</span>
        <Link to="/cart">
          <span className='cart-container'>
            <div className='count'>
              <span>
                {cartData.length}
              </span>
            </div>
            <div className='round'>
              <img src={CART_SVG} alt='' />
            </div>
          </span>
        </Link>
      </div>
    </>
  )
}

export default Header;
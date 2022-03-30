import React from 'react';
import s from '../../styles/Nav/Nav.module.css';
import { Link } from 'react-router-dom';
import shoppingCart from '../../img/cart.svg';
import book from '../../img/book.svg';
import { useSelector } from 'react-redux';

const MyNavBar = (props) => {
  const cart = useSelector(state => state.cart.cart);

  return (
    <nav className={s.nav}>
      <Link to='/main'>
        <img
          src={book}
          alt='?'
          className={s.icon} />
      </Link>
      <div className={s.header}>
        <h1>Book Store</h1>
        <Link to='/main'>Main </Link>
        <Link to='about'> About</Link>
      </div>
      <Link to='/cart'>
        <div className={s.cart}>
        <b className={s.cartItems}>{!cart.length ? '' : cart.length}</b>
      <img 
      src={shoppingCart} 
      alt='?' 
      className={s.icon} />
        </div>
      </Link>
    </nav>
  )
}

export default MyNavBar;

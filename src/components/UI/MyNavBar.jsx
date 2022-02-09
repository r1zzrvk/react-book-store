import React from 'react';
import s from '../../styles/Nav/Nav.module.css';
import { Link } from 'react-router-dom';

const MyNavBar = (props) => {
  return (
    <nav className={s.nav}>
      <h1 className={s.header}>Book Store</h1>
      <Link to='/main'>Main </Link>
      <Link to='about'> About</Link>
    </nav>
  )
}

export default MyNavBar;

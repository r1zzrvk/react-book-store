import React from 'react';
import Form from '../Form';
import s from '../../styles/Nav/Nav.module.css';

const MyNavBar = (props) => {
  return (
    <nav className={s.nav}>
      <h1 className={s.header}>Book Store</h1>
      <div><Form /></div>
    </nav>
  )
}

export default MyNavBar;

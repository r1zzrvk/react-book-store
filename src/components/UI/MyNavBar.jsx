import React, { useState } from "react";
import s from "../../styles/Nav/Nav.module.css";
import book from "../../img/book.svg";
import MyBurgerBtn from "./MyBurgerBtn";
import MyOffcanvas from "./MyOffcanvas";

const MyNavBar = (props) => {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(true);
  };

  return (
    <div className={s.header}>
      <MyOffcanvas visible={visible} setVisible={setVisible} />
      <div className={s.burger} onClick={onClick}>
        <MyBurgerBtn />
      </div>
      <div className={s.logo}>
        <img src={book} alt="?" className={s.icon} />
        <h1>Book Store</h1>
      </div>
    </div>
  );
};

export default MyNavBar;

//  <Link to="/cart">
//       <div className={s.cart}>
//         <b className={s.cartItems}>{!cart.length ? "" : cart.length}</b>
//         <img src={shoppingCart} alt="?" className={s.icon} />
//       </div>
//     </Link>

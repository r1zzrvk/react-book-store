import React from "react";
import s from "../../styles/Offcanvas/Offcanvas.module.css";
import { Link } from "react-router-dom";
import { home, shop, question, shoppingCart } from "../../utils/icons";

const MyOffcanvas = ({ visible, setVisible }) => {
  const rootClasses = [s.sidenav];

  const onClick = () => {
    setVisible(false);
  };

  if (visible) {
    rootClasses.push(s.active);
  }

  return (
    <div className={rootClasses.join(" ")}>
      <div className={s.closebtn} onClick={onClick}>
        &times;
      </div>
      <Link to="/welcome">
        <div className={s.link_layout}>
          <div>Welcome</div><div className={s.link_layout__icon}>{home}</div>
        </div>
      </Link>
      <Link to="/main">
        <div className={s.link_layout}>
          <div>Store</div><div className={s.link_layout__icon}>{shop}</div>
        </div>
      </Link>
      <Link to="/about">
        <div className={s.link_layout}>
          <div>About</div><div className={s.link_layout__icon}>{question}</div>
        </div>
      </Link>
      <Link to="/cart">
        <div className={s.link_layout}>
          <div>Shopping cart</div>{" "}
          <div className={s.link_layout__icon}>{shoppingCart}</div>
        </div>
      </Link>
    </div>
  );
};

export default MyOffcanvas;

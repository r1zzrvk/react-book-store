import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCartAction } from "../redux/actions/actions";
import { useHistory } from "react-router-dom";
import s from "../styles/Cart/CartItem.module.css";
import button from "../styles/Button/MyButton.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const goToProfile = () => {
    history.push(`/main/${props.book.id}`);
  };

  const removeFromCart = (e) => {
    e.preventDefault();
    dispatch(removeFromCartAction(props.book.id));
  };

  return (
    <div>
      <div className={s.cartItem}>
        <div className={s.itemInfo} onClick={goToProfile}>
          <div>
            <b>{props.book.volumeInfo.title.substring(0, 30)}</b> |
            <mark>{props.book.volumeInfo.author}</mark> |
            <mark>{props.book.volumeInfo.category}</mark>
          </div>
        </div>
        <div>
          <mark className={s.amount}>
            {props.book.saleInfo.amount} {props.book.saleInfo.currencyCode}
          </mark>
          <button className={button.arrowBtn} onClick={removeFromCart}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

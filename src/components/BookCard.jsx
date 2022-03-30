import React from "react";
import MyButton from "./UI/Mybutton";
import s from "../styles/Card/Card.module.css";
import styles from "../styles/Button/MyButton.module.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCartAction, removeFromCartAction } from "../redux/actions/actions";
import { useSelector } from "react-redux";

const BookCard = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);

  return (
    <div className={s.card}>
      <img
        src={props.book.volumeInfo.imageLinks.thumbnail}
        alt="" />
      <div>
        <h1>{props.book.volumeInfo.title}</h1>
        <hr className={s.item1} />
        <p>Author: <b>{props.book.volumeInfo.author}</b></p>
        <p>Amount: <b>{props.book.saleInfo.amount}</b> {props.book.saleInfo.currencyCode}</p>
        <p>Published: <b>{props.book.volumeInfo.publishDate.substring(0, 4)}</b></p>
        <hr className={s.item2} />
      </div>
      {cart.find((x) => x.id === props.book.id)
        ? <MyButton
          onClick={() => dispatch(removeFromCartAction(props.book.id))}
          className={styles.tertiary}>
          Remove</MyButton>
        : <MyButton
          onClick={() => dispatch(addToCartAction(props.book))}
          className={styles.secondary}>
          Add to cart</MyButton>}
      <MyButton
        className={styles.primary}
        onClick={() => history.push(`/main/${props.book.id}`)}>More</MyButton>
    </div>
  )
};

export default BookCard;

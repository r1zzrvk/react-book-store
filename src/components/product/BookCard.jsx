import React from "react";
import MyButton from "../UI/Mybutton";
import s from "../../styles/Card/Card.module.css";
import styles from "../../styles/Button/MyButton.module.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addToCartAction,
  removeFromCartAction,
} from "../../redux/actions/actions";
import { useSelector } from "react-redux";

const BookCard = ({ book }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  // events

  const goToProfile = () => {
    history.push(`/main/${book.id}`);
  };
  const removeFromCart = () => {
    dispatch(removeFromCartAction(book.id));
  };
  const addToCart = () => {
    dispatch(addToCartAction(book));
  };

  const isInCart = cart.find((x) => x.id === book.id) ? (
    <MyButton onClick={removeFromCart} className={styles.tertiary}>
      Remove
    </MyButton>
  ) : (
    <MyButton onClick={addToCart} className={styles.secondary}>
      Add to cart
    </MyButton>
  );

  return (
    <div className={s.card}>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" />
      <div>
        <h1>{book.volumeInfo.title}</h1>
        <hr className={s.item1} />
        <p>
          <b>{book.volumeInfo.author}</b>
        </p>
        <p>
          <b>{book.saleInfo.amount}</b> {book.saleInfo.currencyCode}
        </p>
        <p>
          <b>{book.volumeInfo.publishDate.substring(0, 4)}</b>
        </p>
        <hr className={s.item2} />
      </div>
      {isInCart}
      <MyButton className={styles.primary} onClick={goToProfile}>
        More
      </MyButton>
    </div>
  );
};

export default BookCard;

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
import { heart, shoppingCart } from "../../utils/icons";

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
      <div className={s.content}>
      <div className={s.iconButtons}>
          <div className={s.favorite}>{heart}</div>
          <div className={s.shoppingCart}>{shoppingCart}</div>
        </div>
        <h1>{book.volumeInfo.title}</h1>
        <p>
          <b>{book.saleInfo.amount} ₽</b>
        </p>
      </div>
      <div className={s.buttons}>
        {/* {isInCart} */}
        <MyButton className={styles.primary} onClick={goToProfile}>
          More
        </MyButton>
      </div>
    </div>
  );
};

export default BookCard;

import React from "react";
import {
  addToCartAction,
  removeFromCartAction,
} from "../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import MyButton from "./UI/Mybutton";
import style from "../styles/Button/MyButton.module.css";
import s from "../styles/Item/Item.module.css";
import { useHistory } from "react-router-dom";

const ItemPageContent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { cart } = useSelector((state) => state.cart);
  const { book } = useSelector((state) => state.book);

  const removeFromCart = () => {
    dispatch(removeFromCartAction(book.id));
  };
  const addToCart = () => {
    dispatch(addToCartAction(book));
  };
  const goBack = () => {
    history.goBack();
  };

  const isInCart = cart.find((x) => x.id === book.id) ? (
    <MyButton onClick={removeFromCart} className={style.tertiaryLarge}>
      Remove
    </MyButton>
  ) : (
    <MyButton onClick={addToCart} className={style.secondaryLarge}>
      Add to cart
    </MyButton>
  );

  return (
    <div className={s.item}>
      <h1 className={s.title}>{book.volumeInfo.title}</h1>
      <div className={s.btn}>{isInCart}</div>
      <hr className={s.titleHr} />
      <div className={s.row}>
        <div className={s.imageBlock}>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
        </div>
        <div>
          <div className={s.descriptionBlock}>
            <div className={s.textItem}>
              Author: <b>{book.volumeInfo.author}</b>
            </div>
            <div className={s.textItem}>
              Publisher: <b>{book.volumeInfo.publisher}</b>
            </div>
            <div className={s.textItem}>
              Category: <b>{book.volumeInfo.category}</b>
            </div>
            <div className={s.textItem}>
              Page count: <b>{book.volumeInfo.pageCount}</b>
            </div>
            <div className={s.textItem}>
              Language: <b>{book.volumeInfo.language}</b>
            </div>
          </div>
          <div className={s.userStats}>
            <div className={s.reviews}>
              Reviews: <mark>14</mark>
            </div>
            <div className={s.rating}>
              Rating: {book.volumeInfo.averegeRating} / 5
            </div>
            <div className={s.subtitle}>
              User data is not real, algorithms with ratings and reviews will
              come later. For now please enjoy the numbers.
            </div>
          </div>
        </div>
      </div>
      <hr className={s.aboutHr} />
      <div className={s.aboutItem}>
        <h3 className={s.header}>About book</h3>
        <p>{book.volumeInfo.description}</p>
        <MyButton className={style.primaryLarge} onClick={goBack}>
          Back
        </MyButton>
      </div>
    </div>
  );
};

export default ItemPageContent;

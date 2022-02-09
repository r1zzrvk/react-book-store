import React from "react";
import MyButton from "./UI/Mybutton";
import s from "../styles/Card/Card.module.css";
import styles from "../styles/Button/MyButton.module.css";
import { useHistory } from "react-router-dom";

const BookCard = (props) => {
  const history = useHistory();

  return (
    <div className={s.card}>
        <img
          src={props.book.volumeInfo.imageLinks.thumbnail}
          alt="" />
        <div>
          <h1>{props.book.volumeInfo.title}</h1>
          <hr className={s.item1}/>
          <p>Author: <b>{props.book.volumeInfo.author}</b></p>
          <p>Amount: <b>{props.book.saleInfo.amount}</b> {props.book.saleInfo.currencyCode}</p>
          <p>Published: <b>{props.book.volumeInfo.publishDate.substring(0, 4)}</b></p>
          <hr className={s.item2}/>
        </div>
        <MyButton
            className={styles.button}
            onClick={() => history.push(`/main/${props.book.id}`)}>More</MyButton>
    </div>
  )
};

export default BookCard;

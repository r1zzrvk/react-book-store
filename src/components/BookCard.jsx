import React from "react";
import MyModal from "./UI/MyModal";
import Item from "./Item";
import MyButton from "./UI/Mybutton";
import { useState } from "react";
import s from "../styles/Card/Card.module.css";
import styles from "../styles/Button/MyButton.module.css";

const BookCard = (props) => {
  const [visible, setVisible] = useState(false)
  return (
    <div className={s.card}>
        <MyModal visible={visible}
                 setVisible={setVisible}>
          <Item 
              setVisible={setVisible}
              book={props.book}/>
        </MyModal>
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
            onClick={() => setVisible(true)}>More</MyButton>
    </div>
  )
};

export default BookCard;

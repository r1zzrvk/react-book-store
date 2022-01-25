import React from 'react';
import s from "../styles/Item/Item.module.css";
import MyButton from "./UI/Mybutton";
import style from "../styles/Button/MyButton.module.css";

const Item = (props) => {
  return (
    <div className={s.item}>
      <div className={s.row}>
        <div className={s.imageBlock}>
          <img
            src={props.book.volumeInfo.imageLinks.thumbnail}
            alt="" />
        </div>
        <div className={s.descriptionBlock}>
          <p className={s.title}>{props.book.volumeInfo.title}</p>
          <div className={s.textItem}>Author: <b>{props.book.volumeInfo.author}</b></div>
          <div className={s.textItem}>Publisher: <b>{props.book.volumeInfo.publisher}</b></div>
          <div className={s.textItem}>Category: <b>{props.book.volumeInfo.category}</b></div>
          <div className={s.textItem}>Page count: <b>{props.book.volumeInfo.pageCount}</b></div>
          <div className={s.textItem}>Rating: <b>{props.book.volumeInfo.averegeRating}/5</b></div>
          <div className={s.textItem}>Language: <b>{props.book.volumeInfo.language}</b></div>
          <div className={s.textItem}>Stock: <b>{props.book.saleInfo.outOfStoke ? 'Out of stock' : 'Available'}</b></div>
        </div>
      </div>
      <div className={s.aboutItem}>
        <h3 className={s.header}>About book</h3>
        <p>{props.book.volumeInfo.description}</p>
        <MyButton
        className={style.button}
        onClick={() => props.setVisible(false)}
        >Close</MyButton>
      </div>
    </div>
  )
}

export default Item
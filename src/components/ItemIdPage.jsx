import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBook } from '../redux/actions/async-action';
import s from "../styles/Item/Item.module.css";
import cn from 'classnames';
import MyButton from './UI/Mybutton';
import style from '../styles/Button/MyButton.module.css';
import { useHistory } from "react-router-dom";

const ItemIdPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const book = useSelector(state => state.book.book);
  const history = useHistory()

  useEffect(() => {
    dispatch(fetchBook(params.id))
  }, [dispatch, params.id]);
  return <div >
    {book
      ? <div className={s.item}>
        <h1 className={s.title}>{book.volumeInfo.title}</h1>
        <div className={s.btn}>
          <MyButton className={style.button}>Add to cart</MyButton>
        </div>
        <hr className={s.titleHr} />
        <div className={s.row}>
          <div className={s.imageBlock}>
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt="" />
          </div>
          <div className={s.descriptionBlock}>
            <div className={s.textItem}>Author: <b>{book.volumeInfo.author}</b></div>
            <div className={s.textItem}>Publisher: <b>{book.volumeInfo.publisher}</b></div>
            <div className={s.textItem}>Category: <b>{book.volumeInfo.category}</b></div>
            <div className={s.textItem}>Page count: <b>{book.volumeInfo.pageCount}</b></div>
            <div className={s.textItem}>Language: <b>{book.volumeInfo.language}</b></div>
            <div className={s.textItem}>Stock: <b className={cn({
              [s.stock]: book.saleInfo.outOfStoke === false,
              [s.outOfStock]: book.saleInfo.outOfStoke === true
            })}>{book.saleInfo.outOfStoke ? 'Out of stock' : 'Available'}</b></div>
            <div className={s.rating}>Rating: {book.volumeInfo.averegeRating} / 5</div>
          </div>
        </div>
        <hr className={s.aboutHr} />
        <div className={s.aboutItem}>
          <h3 className={s.header}>About book</h3>
          <p>{book.volumeInfo.description}</p>
          <MyButton
            className={style.button}
            onClick={() => { history.goBack() }}>Back</MyButton>
        </div>
      </div>
      : <div className={s.notAvailable}>
        <h1
          >Check ID! {params.id} is not available!
          <br /> Use correct id to go to profile.
          <br /> For example: "http://localhost:3000/main/3"</h1>
          <MyButton 
          className={style.button}
          onClick={() => { history.goBack() }}>Back</MyButton>
      </div>}
  </div>
};

export default ItemIdPage;

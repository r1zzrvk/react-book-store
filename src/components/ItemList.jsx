import React from "react";
import { useSelector } from "react-redux";
import s from "../styles/List/List.module.css";
import BookCard from "./BookCard";
import Paginator from "./Paginator";

const ItemList = (props) => {
  const { books } = useSelector((state) => state.book);

  return (
    <div>
      {books.length ? (
        <div>
          <div className={s.paginator}>
            <Paginator />
          </div>
          <div className={s.list}>
            {books.map((book) => {
              return <BookCard book={book} key={book.id} />;
            })}
          </div>
          <div className={s.paginator}>
            <Paginator />
          </div>
        </div>
      ) : (
        <h1 className={s.nothing}>Nothing found!</h1>
      )}
    </div>
  );
};

export default ItemList;
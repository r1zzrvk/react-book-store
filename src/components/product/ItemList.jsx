import React from "react";
import { useSelector } from "react-redux";
import s from "../../styles/List/List.module.css";
import BookCard from "./BookCard";
import Paginator from "../UI/Paginator";

const ItemList = (props) => {
  const { books } = useSelector((state) => state.book);

  const isLessItems = () => {
    return (
      <div>
        {books.length < 10 ? (
          <div></div>
        ) : (
          <div className={s.paginator}>
            <Paginator />
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {books.length ? (
        <div>
          {isLessItems()}
          <div className={s.list}>
            {books.map((book) => {
              return <BookCard book={book} key={book.id} />;
            })}
          </div>
          {isLessItems()}
        </div>
      ) : (
        <h1 className={s.nothing}>Nothing found!</h1>
      )}
    </div>
  );
};

export default ItemList;

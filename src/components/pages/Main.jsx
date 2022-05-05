import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "../product/ItemList";
import MyLoader from "../UI/MyLoader";
import { fetchBooks } from "../../redux/actions/async-action";
import Form from "../search/Form";
import s from "../../styles/Form/Form.module.css";

const Main = () => {
  const { isFetching, limit, currentPage } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks(limit, currentPage));
  }, [dispatch, limit, currentPage]);

  if (isFetching) {
    return <MyLoader />;
  }
  return (
    <div> 
      <div className={s.form}>
        <Form />
      </div>
      <ItemList />
    </div>
  );
};

export default Main;

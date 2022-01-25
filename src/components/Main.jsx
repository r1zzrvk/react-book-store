import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import MyLoader from "./UI/MyLoader";
import { fetchBooks } from '../redux/async-action';
import { setFetchingAction } from "../redux/actions";


const Main = () => {

  const loading = useSelector(state => state.book.isFetching);
  const limit = useSelector(state => state.book.limit);
  const currentPage = useSelector(state => state.book.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFetchingAction(true));
    dispatch(fetchBooks(limit, currentPage));
    dispatch(setFetchingAction(false));
  }, [dispatch, limit, currentPage])

  return <div>
    {loading
      ? <MyLoader />
      : <ItemList />}
  </div>;
};

export default Main;

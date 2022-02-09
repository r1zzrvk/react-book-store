import React, { useState } from 'react';
import { getPagesArray } from '../utils/pages';
import MyButton from '../components/UI/Mybutton';
import { setCurrentPageAction } from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import s from '../styles/Paginator/Paginator.module.css';
import cn from 'classnames';

const Paginator = (props) => {
  const totalPages = useSelector(state => state.book.totalPages);
  const currentPage = useSelector(state => state.book.currentPage);
  const dispatch = useDispatch();

  let pages = getPagesArray(totalPages);

  const [pageNumber, setPageNumber] = useState(1);
  const leftPageNubmer = (pageNumber - 1) * 5 + 1;
  const rightPageNumber = pageNumber * 5;


  return <div className={s.paginator}>
    {pageNumber > 1
      && <MyButton
        className={s.page}
        onClick={() => {
          setPageNumber(pageNumber - 1)
        }}> {`<<`}</MyButton>}

    {pages
      .filter( (page) => page >= leftPageNubmer
        && page <= rightPageNumber)
      .map(page => {
        return <MyButton key={page}
          onClick={() => { dispatch(setCurrentPageAction(page)) }}
          className={cn({
            [s.currentPage]: currentPage === page
          }, s.page)}> {page} </MyButton>
      })}
    {totalPages < pageNumber
      && <MyButton
        className={s.page}
        onClick={() => {
          setPageNumber(pageNumber + 1)
        }}> {`>>`} </MyButton>}
  </div>;
};

export default Paginator;
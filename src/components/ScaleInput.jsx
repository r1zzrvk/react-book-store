import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyInput from './UI/MyInput';
import input from '../styles/Input/Input.module.css';
import { setMaxFilterAction, setMinFilterAction } from '../redux/actions/actions';
import { useEffect } from 'react';
import { fetchFiltredByPrice } from '../redux/actions/async-action';
import s from '../styles/Range/Range.module.css';

const ScaleInput = () => {
  const min = useSelector(state => state.book.min);
  const max = useSelector(state => state.book.max);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFiltredByPrice(min, max))
  },[dispatch ,min ,max ])
  
  return <div className={s.range}>
  Price:
  {/* From: */}
  <MyInput 
  className={input.range}
  type='text'
  placeholder='1'
  value={min}
  onChange={(e) => {dispatch(setMinFilterAction(e.target.value))}}/>
  {/* To: */}
  <MyInput 
  className={input.range}
  type='text'
  placeholder='2199'
  value={max}
  onChange={(e) => {dispatch(setMaxFilterAction(e.target.value))}}/>
  </div>;
};

export default ScaleInput;

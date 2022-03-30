import React from 'react';
import input from '../styles/Input/Input.module.css';
import { fetchSearch} from '../redux/actions/async-action';
import MyInput from './UI/MyInput';
import MyButton from './UI/Mybutton';
import { updateSearchFieldAction } from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import style from '../styles/Button/MyButton.module.css';

const SearchBlock = () => {
  const inputValue = useSelector(state => state.book.inputValue);
  const dispatch = useDispatch();
  return <div>
     <MyInput
          className={input.input}
          type='text'
          placeholder=" Type something..."
          onChange={(e) => { dispatch(updateSearchFieldAction(e.target.value)) }}
          value={inputValue} />
        <MyButton
          className={style.primary}
          type='submit'
          onClick={(e) => {
            e.preventDefault();
            dispatch(fetchSearch(inputValue))
          }}>Search</MyButton>
  </div>;
};

export default SearchBlock;

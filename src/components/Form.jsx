import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSortingAction } from '../redux/actions/actions';
import MyButton from './UI/Mybutton';
import style from '../styles/Button/MyButton.module.css';
import { fetchFiltredByCategory } from '../redux/actions/async-action';
import s from '../styles/Form/Form.module.css';
import FilterBlock from './FilterBlock';
import SearchBlock from './SearchBlock';

const Form = (props) => {
  const dispatch = useDispatch();
  const selectedSort = useSelector(state => state.book.selectedSort);
  const selectedCategory = useSelector(state => state.book.category);
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    dispatch(setSortingAction())
  }, [selectedSort, dispatch]);

  useEffect(() => {
    dispatch(fetchFiltredByCategory(selectedCategory));
  }, [selectedCategory, dispatch]);

  return (
    <div>
      <form className={s.form}>
       <SearchBlock/>
        <div>
          <MyButton
            className={style.arrowBtn}
            onClick={(e) => {
              e.preventDefault()
              if (visible) {
                setVisible(false)
              } else {
                setVisible(true)
              }
            }}>
            {!visible
              ? <>▼</>
              : <>✖</>}
          </MyButton>
        </div>
      </form>
      {!visible
        ? <div></div>
        : <FilterBlock />}
    </div>
  )
};



export default Form;

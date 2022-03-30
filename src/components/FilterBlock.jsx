import React from 'react';
import MySelect from './UI/MySelect';
import {
  resetFiltersAction,
  selectSortingAction,
  setFilterCategoryAction,
} from '../redux/actions/actions';
import s from '../styles/Filters/Filter.module.css';
import { useDispatch } from 'react-redux';
import ScaleInput from './ScaleInput';
import Mybutton from './UI/Mybutton';
import button from '../styles/Button/MyButton.module.css';

const FilterBlock = () => {

  const dispatch = useDispatch();

  return <div className={s.filterBlock}>
    <MySelect
      defaultValue='Sorting'
      options={[
        {
          value: 'newest',
          name: 'Newest'
        },
        {
          value: 'oldest',
          name: 'Oldest'
        },
        {
          value: 'lowest',
          name: 'Lowest'
        },
        {
          value: 'highest',
          name: 'Highest'
        }
      ]}
      onChange={(value) => { dispatch(selectSortingAction(value)) }}
    />
    <MySelect
      defaultValue='Category'
      options={[
        {
          value: 'Fantasy',
          name: 'Fantasy'
        },
        {
          value: 'Programming',
          name: 'Programming'
        },
        {
          value: 'Adventure',
          name: 'Adventure'
        },
        {
          value: 'Classics',
          name: 'Classics'
        },
        {
          value: 'Psychology',
          name: 'Psychology'
        },
        {
          value: 'Science',
          name: 'Science'
        }
      ]}
      onChange={(value) => { dispatch(setFilterCategoryAction(value)) }}
    />
    <ScaleInput />
    <Mybutton
      className={button.primary}
      onClick={(e) => {
        e.preventDefault()
        dispatch(resetFiltersAction())
      }}>Reset</Mybutton>
  </div>;
};

export default FilterBlock;

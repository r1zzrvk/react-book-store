import React, { useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { 
  selectByDateAction,
  sortByDateAction, 
  selectByPriceAction,
  sortByPriceAction } from '../redux/actions';
import MySelect from './UI/MySelect';

const Form = (props) => {
const dispatch = useDispatch();
const date = useSelector( state => state.book.sortByDate);
const price = useSelector( state => state.book.sortByPrice);

useEffect(() => {
  dispatch(sortByDateAction())
}, [date,dispatch]);

useEffect(() => {
  dispatch(sortByPriceAction())
},[price,dispatch])

  return (
    <form>
      {/* <MyInput
        type='text'
        placeholder="Type something..."
        onChange={ handleChange }
        value={ inputValue } />
      <MyButton
        type='submit'
      >Нажми</MyButton> */}
        <MySelect 
              defaultValue='By date'
              options={[
                {value:'newest',
                 name: 'Newest'},
                {value:'oldest',
                 name: 'Oldest'},
              ]}
              onChange={(value) => {dispatch(selectByDateAction(value))}}
            />
         <MySelect 
              defaultValue='By price'
              options={[
                {value:'lowest',
                 name: 'Low to High'},
                {value:'highest',
                 name: 'High to Low'},
              ]}
              onChange={(value) => {dispatch(selectByPriceAction(value))}}
            />
    </form>
  )
};



export default Form;

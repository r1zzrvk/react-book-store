import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import s from '../styles/Cart/Cart.module.css';
import button from '../styles/Button/MyButton.module.css';
import MyButton from './UI/Mybutton';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeAllAction } from '../redux/actions/actions';

const Cart = () => {
  const items = useSelector(state => state.cart.cart);
  const history = useHistory();
  const dispatch = useDispatch();

  const totalSum = () => {
    return items
      .reduce((price, item) => price + item.saleInfo.amount, 0)
  }

  return (
    <div className={s.cart}>
      <h1 className={s.title}>Shopping Cart</h1>
      <hr />
      {items.length
        ? <div >
          <div className={s.cartList}>
            {items.map(book => {
              return <CartItem
                book={book}
                key={book.id} />
            })}
          </div>
          <hr></hr>
          <div className={s.footer}>
            <MyButton 
            onClick={() => {
              alert("Thank You! Your order is received!");
              history.push('/main');
              dispatch(removeAllAction());
            }}
            className={button.secondaryLarge}>Order!</MyButton>
            <div className={s.total}>
              Total count: <mark>{items.length}</mark> |
              Total sum: <mark>{totalSum()}</mark> RUB
            </div>
          </div>
        </div>
        : <div className={s.emptyCart}>
          <b>Cart is empty!</b>
          <MyButton 
          onClick={() => {history.push('/main')}}
          className={button.secondary}>Back</MyButton>
          </div>}

    </div>
  )
}

export default Cart
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import s from "../../styles/Cart/Cart.module.css";
import button from "../../styles/Button/MyButton.module.css";
import MyButton from "../UI/Mybutton";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeAllAction } from "../../redux/actions/actions";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const history = useHistory();
  const dispatch = useDispatch();

  const totalSum = () => {
    return cart.reduce((price, item) => price + item.saleInfo.amount, 0);
  };
  const submitOrder = () => {
    alert("Thank You! Your order is received!");
    history.push("/main");
    dispatch(removeAllAction());
  };
  const backToMain = () => {
    history.push("/main");
  };

  return (
    <div className={s.cart}>
      <h1 className={s.title}>Shopping Cart</h1>
      <hr />
      {cart.length ? (
        <div>
          <div className={s.cartList}>
            {cart.map((book) => {
              return <CartItem book={book} key={book.id} />;
            })}
          </div>
          <hr></hr>
          <div className={s.footer}>
            <MyButton onClick={submitOrder} className={button.secondaryLarge}>
              Order!
            </MyButton>
            <div className={s.total}>
              Total count: <mark>{cart.length}</mark> | Total sum:{" "}
              <mark>{totalSum()}</mark> RUB
            </div>
          </div>
        </div>
      ) : (
        <div className={s.emptyCart}>
          <b>Cart is empty!</b>
          <MyButton onClick={backToMain} className={button.secondary}>
            Back
          </MyButton>
        </div>
      )}
    </div>
  );
};

export default Cart;

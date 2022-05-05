import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MyInput from "../UI/MyInput";
import input from "../../styles/Input/Input.module.css";
import {
  setMaxFilterAction,
  setMinFilterAction,
} from "../../redux/actions/actions";
import { useEffect } from "react";
import { fetchFiltredByPrice } from "../../redux/actions/async-action";
import s from "../../styles/Range/Range.module.css";

const ScaleInput = () => {
  const { min, max, limit, currentPage } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFiltredByPrice(min, max, limit, currentPage));
  }, [dispatch, min, max, limit, currentPage]);

  const handleMinPrice = (e) => {
    dispatch(setMinFilterAction(e.target.value));
  };

  const handleMaxPrice = (e) => {
    dispatch(setMaxFilterAction(e.target.value));
  };

  return (
    <div className={s.range}>
      Price:
      <MyInput
        className={input.range}
        type="text"
        placeholder="1"
        value={min}
        onChange={handleMinPrice}
      />
      <MyInput
        className={input.range}
        type="text"
        placeholder="2199"
        value={max}
        onChange={handleMaxPrice}
      />
    </div>
  );
};

export default ScaleInput;

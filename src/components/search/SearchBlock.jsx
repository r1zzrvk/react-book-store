import React from "react";
import input from "../../styles/Input/Input.module.css";
import { fetchSearch } from "../../redux/actions/async-action";
import MyInput from "../UI/MyInput";
import MyButton from "../UI/Mybutton";
import { updateSearchFieldAction } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "../../styles/Button/MyButton.module.css";

const SearchBlock = () => {
  const { inputValue, limit, currentPage } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateSearchFieldAction(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(inputValue, limit, currentPage));
  };
  return (
    <div>
      <MyInput
        className={input.input}
        type="text"
        placeholder=" Type something..."
        onChange={handleChange}
        value={inputValue}
      />
      <MyButton className={style.primary} type="submit" onClick={handleSubmit}>
        Search
      </MyButton>
    </div>
  );
};

export default SearchBlock;

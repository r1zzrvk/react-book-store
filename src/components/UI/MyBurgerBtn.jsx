import React from "react";
import s from "../../styles/Burger/Burger.module.css";

const MyBurgerBtn = () => {
  return (
    <div className={s.wrapper__burger}>
      <svg viewBox="0 0 100 80" width="40" height="40">
        <rect width="100" height="15" rx="10" fill="whitesmoke"></rect>
        <rect y="30" width="100" height="15" rx="10" fill="whitesmoke"></rect>
        <rect y="60" width="100" height="15" rx="10" fill="whitesmoke"></rect>
      </svg>
    </div>
  );
};

export default MyBurgerBtn;

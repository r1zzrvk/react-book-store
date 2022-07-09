import React from "react";
import googleLogo from "../../../../../img/googleLogo.svg";
import s from "../../../../../styles/Welcome/Motivation/MotivationItem.module.css";

export const GoogleItem = ({ setVisible }) => {
  return (
    <a href="https://developers.google.com/books">
      <div
        className={s.content}
        onMouseOver={() => {
          setVisible(true);
        }}
        onMouseLeave={() => {
          setVisible(false);
        }}
      >
        <img className={s.logo} src={googleLogo} alt="" />
      </div>
    </a>
  );
};

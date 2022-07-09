import React from "react";
import typecodeLogo from "../../../../../img/typecodeLogo.svg";
import s from "../../../../../styles/Welcome/Motivation/MotivationItem.module.css";

export const TypecodeItem = ({ setVisible }) => {
  return (
    <a href="https://github.com/typicode/json-server">
      <div
        className={s.content}
        onMouseOver={() => {
          setVisible(true);
        }}
        onMouseLeave={() => {
          setVisible(false);
        }}
      >
        <img className={s.logo} src={typecodeLogo} alt="" />
      </div>
    </a>
  );
};

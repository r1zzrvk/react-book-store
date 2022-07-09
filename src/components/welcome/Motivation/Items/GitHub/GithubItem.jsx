import React from "react";
import githubLogo from "../../../../../img/githubLogo.svg";
import s from "../../../../../styles/Welcome/Motivation/MotivationItem.module.css";

export const GithubItem = ({ setVisible }) => {
  return (
    <a href="https://github.com/r1zzrvk">
      <div
        className={s.content}
        onMouseOver={() => {
          setVisible(true);
        }}
        onMouseLeave={() => {
          setVisible(false);
        }}
      >
        <img className={s.logo} src={githubLogo} alt="" />
      </div>
    </a>
  );
};

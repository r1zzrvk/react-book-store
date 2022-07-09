import React, { useState } from "react";
import GithubModalContent from "./GithubModalContent";
import githubLogo from "../../../img/githubLogo.svg";
import s from "../../../styles/Welcome/Motivation/MotivationItem.module.css";

const GithubModal = () => {

  return (
    <div className={s.content}>
      <img className={s.logo} src={githubLogo} alt="" />
    </div>
  );
};

export default GithubModal;

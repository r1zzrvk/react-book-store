import React from "react";
import s from "../../../styles/Welcome/Motivation/MotivationItem.module.css";
import GithubModal from "./GithubModal";
import GoogleModal from "./GoogleModal";
import TypecodeModal from "./TypecodeModal";

const MotivationItem = ({setVisible}) => {
  return (
    <div className={s.container}>
      <GoogleModal />
      <TypecodeModal />
      <GithubModal onMouseOver={() => {setVisible(true)}} onMouseOut={() => {setVisible(false)}}/>
    </div>
  );
};

export default MotivationItem;

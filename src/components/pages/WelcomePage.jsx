import React from "react";
import Greetings from "../welcome/Greetings/Greetings";
import { Motivation } from "../welcome/Motivation/Motivation";
import s from "../../styles/Welcome/Welcome.module.css";

const WelcomePage = () => {
  return (
    <div className={s.container}>
      <Greetings/>
    <div className={s.gradient}></div>
      <Motivation/>
    </div>
  );
};

export default WelcomePage;

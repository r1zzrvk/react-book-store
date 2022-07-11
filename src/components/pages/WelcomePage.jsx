import React from "react";
import Greetings from "../welcome/Greetings/Greetings";
import { Motivation } from "../welcome/Motivation/Motivation";
import s from "../../styles/Welcome/Welcome.module.css";
import MyNavBar from "../UI/MyNavBar";
import navbar from "../../styles/Nav/Nav.module.css";
import MyFooter from "../UI/MyFooter";
import footer from "../../styles/Footer/Footer.module.css";

const WelcomePage = () => {
  return (
    <div className={s.container}>
      <div className={navbar.welcome__navbar}>
        <MyNavBar />
      </div>
      <Greetings />
      <div className={s.gradient}></div>
      <Motivation />
      <div className={footer.welcome__footer}>
        <MyFooter/>
      </div>
    </div>
  );
};

export default WelcomePage;

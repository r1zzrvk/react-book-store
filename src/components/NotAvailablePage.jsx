import React from "react";
import s from "../styles/Item/Item.module.css";
import MyButton from "./UI/Mybutton";
import style from "../styles/Button/MyButton.module.css";
import { useParams } from "react-router-dom";

const NotAvailablePage = ({ goBack }) => {
  const params = useParams();
  return (
    <div className={s.notAvailable}>
      <h1>
        Check ID! {params.id} is not available!
        <br /> Use correct id to go to profile.
        <br /> For example: "http://localhost:3000/main/3"
        <br /> If the ID is correct you have lost connection to the server!
      </h1>
      <MyButton className={style.primaryLarge} onClick={goBack}>
        Back
      </MyButton>
    </div>
  );
};

export default NotAvailablePage;

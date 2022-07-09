import React from "react";
import s from "../../../styles/PopUp/MyPopUp.module.css";

const MyPopUp = ({ visible, children }) => {
  const rootClasses = [s.myPopUp];
  if (visible) {
    rootClasses.push(s.active);
  }
  return (
    <div className={rootClasses.join(" ")}>
      <div className={s.popUpContent}>{children}</div>
    </div>
  );
};

export default MyPopUp;

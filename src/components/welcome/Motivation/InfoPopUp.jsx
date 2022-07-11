import React from "react";
import s from "../../../styles/Welcome/Motivation/Motivation.module.css";

export const InfoPopUp = ({ children, visible }) => {
  const rootClasses = [s.content];
  if (visible) {
    rootClasses.push(s.active);
  }
  return (
    <div className={rootClasses.join(" ")}>
      <div className={s.content_container}>{children}</div>
    </div>
  );
};

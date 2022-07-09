import React from "react";
import s from "../../../styles/Welcome/Motivation/MotivationItem.module.css";
import { GithubItem } from "./Items/GitHub/GithubItem";
import { GoogleItem } from "./Items/Google/GoogleItem";
import { TypecodeItem } from "./Items/TypeCode/TypecodeItem";

export const MotivationItems = ({
  setGoogleVisible,
  setGithubVisible,
  setTypecodeVisible,
}) => {
  return (
    <div className={s.container}>
      <GithubItem setVisible={setGithubVisible} />
      <GoogleItem setVisible={setGoogleVisible} />
      <TypecodeItem setVisible={setTypecodeVisible} />
    </div>
  );
};

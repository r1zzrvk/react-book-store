import React from "react";
import { useState } from "react";

import s from "../../../styles/Welcome/Motivation/Motivation.module.css";

import { InfoPopUp } from "./InfoPopUp";
import { GithubInfo } from "./Items/GitHub/GithubInfo";
import { GoogleInfo } from "./Items/Google/GoogleInfo";
import { TypecodeInfo } from "./Items/TypeCode/TypecodeInfo";
import { MotivationItems } from "./MotivationItems";

// 1 TODO наполнить плитки контентом и сделать верстку

export const Motivation = () => {

  const [typecodeVisible, setTypecodeVisible] = useState(false);
  const [githubVisible, setGithubVisible] = useState(false);
  const [googleVisible, setGoogleVisible] = useState(false);

  return (
    <div className={s.container}>
      <MotivationItems
        setTypecodeVisible={setTypecodeVisible}
        setGithubVisible={setGithubVisible}
        setGoogleVisible={setGoogleVisible}
      />
      <InfoPopUp visible={googleVisible}>
        <GoogleInfo />
        {/* 1 */}
      </InfoPopUp>
      <InfoPopUp visible={typecodeVisible}>
        <TypecodeInfo />
        {/* 1 */}
      </InfoPopUp>
      <InfoPopUp visible={githubVisible}>
        <GithubInfo />
        {/* 1 */}
      </InfoPopUp>
    </div>
  );
};

import React, { useState } from "react";
import s from '../../../styles/Welcome/Motivation/Motivation.module.css';
import MyPopUp from "./GithubModalContent";
import Google from "./GoogleModalContent";
import MotivationItem from "./MotivationItem";

const Motivation = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={s.container}>
      <MotivationItem setVisible={setVisible}/>
      <div>
      <MyPopUp visible={visible}>
        <div>сыновьясыновьясыновьясыновьясыновьясыновьясыновьясыновьясыновьясыновьясыновьясыновьясыновьясыновьясыновья</div>
      </MyPopUp>
      </div>
    </div>
  );
};

export default Motivation;

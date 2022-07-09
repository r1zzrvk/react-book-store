import React, { useState } from "react";
import MyModal from "../../UI/MyModal";
import typecodeLogo from "../../../img/typecodeLogo.svg";
import s from "../../../styles/Welcome/Motivation/MotivationItem.module.css";
import TypecodeModalContent from "./TypecodeModalContent";

const TypecodeModal = () => {
  const [visible, setVisible] = useState(false);

  const showHandler = () => {
    setVisible(true);
  };

  const hideHandler = () => {
    setVisible(false);
  };
  return (
    <div onClick={showHandler} className={s.content}>
      <MyModal visible={visible} setVisible={setVisible}>
        <TypecodeModalContent hideHandler={hideHandler} />
      </MyModal>
      <img className={s.logo} src={typecodeLogo} alt="" />
    </div>
  )
}

export default TypecodeModal
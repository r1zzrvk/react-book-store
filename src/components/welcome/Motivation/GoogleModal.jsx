import React, { useState } from "react";
import MyModal from "../../UI/MyModal";
import GoogleModalContent from "./GoogleModalContent";
import googleLogo from "../../../img/googleLogo.svg";
import s from "../../../styles/Welcome/Motivation/MotivationItem.module.css";

const GoogleModal = () => {
  const [visible, setVisible] = useState(false);

  const showHandler = () => {
    setVisible(true);
  };

  const hideHandler = () => {
    setVisible(false);
  };
  return (
    <div onMouseOut={hideHandler}  onMouseOver={showHandler} className={s.content}>
      <MyModal visible={visible} setVisible={setVisible}>
        <GoogleModalContent hideHandler={hideHandler} />
      </MyModal>
      <img className={s.logo} src={googleLogo} alt="" />
    </div>
  );
};

export default GoogleModal;

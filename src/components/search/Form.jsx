import React, { useState } from "react";
import MyButton from "../UI/Mybutton";
import style from "../../styles/Button/MyButton.module.css";
import s from "../../styles/Form/Form.module.css";
import FilterBlock from "./FilterBlock";
import SearchBlock from "./SearchBlock";

const Form = (props) => {
  const [visible, setVisible] = useState(false);

  const handleVisibleFilters = (e) => {
    e.preventDefault();
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };
  
  return (
    <div>
      <form className={s.form}>
        <SearchBlock />
        <div>
          <MyButton className={style.arrowBtn} onClick={handleVisibleFilters}>
            {!visible ? <>▼</> : <>✖</>}
          </MyButton>
        </div>
      </form>
      {!visible ? <div></div> : <FilterBlock />}
    </div>
  );
};

export default Form;

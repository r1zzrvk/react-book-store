import React from 'react';
import s from "../../../styles/Welcome/Greetings/GreetingsItem.module.css";
import MyButton from '../../UI/Mybutton';
import button from '../../../styles/Button/MyButton.module.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const GreetingsItem = () => {
const history = useHistory();

const goToShop = () => {
  history.push('/main')
}
  return (
    <div className={s.container}>
      <div className={s.content}>
        <h1>Welcome!</h1>
        <p className={s.description}>This is an online bookstore. You can view profiles and add books to your cart. Search and filter content. The project is based on the <strong>GoogleBooks API</strong>, but with a <strong>JSONServer API</strong> with its own data. Next, I will talk about this in more detail.</p>
        <p className={s.postscript}>
        If you don't want to read anything, you can click on the button below, it will take you to the store. For the rest, there is scroll!
        </p>
        <MyButton className={button.secondaryLarge} onClick={goToShop}>Go to shop</MyButton>
      </div>
    </div>
  )
}

export default GreetingsItem
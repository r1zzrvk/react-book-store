import React from 'react';
import s from '../../../styles/Welcome/Greetings/Greetings.module.css';
import GreetingsItem from './GreetingsItem';

const Greetings = () => {
  return (
    <div className={s.container}>
      <GreetingsItem/>
    </div>
  )
}

export default Greetings
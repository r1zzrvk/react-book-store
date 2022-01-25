import React from 'react';
import s from '../../styles/Loader/MyLoader.module.css';

const MyLoader = (props) => {
  return <div className={s.loaderLayout}>
    <div className={s.loader}></div>
  </div>;
};

export default MyLoader;

import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchVersions } from '../redux/actions/async-action';
import s from '../styles/About/About.module.css';

const About = () => {
  const versions = useSelector(state => state.side.versions);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchVersions())
  }, [dispatch]);
 
  return <div>
    {versions.map(version => <div 
    key={version.version}
    version={version}
    className={s.about}>
      <h1>Version: {version.version}</h1>
      <p>{version.description}</p>
      <hr className={s.hr}/>
    </div>).reverse()}
  </div>;
};

export default About


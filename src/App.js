import './styles/App.css';
import MyNavBar from './components/UI/MyNavBar';
import Main from './components/Main';
import { Redirect, Route, Switch } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import ItemIdPage from './components/ItemIdPage';
import MyFooter from './components/UI/MyFooter';

const App = () => {
 
  return (
    <div className='app'>
      <div className='nav-bar'><MyNavBar /></div>
      <Switch>
        <Route exact path='/main'>
        <div className='main'><Main /></div>
        </Route>
        <Route exact path='/main/:id'>
            <ItemIdPage/>
        </Route>
        <Route path='/about'>
            <About/>
        </Route>
        <Route path='/error'>
            <ErrorPage/>
        </Route>
        <Redirect exact from ='/' to ='/main'/>
        <Redirect to='error'/>
      </Switch>
      <div className='footer'><MyFooter/></div>
    </div>
  )
};

export default App;

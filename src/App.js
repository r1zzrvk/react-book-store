import './styles/App.css';
import MyNavBar from './components/UI/MyNavBar';
import Main from './components/Main';

const App = () => {
 
  return (
    <div className='app'>
      <div className='nav-bar'><MyNavBar /></div>
      <div className='main'><Main /></div>
    </div>
  )
};

export default App;

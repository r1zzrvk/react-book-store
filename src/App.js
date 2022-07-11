import "./styles/App.css";
import Main from "./components/pages/Main";
import { Redirect, Route, Switch } from "react-router-dom";
import ErrorPage from "./components/pages/ErrorPage";
import About from "./components/pages/About";
import ItemIdPage from "./components/pages/ItemIdPage";
import Cart from "./components/cart/Cart";
import WelcomePage from "./components/pages/WelcomePage";
import { Layout } from "./components/UI/Layout";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/welcome">
          <div className="main">
            <WelcomePage />
          </div>
        </Route>
        <Layout>
          <Route exact path="/main">
            <div className="main">
              <Main />
            </div>
          </Route>
          <Route exact path="/main/:id">
            <div className="main">
              <ItemIdPage />
            </div>
          </Route>
          <Route path="/about">
            <div className="main">
              {" "}
              <About />
            </div>
          </Route>
          <Route path="/cart">
            <div className="main">
              <Cart />
            </div>
          </Route>
          <Route path="/error">
            <div className="main">
              <ErrorPage />
            </div>
          </Route>
        </Layout>
        <Redirect exact from="/" to="/welcome" />
        <Redirect to="error" />
      </Switch>
    </div>
  );
};

export default App;

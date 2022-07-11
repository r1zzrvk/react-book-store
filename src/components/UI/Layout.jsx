import MyFooter from "./MyFooter";
import MyNavBar from "./MyNavBar";
import navbar from "../../styles/Nav/Nav.module.css";
import footer from "../../styles/Footer/Footer.module.css";

export const Layout = ({ children }) => {
  return (
    <div>
      <div className={`${navbar.welcome__navbar} ${navbar.main__navbar}`}>
        <MyNavBar />
      </div>
      {children}
      <div className={`${footer.welcome__footer} ${footer.main__footer}`}>
        <MyFooter />
      </div>
    </div>
  );
};

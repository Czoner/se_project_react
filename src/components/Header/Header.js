import "./Header.css";
import logoImg from "../../images/Logo.svg";
import avitar from "../../images/Ellipse 18.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.js";
import { Link } from "react-router-dom";

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logoImg} alt="Logo" />
        </Link>
        <p className="header__date">December 10, New York City</p>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        {/* <div>
          <button
            type="text"
            onClick={onCreateModal}
            className="header__button"
          >
            + Add clothes
          </button>
        </div> */}
        <Link className="header__signUp" to="/profile">
          Sign Up
        </Link>
        <Link className="header__signIn" to="/profile">
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;

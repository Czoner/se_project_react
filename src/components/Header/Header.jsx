import "./Header.css";
import logoImg from "../../images/Logo.svg";
import avitar from "../../images/Ellipse 18.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import { Link } from "react-router-dom";

const Header = ({ onCreateModal, onSignUpModal, onSignInModal, name }) => {
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
        <div>
          <button
            type="text"
            onClick={onCreateModal}
            className="header__button"
          >
            + Add clothes
          </button>
        </div>
        {/* <button type="text" onClick={onSignUpModal} className="header__signUp">
          Sign Up
        </button>
        <button type="text" onClick={onSignInModal} className="header__signIn">
          Log In
        </button> */}
        <Link to="/profile">
          <p className="header__signUp">{name}</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;

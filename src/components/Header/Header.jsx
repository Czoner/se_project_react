import React from "react";
import "./Header.css";
import logoImg from "../../images/Logo.svg";
import avitar from "../../images/Ellipse 18.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import { Link } from "react-router-dom";
import { CurrentUserContent } from "../../contexts/CurrentUserContext.jsx";

const Header = ({
  onCreateModal,
  onSignUpModal,
  onSignInModal,
  name,
  isLoggedIn,
}) => {
  const currentUser = React.useContext(CurrentUserContent);
  const profileName = currentUser.name;

  console.log(profileName);
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
        {isLoggedIn ? (
          <>
            <div>
              <button
                type="text"
                onClick={onCreateModal}
                className="header__button"
              >
                + Add clothes
              </button>
            </div>
            <Link to="/profile">
              <p className="header__signUp">{name}</p>
            </Link>
            {currentUser.avatar ? (
              <>
                <img
                  className="header__avatar-img"
                  src={currentUser.avatar}
                  alt="Profile Image"
                />
              </>
            ) : (
              <>
                <div className="header__avatar-img">{profileName}</div>
              </>
            )}
          </>
        ) : (
          <>
            <button
              type="text"
              onClick={onSignUpModal}
              className="header__signUp"
            >
              Sign Up
            </button>
            <button
              type="text"
              onClick={onSignInModal}
              className="header__signIn"
            >
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

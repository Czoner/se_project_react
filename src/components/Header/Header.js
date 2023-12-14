import "./Header.css";
import logoImg from "../../images/Logo.svg";
import avitar from "../../images/Ellipse 18.svg";

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={logoImg} alt="Logo" />
        </div>
        <p className="header__date">December 10, New York City</p>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            type="text"
            onClick={onCreateModal}
            className="header__button"
          >
            + Add clothes
          </button>
        </div>
        <p className="header__name">Terrence Tegegne</p>
        <div>
          <img src={avitar} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;

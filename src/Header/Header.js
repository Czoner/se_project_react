import "../Header/Header.css";

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src="/images/Logo.svg" alt="Logo" />
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
          <img src="/images/Ellipse 18.svg" alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;

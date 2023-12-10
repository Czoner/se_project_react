import "../Header/Header.css";

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src="/images/Logo.svg" alt="Logo" />
        </div>
        <div>Date</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text" onClick={onCreateModal}>
            Add New Clothes
          </button>
        </div>
        <div>Name</div>
        <div>
          <img src="/images/Ellipse 18.svg" alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;

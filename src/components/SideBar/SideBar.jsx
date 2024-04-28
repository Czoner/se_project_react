import { NavLink, useNavigate } from "react-router-dom";
import "./SideBar.css";
import { removeToken } from "../../utils/token";

const SideBar = ({ name, avatar, onEditProfileModal, isLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();
    removeToken();
    navigate("/");
    isLoggedIn = false;
  };

  return (
    <div>
      <div className="user">
        <div>
          <img src={avatar} className="user-image" alt="userImg" />
        </div>
        <div className="user-name">{name}</div>
      </div>
      <button className="user-change" type="text" onClick={onEditProfileModal}>
        Change profile data
      </button>
      <button className="user-logOut" type="text" onClick={handleLogOut}>
        Log out
      </button>
    </div>
  );
};

export default SideBar;

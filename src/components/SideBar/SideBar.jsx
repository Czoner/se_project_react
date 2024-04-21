import avitar from "../../images/Ellipse 18.svg";
import "./SideBar.css";

const SideBar = ({ name, avatar, onEditProfileModal }) => {
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
    </div>
  );
};

export default SideBar;

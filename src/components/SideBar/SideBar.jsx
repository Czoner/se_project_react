import avitar from "../../images/Ellipse 18.svg";
import "./SideBar.css";

const SideBar = ({ name, avatar }) => {
  return (
    <div className="user">
      <div>
        <img src={avatar} className="user-image" alt="userImg" />
      </div>
      <div className="user-name">{name}</div>
    </div>
  );
};

export default SideBar;

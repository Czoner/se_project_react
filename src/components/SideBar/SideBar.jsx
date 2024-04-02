import avitar from "../../images/Ellipse 18.svg";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="user">
      <div>
        <img src={avitar} className="user-image" alt="userImg" />
      </div>
      <div className="user-name">Terrence Tegegne</div>
    </div>
  );
};

export default SideBar;

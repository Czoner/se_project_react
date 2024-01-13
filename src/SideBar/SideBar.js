import avitar from "../images/Ellipse 18.svg";

const SideBar = () => {
  return (
    <div className="user">
      <div className="user-image">
        <img src={avitar} alt="userImg" />
      </div>
      <div className="user-name">Terrence Tegegne</div>
    </div>
  );
};

export default SideBar;

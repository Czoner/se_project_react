import "./SideBar.css";

const SideBar = ({ name, avatar, onEditProfileModal, handleLogOut }) => {
  return (
    <div className="side-bar">
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

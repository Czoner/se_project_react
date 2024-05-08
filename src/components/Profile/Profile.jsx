import React from "react";
import "./Profile.css";
import SideBar from "../SideBar/SideBar.jsx";
import ClothesSection from "../ClothesSection/ClothesSection.jsx";

const Profile = ({
  clothingItems,
  onSelectCard,
  onCreateModal,
  name,
  avatar,
  onEditProfileModal,
  onCardLike,
  isLoggedIn,
  handleLogOut,
}) => (
  <div className="profile">
    <section className="profile-sidebar">
      <SideBar
        name={name}
        avatar={avatar}
        onEditProfileModal={onEditProfileModal}
        handleLogOut={handleLogOut}
      />
    </section>
    <section className="profile-clothesSection">
      <ClothesSection
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
        onCardLike={onCardLike}
        isLoggedIn={isLoggedIn}
      />
    </section>
  </div>
);

export default Profile;

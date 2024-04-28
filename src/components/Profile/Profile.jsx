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
}) => (
  <div className="profile">
    <section className="profile-sidebar">
      <SideBar
        name={name}
        avatar={avatar}
        onEditProfileModal={onEditProfileModal}
        isLoggedIn={isLoggedIn}
      />
    </section>
    <section className="profile-clothesSection">
      <ClothesSection
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
        onCardLike={onCardLike}
      />
    </section>
  </div>
);

export default Profile;

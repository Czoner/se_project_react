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
}) => (
  <div className="profile">
    <section className="profile-sidebar">
      <SideBar
        name={name}
        avatar={avatar}
        onEditProfileModal={onEditProfileModal}
      />
    </section>
    <section className="profile-clothesSection">
      <ClothesSection
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
      />
    </section>
  </div>
);

export default Profile;

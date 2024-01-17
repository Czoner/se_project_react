import React from "react";
import "./Profile.css";
import SideBar from "../SideBar/SideBar.js";
import ClothesSection from "../ClothesSection/ClothesSection.js";

const Profile = ({ clothingItems, onSelectCard, onCreateModal }) => (
  <div className="profile">
    <section className="profile-sidebar">
      <SideBar />
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

import React from "react";
import "./Profile.css";
import SideBar from "../SideBar/SideBar.jsx";
import ClothesSection from "../ClothesSection/ClothesSection.jsx";

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

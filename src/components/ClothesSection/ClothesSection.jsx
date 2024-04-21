import React from "react";
import { CurrentUserContent } from "../../contexts/CurrentUserContext.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import "./ClothesSection.css";

const ClothesSection = ({ clothingItems, onSelectCard, onCreateModal }) => {
  const currentUser = React.useContext(CurrentUserContent);

  const bussine = clothingItems.map((item) => {
    return item.owner;
  });

  const isOwn = bussine.includes(currentUser._id);

  const cardItems = `${isOwn ? "card-items_visible" : "card-items_hidden"}`;

  return (
    <div className="itemSection">
      <div className="function-section">
        <div className="text">Your items</div>
        <button className="add-Card" type="text" onClick={onCreateModal}>
          + Add new
        </button>
      </div>

      <div className={cardItems}>
        {clothingItems.map((x) => (
          <ItemCard key={x._id || x.id} item={x} onSelectCard={onSelectCard} />
        ))}
      </div>
    </div>
  );
};

export default ClothesSection;

import React from "react";
import { CurrentUserContent } from "../../contexts/CurrentUserContext.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import "./ClothesSection.css";

const ClothesSection = ({
  clothingItems,
  onSelectCard,
  onCreateModal,
  onCardLike,
}) => {
  const currentUser = React.useContext(CurrentUserContent);

  const filteredClothingItems = clothingItems.filter(
    (item) => item.owner === currentUser._id
  );

  return (
    <div className="itemSection">
      <div className="function-section">
        <div className="text">Your items</div>
        <button className="add-Card" type="text" onClick={onCreateModal}>
          + Add new
        </button>
      </div>

      <div className="card-items">
        {filteredClothingItems.map((x) => (
          <ItemCard
            key={x._id || x.id}
            item={x}
            onSelectCard={onSelectCard}
            onCardLike={onCardLike}
          />
        ))}
      </div>
    </div>
  );
};

export default ClothesSection;

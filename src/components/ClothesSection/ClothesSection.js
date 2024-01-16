import ItemCard from "../ItemCard/ItemCard.js";
import "./ClothesSection.css";

const ClothesSection = ({ clothingItems, onSelectCard, onCreateModal }) => {
  return (
    <div className="itemSection">
      <div className="function-section">
        <div className="text">Your items</div>
        <button className="add-Card" type="text" onClick={onCreateModal}>
          + Add new
        </button>
      </div>

      <div className="card-items">
        {clothingItems.map((x) => {
          return (
            <ItemCard
              item={x}
              onSelectCard={onSelectCard}
              key={x?._id || x?.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ClothesSection;

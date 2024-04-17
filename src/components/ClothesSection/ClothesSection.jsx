import ItemCard from "../ItemCard/ItemCard.jsx";
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
        {clothingItems.map((x) => (
          <ItemCard key={x._id || x.id} item={x} onSelectCard={onSelectCard} />
        ))}
      </div>
    </div>
  );
};

export default ClothesSection;

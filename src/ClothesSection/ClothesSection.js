import ItemCard from "../components/ItemCard/ItemCard";
import "./ClothesSection.css";

const ClothesSection = ({ clothingItems, onSelectCard, onCreateModal }) => {
  return (
    <div className="itemSection">
      <div className="text">Your items</div>
      <button className="add-Card" type="text" onClick={onCreateModal}>
        + Add new
      </button>
      <div className="card-items">
        {clothingItems.map((x) => {
          return <ItemCard item={x} onSelectCard={onSelectCard} key={x.id} />;
        })}
      </div>
    </div>
  );
};

export default ClothesSection;

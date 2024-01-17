const ItemCard = ({ item, onSelectCard }) => {
  const onClick = () => {
    onSelectCard(item);
  };
  return (
    <div>
      <div className="card_list">
        <img
          src={item.imageUrl}
          className="card_image"
          onClick={onClick}
          alt={item.name}
        />
        <div className="card_name">{item.name}</div>
      </div>
    </div>
  );
};

export default ItemCard;

const ItemCard = ({ item, onSelectCard }) => {
  const imageCard = item.imageUrl;
  const onClick = () => {
    onSelectCard(item);
  };

  return (
    <div>
      <div className="card_list">
        <img
          src={imageCard}
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

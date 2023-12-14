const ItemCard = ({ item, onSelectCard }) => {
  const onClick = () => {
    onSelectCard(item);
  };
  return (
    <div>
      <div className="card_list">
        <img src={item.link} className="card_image" onClick={onClick} />
        <div className="card_name">{item.name}</div>
      </div>
    </div>
  );
};

export default ItemCard;

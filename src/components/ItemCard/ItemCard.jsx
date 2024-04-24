const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const imageCard = item.imageUrl;

  const handleLike = (item) => {
    onCardLike(item._id);
    console.log(item);
  };
  const onClick = () => {
    onSelectCard(item);
  };

  return (
    <div className="card_list">
      <img
        src={imageCard}
        className="card_image"
        onClick={onClick}
        alt={item.name}
      />
      <div className="card_info">
        <div className="card_name">{item.name}</div>
        <button
          className="card_like-button"
          type="button"
          aria-label="Like"
          onClick={(item) => {
            handleLike(item);
          }}
        ></button>
      </div>
    </div>
  );
};

export default ItemCard;

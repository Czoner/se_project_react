const ItemCard = ({ x, onSelectCard }) => {
  return (
    <div>
      <div className="card_list">
        <img
          src={x.link}
          className="card_image"
          onClick={() => onSelectCard(x)}
        />
        <div className="card_name">{x.name}</div>
      </div>
    </div>
  );
};

export default ItemCard;

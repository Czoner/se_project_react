const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={"modal"}>
      <div className="modal__preview">
        <button
          type="button"
          onClick={onClose}
          className="button__close"
        ></button>
        <img src={selectedCard.link} className="modal__image" />
        <div className="modal__card_info">
          <p className="modal__card_name">{selectedCard.name}</p>
          <p className="modal__card_weather">
            Weather Type: {selectedCard.weather}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ItemModal;

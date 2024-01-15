const ItemModal = ({ selectedCard, onClose, handleDeleteCard }) => {
  return (
    <div className={"modal"}>
      <div className="modal__preview">
        <button
          type="button"
          onClick={onClose}
          className="button__close"
        ></button>
        <img src={selectedCard.imageUrl} className="modal__image" />
        <div className="modal__card_info">
          <div>
            <p className="modal__card_name">{selectedCard.name}</p>
            <p className="modal__card_weather">
              Weather Type: {selectedCard.weather}
            </p>
          </div>
          <button
            onClick={handleDeleteCard}
            type="button"
            className="modal__card_delete"
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
};
export default ItemModal;

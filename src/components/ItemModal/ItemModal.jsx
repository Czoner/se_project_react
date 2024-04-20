import React from "react";
import { CurrentUserContent } from "../../contexts/CurrentUserContext";

const ItemModal = ({ selectedCard, onClose, handleDeleteCard }) => {
  const currentUser = React.useContext(CurrentUserContent);

  const isOwn = selectedCard.owner === currentUser._id;
  const itemDeleteButtonClassName = `modal__card_delete ${
    isOwn ? "modal__card_delete_visible" : "modal__card_delete_hidden"
  }`;

  return (
    <div className={"modal"}>
      <div className="modal__preview">
        <button
          type="button"
          onClick={onClose}
          className="button__close"
        ></button>
        <img
          src={selectedCard.imageUrl}
          className="modal__image"
          alt={selectedCard.name}
        />
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
            className={`${itemDeleteButtonClassName}`}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
};
export default ItemModal;

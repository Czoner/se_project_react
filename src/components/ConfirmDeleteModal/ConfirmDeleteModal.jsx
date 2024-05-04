import React from "react";
import "../ModalWithForm/ModalWithForm.css";

const ConfirmDeleteModal = ({ onClose, handleDeleteCard, itemModal }) => {
  return (
    <div className="modal">
      <div className="modal__content modal__confirm">
        <button className="button__close" type="button" onClick={onClose} />
        <h3 className="modal__description">
          Are you sure you want to delete this item? This action is
          irreversible.
        </h3>
        <div className="modal__button">
          <button
            type="submit"
            className="button__delete"
            onClick={handleDeleteCard}
          >
            Yes, delete item
          </button>

          <button className="button__cancel" onClick={itemModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;

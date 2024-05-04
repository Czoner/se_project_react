import React from "react";
import "../ModalWithForm/ModalWithForm.css";

const ConfirmDeleteModal = ({ onClose, isOpen, handleDeleteCard, toggle }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <button className="button__close" type="button" onClick={onClose} />
        <h3 className="modal__description">
          Are you sure you want to delete this item? This action is
          irreversible.
        </h3>
        <div className="modal__button">
          <button type="submit" className="button__delete">
            Yes, delete item
          </button>

          <button className="button__cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;

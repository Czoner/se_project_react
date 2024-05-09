import "./ModalWithForm.css";
import React from "react";

const ModalWithForm = ({
  children,
  buttontext,
  buttontext2,
  title,
  onClose,
  name,
  onSubmit,
  onSign,
}) => {
  return (
    <div className={`modal modal_type_${title}`}>
      <div className="modal__content">
        <button className="button__close" type="button" onClick={onClose} />
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <div className="modal__buttons">
            <button
              type="submit"
              className="weather__button weather__button_disabled"
            >
              {buttontext}
            </button>
            <button
              className="modal__login_button"
              type="button"
              onClick={onSign}
            >
              {buttontext2}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;

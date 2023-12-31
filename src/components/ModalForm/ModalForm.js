import "./ModalForm.css";

const ModalForm = ({
  children,
  buttontext,
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button
          className="button__close"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button
            type="submit"
            className="weather__button weather__button_disabled"
            disabled
          >
            {buttontext}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;

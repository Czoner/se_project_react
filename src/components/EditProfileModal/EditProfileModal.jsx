import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfileModal = ({ isOpen, handleCloseModal, isLoading }) => {
  const [values, setValues] = useState({
    name: "",
    avatar: "",
  });

  return (
    <ModalWithForm
      title="Change Profile Data"
      buttontext={isLoading ? "Saving..." : "Save changes"}
      isOpen={isOpen}
      onClose={handleCloseModal}
    >
      <label className="modal__label">
        Name * <input type="text" className="modal__input" placeholder="Name" />
      </label>

      <label className="modal__label">
        Avatar *
        <input type="url" className="modal__input" placeholder="Avatar URL" />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;

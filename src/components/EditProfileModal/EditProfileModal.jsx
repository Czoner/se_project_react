import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfileModal = ({
  isOpen,
  handleCloseModal,
  isLoading,
  handleUpdateUser,
}) => {
  const [values, setValues] = useState({
    name: "",
    avatar: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser(values);
  };

  return (
    <ModalWithForm
      title="Change Profile Data"
      buttontext={isLoading ? "Saving..." : "Save changes"}
      isOpen={isOpen}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name *
        <input
          type="text"
          name="name"
          value={values.name}
          className="modal__input"
          placeholder="Name"
          onChange={handleChange}
        />
      </label>

      <label className="modal__label">
        Avatar *
        <input
          type="url"
          name="avatar"
          value={values.avatar}
          className="modal__input"
          placeholder="Avatar URL"
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;

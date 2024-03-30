import React, { useState } from "react";
import * as auth from "../Auth/auth";
import ModalWithForm from "./ModalWithForm";

const RegisterModal = ({ isOpen, handleCloseModal, isLoading }) => {
  const [values, setValues] = useState({
    name: "",
    avatar: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.password === values.confirmPassword) {
      auth.signUp(values);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues(({ ...values }[name] = value));
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttontext={isLoading ? "Saving..." : "Sign Up"}
      isOpen={isOpen}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email*
        <input
          type="email"
          name="email"
          value={values.email}
          className="modal__input"
          placeholder="Email"
          onChange={handleChange}
        />
      </label>

      <label className="modal__label">
        Password*
        <input
          type="password"
          name="password"
          value={values.password}
          className="modal__input"
          placeholder="Password"
          onChange={handleChange}
        />
      </label>

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
        Avatar URL *
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

export default RegisterModal;

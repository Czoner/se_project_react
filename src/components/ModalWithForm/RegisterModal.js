import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as auth from "../Auth/auth";
import ModalWithForm from "./ModalWithForm";

const RegisterModal = ({
  isOpen,
  handleCloseModal,
  isLoading,
  handleSignUp,
}) => {
  const [values, setValues] = useState({
    name: "",
    avatar: "",
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp(values);
    auth
      .signUp(values)
      .then((res) => {
        if (res) {
          history.push("/profile");
        }
      })
      .catch((err) => {
        console.error(err);
      });
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

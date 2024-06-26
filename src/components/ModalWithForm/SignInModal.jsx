import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";

const SignInModal = ({
  isOpen,
  handleCloseModal,
  isLoading,
  handleSignIn,
  handleSignUpModal,
}) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn(values);
  };

  return (
    <ModalWithForm
      title="Log in"
      buttontext={isLoading ? "Saving..." : "Log In"}
      buttontext2="or Sign up"
      isOpen={isOpen}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      onSign={handleSignUpModal}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          required
          name="email"
          value={values.email}
          className="modal__input"
          placeholder="Email"
          onChange={handleChange}
        />
      </label>

      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          value={values.password}
          className="modal__input"
          placeholder="Password"
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default SignInModal;

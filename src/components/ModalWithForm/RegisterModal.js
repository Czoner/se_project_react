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
      isOpen={isOpen}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
    ></ModalWithForm>
  );
};

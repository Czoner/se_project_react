import React from "react";
// import { useState } from "react";
import ModalWithForm from "../ModalForm/ModalForm";
import { useForm } from "../Hooks/useForm";

// onAddItem refers to handleAddItemSubmit, which is declared in App.js
const AddItemModal = ({ isOpen, onAddItem, handleCloseModal, isLoading }) => {
  // const [name, setName] = useState("");
  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const [imageUrl, setUrl] = useState("");
  // const handleUrlChange = (e) => {
  //   setUrl(e.target.value);
  // };

  // const [weather, setWeather] = useState("");
  // const handleWeatherChange = (e) => {
  //   setWeather(e.target.value);
  // };

  const { values, handleChange, setValues } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem(values);
    console.log(values);
  }

  return (
    <ModalWithForm
      title="New gardment"
      buttontext={isLoading ? "Saving..." : "Add garment"}
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
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
        Image
        <input
          type="url"
          name="imageUrl"
          value={values.imageUrl}
          className="modal__input"
          placeholder="Image URL"
          onChange={handleChange}
        />
      </label>
      <p className="weather__group">Select the weather type</p>
      <ul className="weather__list">
        <li className="weather__type">
          <input
            type="radio"
            id="hot"
            value="hot"
            name="weather"
            className="radio__dot"
            onChange={handleChange}
          />
          <label className="weather__name" htmlFor="hot">
            Hot
          </label>
        </li>
        <li className="weather__type">
          <input
            type="radio"
            id="warm"
            value="warm"
            name="weather"
            className="radio__dot"
            onChange={handleChange}
          />
          <label className="weather__name" htmlFor="warm">
            Warm
          </label>
        </li>
        <li className="weather__type">
          <input
            type="radio"
            id="cold"
            value="cold"
            name="weather"
            className="radio__dot"
            onChange={handleChange}
          />
          <label className="weather__name" htmlFor="cold">
            Cold
          </label>
        </li>
      </ul>
    </ModalWithForm>
  );
};

export default AddItemModal;

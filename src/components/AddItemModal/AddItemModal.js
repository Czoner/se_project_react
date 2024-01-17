import React from "react";
import { useState } from "react";
import ModalWithForm from "../ModalForm/ModalForm";

// onAddItem refers to handleAddItemSubmit, which is declared in App.js
const AddItemModal = ({ isOpen, onAddItem, handleCloseModal, isLoading }) => {
  // declare state for each input field
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [imageUrl, setUrl] = useState("");
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const [weather, setWeather] = useState("");
  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
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
          value={name}
          className="modal__input"
          placeholder="Name"
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__label">
        Image
        <input
          type="url"
          name="link"
          value={imageUrl}
          className="modal__input"
          placeholder="Image URL"
          onChange={handleUrlChange}
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
            onChange={handleWeatherChange}
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
            onChange={handleWeatherChange}
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
            onChange={handleWeatherChange}
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

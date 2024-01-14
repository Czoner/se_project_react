import React from "react";
import { useState } from "react";
import ModalForm from "../components/ModalForm/ModalForm";

// onAddItem refers to handleAddItemSubmit, which is declared in App.js
const AddItemModal = ({ isOpen, onAddItem, handleCloseModal }) => {
  // declare state for each input field
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const [weather, setWeather] = useState("");
  const handleWeatherChange = (e) => {
    console.log(e.target.value);
    setWeather(e.target.value);
  };

  // use a useEffect hook to reset the input field state to empty strings when
  // the modal is opened

  // create onChange handlers corresponding to each state variable

  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({ name, link, weather });
  }

  return (
    <ModalForm
      title="New gardment"
      buttontext="Add garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          name="name"
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
    </ModalForm>
  );
};

export default AddItemModal;

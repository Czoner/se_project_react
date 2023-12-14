import Header from "../Header/Header";
import "./App.css";
import "../Footer/Footer.css";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalForm from "../ModalForm/ModalForm";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [weatherType, setWeatherType] = useState("");
  const [days, isDay] = useState(true);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const tempature = parseWeatherData(data);
        setWeatherType(data.weather[0].main.toLowerCase());
        if (data?.sys.sunset < data?.sys.sunrise) {
          isDay(true);
        } else {
          isDay(false);
        }
        setTemp(tempature);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main
        weatherTemp={temp}
        weatherType={weatherType}
        onSelectCard={handleSelectedCard}
        day={days}
      />
      <Footer />
      {activeModal === "create" && (
        <ModalForm
          title="New gardment"
          buttontext="Add garment"
          onClose={handleCloseModal}
        >
          <label className="modal__label">
            Name
            <input
              type="text"
              name="name"
              className="modal__input"
              placeholder="Name"
            />
          </label>
          <label className="modal__label">
            Image
            <input
              type="url"
              name="link"
              className="modal__input"
              placeholder="Image URL"
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
              />
              <label className="weather__name" htmlFor="cold">
                Cold
              </label>
            </li>
          </ul>
        </ModalForm>
      )}

      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;

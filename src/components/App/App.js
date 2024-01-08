import Header from "../Header/Header";
import "./App.css";
import "../Footer/Footer.css";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalForm from "../ModalForm/ModalForm";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import CurrentTempatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom";
import AddItemModal from "../../AddItemModal/AddItemModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [weatherType, setWeatherType] = useState("");
  const [days, isDay] = useState(true);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const onAddItem = (values) => {
    console.log(values);
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
      <CurrentTempatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              weatherType={weatherType}
              onSelectCard={handleSelectedCard}
              day={days}
            />
          </Route>
          <Route path="/profile">Profile Chosen</Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={onAddItem}
          />
        )}

        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
        )}
      </CurrentTempatureUnitContext.Provider>
    </div>
  );
}

export default App;

import Header from "../Header/Header";
import "./App.css";
import "../Footer/Footer.css";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import CurrentTempatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route, Redirect } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal.js";
import { deleteItems, getItems, postItems } from "../../utils/api";
import Profile from "../Profile/Profile.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [weatherType, setWeatherType] = useState("");
  const [days, isDay] = useState(true);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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

  const handleDeleteCard = (card) => {
    deleteItems(card._id)
      .then(() => {
        const itemList = clothingItems.filter((item) => {
          return item._id !== card._id;
        });
        setClothingItems(itemList);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onAddItem = (values) => {
    setIsLoading(true);
    postItems(values)
      .then((res) => {
        setClothingItems([res, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const tempature = parseWeatherData(data);
        const date = new Date();
        setWeatherType(data.weather[0].main.toLowerCase());
        if (
          data?.sys.sunrise * 1000 < date.getTime() &&
          data?.sys.sunset * 1000 > date.getTime()
        ) {
          isDay(true);
        } else {
          isDay(false);
        }
        setTemp(tempature);
        getItems().then((res) => {
          setClothingItems(res);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
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
            clothingItems={clothingItems}
          />
        </Route>
        <ProtectedRoute isLoggedIn={isLoggedIn} path="/profile">
          <Profile
            onSelectCard={handleSelectedCard}
            clothingItems={clothingItems}
            onCreateModal={handleCreateModal}
          />
        </ProtectedRoute>
      </Switch>
      <Footer />
      {activeModal === "create" && (
        <AddItemModal
          handleCloseModal={handleCloseModal}
          isOpen={activeModal === "create"}
          onAddItem={onAddItem}
          isLoading={isLoading}
        />
      )}

      {activeModal === "preview" && (
        <ItemModal
          selectedCard={selectedCard}
          onClose={handleCloseModal}
          handleDeleteCard={() => {
            handleDeleteCard(selectedCard);
          }}
        />
      )}
    </CurrentTempatureUnitContext.Provider>
  );
}

export default App;

import Header from "../Header/Header";
import "./App.css";
import "../Footer/Footer.css";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import CurrentTempatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom";
import AddItemModal from "../../AddItemModal/AddItemModal";
import { deleteItems, getItems, postItems } from "../../utils/api";
import Profile from "../../Profile/Profile";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [weatherType, setWeatherType] = useState("");
  const [days, isDay] = useState(true);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

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

  const handleDeleteCard = () => {
    setActiveModal("");
    deleteItems().then((res) => {
      setSelectedCard(res.filter((item) => item.id !== item));
    });
  };

  const onAddItem = (values) => {
    console.log(values);
    postItems(values).then((res) => {
      setClothingItems([res, ...clothingItems]);
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
              clothingItems={clothingItems}
            />
          </Route>
          <Route path="/profile">
            <Profile
              onSelectCard={handleSelectedCard}
              clothingItems={clothingItems}
              onCreateModal={handleCreateModal}
            />
          </Route>
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
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            deleteCard={handleDeleteCard}
          />
        )}
      </CurrentTempatureUnitContext.Provider>
    </div>
  );
}

export default App;

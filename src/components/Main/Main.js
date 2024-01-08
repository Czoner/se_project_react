import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentTempatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, weatherType, onSelectCard, day }) {
  const { currentTemperatureUnit } = useContext(CurrentTempatureUnitContext);
  const temp = weatherTemp?.[currentTemperatureUnit] || 999;

  const getWeatherTemperature = () => {
    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  };
  weatherType = getWeatherTemperature();
  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  // Pass weatherType to WeatherCard
  return (
    <main className="main">
      <WeatherCard day={day} weatherType={weatherType} weatherTemp={temp} />
      <section className="card_section" id="card-selection">
        Today is {temp} F / You may want to wear:
        <div className="card_items">
          {filteredCards.map((x) => (
            <ItemCard item={x} onSelectCard={onSelectCard} key={x._id} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;

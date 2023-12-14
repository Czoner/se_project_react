import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({ weatherTemp, weatherType, onSelectCard, day }) {
  const getWeatherTemperature = () => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  };
  weatherType = getWeatherTemperature();
  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === getWeatherTemperature();
  });

  // Pass weatherType to WeatherCard
  return (
    <main className="main">
      <WeatherCard
        day={day}
        weatherType={weatherType}
        weatherTemp={weatherTemp}
      />
      <section className="card_section" id="card-selection">
        Today is {weatherTemp} F / You may want to wear:
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

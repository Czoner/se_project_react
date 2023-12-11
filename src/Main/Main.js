import { defaultClothingItems } from "../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo } from "react";

function Main({ weatherTemp, weatherType, onSelectCard }) {
  const weatherTemperature = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);
  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherTemperature;
  });

  // Pass weatherType to WeatherCard
  return (
    <main className="main">
      <WeatherCard
        day={true}
        type={weatherType}
        weatherTemp={weatherTemperature}
      />
      <section className="card_section" id="card-selection">
        Today is {weatherTemp} F / You may want to wear:
        <div className="card_items">
          {filteredCards.map((x) => (
            <ItemCard x={x} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentTempatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({
  weatherTemp,
  weatherType,
  onSelectCard,
  day,
  clothingItems,
  onCardLike,
  isLoggedIn,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTempatureUnitContext);
  const temp = weatherTemp?.tempature?.[currentTemperatureUnit] || 0;

  const getWeatherTemperature = () => {
    if (currentTemperatureUnit === "F") {
      if (temp >= 86) {
        return "hot";
      } else if (temp >= 66 && temp <= 85) {
        return "warm";
      } else if (temp <= 65) {
        return "cold";
      }
    }
    if (currentTemperatureUnit === "C") {
      if (temp >= 30) {
        return "hot";
      } else if (temp >= 18 && temp <= 29) {
        return "warm";
      } else if (temp <= 17) {
        return "cold";
      }
    }
  };

  const typeTemp = getWeatherTemperature();
  const filteredCards = clothingItems.filter((item) => {
    return item?.weather === typeTemp;
  });

  // Pass weatherType to WeatherCard
  return (
    <main className="main">
      <WeatherCard day={day} weatherType={weatherType} weatherTemp={temp} />
      <section className="card_section" id="card-selection">
        Today is {temp} {currentTemperatureUnit} / You may want to wear:
        <div className="card_items">
          {filteredCards.map((x) => {
            return (
              <ItemCard
                key={x._id || x.id}
                item={x}
                onCardLike={onCardLike}
                onSelectCard={onSelectCard}
                isLoggedIn={isLoggedIn}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;

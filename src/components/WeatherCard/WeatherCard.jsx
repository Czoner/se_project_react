import weatherOptions from "../../utils/constants.js";
import { useContext } from "react";
import CurrentTempatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.jsx";
import imageDefault from "../../images/Day/rain.svg";

const WeatherCard = ({ day, weatherType, weatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTempatureUnitContext);
  const weatherOption = weatherOptions.find((option) => {
    return option.day === day && option.type.toLowerCase() === weatherType;
  });
  const imageSrcUrl = weatherOption?.url || imageDefault;

  return (
    <section className="weather" id="weather">
      <div className="weather_info">
        {weatherTemp} {currentTemperatureUnit}
      </div>
      <div>
        <img src={imageSrcUrl} className="weather_image" alt="weather option" />
      </div>
    </section>
  );
};

export default WeatherCard;

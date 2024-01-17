import { type } from "@testing-library/user-event/dist/type";
import weatherOptions from "../../utils/constants.js";

const WeatherCard = ({ day, weatherType, weatherTemp = "" }) => {
  const weatherOption = weatherOptions.find((option) => {
    return option.day === day && option.type.toLowerCase() === weatherType;
  });
  const imageSrcUrl = weatherOption?.url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp} F</div>
      <div>
        <img src={imageSrcUrl} className="weather_image" />
      </div>
    </section>
  );
};

export default WeatherCard;

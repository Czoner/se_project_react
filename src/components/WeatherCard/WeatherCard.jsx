// import weatherOptions from "../../utils/constants.js";
import { useContext } from "react";
import CurrentTempatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";
import imageDefault from "../../images/Day/rain.svg";

const weatherOptions = [
  {
    url: "../../images/Day/rain.svg",
    day: true,
    type: "rain",
  },
  {
    url: "../../images/Day/storm.svg",
    day: true,
    type: "storm",
  },
  {
    url: "../../images/Day/snow.svg",
    day: true,
    type: "snow",
  },
  { url: "../../images/Day/fog.svg", day: true, type: "fog" },
  {
    url: "../../images/Day/cloudy.svg",
    day: true,
    type: "clouds",
  },
  {
    url: "../../images/Day/sunny.svg",
    day: true,
    type: "sunny",
  },
  {
    url: "../../images/Night/moon.svg",
    day: false,
    type: "moon",
  },
  {
    url: "../images/Night/nightCloud.svg",
    day: false,
    type: "clouds",
  },
  {
    url: "../images/Night/nightRain.svg",
    day: false,
    type: "rain",
  },
  {
    url: "../images/Night/nightStorm.svg",
    day: false,
    type: "storm",
  },
  {
    url: "../images/Night/nightSnow.svg",
    day: false,
    type: "snow",
  },
  {
    url: "../images/Night/nightFog.svg",
    day: false,
    type: "fog",
  },
];

const WeatherCard = ({ day, weatherType, weatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTempatureUnitContext);
  const weatherOption = weatherOptions.find((option) => {
    return option.day === day && option.type.toLowerCase() === weatherType;
  });
  const imageSrcUrl = weatherOption?.url || imageDefault;
  console.log(imageSrcUrl);

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

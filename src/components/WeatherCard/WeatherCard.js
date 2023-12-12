import { type } from "@testing-library/user-event/dist/type";

const weatherOptions = [
  { url: require("../images/Day/rain.svg").default, day: true, type: "rain" },
  { url: require("../images/Day/storm.svg").default, day: true, type: "storm" },
  { url: require("../images/Day/snow.svg").default, day: true, type: "snow" },
  { url: require("../images/Day/fog.svg").default, day: true, type: "fog" },
  {
    url: require("../images/Day/cloudy.svg").default,
    day: true,
    type: "clouds",
  },
  { url: require("../images/Day/sunny.svg").default, day: true, type: "sunny" },
  {
    url: require("../images/Night/moon.svg").default,
    day: false,
    type: "moon",
  },
  {
    url: require("../images/Night/nightCloud.svg").default,
    day: false,
    type: "clouds",
  },
  {
    url: require("../images/Night/nightRain.svg").default,
    day: false,
    type: "rain",
  },
  {
    url: require("../images/Night/nightStorm.svg").default,
    day: false,
    type: "storm",
  },
  {
    url: require("../images/Night/nightSnow.svg").default,
    day: false,
    type: "snow",
  },
  {
    url: require("../images/Night/nightFog.svg").default,
    day: false,
    type: "fog",
  },
];

const WeatherCard = ({ day, weatherType, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.find((i) => {
    return i.day === day && i.type === weatherType;
  });
  const imageSrcUrl = imageSrc?.url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp} F</div>
      <div>
        <img
          src={require("../images/Night/nightCloud.svg").default}
          className="weather_image"
        />
      </div>
    </section>
  );
};

export default WeatherCard;

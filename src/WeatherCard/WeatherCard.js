import { type } from "@testing-library/user-event/dist/type";

const weatherOptions = [
  { url: "/images/Day/rain.svg", day: true, type: "rain" },
  { url: "/images/Day/storm.svg", day: true, type: "storm" },
  { url: "/images/Day/snow.svg", day: true, type: "snow" },
  { url: "/images/Day/fog.svg", day: true, type: "fog" },
  { url: "/images/Day/cloudy.svg", day: true, type: "cloudy" },
  { url: "/images/Day/sunny.svg", day: true, type: "sunny" },
  { url: "/images/Night/moon.svg", day: false, type: "moon" },
  { url: "/images/Night/nightCloud.svg", day: false, type: "cloudy" },
  { url: "/images/Night/nightRain.svg", day: false, type: "rain" },
  { url: "/images/Night/nightStorm.svg", day: false, type: "storm" },
  { url: "/images/Night/nightSnow.svg", day: false, type: "snow" },
  { url: "/images/Night/nightFog.svg", day: false, type: "fog" },
];

const WeatherCard = ({ day, weatherType, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.find((i) => {
    return i.day === day && i.type === weatherType;
  });
  console.log(imageSrc);
  const imageSrcUrl = imageSrc?.url || "";
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

import { type } from "@testing-library/user-event/dist/type";

const weatherOptions = [
  { url: "/images/Day/rain.svg", day: true, type: "rain" },
  { url: "/images/Day/storm.svg", day: true, type: "storm" },
  { url: "/images/Day/snow.svg", day: true, type: "snow" },
  { url: "/images/Day/fog.svg", day: true, type: "fog" },
  { url: "/images/Day/cloudy.svg", day: true, type: "cloudy" },
  { url: "/images/Day/sunny.svg", day: true, type: "sunny" },
  { url: "/images/Night/moon.svg", day: false, type: "moon" },
  { url: "/images/Night/nightCloud.svg", day: false, type: "nightCloud" },
  { url: "/images/Night/nightRain.svg", day: false, type: "nightRain" },
  { url: "/images/Night/nightStorm.svg", day: false, type: "nightStorm" },
  { url: "/images/Night/nightSnow.svg", day: false, type: "nightSnow" },
  { url: "/images/Night/nightFog.svg", day: false, type: "nightFog" },
];

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  //console.log(imageSrc[0].url);

  const imageSrcUrl = imageSrc[0].url || "";
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

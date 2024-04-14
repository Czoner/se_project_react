import rain from "../images/Day/rain.svg";
import storm from "../images/Day/storm.svg";
import snow from "../images/Day/snow.svg";
import fog from "../images/Day/fog.svg";
import cloudy from "../images/Day/cloudy.svg";
import sunny from "../images/Day/sunny.svg";
import moon from "../images/Night/moon.svg";
import nightCloud from "../images/Night/nightCloud.svg";
import nightRain from "../images/Night/nightRain.svg";
import nightStorm from "../images/Night/nightStorm.svg";
import nightSnow from "../images/Night/nightSnow.svg";
import nightFog from "../images/Night/nightFog.svg";

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

const weatherOptions = [
  {
    url: rain,
    day: true,
    type: "rain",
  },
  {
    url: storm,
    day: true,
    type: "storm",
  },
  {
    url: snow,
    day: true,
    type: "snow",
  },
  { url: fog, day: true, type: "fog" },
  {
    url: cloudy,
    day: true,
    type: "clouds",
  },
  {
    url: sunny,
    day: true,
    type: "sunny",
  },
  {
    url: moon,
    day: false,
    type: "moon",
  },
  {
    url: nightCloud,
    day: false,
    type: "clouds",
  },
  {
    url: nightRain,
    day: false,
    type: "rain",
  },
  {
    url: nightStorm,
    day: false,
    type: "storm",
  },
  {
    url: nightSnow,
    day: false,
    type: "snow",
  },
  {
    url: nightFog,
    day: false,
    type: "fog",
  },
];

export default weatherOptions;

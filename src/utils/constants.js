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
    url: "se_project_react/src/images/Day/rain.svg",
    day: true,
    type: "rain",
  },
  {
    url: "se_project_react/src/images/Day/storm.svg",
    day: true,
    type: "storm",
  },
  {
    url: "../../images/Day/snow.svg",
    day: true,
    type: "snow",
  },
  { url: "../images/Day/fog.svg", day: true, type: "fog" },
  {
    url: "../../images/Day/cloudy.svg",
    day: true,
    type: "clouds",
  },
  {
    url: "../images/Day/sunny.svg",
    day: true,
    type: "sunny",
  },
  {
    url: "../images/Night/moon.svg",
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

export default weatherOptions;

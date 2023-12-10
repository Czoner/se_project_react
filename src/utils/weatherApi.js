const latitude = 44.34;
const longitude = 10.99;
const APIkey = "5a561cf712511e9f77052102aa1154bd";

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const weather = data.weather;
  const tempature = main && main.temp;
  console.log(Math.ceil(tempature));
  return Math.ceil(tempature);
};

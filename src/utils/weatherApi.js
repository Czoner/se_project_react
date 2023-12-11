const latitude = 40.71;
const longitude = -74.0;
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
  // .then((data) => {
  //   return parseWeatherData(data);
  // });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const tempature = main && main.temp;
  return Math.ceil(tempature);
};

export const weatherMain = (data) => {
  const weather = data.weather[0].main.toLowerCase();
  console.log(weather);
};

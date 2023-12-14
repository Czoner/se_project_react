const latitude = 40.71;
const longitude = -74.0;
const APIkey = "5a561cf712511e9f77052102aa1154bd";

export const getForecastWeather = () => {
  const processServerResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  };

  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(processServerResponse);
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const tempature = main && main.temp;
  return Math.ceil(tempature);
};

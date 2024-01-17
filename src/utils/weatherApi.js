const latitude = 40.71;
const longitude = -74.0;
const APIkey = "5a561cf712511e9f77052102aa1154bd";

const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(processServerResponse);
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const tempature = main && main.temp;
  const weather = {
    tempature: {
      F: Math.round(tempature),
      C: Math.round(((tempature - 32) * 5) / 9),
    },
  };
  return weather;
};

export default processServerResponse;

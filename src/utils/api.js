import processServerResponse from "../utils/weatherApi.js";

export const baseUrl = "http://localhost:3001";

export const getItems = () =>
  fetch(`${baseUrl}/items`).then(processServerResponse);

export const postItems = ({ name, imageUrl, weather }, token) => {
  // console.log(JSON.stringify({ name, imageUrl, weather, jwt }));
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      imageUrl: imageUrl,
      weather: weather,
    }),
  }).then(processServerResponse);
};
export const deleteItems = (cardid, token) => {
  return fetch(`${baseUrl}/items/${cardid}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(processServerResponse);
};

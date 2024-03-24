import processServerResponse from "../utils/weatherApi.js";

export const baseUrl = "http://localhost:3001";

export const getItems = () =>
  fetch(`${baseUrl}/items`).then(processServerResponse);

export const postItems = ({ name, imageUrl, weather }) =>
  fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      imageUrl: imageUrl,
      weather: weather,
    }),
  }).then(processServerResponse);

export const deleteItems = (cardid) =>
  fetch(`${baseUrl}/items/${cardid}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
  }).then(processServerResponse);

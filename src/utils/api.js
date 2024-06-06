import { request } from "./Auth/auth.js";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.wtwr-web.happyforever.com"
    : "http://localhost:3001";

export const getItems = () => request(`${baseUrl}/items`);

export const postItems = ({ name, imageUrl, weather }, token) => {
  // console.log(JSON.stringify({ name, imageUrl, weather, jwt }));
  return request(`${baseUrl}/items`, {
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
  });
};
export const deleteItems = (cardid, token) => {
  return request(`${baseUrl}/items/${cardid}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const addCardLike = (cardid, token) => {
  return request(`${baseUrl}/items/${cardid}/likes`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const removeCardLike = (cardid, token) => {
  return request(`${baseUrl}/items/${cardid}/likes`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

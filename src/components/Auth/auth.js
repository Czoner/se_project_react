import processServerResponse from "../../utils/weatherApi";
const baseUrl = "http://localhost:3001";

export const signUp = ({ name, avatar, email, password }) => {
  //console.log(JSON.stringify({ name, avatar, email, password }));
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  })
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    })
    .then(processServerResponse);
};

export const signIn = ({ email, password }) => {
  fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      localStorage.setItem("jwt", res.token);
    })
    .then(processServerResponse);
};

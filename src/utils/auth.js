
import { config } from './config.js';
const BASE_URL=config.baseUrlMain;
const CONFIG_HEADERS=config.headers;

const parseResponse=(res) => {
  if (res.ok) {
      return res.json();
  }
  return Promise.reject(new Error(`Произошла ошибка со статус-кодом ${res.status}`));
}

export const register = ({name, password, email}) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: CONFIG_HEADERS,
    credentials: 'include',
    body: JSON.stringify({ name, password, email})
  })
  .then(res => parseResponse(res));
};

export const authorize = ({password, email}) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: CONFIG_HEADERS,
    credentials: 'include',
    body: JSON.stringify({password, email})
  })
  .then(res => parseResponse(res));
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: CONFIG_HEADERS,   
  })
    .then(res => parseResponse(res));
};
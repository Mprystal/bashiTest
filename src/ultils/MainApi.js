const BASE_URL = 'http://localhost:3000';

export const getCalEvents = (date) => {
  return fetch(`${BASE_URL}/events`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ date }),
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(`Error! ${res.statusText}`),
  );
};

export const setCalEvent = (event) => {
  return fetch(`${BASE_URL}/event`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ event }),
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(`Error! ${res.statusText}`),
  );
};

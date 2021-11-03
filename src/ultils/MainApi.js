// const BASE_URL = 'http://localhost:3000';
const BASE_URL = 'https://bashi-testing.herokuapp.com/appointments';

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
  })
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(`Error! ${res.statusText}`);
    })
    .then((resp) => resp.data.data);
};

export const convergeGet = () => {
  return fetch('https://www.convergepay.com/hosted-payments/myip')
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const sendConvergeData = () => {
  return fetch(`${BASE_URL}/payment`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ssl_amount: 150 }),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err, 'mainapi'));
};

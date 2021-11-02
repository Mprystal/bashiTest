// require('dotenv').config();
// const express = require('express');
// const path = require('path');
// const cors = require('cors');
// const { google } = require('googleapis');
// const { body, validationResult } = require('express-validator');
// const fetch = require('node-fetch');

import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import cors from 'cors';
import { google } from 'googleapis';
import { body, validationResult } from 'express-validator';
import fetch from 'node-fetch';
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
const { OAuth2 } = google.auth;
const {
  CAL_ID,
  CLIENT_ID,
  REFRESH_TOKEN,
  MERCHANTID,
  MERCHANTUSERID,
  MERCHANTPIN,
} = process.env;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'build', 'index.html')),
  );
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', [
    'http://localhost:3001',
    'http://localhost:3000/payment',
    'https://api.demo.convergepay.com/hosted-payments/',
  ]);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  next();
});

app.use(cors());
app.options('*', cors());

const oAuth2Client = new OAuth2(CAL_ID, CLIENT_ID);

oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});

app.use(express.json());

const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

app.post('/events', [body('date').isISO8601()], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const date = req.body;

  calendar.events
    .list({
      calendarId: 'primary',
      timeMin: date.date,
      showDeleted: false,
      singleEvents: true,
      maxResults: 20,
      orderBy: 'startTime',
    })
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      console.log(err.message);
      res.status(500).send('Server error');
    });
});

app.post(
  '/event',
  body('event.summary').isString(),
  body('event.location').isString(),
  body('event.description').isString(),
  body('event.start.dateTime').isISO8601(),
  body('event.end.dateTime').isISO8601(),
  body('event.attendees.*.email').optional().isEmail(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const event = req.body;
    calendar.events
      .insert({
        calendarId: 'primary',
        resource: event.event,
      })
      .then((data) => {
        res.send({ data });
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).send('Server error');
      });
  },
);

// const url =
//   'https://api.demo.convergepay.com/hosted-payments/transaction_token';

// const hppurl = 'https://api.demo.convergepay.com/hosted-payments';

// const info = {
//   ssl_merchant_id: MERCHANTID,
//   ssl_user_id: MERCHANTUSERID,
//   ssl_pin: MERCHANTPIN,
//   ssl_transaction_type: 'ccsale',
//   ssl_amount: amount.ssl_amount,
// };

// app.post('/payment', (req, res) => {
//   const amount = req.body;
//   fetch('https://api.demo.convergepay.com/hosted-payments', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       ssl_merchant_id: MERCHANTID,
//       ssl_user_id: MERCHANTUSERID,
//       ssl_pin: MERCHANTPIN,
//       ssl_transaction_type: 'ccsale',
//       ssl_amount: amount.ssl_amount,
//     }),
//   })
//     .then((res) => {
//       console.log(res.json());
//     })
//     .catch((err) => console.log(err));
// });

// app.post('/payment', async (req, res) => {
//   const amount = req.body;

//   try {
//     const response = await fetch(
//       'https://api.demo.convergepay.com/hosted-payments/transaction_token',
//       {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           ssl_merchant_id: MERCHANTID,
//           ssl_user_id: MERCHANTUSERID,
//           ssl_pin: MERCHANTPIN,
//           ssl_transaction_type: 'ccsale',
//           ssl_amount: amount.ssl_amount,
//         }),
//       },
//     );

//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     console.log(response, '2');
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.post('/payment', async (req, res) => {
//   const amount = req.body;

//   const formData = new FormData();
//   formData.append('ssl_merchant_id', MERCHANTID);
//   formData.append('ssl_user_id', MERCHANTUSERID);
//   formData.append('ssl_pin', MERCHANTPIN);
//   formData.append('ssl_transaction_type', 'ccsale');
//   formData.append('ssl_amount', amount.ssl_amount);

//   try {
//     const response = await fetch(
//       'https://api.demo.convergepay.com/hosted-payments/transaction_token',
//       {
//         method: 'POST',
//         body: formData,
//       },
//     );

//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     console.log(response, '2');
//   } catch (err) {
//     console.log(err);
//   }
// });

app.get('/payment', (req, res) => {
  const amount = req.body;

  const params = new URLSearchParams();
  params.append('ssl_merchant_id', MERCHANTID);
  params.append('ssl_user_id', MERCHANTUSERID);
  params.append('ssl_pin', MERCHANTPIN);
  params.append('ssl_transaction_type', 'ccsale');
  params.append('ssl_amount', 150);

  fetch('https://api.demo.convergepay.com/hosted-payments/transaction_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  })
    .then((data) => {
      return data.text();
    })
    .then((token) => {
      console.log(token);
      // return fetch('https://api.demo.convergepay.com/hosted-payments/', {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ ssl_txn_auth_token: token }),
      // });
      res.redirect(
        `https://api.demo.convergepay.com/hosted-payments?ssl_txn_auth_token=${token}`,
      );
    })
    // .then((res2) =>
    //   res2.status === 200
    //     ? res.redirect(`https://api.demo.convergepay.com/hosted-payments/`)
    //     : Promise.reject(`Error! ${res2.statusText}`),
    // )
    .catch((err) => console.log(err));
});

app.get('/confirm', (req, res) => {
  console.log(req);
  res.redirect('http://localhost:3001/appointments');
});

app.get('/decline', (req, res) => {
  res.send('declined');
  res.redirect('http://localhost:3001/appointments');
});

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));

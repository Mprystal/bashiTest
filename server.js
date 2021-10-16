require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const { google } = require('googleapis');
const { OAuth2 } = google.auth;
const { CAL_ID, CLIENT_ID, REFRESH_TOKEN } = process.env;
const { body, validationResult } = require('express-validator');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'build', 'index.html')),
  );
}

app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Origin',
    'https://bashi-testing.herokuapp.com/',
  );
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
      .catch((err) => {
        console.log(err.message);
        res.status(500).send('Server error');
      });
  },
);

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));

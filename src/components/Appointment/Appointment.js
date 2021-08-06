import React, { useEffect, useState, useMemo, useRef } from 'react';
import './Appointment.css';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { Helmet } from 'react-helmet-async';

function Appointment() {
  const [date, setDate] = useState(new Date());
  const [newDate, setNewDate] = useState();
  const [listEventTimes, setListEventTimes] = useState([]);
  const [timesAvailable, setTimesAvailable] = useState([]);
  const [timesNotAvailable, setTimesNotAvailable] = useState([]);
  const ref = useRef();

  const workHours = ['09', '10', '11', '12', '13', '14', '15', '16'];
  let checkTime = new Date();

  // let timesNotAvailable = [];
  let gapi = window.gapi;
  let CLIENT_ID = 'xxx';
  let API_KEY = 'xxx';

  // Array of API discovery doc URLs for APIs used by the quickstart
  let DISCOVERY_DOCS = [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ];

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  let SCOPES =
    'https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.readonly';

  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.client.load('calendar', 'v3', () => {
        console.log('loaded calender');
      });

      // Listen for sign-in state changes.
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

      function updateSigninStatus() {
        gapi.auth2.getAuthInstance().isSignedIn.get();
      }
    });
  });

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  function endEventTime(time) {
    let newTime = parseInt(time) + 1;
    return newTime.toString();
  }

  const handleEventClick = (time) => {
    let event = {
      summary: 'Appointment with Bashi Law PLLC',
      location: '817 Brooklyn Street Suite B Raleigh, NC 27605',
      description: 'Appointment to discuss services with Bashi Law PLLC',
      start: {
        dateTime: `${newDate}T${time}:00:00-04:00`,
      },
      end: {
        dateTime: `${newDate}T${endEventTime(time)}:00:00-04:00`,
      },
      attendees: [
        { email: 'lpage@example.com' },
        { email: 'sbrin@example.com' },
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 },
          { method: 'popup', minutes: 10 },
        ],
      },
    };
    let newTimesNotAvailable = [...timesNotAvailable, time];

    setTimesNotAvailable(newTimesNotAvailable);

    let req = gapi.client.calendar.events.insert({
      calendarId: 'primary',
      resource: event,
    });

    req.execute((event) => {
      console.log(event);
    });
  };

  const handleLogoutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  const onDateChange = (date) => {
    setDate(date);
    convertDate(date);
    //read the time slots available after change
    timeSlotsAvailable(date);
  };

  const convertDate = (date) => {
    const [month, day, year] = [
      date.getMonth() + 1,
      date.getDate(),
      date.getFullYear(),
    ];

    const newDate = `${year}-${month < 10 ? '0' + month : month}-${
      day < 10 ? '0' + day : day
    }`;

    return setNewDate(newDate);
  };

  const timeSlotsAvailable = (date) => {
    gapi.client.calendar.events
      .list({
        calendarId: 'primary',
        timeMin: date.toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 20,
        orderBy: 'startTime',
      })
      .then((res) => {
        setListEventTimes(res.result.items);
      })
      .then(() => {
        return timesNotAvailableFunction;
      })
      .then(() => {
        return timesAvailableFunction;
      });
  };

  const timesNotAvailableFunction = useMemo(() => {
    // let fghgh = new Date();
    // console.log(fghgh.getHours().toString());
    let tempArray = [];
    listEventTimes.forEach((event) => {
      //check to see if event day = clicked day
      let dateOfEvent = event.start.dateTime.slice(0, 10);
      if (dateOfEvent === newDate) {
        //check to see if times are within work hours
        if (
          event.start.dateTime.slice(11, 13) < 17 &&
          event.start.dateTime.slice(11, 13) >= 9
        ) {
          tempArray.push(event.start.dateTime.slice(11, 13));
        }
      }
    });
    setTimesNotAvailable(tempArray);
    return;
  }, [newDate, listEventTimes]);

  const timesAvailableFunction = useMemo(() => {
    setTimesAvailable(workHours.filter((n) => !timesNotAvailable.includes(n)));
  }, [timesNotAvailable]);

  function timeConversion(time) {
    switch (time) {
      case '09':
        return '9am - 10am';
      case '10':
        return '10am - 11am';
      case '11':
        return '11am - 12pm';
      case '12':
        return '12pm - 1pm';
      case '13':
        return '1pm - 2pm';
      case '14':
        return '2pm - 3pm';
      case '15':
        return '3pm - 4pm';
      case '16':
        return '4pm - 5pm';
      default:
        console.log('nocase');
    }
  }
  return (
    <main className='appointment'>
      <Helmet>
        <title></title>
        <meta name='keywords' />
        <meta name='description' />
        <link rel='canonical' href='http://www.bashilawpllc.com/appointment' />
      </Helmet>
      <h1 className='appointment__header h1_textSize'>
        Schedule An Appointment
      </h1>
      <div className='appointment__container'>
        <p className='appointment__paragraph p_textSize'>
          To make an appointment, you must login to Googles authentication
          first. This will send you an email and update your Google calendar
          once an appointment is scheduled.
        </p>

        <button
          className='appointment__authorize_button'
          onClick={handleAuthClick}
        >
          Authorize into OAuth account
        </button>

        <button
          className='appointment__signout_button'
          onClick={handleLogoutClick}
        >
          Sign Out
        </button>

        <p className='appointment__paragraph p_textSize'>
          Select a day to see what time slots are available. Must select today,
          if youd like to schedule for today
        </p>
        <Calendar
          id='calendar'
          onChange={onDateChange}
          value={date}
          next2Label={null}
          prev2Label={null}
          calendarType='US'
          minDate={new Date()}
          tileDisabled={({ date }) => date.getDay() === 0}
        />

        <ul className='appointment__list' ref={ref}>
          {timesAvailable.map((time) => {
            if (checkTime.getDate() === date.getDate()) {
              if (checkTime.getHours().toString() < time) {
                return (
                  <li className='appointment__list-item' key={time}>
                    <button
                      className='appointment__list-item_button'
                      onClick={() => handleEventClick(time)}
                    >
                      {timeConversion(time)}
                    </button>
                  </li>
                );
              }
            } else {
              return (
                <li className='appointment__list-item' key={time}>
                  <button
                    className='appointment__list-item_button'
                    onClick={() => handleEventClick(time)}
                  >
                    {timeConversion(time)}
                  </button>
                </li>
              );
            }
          })}
        </ul>
        {ref.current && ref.current.children.length === 0 ? (
          <p className='p_textSize'>No times available for today</p>
        ) : (
          ''
        )}
      </div>
    </main>
  );
}

export default Appointment;

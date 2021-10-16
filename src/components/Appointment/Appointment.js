import React, { useState, useMemo, useRef, useEffect } from 'react';
import './Appointment.css';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import Overlay from '../Overlay/Overlay';
import Popup from '../Popup/Popup';
import { Helmet } from 'react-helmet-async';
import { getCalEvents, setCalEvent } from '../../ultils/MainApi';

function Appointment({ onOutsideClick }) {
  const [date, setDate] = useState(new Date());
  const [newDate, setNewDate] = useState();
  const [listEventTimes, setListEventTimes] = useState([]);
  const [timesAvailable, setTimesAvailable] = useState([]);
  const [timesNotAvailable, setTimesNotAvailable] = useState([]);
  const [isDateClicked, setIsDateClicked] = useState(false);
  const [isTimePopupOpen, setIsTimePopupOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [emailTime, setEmailTime] = useState();
  const [typeAppointment, setTypeAppointment] = useState('');
  const [displayTypeAppointment, setDisplayTypeAppointment] = useState(true);
  const [isPaidAppointment, setIsPaidAppointment] = useState(null);
  const ref = useRef();

  const workHours = ['09', '10', '11', '12', '13', '14', '15', '16'];
  let checkTime = new Date();

  useEffect(() => {
    document.addEventListener('keydown', escapeClose);
    return () => document.removeEventListener('keydown', escapeClose);
  });

  function escapeClose(e) {
    if (e.which === 27) {
      setIsTimePopupOpen(false);
    }
  }

  function endEventTime(time) {
    let newTime = parseInt(time) + 1;
    return newTime.toString();
  }

  const handleEventClick = (time) => {
    setIsTimePopupOpen(true);
    scrollTop();
    setEmailTime(time);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    let newTimesNotAvailable = [...timesNotAvailable, emailTime];
    setTimesNotAvailable(newTimesNotAvailable);

    let event = {
      summary: 'Appointment with Bashi Law PLLC',
      location: '817 Brooklyn Street Suite B Raleigh, NC 27605',
      description: `Appointment to discuss ${typeAppointment} services with Bashi Law PLLC`,
      start: {
        dateTime: `${newDate}T${emailTime}:00:00-04:00`,
      },
      end: {
        dateTime: `${newDate}T${endEventTime(emailTime)}:00:00-04:00`,
      },
      attendees: [{ email }],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 },
          { method: 'popup', minutes: 10 },
        ],
      },
    };

    setCalEvent(event).catch((err) => {
      console.log(err.message);
    });

    handleOutsidePopupClick();
  };

  const onNextClick = () => {
    let newTimesNotAvailable = [...timesNotAvailable, emailTime];
    setTimesNotAvailable(newTimesNotAvailable);

    let event = {
      summary: 'Appointment with Bashi Law PLLC',
      location: '817 Brooklyn Street Suite B Raleigh, NC 27605',
      description: `Appointment to discuss ${typeAppointment} services with Bashi Law PLLC`,
      start: {
        dateTime: `${newDate}T${emailTime}:00:00-04:00`,
      },
      end: {
        dateTime: `${newDate}T${endEventTime(emailTime)}:00:00-04:00`,
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 },
          { method: 'popup', minutes: 10 },
        ],
      },
    };

    setCalEvent(event).catch((err) => {
      console.log(err);
    });

    handleOutsidePopupClick();
  };

  const onDateChange = (date) => {
    let eventDate = date.toISOString();
    setDate(date);
    convertDate(date);
    //read the time slots available after date change
    getCalEvents(eventDate)
      .then((res) => {
        setListEventTimes(res.data.items);
      })
      .then(() => {
        return timesNotAvailableFunction;
      })
      .then(() => {
        return timesAvailableFunction;
      })
      .catch((err) => {
        console.log(err.message);
      });
    setIsDateClicked(true);
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

  const timesNotAvailableFunction = useMemo(() => {
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
  }, [timesNotAvailable]); // eslint-disable-line react-hooks/exhaustive-deps

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

  function handleOutsidePopupClick() {
    setIsTimePopupOpen(false);
    setDisplayTypeAppointment(true);
  }

  function emailChangeHandler(e) {
    setEmail(e.target.value);
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function appointmentTypeChange(e) {
    setTypeAppointment(e.target.value);
  }

  function handleClientAcceptPaymentClick() {
    //add converge logic under confirm popup button
    console.log('yes');
  }

  function handleFormChangeClick() {
    setDisplayTypeAppointment(false);
    if (['Family Law', 'Civil Law', 'Felony'].includes(typeAppointment)) {
      //send to payment page
      setIsPaidAppointment(true);
    } else {
      //go to email form
      setIsPaidAppointment(false);
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
      {isTimePopupOpen && <Overlay onOutsideClick={handleOutsidePopupClick} />}
      {isTimePopupOpen && (
        <Popup
          email={email}
          emailChangeHandler={emailChangeHandler}
          handleEmailSubmit={handleEmailSubmit}
          onNextClick={onNextClick}
          onCloseClick={handleOutsidePopupClick}
          appointmentTypeChange={appointmentTypeChange}
          handleFormChangeClick={handleFormChangeClick}
          isPaidAppointment={isPaidAppointment}
          displayTypeAppointment={displayTypeAppointment}
          onClientAcceptPaymentClick={handleClientAcceptPaymentClick}
        />
      )}
      <h1 className='appointment__header h1_textSize'>
        Schedule An Appointment
      </h1>
      <div className='appointment__container'>
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
          {isDateClicked &&
            timesAvailable.map((time) => {
              //if today = clickedday and if the time hasnt passed
              if (checkTime.getDate() === date.getDate()) {
                if (
                  checkTime.getHours().toString() < time ||
                  checkTime.getHours().toString() < 10
                ) {
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
        {
          // ref.current && ref.current.children.length === 0
          timesAvailable.length === 0 ? (
            <p className='p_textSize'>No times available for today</p>
          ) : (
            ''
          )
        }
      </div>
    </main>
  );
}

export default Appointment;

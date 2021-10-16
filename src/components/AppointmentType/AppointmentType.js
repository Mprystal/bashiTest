import React from 'react';
import './AppointmentType.css';

function AppointmentType({
  appointmentTypeChange,
  handleFormChangeClick,
  displayTypeAppointment,
}) {
  const listData = [
    'Misdemeanor',
    'Traffic',
    'Car Accident',
    'Felony',
    'Family Law',
    'Civil Law',
    'Immigration',
  ];
  return (
    <div
      className='appointmentType'
      style={{ display: displayTypeAppointment ? null : 'none' }}
    >
      <p className='appointmentType__text'>
        Please choose the type of appointment that you want to schedule
      </p>
      <ul className='appointmentType__list'>
        {listData.map((item, index) => (
          <li className='appointmentType__list-item' key={index}>
            <input
              className='appointmentType__input'
              type='radio'
              value={item}
              name='appointmentType'
              onChange={appointmentTypeChange}
            />
            {item}
          </li>
        ))}
      </ul>
      <button
        className='appointmentType__button'
        onClick={handleFormChangeClick}
      >
        Next
      </button>
    </div>
  );
}

export default AppointmentType;

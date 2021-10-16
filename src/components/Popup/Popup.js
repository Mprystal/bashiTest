import React, { useState } from 'react';
import './Popup.css';
import EmailForm from '../EmailForm/EmailForm';
import ConfirmPayment from '../ConfirmPayment/ConfirmPayment';
import AppointmentType from '../AppointmentType/AppointmentType';

function Popup({
  email,
  emailChangeHandler,
  handleEmailSubmit,
  onNextClick,
  onCloseClick,
  appointmentTypeChange,
  handleFormChangeClick,
  isPaidAppointment,
  displayTypeAppointment,
  onClientAcceptPaymentClick,
}) {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <div className='popup'>
      <button
        className='popup__close-button'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onCloseClick}
      >
        <svg
          width='40'
          height='30'
          viewBox='0 0 33 33'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M32.7661 29.5683L19.9759 16.778L32.7661 3.98779L29.5686 0.790236L16.7783 13.5805L3.98808 0.790236L0.790527 3.98779L13.5808 16.778L0.790527 29.5683L3.98808 32.7658L16.7783 19.9756L29.5686 32.7658L32.7661 29.5683Z'
            fill={isHovered ? 'rgb(200,200,200)' : 'white'}
          />
        </svg>
      </button>
      <AppointmentType
        appointmentTypeChange={appointmentTypeChange}
        handleFormChangeClick={handleFormChangeClick}
        displayTypeAppointment={displayTypeAppointment}
      />

      {!displayTypeAppointment &&
        (isPaidAppointment ? (
          <ConfirmPayment
            onCloseClick={onCloseClick}
            onClientAcceptPaymentClick={onClientAcceptPaymentClick}
          />
        ) : (
          <EmailForm
            email={email}
            emailChangeHandler={emailChangeHandler}
            handleEmailSubmit={handleEmailSubmit}
            onNextClick={onNextClick}
          />
        ))}
    </div>
  );
}

export default Popup;

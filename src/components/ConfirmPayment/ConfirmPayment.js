import React from 'react';
import './ConfirmPayment.css';

function ConfirmPayment({ onCloseClick, onClientAcceptPaymentClick }) {
  return (
    <div className='confirmPayment'>
      <p className='confirmPayment__text'>
        To set this appointment, it will cost:
        <strong style={{ display: 'block', padding: '10px 0' }}>$150</strong>
        Proceed to payment page?
      </p>
      <button
        className='confirmPayment__button'
        onClick={onClientAcceptPaymentClick}
      >
        Yes
      </button>
      <button className='confirmPayment__button' onClick={onCloseClick}>
        No
      </button>
    </div>
  );
}

export default ConfirmPayment;

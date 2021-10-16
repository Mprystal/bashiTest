import React from 'react';
import './EmailForm.css';

function EmailForm({
  handleEmailSubmit,
  email,
  emailChangeHandler,
  onNextClick,
}) {
  return (
    <form className='emailForm' onSubmit={handleEmailSubmit}>
      <p className='emailForm__text'>
        If you would like a calendar invite, please provide email. Otherwise
        click next
      </p>
      <input
        className='emailForm__input'
        type='email'
        placeholder='Email'
        value={email}
        onChange={emailChangeHandler}
        required
      />
      <div className='emailForm__button-container'>
        <button className='emailForm__button' type='sumbit'>
          Submit
        </button>
        <button
          className='emailForm__next-button'
          onClick={onNextClick}
          type='button'
          disabled={email.length > 0}
        >
          Next
        </button>
      </div>
    </form>
  );
}

export default EmailForm;

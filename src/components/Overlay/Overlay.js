import React from 'react';
import './Overlay.css';

function Overlay({ onOutsideClick }) {
  return <div className='overlay' onClick={onOutsideClick}></div>;
}

export default Overlay;

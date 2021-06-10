import React from 'react';
import './Institutions.css';
import StateBar from '../../../img/nc-stte-bar.jpg';
import AILA from '../../../img/aila.jpg';
import Tenth from '../../../img/tenth.png';
import Wake from '../../../img/wake.png';

function Institutions() {
  return (
    <section className='institutions'>
      <img src={StateBar} alt='' className='institutions__statebar' />
      <img src={AILA} alt='' className='institutions__aila' />
      <img src={Tenth} alt='' className='institutions__tenth' />
      <img src={Wake} alt='' className='institutions__wake' />
    </section>
  );
}

export default Institutions;

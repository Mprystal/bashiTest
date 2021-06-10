import React, { useContext } from 'react';
import './Availability.css';
import { LanguageContext } from '../../../contexts/LanguageContext';
import { changeContactAvailabilityLang } from './AvailabilityLangChange';

function Availability() {
  const language = useContext(LanguageContext);
  return (
    <section className='availability'>
      <p className='availability__paragraph p_textSize' lang={language}>
        {changeContactAvailabilityLang.availabilityParagraph1[language]}
      </p>
      <p className='availability__paragraph p_textSize' lang={language}>
        {changeContactAvailabilityLang.availabilityParagraph2[language]}
      </p>
    </section>
  );
}

export default Availability;

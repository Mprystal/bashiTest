import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import './Testimonials.css';
import { forMetaTitles } from '../../ultils/Helpers';
import { LanguageContext } from '../../contexts/LanguageContext';
import { changeTestimonialsLang } from './TestimonialsLangChange';

function Testimonials() {
  const language = useContext(LanguageContext);
  return (
    <main className='testimonials'>
      <Helmet>
        <title>
          {forMetaTitles(
            changeTestimonialsLang.testimonialsMetaTitle[language],
            language,
          )}
        </title>
      </Helmet>
      <h1
        className='testimonials__filler'
        title='Photo by Henry Be'
        lang={language}
      >
        {changeTestimonialsLang.testimonialsHeader[language]}
      </h1>
    </main>
  );
}

export default Testimonials;

import React, { useContext } from 'react';
import './Values.css';
import { changeHomeValuesLang } from './ValuesLangChange';
import { LanguageContext } from '../../../contexts/LanguageContext';

function Values() {
  const language = useContext(LanguageContext);
  return (
    <section className='values'>
      <h2 className='values__header h2_textSize' lang={language}>
        {changeHomeValuesLang.valuesHeader[language]}
      </h2>
      <p className='values__paragraph p_textSize' lang={language}>
        {changeHomeValuesLang.valuesParagraph[language]}
      </p>
    </section>
  );
}

export default Values;

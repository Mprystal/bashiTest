import React, { useContext } from 'react';
import './LangLinks.css';
import { LanguageContext } from '../../contexts/LanguageContext';

function LangLinks({ onArLanguageChangeClick, onEsLanguageChangeClick }) {
  const language = useContext(LanguageContext);
  return (
    <div className='langlinks'>
      <button
        className='langlinks__btn'
        lang='ar'
        onClick={onArLanguageChangeClick}
      >
        {language === 'ar' ? 'English' : 'العربية'}
      </button>
      <button
        className='langlinks__btn'
        lang='es'
        onClick={onEsLanguageChangeClick}
      >
        {language === 'es' ? 'English' : 'Español'}
      </button>
    </div>
  );
}

export default LangLinks;

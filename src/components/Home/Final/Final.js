import React, { useContext } from 'react';
import { changeHomeFinalLang } from './FinalLangChange';
import { LanguageContext } from '../../../contexts/LanguageContext';
import './Final.css';
import Logo from '../../../img/finalBashiLogo_blue.svg';

function Final() {
  const language = useContext(LanguageContext);

  return (
    <section className='final'>
      <img src={Logo} alt='Bashi Law logo' className='final__logo' />

      <p className='final__paragraph p_textSize' lang={language}>
        {changeHomeFinalLang.finalParagraphP1[language]}
      </p>
      <p className='final__paragraph p_textSize' lang={language}>
        {changeHomeFinalLang.finalParagraphP2[language]}
      </p>
    </section>
  );
}

export default Final;

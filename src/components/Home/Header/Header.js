import React, { useContext } from 'react';
import './Header.css';
import { changeHomeHeaderLang } from './HeaderLangChange';
import { LanguageContext } from '../../../contexts/LanguageContext';

function Header() {
  const language = useContext(LanguageContext);
  return (
    <header
      className='header'
      style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
    >
      <h1 className='header__title h1_textSize' lang={language}>
        {changeHomeHeaderLang.headerWelcome[language]}
      </h1>

      <h2 className='header__title_uppercase h2_textSize' lang={language}>
        <strong>{changeHomeHeaderLang.headerJustice[language]}</strong>
      </h2>
      <p className='header__paragraph_reg' lang={language}>
        {changeHomeHeaderLang.headerAnd[language]}
      </p>
      <h2 className='header__title_uppercase h2_textSize' lang={language}>
        <strong>{changeHomeHeaderLang.headerEquality[language]}</strong>
      </h2>
      <p className='header__paragraph_reg' lang={language}>
        {changeHomeHeaderLang.headerOf[language]}
      </p>
      <h2 className='header__title_uppercase h2_textSize' lang={language}>
        <strong>{changeHomeHeaderLang.headerAll[language]}</strong>
      </h2>

      <p className='header__paragraph' lang={language}>
        {changeHomeHeaderLang.headerParagraph[language]}
      </p>
    </header>
  );
}

export default Header;

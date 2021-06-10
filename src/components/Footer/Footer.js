import React, { useContext } from 'react';
import './Footer.css';
import { LanguageContext } from '../../contexts/LanguageContext';
import { changeFooterLang } from './FooterLangChange';

function Footer() {
  const language = useContext(LanguageContext);
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p
          className='footer__paragraph'
          lang={language}
          style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
        >
          <span className='footer__company-name'>
            {changeFooterLang.footerLine1[language]}{' '}
          </span>
          <br />
          817 {changeFooterLang.footerLine2[language]}
          <br />
          {changeFooterLang.footerLine3[language]}
          <br />
          {changeFooterLang.footerLine4[language]} 27605
          <br />
          <a className='footer__link' href='tel:(919) 780-2603'>
            {language === 'ar' ? '919-780-2603' : '(919) 780-2603'}
          </a>
          <br />
          <a className='footer__link' href='mailto:omar@bashilawpllc.com'>
            OMAR@BASHILAWPLLC.COM
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

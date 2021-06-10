import React, { useContext } from 'react';
import './Info.css';
import { LanguageContext } from '../../../contexts/LanguageContext';
import { changeContactInfoLang } from './InfoLangChange';
import Facebook from '../../../img/facebook.svg';
import Instagram from '../../../img/instagram.svg';
import Twitter from '../../../img/twitter.svg';
import Snapchat from '../../../img/snapchat.svg';

function Info() {
  const language = useContext(LanguageContext);
  return (
    <section className='info'>
      <div className='info__container_phone'>
        <h2
          className='info__method '
          lang={language}
          style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
        >
          {changeContactInfoLang.infoPhoneHeader[language]}:
        </h2>
        <ul className='info__link-list'>
          <li>
            <a className='info__link' href='tel:(919)780-2603'>
              (919) 780-2603
            </a>
          </li>
          <li>
            <a className='info__link' href='tel:(984)500-5819'>
              (984) 500-5819
            </a>
          </li>
        </ul>
      </div>
      <div className='info__container_fax'>
        <h2
          className='info__method '
          lang={language}
          style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
        >
          {changeContactInfoLang.infoFaxHeader[language]}:
        </h2>
        <ul className='info__link-list'>
          <li>
            <a className='info__link' href='tel:(704)973-0605'>
              (704) 973-0605
            </a>
          </li>
        </ul>
      </div>
      <div className='info__container_email'>
        <h2
          className='info__method '
          lang={language}
          style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
        >
          {changeContactInfoLang.infoEmailHeader[language]}:
        </h2>
        <ul className='info__link-list'>
          <li>
            <a className='info__link' href='mailto:omar@bashilawpllc.com'>
              omar@bashilawpllc.com
            </a>
          </li>

          <li>
            <a className='info__link' href='mailto:cynthia@bashilawpllc.com'>
              cynthia@bashilawpllc.com
            </a>
          </li>

          <li>
            <a className='info__link' href='mailto:omar@bashilawpllc.com'>
              admin@bashilawpllc.com
            </a>
          </li>
        </ul>
      </div>

      <div className='info__container_office'>
        <h2
          className='info__method '
          lang={language}
          style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
        >
          {changeContactInfoLang.infoOfficeHeader[language]}:
        </h2>
        <div
          className='info__container_text'
          lang={language}
          style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
        >
          817 {changeContactInfoLang.infoOfficeLocationLine1[language]}
          <br />
          {changeContactInfoLang.infoOfficeLocationLine2[language]}
          <br />
          {changeContactInfoLang.infoOfficeLocationLine3[language]} 27605
        </div>
      </div>
      <div className='info__container_mailing'>
        <h2
          className='info__method '
          lang={language}
          style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
        >
          {changeContactInfoLang.infoMailingHeader[language]}:
        </h2>
        <div className='info__container_text' lang={language}>
          {changeContactInfoLang.infoMailingLocationLine1[language]}
          <br />
          {changeContactInfoLang.infoMailingLocationLine2[language]} 99652
          <br />
          {changeContactInfoLang.infoMailingLocationLine3[language]} 27624
        </div>
      </div>

      <div className='info__container_social'>
        <h2
          className='info__method '
          lang={language}
          style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
        >
          {changeContactInfoLang.infoSocialHeader[language]}:
        </h2>

        <ul className='info__link-list info__link-list_social'>
          <li>
            <a
              className='info__link'
              href='https://www.facebook.com/BashiLawPLLC/?view_public_for=514182848985497'
            >
              <img
                className='info__social-img'
                src={Facebook}
                alt='Facebook icon'
              />
            </a>
          </li>
          <li>
            <a
              className='info__link'
              href='https://www.instagram.com/bashilawpllc/'
            >
              <img
                className='info__social-img'
                src={Instagram}
                alt='Instagram icon'
              />
            </a>
          </li>

          <li>
            <a className='info__link' href='https://twitter.com/LawBashi'>
              <img
                className='info__social-img'
                src={Twitter}
                alt='Twitter icon'
              />
            </a>
          </li>
          <li>
            <a
              className='info__link'
              href='https://snapchat.com/add/bashilawpllc'
            >
              <img
                className='info__social-img'
                src={Snapchat}
                alt='Snapchat icon'
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Info;

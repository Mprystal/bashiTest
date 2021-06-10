import React, { useContext } from 'react';
import './Contact.css';
import { LanguageContext } from '../../contexts/LanguageContext';
import { changeContactLang } from './ContactLangChange';
import { Helmet } from 'react-helmet-async';
import { metaKeywords, forMetaTitles } from '../../ultils/Helpers';
import GroupImg from '../../img/groupBW.jpg';
import Info from './Info/Info';
import Availability from './Availability/Availability';

function Contact() {
  const language = useContext(LanguageContext);
  const { contactMetaDescription, ...rest } = changeContactLang;
  return (
    <main className='contact'>
      <Helmet>
        <title>
          {forMetaTitles(changeContactLang.contactHeader[language], language)}
        </title>
        <meta name='keywords' content={metaKeywords(rest, language)} />
        <meta name='description' content={contactMetaDescription[language]} />
        <link rel='canonical' href='http://www.bashilawpllc.com/contact' />
      </Helmet>
      <h1 className='contact__header h1_textSize' lang={language}>
        {changeContactLang.contactHeader[language]}
      </h1>
      <div className='contact__container'>
        <Info />
        <img className='contact__img' src={GroupImg} alt='Bashi Law team' />
      </div>
      <Availability />
    </main>
  );
}

export default Contact;

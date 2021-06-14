import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import {
  metaDescription,
  metaKeywords,
  forMetaTitles,
} from '../../ultils/Helpers';
import { changeServicesLang } from '../Services/ServicesLangChange';
import './Home.css';
import { changeHomeLang } from './HomeLangChange';
import Header from './Header/Header';
import Institutions from './Institutions/Institutions';
import Values from './Values/Values';
import CardsContainer from './CardsContainer/CardsContainer';
import Final from './Final/Final';

function Home() {
  const language = useContext(LanguageContext);

  return (
    <main className='home'>
      <Helmet>
        <title>{forMetaTitles('home', language)}</title>
        <meta
          name='keywords'
          content={metaKeywords(changeHomeLang, language)}
        />
        <meta
          name='description'
          content={`Immigration Lawyer who specializes in: ${metaDescription(
            changeServicesLang,
            language,
          )}`}
        />
        <link rel='canonical' href='http://www.bashilawpllc.com' />
      </Helmet>
      <Header />
      <Institutions />
      <Values />
      <CardsContainer />
      <Final />
    </main>
  );
}

export default Home;

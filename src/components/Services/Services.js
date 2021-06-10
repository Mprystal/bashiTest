import React, { useContext, Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  metaKeywords,
  metaDescription,
  forMetaTitles,
} from '../../ultils/Helpers';
import './Services.css';
import { LanguageContext } from '../../contexts/LanguageContext';
import { changeServicesLang } from './ServicesLangChange';
import { listData } from './List/listData';
import List from './List/List';

function Services() {
  const language = useContext(LanguageContext);

  return (
    <main
      className='services'
      style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
    >
      <Helmet>
        <title>
          {forMetaTitles(changeServicesLang.servicesHeader[language], language)}
        </title>
        <meta
          name='keywords'
          // content='Services, Humanitarian Visas, Affirmative Asylum, Deferred Action for Childhood Arrival “DACA”, Family-Based immigration, Citizenship & Naturalization, Detention & Bond, Employment Based Visas, NonImmigrant Visas, Removal Defense and Traffic Matters'
          content={metaKeywords(changeServicesLang, language)}
        />
        <meta
          name='description'
          // content='Immigration Lawyer who specializes in Humanitarian Visas, Affirmative Asylum, Deferred Action for Childhood Arrival “DACA”, Family-Based immigration, Citizenship & Naturalization, Detention & Bond, Employment Based Visas, NonImmigrant Visas, Removal Defense and Traffic Violations'
          content={metaDescription(changeServicesLang, language, 'Type')}
        />
        <link rel='canonical' href='http://www.bashilawpllc.com/services' />
      </Helmet>

      <h1 className='services__header h1_textSize' lang={language}>
        {changeServicesLang.servicesHeader[language]}
      </h1>

      {listData.map((listInfo) => (
        <Fragment key={listInfo.type[language]}>
          <h2 className='services__types h2_textSize' lang={language}>
            {listInfo.type[language]}
          </h2>
          <List info={listInfo} />
        </Fragment>
      ))}
    </main>
  );
}

export default Services;

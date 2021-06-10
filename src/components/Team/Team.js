import React, { useContext } from 'react';
import Members from './Members/Members';
import './Team.css';
import { LanguageContext } from '../../contexts/LanguageContext';
import { changeTeamLang } from './TeamLangChange';
import { Helmet } from 'react-helmet-async';
import { metaKeywords, forMetaTitles } from '../../ultils/Helpers';
function Team() {
  const language = useContext(LanguageContext);
  const membersForMetaDescription =
    changeTeamLang.teamMetaKeywords[language].join(', ');
  return (
    <main
      className='team'
      style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
    >
      <Helmet>
        <title>
          {/* Meet Our Team | Bashi Law | Immigration Law | Raleigh NC */}
          {forMetaTitles(changeTeamLang.teamHeader[language], language)}
        </title>
        <meta
          name='keywords'
          content={metaKeywords(changeTeamLang, language)}
        />
        <meta
          name='description'
          content={`Bashi Law Team: ${membersForMetaDescription}`}
        />
        <link rel='canonical' href='http://www.bashilawpllc.com/team' />
      </Helmet>
      <h1 className='team__header h1_textSize' lang={language}>
        {changeTeamLang.teamHeader[language]}
      </h1>
      <Members />
    </main>
  );
}

export default Team;

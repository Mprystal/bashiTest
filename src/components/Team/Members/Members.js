import React, { useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import { changeTeamMembersLang } from './MembersLangChange';
import './Members.css';
import BashiImg from '../../../img/teamPageBashi.jpg';
import CynthiaImg from '../../../img/teamPageCynth.jpg';

function Members() {
  const language = useContext(LanguageContext);
  return (
    <>
      <div className='member__container'>
        <img className='member__img_bashi' src={BashiImg} alt='Mr.Bashi' />
        <h2 className='member__name h2_textSize' lang={language}>
          {changeTeamMembersLang.membersBashiTitle[language]}
        </h2>

        <p className='member__paragraph p_textSize' lang={language}>
          {changeTeamMembersLang.membersBashiParagraph1[language]}
        </p>
        <p className='member__paragraph p_textSize' lang={language}>
          {changeTeamMembersLang.membersBashiParagraph2[language]}
        </p>
        <p className='member__paragraph p_textSize' lang={language}>
          {changeTeamMembersLang.membersBashiParagraph3[language]}
        </p>
      </div>

      <div className='member__container'>
        <img
          className='member__img_cynthia'
          src={CynthiaImg}
          alt='Cynthia Martinez'
        />
        <h2 className='member__name h2_textSize' lang={language}>
          {changeTeamMembersLang.membersCynthTitle[language]}
        </h2>
        <p className='member__paragraph p_textSize' lang={language}>
          {changeTeamMembersLang.membersCynthParagraph1[language]}
        </p>
        <p className='member__paragraph p_textSize' lang={language}>
          {changeTeamMembersLang.membersCynthParagraph2[language]}
        </p>
      </div>
    </>
  );
}

export default Members;

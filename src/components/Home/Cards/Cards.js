import React, { useContext } from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';
import { changeHomeCardsLang } from './CardsLangChange';
import { LanguageContext } from '../../../contexts/LanguageContext';
import Gavel from '../../../img/gavel.jpg';
import TeamPic from '../../../img/group-with-books.jpg';

function Cards() {
  const language = useContext(LanguageContext);
  return (
    <>
      <div className='cards'>
        <img src={Gavel} alt='by Bill Oxford' className='cards__img_gavel' />
        <h3 className='cards__header h3__textSize'>
          {changeHomeCardsLang.cardsAbout[language]}
        </h3>
        <p className='cards__paragraph p_textSize'>
          {changeHomeCardsLang.cardsAboutParagraph[language]}
        </p>
        <Link to='/team'>
          <button className='cards__btn'>
            {changeHomeCardsLang.cardsLearnMore[language]} <span>&rarr;</span>
          </button>
        </Link>
      </div>

      <div className='cards'>
        <img src={TeamPic} alt='team' className='cards__img_teampic' />
        <h3 className='cards__header h3__textSize'>
          {changeHomeCardsLang.cardsContact[language]}
        </h3>
        <p className='cards__paragraph p_textSize'>
          {changeHomeCardsLang.cardsContactParagraph[language]}
        </p>
        <Link to='/contact'>
          <button className='cards__btn'>
            {changeHomeCardsLang.cardsContactNow[language]} <span>&rarr;</span>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Cards;

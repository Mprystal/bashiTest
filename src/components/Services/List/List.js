import React, { useContext } from 'react';
import { LanguageContext } from '../../../contexts/LanguageContext';
import './List.css';

function List({ info }) {
  const language = useContext(LanguageContext);
  const { alpha, img, items } = info;
  return (
    <ul
      className='list'
      style={{
        backgroundImage: `linear-gradient(rgba(16, 29, 44, ${alpha}), rgba(16, 29, 44, ${alpha})), url(${img})`,
      }}
    >
      {items.map((items) => (
        <li className='list__item' lang={language} key={items[language]}>
          <h3 className='list__header h3_textSize'>{items[language]}</h3>
        </li>
      ))}
    </ul>
  );
}

export default List;

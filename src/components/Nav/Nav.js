import React, { useContext, useState, useEffect } from 'react';
import Logo from '../../img/finalBashiLogo_white.svg';
import { NavLink, Link } from 'react-router-dom';
import './Nav.css';
import { LanguageContext } from '../../contexts/LanguageContext';
import { changeNavLang } from './NavLangChange';
import Overlay from '../Overlay/Overlay';
// import LangLinks from '../LangLinks/LangLinks'

function Nav() {
  const [isPhoneNavOpen, setIsPhoneNavOpen] = useState(false);
  const language = useContext(LanguageContext);

  useEffect(() => {
    document.addEventListener('keydown', escapeClose);
    return () => document.removeEventListener('keydown', escapeClose);
  });

  function escapeClose(e) {
    if (e.which === 27) {
      setIsPhoneNavOpen(false);
    }
  }

  function handlePhoneNavOpen() {
    setIsPhoneNavOpen(!isPhoneNavOpen);
  }

  function handlePhoneNavClose() {
    setIsPhoneNavOpen(false);
  }

  return (
    <nav className='nav'>
      {isPhoneNavOpen ? <Overlay onOutsideClick={handlePhoneNavClose} /> : null}

      <Link className='nav__link_logo' to='/'>
        <img src={Logo} alt='logo' className='nav__logo' />
      </Link>

      <button className='nav__phone-btn' onClick={handlePhoneNavOpen}>
        {isPhoneNavOpen ? (
          <svg
            width='24'
            height='18'
            viewBox='0 0 33 33'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M32.7661 29.5683L19.9759 16.778L32.7661 3.98779L29.5686 0.790236L16.7783 13.5805L3.98808 0.790236L0.790527 3.98779L13.5808 16.778L0.790527 29.5683L3.98808 32.7658L16.7783 19.9756L29.5686 32.7658L32.7661 29.5683Z'
              fill='white'
            />
          </svg>
        ) : (
          <svg
            width='24'
            height='18'
            viewBox='0 0 24 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='nav__phone-btn-svg'
          >
            <rect x='4' y='0' width='24' height='2' fill='white' />
            <rect x='4' y='7' width='24' height='2' fill='white' />
            <rect x='4' y='14' width='24' height='2' fill='white' />
          </svg>
        )}
      </button>

      <div
        className={isPhoneNavOpen ? 'nav__container_phone' : 'nav__container'}
      >
        <ul className={isPhoneNavOpen ? 'nav__menu_phone' : 'nav__menu'}>
          <li className='nav__menu-item'>
            <NavLink
              className='nav__menu-link'
              activeClassName='nav__menu-link_active'
              exact
              to='/'
              onClick={handlePhoneNavClose}
            >
              <svg
                className='nav__icon'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
              >
                <title>home</title>
                <path d='M18.672 11h-1.672v6c0 0.445-0.194 1-1 1h-4v-6h-4v6h-4c-0.806 0-1-0.555-1-1v-6h-1.672c-0.598 0-0.47-0.324-0.060-0.748l8.024-8.032c0.195-0.202 0.451-0.302 0.708-0.312 0.257 0.010 0.513 0.109 0.708 0.312l8.023 8.031c0.411 0.425 0.539 0.749-0.059 0.749z'></path>
              </svg>
              <span lang={language}>{changeNavLang.navHome[language]}</span>
            </NavLink>
          </li>

          <li className='nav__menu-item'>
            <NavLink
              className='nav__menu-link'
              activeClassName='nav__menu-link_active'
              exact
              to='/team'
              onClick={handlePhoneNavClose}
            >
              <svg
                className='nav__icon'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                width='36'
                height='32'
                viewBox='0 0 36 32'
              >
                <title>users</title>
                <path d='M24 24.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z'></path>
                <path d='M10.225 24.854c1.728-1.13 3.877-1.989 6.243-2.513-0.47-0.556-0.897-1.176-1.265-1.844-0.95-1.726-1.453-3.627-1.453-5.497 0-2.689 0-5.228 0.956-7.305 0.928-2.016 2.598-3.265 4.976-3.734-0.529-2.39-1.936-3.961-5.682-3.961-6 0-6 4.029-6 9 0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h8.719c0.454-0.403 0.956-0.787 1.506-1.146z'></path>
              </svg>
              <span lang={language}>{changeNavLang.navTeam[language]}</span>
            </NavLink>
          </li>

          <li className='nav__menu-item'>
            <NavLink
              className='nav__menu-link'
              activeClassName='nav__menu-link_active'
              exact
              to='/services'
              onClick={handlePhoneNavClose}
            >
              <svg
                className='nav__icon'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <title>room_service</title>
                <path d='M13.828 7.781q2.953 0.609 4.969 2.883t2.203 5.32h-18q0.188-3.047 2.203-5.32t4.969-2.883q-0.188-0.375-0.188-0.797 0-0.844 0.586-1.406t1.43-0.563 1.43 0.563 0.586 1.406q0 0.422-0.188 0.797zM2.016 17.016h19.969v1.969h-19.969v-1.969z'></path>
              </svg>
              <span lang={language}>{changeNavLang.navServices[language]}</span>
            </NavLink>
          </li>

          <li className='nav__menu-item'>
            <NavLink
              className='nav__menu-link'
              activeClassName='nav__menu-link_active'
              exact
              to='/testimonials'
              onClick={handlePhoneNavClose}
            >
              <svg
                className='nav__icon'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <title>chat</title>
                <path d='M18 8.016v-2.016h-12v2.016h12zM14.016 14.016v-2.016h-8.016v2.016h8.016zM6 9v2.016h12v-2.016h-12zM20.016 2.016q0.797 0 1.383 0.586t0.586 1.383v12q0 0.797-0.586 1.406t-1.383 0.609h-14.016l-3.984 3.984v-18q0-0.797 0.586-1.383t1.383-0.586h16.031z'></path>
              </svg>
              <span lang={language}>
                {changeNavLang.navTestimonials[language]}
              </span>
            </NavLink>
          </li>

          <li className='nav__menu-item'>
            <NavLink
              className='nav__menu-link'
              activeClassName='nav__menu-link_active'
              exact
              to='/appointments'
              onClick={handlePhoneNavClose}
            >
              <svg
                className='nav__icon'
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M19,4H18V2H16V4H8V2H6V4H5A2,2 0 0,0 3,6V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V6A2,2 0 0,0 19,4M19,20H5V10H19V20M5,8V6H19V8H5M10.56,18.46L16.5,12.53L15.43,11.47L10.56,16.34L8.45,14.23L7.39,15.29L10.56,18.46Z' />
              </svg>
              <span lang={language}>Appointments</span>
            </NavLink>
          </li>

          <li className='nav__menu-item'>
            <NavLink
              className='nav__menu-link'
              activeClassName='nav__menu-link_active'
              exact
              to='/contact'
              onClick={handlePhoneNavClose}
            >
              <svg
                className='nav__icon'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 32 32'
              >
                <title>envelop</title>
                <path d='M29 4h-26c-1.65 0-3 1.35-3 3v20c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-20c0-1.65-1.35-3-3-3zM12.461 17.199l-8.461 6.59v-15.676l8.461 9.086zM5.512 8h20.976l-10.488 7.875-10.488-7.875zM12.79 17.553l3.21 3.447 3.21-3.447 6.58 8.447h-19.579l6.58-8.447zM19.539 17.199l8.461-9.086v15.676l-8.461-6.59z'></path>
              </svg>
              <span lang={language}>{changeNavLang.navContact[language]}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { LanguageContext } from './contexts/LanguageContext';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Team from './components/Team/Team';
import Appointment from './components/Appointment/Appointment';

import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import LangLinks from './components/LangLinks/LangLinks';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (localStorage.getItem('lang')) {
      setCurrentLanguage(localStorage.getItem('lang'));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('lang', currentLanguage);
  });

  //this may mess up, check back here
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function handleArLanguageChangeClick() {
    if (currentLanguage !== 'ar') {
      setCurrentLanguage('ar');
      return;
    }
    setCurrentLanguage('en');
  }

  function handleEsLanguageChangeClick() {
    if (currentLanguage !== 'es') {
      setCurrentLanguage('es');
      return;
    }
    setCurrentLanguage('en');
  }

  return (
    <HelmetProvider>
      <LanguageContext.Provider value={currentLanguage}>
        <div className='App'>
          <Nav />
          <div className='page'>
            <LangLinks
              onArLanguageChangeClick={handleArLanguageChangeClick}
              onEsLanguageChangeClick={handleEsLanguageChangeClick}
            />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>

              <Route exact path='/team'>
                <Team />
              </Route>

              <Route exact path='/services'>
                <Services />
              </Route>

              <Route exact path='/appointments'>
                <Appointment />
              </Route>

              <Route exact path='/testimonials'>
                <Testimonials />
              </Route>

              <Route exact path='/contact'>
                <Contact />
              </Route>

              <Route path='*'>
                <Redirect to='./' />
              </Route>
            </Switch>
            <Footer />
          </div>
        </div>
      </LanguageContext.Provider>
    </HelmetProvider>
  );
}

export default App;

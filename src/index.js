import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './footer/Footer';
import Header from './header/Header';
import MId from './mid/MId';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className='wrapper'>
    <Header />
    <MId />
    <Footer />
  </div>
);

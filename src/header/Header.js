import React from 'react';
import logo from './logo/Group 1.jpg';
import '../style/header.css';

function Header() {
  return (
    <div className='head'>
      <img alt='dsada' src={logo} />
      <div className='header-ul'>
        <a href='#' className='a-hd'>
          Главная
        </a>
        <a href='#' className='a-hd'>
          О нас
        </a>
        <a href='#' className='a-hd'>
          Контакты
        </a>
      </div>
    </div>
  );
}

export default Header;

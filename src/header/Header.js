import React from 'react';
import img from './img/Group 1.jpg';
import './style/header.css';

function Header() {
  return (
    <div className='header'>
      <img alt='head' src={img} />
      <div className='header-a'>
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

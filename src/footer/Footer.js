import React from 'react';
import img from './img/Group 6 1.jpg';
import './style/footer.css';

function Footer() {
  return (
    <div className='footer'>
      <img className=' img-f' alt='foot' src={img} />

      <div className='footer-item'>
        <a href='#' className='item'>
          Партнерам
        </a>
        <a href='#' className='item'>
          Разработчикам
        </a>
        <a href='#' className='item'>
          Вакансии
        </a>
      </div>
      <div className='f-end'>
        <a href='#' className='intocode-f'>
          ООО “Интукод”, 2022г.
        </a>
      </div>
    </div>
  );
}

export default Footer;

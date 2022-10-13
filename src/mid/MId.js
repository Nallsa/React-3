import React from 'react';
import './style/mid.css';

function MId() {
  return (
    <div className='mid'>
      <p className='zero-m'>0</p>
      <div className='butt'>
        <button className='butt-m increase'>Увеличить</button>
        <button className='butt-m decrease'>Уменьшить</button>
        <button className='butt-m del'>Сбросить</button>
      </div>
    </div>
  );
}

export default MId;

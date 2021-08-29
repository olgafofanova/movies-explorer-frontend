import React from 'react';
import './NotFound.css';

function NotFound({ isHidden }) {
    return ( 
      <div className={`notFound  ${ isHidden ? 'notFound_hidden' : ''}`}>
        Ничего не найдено
      </div>
    );
}

export default NotFound;
import React from 'react';
import './HeaderNotAuthorized.css';
import Logo from '../Logo/Logo';

function HeaderNotAuthorized({onCollMenuClick}) {
    return ( 
        <header className="promo__header">
<div className="promo__header-container">
<Logo />
<nav>
  <ul className="promo__top-menu">
    <li className="promo__top-menu-item">
      <a className="promo__top-menu-link" href="/signup" target="_self">
        Регистрация</a> 
    </li>
    <li className="promo__top-menu-item">
      <a className="promo__top-menu-link" href="/signin" target="_self">
        Войти </a> 
    </li>                   
  </ul>
</nav>
</div>    
</header>
    );
}

export default HeaderNotAuthorized;
import React from 'react';
import './Logo.css';
import logo from '../../images/logo.svg';

function Logo() {
    return ( 
        <a href="/" target="_self">
        <img className="logo" src={logo}  alt="Логотип"/> 
      </a> 
    );
}

export default Logo;
import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import NavTab from '../NavTab/NavTab';
import ButtonProfile from '../ButtonProfile/ButtonProfile';
import ButtonCollMemu from '../ButtonCollMemu/ButtonCollMemu';

function Header() {
    return ( 
        <div className="header">
        <a href="#" target="_blank">
        <img className="logo" src={logo}  alt="Логотип"/> 
        </a> 
        <div  className="header__nav">
            <NavTab />
            <ButtonProfile />
            <ButtonCollMemu />
        </div> 
        </div> 
    );
}

export default Header;
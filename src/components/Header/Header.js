import React from 'react';
import './Header.css';
import NavTab from '../NavTab/NavTab';
import ButtonProfile from '../ButtonProfile/ButtonProfile';
import ButtonCollMemu from '../ButtonCollMemu/ButtonCollMemu';
import Logo from '../Logo/Logo';

function Header() {
    return ( 
        <div className="header">
          <Logo />
          <div  className="header__nav">
            <NavTab />
            <ButtonProfile />
            <ButtonCollMemu />
          </div> 
        </div> 
    );
}

export default Header;
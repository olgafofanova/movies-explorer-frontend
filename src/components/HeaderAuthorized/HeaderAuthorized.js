import React from 'react';
import './HeaderAuthorized.css';
import NavTab from '../NavTab/NavTab';
import ButtonProfile from '../ButtonProfile/ButtonProfile';
import ButtonCollMemu from '../ButtonCollMemu/ButtonCollMemu';
import Logo from '../Logo/Logo';

function HeaderAuthorized({onCollMenuClick}) {
    return ( 
        <header className="header">
          <Logo />
          <div  className="header__nav">
            <NavTab />
            <ButtonProfile />
            <ButtonCollMemu onCollMenuClick={onCollMenuClick}/>
          </div> 
        </header> 
    );
}

export default HeaderAuthorized;
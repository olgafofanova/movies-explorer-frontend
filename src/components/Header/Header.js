import React from 'react';
import './Header.css';
import HeaderAuthorized from '../HeaderAuthorized/HeaderAuthorized';
import HeaderNotAuthorized from '../HeaderNotAuthorized/HeaderNotAuthorized';

function Header({loggedIn, onCollMenuClick}) {
    return ( 
       <>
      {loggedIn ? <HeaderAuthorized onCollMenuClick={onCollMenuClick} />:<HeaderNotAuthorized />}
      </>
    );
}

export default Header;